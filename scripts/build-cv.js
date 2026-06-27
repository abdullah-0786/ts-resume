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
const isWin = process.platform === 'win32';
const exe = (name) => (isWin ? `${name}.exe` : name);

// Extra dirs to search when the engine isn't on PATH (e.g. MiKTeX installed but
// the terminal wasn't restarted). Covers per-user + machine-wide MiKTeX and TeX Live.
function extraBinDirs() {
  if (!isWin) return ['/usr/local/texlive', '/Library/TeX/texbin', '/usr/bin'];
  const { LOCALAPPDATA, APPDATA, ProgramFiles, SystemDrive } = process.env;
  const dirs = [
    LOCALAPPDATA && path.join(LOCALAPPDATA, 'Programs', 'MiKTeX', 'miktex', 'bin', 'x64'),
    APPDATA && path.join(APPDATA, 'MiKTeX', 'miktex', 'bin', 'x64'),
    ProgramFiles && path.join(ProgramFiles, 'MiKTeX', 'miktex', 'bin', 'x64'),
  ].filter(Boolean);
  // TeX Live: C:\texlive\<year>\bin\windows
  const tlRoot = path.join(SystemDrive || 'C:', '\\texlive');
  if (fs.existsSync(tlRoot)) {
    for (const year of fs.readdirSync(tlRoot)) {
      dirs.push(path.join(tlRoot, year, 'bin', 'windows'), path.join(tlRoot, year, 'bin', 'win32'));
    }
  }
  return dirs;
}

// Resolve an engine to a runnable command: bare name if on PATH, else a full
// path from a known install dir, else null.
function resolve(name) {
  const onPath = spawnSync(name, ['--version'], { stdio: 'ignore', shell: isWin });
  if (onPath.status === 0) return name;
  for (const dir of extraBinDirs()) {
    const full = path.join(dir, exe(name));
    if (fs.existsSync(full)) return full;
  }
  return null;
}

function run(cmd, args) {
  console.log(`[cv] ${path.basename(cmd)} ${args.join(' ')}`);
  // shell:false here so a full path with spaces (e.g. "Abdullah Faisal") is safe.
  const res = spawnSync(cmd, args, { cwd: cvDir, stdio: 'inherit' });
  return res.status === 0;
}

const latexmk = resolve('latexmk');
const pdflatex = resolve('pdflatex');

let compiled = false;
if (latexmk) {
  // latexmk handles the multiple passes needed for fancyhdr/tabular layouts.
  compiled = run(latexmk, ['-pdf', '-interaction=nonstopmode', '-halt-on-error', 'cv.tex']);
  if (!compiled) {
    // MiKTeX ships latexmk as a Perl script but bundles no Perl, so it can fail
    // with "could not find the script engine 'perl'". Fall back to pdflatex.
    console.warn('[cv] latexmk failed (commonly missing Perl on MiKTeX); falling back to pdflatex.');
  }
}
if (!compiled && pdflatex) {
  // Two passes so page geometry / references settle.
  compiled = run(pdflatex, ['-interaction=nonstopmode', '-halt-on-error', 'cv.tex']) &&
             run(pdflatex, ['-interaction=nonstopmode', '-halt-on-error', 'cv.tex']);
}
if (!latexmk && !pdflatex) {
  console.warn('[cv] No LaTeX engine found (latexmk/pdflatex). Skipping compile.');
  console.warn('[cv] Install a LaTeX distribution (e.g. MiKTeX), then restart your terminal.');
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
