/*
 * js/reveal.js  (DEMO, pattern verified against allierho.com)
 *
 * allierho.com is built in Framer and uses Framer's built-in "Appear"
 * effect on a handful of elements: opacity 0->1 plus a slight transform,
 * triggered once on scroll into view. That's the one motion pattern the
 * actual reference site uses (its card images and buttons have no hover
 * animation at all). This reproduces that same effect with a plain
 * IntersectionObserver, no library.
 */
(function () {
  function init() {
    // Runs after js/site.js has injected the work-grid cards (same
    // DOMContentLoaded point, registered later so it fires after site.js's
    // listener). Querying for .reveal any earlier misses the dynamically
    // injected cards entirely, since they don't exist in the DOM yet.
    var targets = document.querySelectorAll('.reveal');
    if (!targets.length) return;

    if (!('IntersectionObserver' in window)) {
      targets.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach(function (el) { io.observe(el); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
