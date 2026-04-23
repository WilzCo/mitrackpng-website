# Project Tracker

Use this file as the working change log for the MiTrack PNG website.

## How To Use

- Add new work under `To Do`
- Move active items into `In Progress`
- Move finished work into `Done`
- Record defects, odd behavior, or breakages under `Bugs`
- Add short dated notes when something important changes

## To Do

- [ ] Review all pages for broken links
- [ ] Test navigation on desktop
- [ ] Test navigation on mobile
- [ ] Check all contact details for accuracy
- [ ] Verify the contact form submission flow
- [ ] Review the feedback page in a browser
- [ ] Decide whether feedback should remain browser-local or be connected to a backend
- [ ] Fix text encoding issues across all pages
- [ ] Improve hero sections for visual consistency
- [ ] Add missing styling for map, testimonials, and other custom sections
- [ ] Review button consistency across pages
- [ ] Check spacing and alignment on mobile screens
- [ ] Add missing staff images referenced in `contact.html`
- [ ] Compress large image files if needed
- [ ] Verify logo quality and display size
- [ ] Remove duplicated or unused markup
- [ ] Review `main.js` for features that need matching CSS
- [ ] Review `style.css` for unused selectors

## In Progress

- [ ] Clean up invalid HTML in the contact page hotline section

## Done

- [x] Added a dedicated `feedback.html` page
- [x] Linked the feedback page in shared site navigation
- [x] Added browser-local customer review posting
- [x] Added feedback page styling
- [x] Added `README.md`
- [x] Added project tracking file

## Bugs

- [ ] Text encoding appears broken on several pages and shows characters like `â˜°` and `Â©`
- [ ] Contact page references staff image files that are not currently in the repo
- [ ] First hotline call link in `contact.html` is malformed
- [ ] Several JavaScript-driven states do not appear to have matching CSS rules
- [ ] Some page-specific sections appear under-styled compared with their HTML structure

## Change Notes

### 2026-04-24

- Added customer feedback page
- Added README file
- Converted the checklist into a reusable project tracker
