# Personal Portfolio Engineering Platform

A multi-page portfolio engineered to showcase academic developments, research milestones, and hardware robotics pipelines. Built entirely with pure, modular vanilla architecture—completely free of bulky external frameworks—maximizing rendering speeds and lightweight portable maintainability.

**🌐 Live Production Link:** [https://iaayan3913.github.io/Personal-Website/index.html](https://iaayan3913.github.io/Personal-Website/index.html)

---

## Repository Structure 
```directory
├── index.html              # Home page
├── experiencesplit.html    # Timeline of all experiences
├── educationsplit.html     # Academics and internships
├── projectssplit.html      # All university and personal projects
├── 404.html                # Shown by GitHub Pages for any missing URL
├── .nojekyll               # Tells GitHub Pages to serve the files as-is
├── stylesplit.css          # CSS file 
├── appsplit.js             # Automated dynamic runtime calculations & execution script
├── Images/                 # Media repository holding profile photos and clip loops
│   └── thumbs/             # Web-sized copies + video posters (run tools/make_thumbs.py after adding media)
├── tools/make_thumbs.py    # Regenerates Images/thumbs/
├── tools/compress_videos.py # Re-encodes Images/*.mp4 for the web (run after adding a video)
├── Logos/                  # All company logos used 
└── Reports/                # Technical write-ups and PDF academic research reports
```


## 🚀 Deployment

The site is plain static files, so there is no build step. Every push to `main` runs `.github/workflows/static.yml`, which publishes the repository to GitHub Pages. Work on a branch, then merge into `main` to go live.

All asset paths are relative and case-sensitive on GitHub Pages (`Images/PaperCut1.png` is not `Images/papercut1.png`), so match file names exactly when adding media.

## ✨ Interactions

All of these live in `appsplit.js` and switch themselves off for visitors who prefer reduced motion:

- **Search palette** — `Ctrl/⌘ + K` or `/` searches every page, project, role and link. Projects and roles are read from `DATA`, so new entries appear automatically.
- **Cursor light** — the grid, the hero name and each card light up around the cursor; cards tilt towards it.
- **Video previews** — a card whose project has an `.mp4` plays it on hover.
- **Hero slideshow** — progress bar, pauses on hover, click to skip.
- **Count-up stats, achievements marquee, scroll-filled experience timeline, page cross-fades.**
- **Footer contact block** — rendered on every page from the `CONTACT` object at the top of the rendering section.

## 🎨 Aesthetic System Architecture

The platform's visual identity relies heavily on **CSS Custom Properties (Variables)** to enforce strict, modular color tokens site-wide. Shifting color palettes or deploying custom color schemas can be executed instantaneously by altering the root token mapping blocks inside `stylesplit.css`:

```css
:root {
  --bg-color: #0D0F0E;         /* Near-black charcoal foundation */
  --surface-color: #111A14;    /* Dark moss green surfaces & card backings */
  --primary-accent: #C6F135;   /* Electric chartreuse highlighting indicators */
  --secondary-accent: #E8A030; /* Warm amber operational secondary */
  --muted-text: #8BAF8E;       /* Pale sage metadata markers */
  --body-text: #E8EDE9;        /* Off-white highly legible body copy */
}
```

