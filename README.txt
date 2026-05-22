==============================================================
  Project 1 - Velora Couture (Curated Luxury Fashion)
  Mentor organisation: Burberry Group plc
  Industry sector: Fashion
==============================================================

CONTENTS
--------
index.html         Home (with autoplay background video)
shop.html          Product catalogue (filters + on-page search)
about.html         Brand story / manifesto (on-page search)
contact.html       Contact form with concierge channels
cart.html          Shopping bag and secure-checkout summary
account.html       Sign-in and registration

css/style.css      Master external stylesheet (no inline styles)
js/main.js         Mobile navigation, filters, on-page search
images/            SVG product, hero, social-feed assets
report/Report_Velora_Burberry.doc   Word-compatible report (Tasks 2-5)

HOW TO VIEW
-----------
1. Double-click index.html to open in your default browser.
2. Tested in Google Chrome 120+ and Microsoft Edge 120+ on
   Windows, macOS and Android.
3. Designed mobile-first; works on monitors at 1024x768 with no
   horizontal scroll. Resize the window or use device emulation
   in DevTools to see the responsive navigation.

ACCESSIBILITY
-------------
- Skip-to-content link
- Semantic landmarks (header, main, nav, footer, aside)
- ARIA labels on all interactive controls
- Visible focus outlines, prefers-reduced-motion and
  prefers-contrast media queries
- Form labels associated with every input
- Background video is muted, decorative, and paired with a
  poster image for slow connections

MULTIMEDIA FORMATS USED
-----------------------
- video/mp4 (autoplay background video on the home page)
- audio/mpeg (Velora seasonal mixtape, on the home page)
- image/svg+xml (all product and editorial imagery)

NAVIGATION
----------
Required @media rule for navigation is at the bottom of
css/style.css. The primary nav is horizontal at 861px and
above and collapses into a vertical drawer at 860px and below.

ON-PAGE TEXT SEARCH
-------------------
- shop.html: filters products live as you type
- about.html: filters manifesto sections live as you type

SECURITY (DEMONSTRATED IN THE UI)
---------------------------------
SSL and PCI DSS messaging is shown in the footer, the
announcement bar on cart.html, and at the checkout summary.
See the report for the full discussion.
