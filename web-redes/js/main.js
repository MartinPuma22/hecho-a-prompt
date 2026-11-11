// Asigna a cada ícono el link que está en shared/js/links.js
document.querySelectorAll('[data-link]').forEach(function (el) {
  var url = window.HAP_LINKS[el.dataset.link];
  if (!url) return;
  el.href = url;
  if (/^https?:/.test(url)) { el.target = '_blank'; el.rel = 'noopener noreferrer'; }
});
