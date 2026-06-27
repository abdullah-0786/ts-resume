# CV pipeline

`cv.tex` is the **single source of truth** for the CV PDF shown on the site.

## How it works

1. You edit `cv/cv.tex` and push to `master`.
2. The GitHub Action (`.github/workflows/firebase-deploy.yml`) compiles it with
   LaTeX into `public/cv.pdf`.
3. Webpack copies `public/` into `build/`, and Firebase Hosting serves the file
   at `https://<your-site>/cv.pdf`.
4. The **"View my CV"** button (`src/data/about.ts` -> `resumeUrl: '/cv.pdf'`)
   links straight to it.

So: **edit the `.tex`, push, done.** No manual PDF export, no Overleaf needed.

## Migrating your CV from Overleaf

Open your Overleaf project, copy the full LaTeX source (select-all in the editor,
or Menu -> Download -> Source), and paste it over `cv.tex`.

## Engine note

The workflow uses `latexmk` (pdfLaTeX) by default. If your CV template needs
XeLaTeX or LuaLaTeX (e.g. it uses `fontspec` / custom fonts), set in the
compile step of the workflow:

```yaml
      - name: Compile CV (LaTeX)
        uses: xu-cheng/latex-action@v3
        with:
          working_directory: cv
          root_file: cv.tex
          latexmk_use_xelatex: true   # or latexmk_use_lualatex: true
```

## Local preview

`yarn build` automatically compiles `cv/cv.tex` into `public/cv.pdf` first, via
the `prebuild` hook (`scripts/build-cv.js`). You can also run the script directly:

```bash
node scripts/build-cv.js
```

This needs a LaTeX engine on your PATH — `latexmk` (preferred) or `pdflatex`.
On Windows, install **MiKTeX** (https://miktex.org/) or **TeX Live**; the first
compile may prompt MiKTeX to fetch missing packages.

If no LaTeX engine is found, the build still succeeds — it just skips the CV and
the link 404s until a PDF is produced. The generated `public/cv.pdf` and LaTeX
aux files are git-ignored.

> Note: `yarn dev` / `yarn start` do **not** auto-compile the CV (only `build`
> does). Run `yarn build` once, or add `predev`/`prestart` hooks, if you want the
> CV link to work in the dev server.
