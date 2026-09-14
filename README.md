# LI Yihai · Personal website

Bilingual portfolio built with Astro 4 and Tailwind CSS. Statically generated for GitHub Pages.

## Development

- `npm install`
- `npm run dev` — local preview at http://localhost:4321
- `npm test` — production build and checks for local links, assets, anchors, duplicate IDs, page headings, and generated blog routes
- `npm run preview` — preview the production build

## Content

- `src/i18n/en.ts`, `src/i18n/zh.ts`: navigation and interface copy
- `src/data/resume.ts`: experience and skills
- `src/content/projects/`: project summaries; `link` and `repo` are optional
- `src/content/blog/`: Markdown articles; use matching `-en` / `-zh` filename suffixes for translated article switching
- `public/CV.pdf`: downloadable resume (case-sensitive path)

## UI behavior

A shared background covers navigation and content. The sticky navigation gains a blurred surface on scroll; the mobile menu floats over content and closes on Escape, outside click, or navigation. Theme preference is saved when storage is available, otherwise switching still works for the current page. Language switching preserves the current section and matches translated blog posts, falling back to the other language's blog index when needed.

Content is rendered without JavaScript. Reveal effects respect reduced motion. Project filtering uses accessible pressed states and announces the visible count.

## Content still to review

The repository still contains two sample blog posts, one Chinese project versus four English projects, and English experience descriptions on the Chinese page. The mathematical-modeling project currently repeats the CNN project's summary. These require the owner's final content. Template `github.com/yourname/...` URLs were removed; add genuine repositories when available.
