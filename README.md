# LI Yihai Astro Starter

## Getting Started
```bash
npm install
npm run dev
```

- Your original header/nav is injected via the `header` slot in `BaseLayout.astro`.
- Your main content is in `src/pages/index.astro` (extracted from your previous index.html).
- Styles are in `src/assets/styles.css` (with a few fixes already applied).

### Images
If your header references `./src/logo.JPG`, put your image at `public/src/logo.JPG` to keep the same path, or update the `<img src>` accordingly.

## Build
```bash
npm run build
npm run preview
```