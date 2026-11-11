// Cabecera y pie compartidos. Para cambiar el menú, edita solo este archivo.
(function () {
  var L = window.HAP_LINKS, actual = document.body.dataset.pagina;
  var menu = [["inicio","Inicio","/web-inicio/"],["cursos","Cursos","/web-cursos/"],["tutoriales","Tutoriales","/web-tutoriales/"],["recursos","Recursos","/web-recursos/"],["plantillas","Plantillas","/web-plantillas/"]];
  var enlaces = menu.map(function (m) {
    return '<a href="' + m[2] + '"' + (m[0] === actual ? ' aria-current="page"' : '') + '>' + m[1] + '</a>';
  }).join('');
  var logo = '<a class="logo" href="/web-inicio/" aria-label="Hecho a Prompt, inicio"><span class="logo__top">HECHO A</span><span class="logo__main">prompt<svg viewBox="0 0 18 22" aria-hidden="true"><path d="M2 1l13 11h-6l3 8-3 1-3-8-4 4z" fill="#868686"/></svg></span></a>';
  document.getElementById('cabecera').innerHTML =
    '<header class="cab"><div class="cab__in">' + logo +
    '<button class="cab__burger" aria-label="Abrir menú" aria-expanded="false" aria-controls="menu"><span></span><span></span><span></span></button>' +
    '<nav class="cab__menu" id="menu" aria-label="Principal">' + enlaces + '<a class="btn" href="/web-redes/">Nuestras redes</a></nav></div></header>';
  var redes = ["whatsapp","facebook","tiktok","youtube"].map(function (r) {
    return '<a href="' + L[r] + '" target="_blank" rel="noopener noreferrer" aria-label="' + r + '"><img src="/shared/assets/icons/' + r + '.svg" alt=""></a>';
  }).join('');
  document.getElementById('pie').innerHTML =
    '<footer class="pie"><div class="cont pie__in"><strong>Hecho a Prompt</strong><nav aria-label="Pie">' + enlaces + '<a href="/web-redes/">Redes</a></nav><div class="pie__redes">' + redes + '</div><small>© ' + new Date().getFullYear() + ' Hecho a Prompt. Creatividad + IA = Negocios más reales.</small></div></footer>';
  var b = document.querySelector('.cab__burger'), m = document.getElementById('menu');
  b.addEventListener('click', function () {
    var abierto = m.classList.toggle('abierto');
    b.setAttribute('aria-expanded', abierto);
  });
})();
