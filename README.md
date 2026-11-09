# Junyu Li — Personal research website

[中文](README.zh-CN.md) · [Live website](https://b1ue13e.github.io/)

A bilingual academic website presenting my research interests, papers and working manuscripts, research collaborations, open-source projects, and contact information. It includes an original portrait, ORCID link, and downloadable CV.

## Preview locally

The site uses plain HTML, CSS, and JavaScript, with no package installation or build step. From this directory, run:

```sh
python -m http.server 8080
```

Open <http://localhost:8080/>. Serving over HTTP lets you check the language preference and clipboard interaction in a normal browser context.

## Content and structure

| File | Purpose |
| --- | --- |
| [`index.html`](index.html) | English content, page sections, paper and experience entries, portrait and public links |
| [`content.js`](content.js) | Chinese copy and shared interface messages |
| [`academic-content.js`](academic-content.js) | Chinese paper, experience and CV labels |
| [`site.js`](site.js) | Language persistence, research filters, mobile navigation and email copying |
| [`styles.css`](styles.css), [`academic.css`](academic.css) | Base visual system and academic-page layout |
| [`assets/`](assets/) | Portrait, CV, favicon and social-preview artwork |

Visitors can switch languages, filter research themes and expand project descriptions. The language choice is stored in the browser. See the [content maintenance guide](docs/CONTENT.md) before changing bilingual text or academic information.

## Publishing

GitHub Pages publishes the root of the `main` branch directly. Push static content to that branch and check the Pages deployment result. No separate generated site directory is required.

Paper statuses describe the actual manuscript stage; a working paper is not presented as an accepted publication. The public contact address is [ljylikezmn999@gmail.com](mailto:ljylikezmn999@gmail.com).
