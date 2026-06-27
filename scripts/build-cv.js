/**
 * Compiles cv/cv.tex into public/cv.pdf so the "View my CV" button works.
 *
 * Behaviour (works locally AND in CI):
 *   1. If a LaTeX engine (latexmk, else pdflatex) is on PATH, compile cv/cv.tex.
 *   2. If cv/cv.pdf exists (just compiled, or produced by the CI LaTeX action),
 *      copy it to public/cv.pdf.
 *   3. If there's no engine and no compiled PDF, warn but DON'T fail the build
 *      (the site still builds; the CV link would 404 until a PDF is produced).
 *
 * Runs automatically before `yarn build` via the `prebuild` npm hook, or
 * directly:  node scripts/build-cv.js
 */
const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const cvDir = path.join(root, 'cv');
const srcPdf = path.join(cvDir, 'cv.pdf');
const outPdf = path.join(root, 'public', 'cv.pdf');

function has(cmd) {
  const probe = spawnSync(cmd, ['--version'], { stdio: 'ignore', shell: process.platform === 'win32' });
  return probe.status === 0;
}

function run(cmd, args) {
  console.log(`[cv] ${cmd} ${args.join(' ')}`);
  const res = spawnSync(cmd, args, { cwd: cvDir, stdio: 'inherit', shell: process.platform === 'win32' });
  return res.status === 0;
}

let compiled = false;
if (has('latexmk')) {
  // latexmk handles the multiple passes needed for fancyhdr/tabular layouts.
  compiled = run('latexmk', ['-pdf', '-interaction=nonstopmode', '-halt-on-error', 'cv.tex']);
} else if (has('pdflatex')) {
  // Two passes so page geometry / references settle.
  compiled = run('pdflatex', ['-interaction=nonstopmode', '-halt-on-error', 'cv.tex']) &&
             run('pdflatex', ['-interaction=nonstopmode', '-halt-on-error', 'cv.tex']);
} else {
  console.warn('[cv] No LaTeX engine found (latexmk/pdflatex). Skipping compile.');
  console.warn('[cv] Install a LaTeX distribution (e.g. MiKTeX) to build the CV locally.');
}

if (compiled && !fs.existsSync(srcPdf)) {
  console.error('[cv] Compile reported success but cv/cv.pdf is missing.');
  process.exit(1);
}

if (fs.existsSync(srcPdf)) {
  fs.mkdirSync(path.dirname(outPdf), { recursive: true });
  fs.copyFileSync(srcPdf, outPdf);
  console.log(`[cv] Wrote ${path.relative(root, outPdf)}`);
} else {
  console.warn('[cv] public/cv.pdf not produced; the CV link will 404 until a PDF exists.');
}
