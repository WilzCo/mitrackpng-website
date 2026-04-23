# MiTrack PNG Website

This repository contains the MiTrack PNG marketing website. It is a lightweight static site built with plain HTML, CSS, and JavaScript.

## Project Overview

The site is structured as a multi-page brochure website for MiTrack PNG and includes:

- Home page
- About page
- Products page
- Feedback page
- Contact page

The project currently uses:

- `HTML` for page structure
- `CSS` for styling
- `JavaScript` for shared interactivity
- Local assets in `assets/images`

## Project Structure

```text
mitrackpng-website/
|-- about.html
|-- contact.html
|-- feedback.html
|-- index.html
|-- products.html
|-- README.md
|-- CHECKLIST.md
|-- css/
|   `-- style.css
|-- js/
|   `-- main.js
`-- assets/
    `-- images/
```

## Main Files

- `index.html` - landing page
- `about.html` - company overview
- `products.html` - product and service listing
- `feedback.html` - customer feedback board
- `contact.html` - contact form and contact details
- `css/style.css` - global site styling
- `js/main.js` - shared site behavior and feedback board logic

## Current Features

- Shared navigation across pages
- Brand styling with a dark visual theme
- Contact form integration using FormSubmit
- Customer feedback page with browser-local review storage
- Shared JavaScript for interactions and modal behavior

## How To Run

Because this is a static website, you can open `index.html` directly in a browser.

For a better local development workflow, you can also serve it with a simple local server.

Example with Python:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Change Tracking Workflow

Use `CHECKLIST.md` to keep track of tasks, edits, fixes, and planned improvements.

Suggested workflow:

1. Add a task before starting work.
2. Mark it in progress while editing.
3. Mark it complete after testing.
4. Add notes if a task needs follow-up.

## Notes

- This project does not currently use a backend or database.
- Feedback submissions on `feedback.html` are stored in the visitor's browser only.
- Some existing pages still contain encoding issues and older markup inconsistencies that may need cleanup later.

## Next Recommended Improvements

- Fix remaining text encoding issues across pages
- Improve mobile navigation behavior and styling
- Add missing asset files referenced by the contact page
- Clean up inconsistent HTML structure
- Add page-specific styling for currently under-styled sections

