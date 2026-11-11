// Dibuja tarjetas y la página de detalle a partir de contenido.js
(function () {
  var D = window.HAP_DATA;
  var reloj = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';
  var nivel = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c1-5 15-5 16 0"/></svg>';
  function ext(url) { return /^https?:/.test(url) ? ' target="_blank" rel="noopener noreferrer"' : ''; }
  function meta(it) {
    return it.duracion ? '<div class="tarjeta__meta"><span>' + reloj + it.duracion + '</span><span>' + nivel + it.nivel + '</span></div>' : '';
  }
  function tarjeta(tipo, it) {
    var url = tipo === 'cursos' ? '/web-curso/?id=' + it.id : it.enlace;
    return '<article class="tarjeta"><img class="tarjeta__img" src="/shared/assets/img/' + it.img + '" alt="' + it.titulo + '" loading="lazy">' +
      '<div class="tarjeta__cuerpo"><h2>' + it.titulo + '</h2><p>' + it.desc + '</p>' + meta(it) +
      '<a class="btn" href="' + url + '"' + (tipo === 'cursos' ? '' : ext(url)) + '>' + it.boton + '</a></div></article>';
  }
  function lista(sel, tipo, max) {
    var el = document.querySelector(sel);
    el.innerHTML = D[tipo].slice(0, max || 99).map(function (it) { return tarjeta(tipo, it); }).join('');
  }
  function detalle(sel) {
    var box = document.querySelector(sel), id = new URLSearchParams(location.search).get('id') || 1;
    var c = D.cursos.filter(function (x) { return String(x.id) === String(id); })[0];
    if (!c) { box.innerHTML = '<div><p>No encontramos ese curso.</p><p><a class="btn" href="/web-cursos/">Ver todos los cursos</a></p></div>'; return; }
    document.title = c.titulo + ' | Hecho a Prompt';
    var ic = ['<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4M10 12h5M10 16h5"/>', '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>', '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M4 18l5-5 4 4 3-3 4 4"/>'];
    box.innerHTML =
      '<img class="detalle__img" src="/shared/assets/img/' + c.imgDetalle + '" alt="' + c.titulo + '">' +
      '<div><span class="etiqueta">Curso</span><h1>' + c.titulo + '</h1><p>' + c.intro + '</p>' + meta(c) +
      '<a class="btn" href="' + c.enlace + '"' + ext(c.enlace) + '>Empezar curso</a></div>' +
      '<aside class="detalle__lado"><h2>¿Qué aprenderás?</h2><ul class="lista-check">' + c.aprenderas.map(function (a) { return '<li>' + a + '</li>'; }).join('') + '</ul>' +
      '<h2>Material incluido</h2><div class="material">' + c.material.map(function (m, i) { return '<div><svg viewBox="0 0 24 24" aria-hidden="true">' + ic[i % 3] + '</svg>' + m + '</div>'; }).join('') + '</div></aside>';
  }
  window.HAPrender = { lista: lista, detalle: detalle };
})();
