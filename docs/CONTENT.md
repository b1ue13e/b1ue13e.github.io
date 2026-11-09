# Maintaining website content

## Bilingual copy

English text lives in `index.html`. At startup, `site.js` captures the HTML of every element carrying `data-i18n` into the English dictionary. Chinese keys are initialized by `content.js` and extended by `academic-content.js`; both load before `site.js`.

For an existing translated element, update the English HTML and its matching Chinese key. For a new one, assign a unique `data-i18n` key and add the Chinese value. Keep element IDs and linked section anchors consistent. Interface-only messages, such as the copied-email confirmation, have entries in both dictionaries in `content.js`.

The browser stores `en` or `zh` in `junyu-site-language`. Check both languages after editing; reload once to check persistence. Native `details` elements handle project expansion, while `data-theme` and filter-button values determine research filtering.

## Papers, experience and contact

Maintain paper titles, author lists and statuses from current manuscript and submission records. A journal template, planned submission or anonymous draft does not establish acceptance or a verified author list. Public descriptions should be readable summaries; private correspondence and internal research ledgers belong outside this site.

When replacing the CV, retain `assets/Junyu_Li_CV.pdf` unless every download link is updated. Check the document and download in a browser. Keep ORCID, email and research-code links tied to verified public destinations. Do not add a Scholar profile without confirming ownership.

## Checking a change

Run a local static server using the command in the README. Check language switching, paper/experience anchors, research filters, expanded descriptions, mobile navigation, the photo and CV download. View the page at a desktop and a narrow mobile width. The email-copy button requires browser clipboard permission; its fallback asks visitors to select the displayed address.
