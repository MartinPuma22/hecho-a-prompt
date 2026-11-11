# Hecho a Prompt

Dos webs estáticas (HTML, CSS y JS) en un repositorio, responsive para celular y tablet.

- Web 1 (sitio): `web-inicio`, `web-cursos`, `web-curso` (detalle), `web-tutoriales`, `web-recursos`, `web-plantillas`
- Web 2: `web-redes` (mapa de redes con links)
- `shared/`: estilos, íconos, imágenes, PDF, links y contenido

## Qué editar
- Links de redes: `shared/js/links.js`
- Cursos, tutoriales, recursos y plantillas: `shared/js/contenido.js`
- Imágenes: `shared/assets/img/` (ver `IMAGENES.md`)
- PDF: `shared/assets/docs/`
- Menú y pie de página: `shared/js/layout.js`

## Verlo en VS Code
Abre la carpeta raíz `hecho-a-prompt` y usa Live Server sobre `web-inicio/index.html`.

## Publicar en Vercel
Sube a GitHub, importa el repo en Vercel con Framework "Other", sin build.
