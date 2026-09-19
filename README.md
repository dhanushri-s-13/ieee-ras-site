# IEEE RAS — Student Chapter Website

A one-page landing site for an IEEE Robotics & Automation Society (RAS)
student chapter — About, Focus Areas, Programs, and a Join flow, built as
plain HTML/CSS/JS with no framework and no build step.

**Live site:** _add your GitHub Pages link here after deploying_
**Repo:** _add this repo's URL here_

## Design notes

The visual language is drawn from the subject matter — a PCB / circuit-board
look rather than a generic dark template:

- **Corner-bracket panels** — every card has a copper corner mark, echoing a
  test point on a circuit board, instead of a plain drop shadow.
- **Circuit-trace hero** — the hero's SVG traces "light up" once, top to
  bottom, rather than looping constantly or animating on every hover.
- **Type:** Space Grotesk for headings, Inter for body copy, JetBrains Mono
  for data labels (stats, step numbers, section tags) — three roles, two
  visually distinct families.
- Motion respects `prefers-reduced-motion`, and focus states are visible for
  keyboard navigation.

## File structure

```
.
├── index.html      # markup and content
├── style.css       # all styling (colors, layout, animation)
├── main.js         # mobile nav toggle
├── favicon.svg      # circuit-motif favicon
└── README.md
```

## Running it locally

No build step — just open `index.html` in a browser. If your browser blocks
local file requests for the stylesheet/script, serve it instead:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying (GitHub Pages)

1. Push this folder to a new **public** GitHub repository (root of the repo,
   no subfolder needed).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**,
   set branch to `main` and folder to `/ (root)`, then **Save**.
4. Wait about a minute, refresh the Pages settings screen, and your live URL
   will appear (`https://<username>.github.io/<repo-name>/`).

## Before you publish — replace the placeholders

- `[Your College Name]` — in the nav and footer of `index.html`
- The stats under **About** (`120+` members, `15` workshops, `8`
  competitions) — swap in your chapter's real numbers
- The contact email and social links in the footer
- Add a **Team** section if your form/brief asks for office bearers

## Tech

Vanilla HTML, CSS, and JavaScript. Google Fonts (Space Grotesk, Inter,
JetBrains Mono) are loaded via CDN — everything else is self-contained.
