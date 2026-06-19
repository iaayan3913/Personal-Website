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
├── stylesplit.css          # CSS file 
├── appsplit.js             # Automated dynamic runtime calculations & execution script
├── Images/                 # Media repository holding profile photos and clip loops
├── Logos/                  # All company logos used 
└── Reports/                # Technical write-ups and PDF academic research reports
```


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

