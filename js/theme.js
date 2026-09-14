/*
 * js/theme.js
 *
 * Dark/light toggle. Dark is the default (matches the approved design
 * system); the choice is remembered in localStorage. Runs immediately
 * (not on DOMContentLoaded) so the theme is set before first paint and
 * the page never flashes the wrong colors.
 */

(function () {
  var STORAGE_KEY = 'darcyneal-theme';

  function getStored() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setStored(value) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
      /* localStorage unavailable (private mode, etc) — theme just won't persist */
    }
  }

  var initial = getStored() === 'light' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', initial);

  var SUN_SVG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>';
  var MOON_SVG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/></svg>';

  function currentTheme() {
    return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }

  function updateToggleButton() {
    var btn = document.querySelector('[data-theme-toggle]');
    if (!btn) return;
    var isDark = currentTheme() === 'dark';
    btn.innerHTML = isDark ? SUN_SVG : MOON_SVG;
    btn.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  function init() {
    updateToggleButton();
    var btn = document.querySelector('[data-theme-toggle]');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      setStored(next);
      updateToggleButton();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
