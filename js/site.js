/*
 * js/site.js
 *
 * Renders the data-driven parts of the site from window.PORTFOLIO
 * (data/portfolio.js): the work grid on index.html, and a single
 * project on creation.html (?slug=...). No build step, no framework —
 * plain DOM string assembly.
 */

(function () {
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Markdown-lite: [text](url) -> <a>, everything else is escaped plain text.
  function linkify(text) {
    var pattern = /\[([^\]]+)\]\(([^)]+)\)/g;
    var out = '';
    var lastIndex = 0;
    var match;
    while ((match = pattern.exec(text)) !== null) {
      out += escapeHtml(text.slice(lastIndex, match.index));
      var label = escapeHtml(match[1]);
      var url = escapeHtml(match[2]);
      out += '<a href="' + url + '" target="_blank" rel="noopener">' + label + '</a>';
      lastIndex = pattern.lastIndex;
    }
    out += escapeHtml(text.slice(lastIndex));
    return out;
  }

  function youTubeEmbedUrl(url) {
    var id = null;
    var watchMatch = url.match(/[?&]v=([^&]+)/);
    var shortMatch = url.match(/youtu\.be\/([^?&]+)/);
    if (watchMatch) id = watchMatch[1];
    else if (shortMatch) id = shortMatch[1];
    if (!id) return null;
    return 'https://www.youtube.com/embed/' + id;
  }

  function findEntry(slug) {
    var list = window.PORTFOLIO || [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].slug === slug) return list[i];
    }
    return null;
  }

  function cardHtml(entry) {
    return (
      '<a class="card" href="creation.html?slug=' + encodeURIComponent(entry.slug) + '">' +
        '<div class="card-image"><img src="' + escapeHtml(entry.heroImage) + '" alt="' + escapeHtml(entry.title) + '" loading="lazy"></div>' +
        '<div class="card-tag mono">' + escapeHtml(entry.tag) + '</div>' +
        '<div class="card-title display-font">' + escapeHtml(entry.title) + '</div>' +
        '<p class="card-desc">' + escapeHtml(entry.summary) + '</p>' +
      '</a>'
    );
  }

  function renderWorkGrid() {
    var grid = document.querySelector('[data-work-grid]');
    if (!grid) return;
    var list = window.PORTFOLIO || [];
    grid.innerHTML = list.map(cardHtml).join('');
  }

  function renderPost() {
    var mount = document.querySelector('[data-post-mount]');
    if (!mount) return;

    var params = new URLSearchParams(window.location.search);
    var slug = params.get('slug');
    var entry = slug ? findEntry(slug) : null;

    if (!entry) {
      mount.innerHTML =
        '<div class="post-not-found">' +
          '<div class="mono" style="font-size:12px;letter-spacing:1px;color:var(--accent);">NOT FOUND</div>' +
          '<h1 class="display-font" style="font-size:36px;font-weight:300;margin:0;">That project isn&rsquo;t here yet</h1>' +
          '<p style="font-size:16px;line-height:1.6;">Head back to <a href="index.html">the full list of work</a> to find it.</p>' +
        '</div>';
      document.title = 'Not found — Darcy Neal';
      return;
    }

    document.title = entry.title + ' — Darcy Neal';

    var bodyHtml = entry.body.map(function (para) {
      return '<p>' + linkify(para) + '</p>';
    }).join('');

    var galleryHtml = '';
    if (entry.gallery && entry.gallery.length) {
      galleryHtml =
        '<div class="post-gallery">' +
        entry.gallery.map(function (src) {
          return '<figure><img src="' + escapeHtml(src) + '" alt="' + escapeHtml(entry.title) + '" loading="lazy"></figure>';
        }).join('') +
        '</div>';
    }

    var videosHtml = '';
    var videoItems = [];
    if (entry.videos && entry.videos.length) videoItems = videoItems.concat(entry.videos);
    if (entry.video) videoItems.push({ title: null, url: entry.video, local: true });

    if (videoItems.length) {
      videosHtml = '<div class="post-videos">' + videoItems.map(function (v) {
        if (v.local || /\.(mp4|webm|mov)$/i.test(v.url)) {
          return (
            '<div>' +
              '<div class="video-embed"><video src="' + escapeHtml(v.url) + '" controls preload="metadata"></video></div>' +
              (v.title ? '<div class="video-caption mono">' + escapeHtml(v.title) + '</div>' : '') +
            '</div>'
          );
        }
        var embed = youTubeEmbedUrl(v.url);
        if (!embed) return '';
        return (
          '<div>' +
            '<div class="video-embed"><iframe src="' + embed + '" title="' + escapeHtml(v.title || entry.title) + '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>' +
            (v.title ? '<div class="video-caption mono">' + escapeHtml(v.title) + '</div>' : '') +
          '</div>'
        );
      }).join('') + '</div>';
    }

    mount.innerHTML =
      '<div class="post-header">' +
        '<div class="eyebrow mono">' + escapeHtml(entry.tag) + '</div>' +
        '<h1 class="display-font">' + escapeHtml(entry.title) + '</h1>' +
      '</div>' +
      '<div class="post-hero"><img src="' + escapeHtml(entry.heroImage) + '" alt="' + escapeHtml(entry.title) + '"></div>' +
      '<div class="post-body-wrap">' +
        '<div class="rail mono">THE PROJECT</div>' +
        '<div class="post-body">' + bodyHtml + '</div>' +
      '</div>' +
      galleryHtml +
      videosHtml +
      '<div class="post-tags"><div class="tag mono">' + escapeHtml(entry.tag.split(' ')[0].replace('·', '').trim() || entry.tag) + '</div></div>';
  }

  function init() {
    renderWorkGrid();
    renderPost();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
