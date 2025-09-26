# Jacksonsweblab — React (Vite)

A React reimplementation of the Jacksonsweblab site with routes for Home, About, Services and Contact.

## Run locally
```bash
npm i
npm run dev
```

## Deploy to GitHub Pages
1. Create a new repo (e.g. `jacksonsweblab-react`) and push this project.
2. Update `vite.config.js` `base` to match your repo name (already set to `/jacksonsweblab-react/`).
3. Enable GitHub Pages: set source to `gh-pages` branch (created by the deploy script).
4. Run:
```bash
npm run deploy
```
This builds to `dist/` and publishes with `gh-pages`.
