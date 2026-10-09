/*
 * data/site-content.js
 *
 * Editable copy for the homepage's non-portfolio sections (hero, section
 * headings/deks, footer blurbs). Plain strings, one per line where
 * possible, grouped by the section they belong to -- edit this file to
 * change what the homepage says without touching index.html or css.
 *
 * No HTML tags needed in these values: they're inserted as plain text,
 * not markup, so a stray < or & here renders literally instead of
 * breaking the page. Straight quotes/apostrophes are fine as-is.
 *
 * js/site.js reads this object and fills in every element on index.html
 * tagged data-content="<path>" (text) or data-content-href="<path>"
 * (link target), using the dotted path below (e.g. "workshops.heading").
 */
window.SITE_CONTENT = {
  hero: {
    lede: "Interactive audio-visual hardware designer and educator. Fifteen-plus years building things that light up, make noise, and teach people how they work.",
    meta: "Portland, OR · SporkLogic · Crowd Supply · PCC Makerspace (5 yrs)"
  },

  creations: {
    heading: "See the latest & greatest",
    ctaLabel: "View all work →"
  },

  workshops: {
    heading: "Hands-on electronics, taught in person",
    dek: "Soldering and circuit workshops run at hacker cons, maker fairs, and artist residencies worldwide — DEF CON, HOPE, ToorCamp, Chaos Communication Congress, Open Hardware Summit, Bay Area Maker Faire.",
    ctaLabel: "See all workshops →"
  },

  about: {
    text: "Founder of SporkLogic. Background spans animatronic fabrication, boutique synthesizer production at 4MS Company, and five years directing Portland Community College's makerspace.",
    ctaLabel: "Read the full bio →"
  },

  dayJob: {
    text: "Campaign Project Manager at Crowd Supply, helping open-source hardware creators launch and fund their own products.",
    ctaLabel: "crowdsupply.com →",
    ctaHref: "https://www.crowdsupply.com/"
  },

  contact: {
    // Swap this placeholder for a real email/contact link whenever it's ready.
    text: "[CONTACT]"
  },

  // Doesn't perform anymore, so music gets one quiet line in the footer
  // instead of its own homepage section. The archive itself still lives
  // at music.html -- this is just how it's surfaced on the homepage.
  musicArchive: {
    label: "Music (archive) →",
    href: "music.html"
  }
};
