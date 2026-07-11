# Math Exercises

Frontend-only multiple-choice math practice app. Questions are Markdown with LaTeX, stored as one JSON file per exercise set. Built with Vite + React. Deployed to GitHub Pages via GitHub Actions.

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173/exercise/`).

```bash
npm run build
npm run preview
```

Preview serves the production build with the same `/exercise/` base path used on GitHub Pages.

## Adding an exercise set

1. Add `src/data/your-set.json` (array of questions — see existing files for shape).
2. Import it and register it in `src/data/sets.js`.

Question fields: `id`, `prompt`, `choices`, `answer` (0-based index), `explanation`. Use `$...$` for inline math and `$$...$$` for display math.

## Deploy to GitHub Pages

1. Create a GitHub repository named **`exercise`** (or change `base` in `vite.config.js` to match your repo name).
2. Push this project to the `main` branch.
3. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds on every push to `main` and publishes `dist`.

Live URL (project site):

`https://sandip-maurya.github.io/exercise/`
