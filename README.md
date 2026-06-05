# Nandini Goyal Portfolio

A static portfolio website for Nandini Goyal, B.Tech student at IIT Bombay.

## Run Locally

**Prerequisites:** Node.js 18+

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
```

The production build is written to the `dist/` directory.

## Deploy to GitHub Pages

This site is configured for GitHub Pages at `https://goyalnandini.github.io/`.

1. Push changes to the `main` branch.
2. In the GitHub repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and deploys automatically on every push to `main`.

You can also trigger a manual deploy from the **Actions** tab using **Run workflow**.
