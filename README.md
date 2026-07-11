# Math Exercises

Frontend-only multiple-choice math practice app. Questions are Markdown with LaTeX, stored as one JSON file per exercise set. Built with Vite + React. Deployed to GitHub Pages via GitHub Actions.

Live site: [https://sandip-maurya.github.io/exercise/](https://sandip-maurya.github.io/exercise/)

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

## Exercise set JSON format

Each file in `src/data/*.json` is one complete set: **metadata + questions**.

```json
{
  "id": "algebra-basics",
  "title": "Algebra Basics",
  "description": "Optional short blurb shown in the set list.",
  "questions": [
    {
      "id": "ab1",
      "prompt": "Simplify: $3x + 5x - 2$",
      "choices": ["$8x - 2$", "$3x - 2$", "$15x - 2$", "$8x + 2$"],
      "answer": 0,
      "explanation": "Combine like terms: $3x + 5x = 8x$."
    }
  ]
}
```

| Field | Required | Notes |
|-------|----------|--------|
| `id` | yes | Stable string id for the set |
| `title` | yes | Shown in the UI |
| `description` | no | Shown under the title in the set list |
| `questions` | yes | Non-empty array |

Question fields: `id`, `prompt`, `choices`, `answer` (0-based index), `explanation`. Use `$...$` for inline math and `$$...$$` for display math.

Sets are loaded automatically with Vite `import.meta.glob` — no catalog file to edit. Invalid files (missing `id` / `title` / `questions`) are skipped. Sets are sorted by `title`.

## Adding a new exercise set

1. Create `src/data/your-topic.json` using the format above.
2. Commit and push to `main`.

That is enough. The GitHub Action rebuilds the site and deploys `dist`. After the workflow finishes (often about 1–3 minutes), the new set appears in the picker. No code changes required.

Locally, restart or refresh `npm run dev` after adding a file so Vite picks it up.

## Deploy to GitHub Pages

1. Repository name should be **`exercise`** (or change `base` in `vite.config.js` to match).
2. Push to the `main` branch.
3. **Settings → Pages → Build and deployment → Source: GitHub Actions** (not “Deploy from a branch”).
4. The workflow in `.github/workflows/deploy.yml` builds on every push to `main` and publishes `dist`.