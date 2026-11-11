// CONTENIDO DEL SITIO. Edita aquí textos, tiempos, niveles, imágenes y links de cursos, tutoriales, recursos y plantillas.
// Las imágenes están en shared/assets/img/ (ver IMAGENES.md). Los PDF van en shared/assets/docs/.
var L = window.HAP_LINKS;
var MATERIAL = ["Guía descargable", "Plantillas", "Ejercicios prácticos"];
window.HAP_DATA = {
  cursos: [
    { id: 1, titulo: "IA para emprendedores gastronómicos", desc: "Descubre cómo usar ChatGPT y Gemini para crear contenido publicitario efectivo.", duracion: "1.5 h", nivel: "Nivel básico", img: "curso-1.jpg", imgDetalle: "curso-detalle-1.jpg", boton: "Ver curso", enlace: L.whatsapp,
      intro: "Descubre cómo usar ChatGPT y Gemini para crear contenido publicitario efectivo, sin perder la identidad de tu marca.",
      aprenderas: ["Cómo usar ChatGPT y Gemini para crear contenido.", "Estrategias para crear textos atractivos y auténticos.", "Ejemplos prácticos para tu negocio."], material: MATERIAL },
    { id: 2, titulo: "Diseño de publicidad con Canva e IA", desc: "Crea flyers, menús y promociones atractivas en minutos.", duracion: "2 h", nivel: "Nivel intermedio", img: "curso-2.jpg", imgDetalle: "curso-detalle-2.jpg", boton: "Ver curso", enlace: L.whatsapp,
      intro: "Aprende a diseñar flyers, menús y promociones atractivas en Canva, apoyándote en la IA para tus ideas y textos.",
      aprenderas: ["Cómo armar un flyer desde cero en Canva.", "Cómo pedirle a la IA ideas de textos y diseño.", "Ejemplos prácticos para tu negocio."], material: MATERIAL },
    { id: 3, titulo: "Identidad de marca con IA", desc: "Mantén la esencia de tu negocio y crea contenido auténtico y coherente.", duracion: "1.5 h", nivel: "Nivel básico", img: "curso-3.jpg", imgDetalle: "curso-detalle-3.jpg", boton: "Ver curso", enlace: L.whatsapp,
      intro: "Mantén la esencia de tu negocio y crea contenido auténtico y coherente usando la IA como apoyo, no como reemplazo.",
      aprenderas: ["Cómo definir colores, tipografías y estilo.", "Cómo mantener tu esencia al usar IA.", "Ejemplos prácticos para tu negocio."], material: MATERIAL }
  ],
  tutoriales: [
    { titulo: "Cómo crear prompts efectivos", desc: "Aprende a darle las instrucciones correctas a la IA para obtener mejores resultados.", duracion: "5 min", nivel: "Nivel básico", img: "tutorial-1.jpg", boton: "Ver tutorial", enlace: L.youtube },
    { titulo: "Cómo diseñar un flyer paso a paso", desc: "Desde la idea hasta la publicación en redes sociales.", duracion: "10 min", nivel: "Nivel intermedio", img: "tutorial-2.jpg", boton: "Ver tutorial", enlace: L.youtube },
    { titulo: "Cómo mejorar fotos de comida con IA", desc: "Potencia la presentación de tus platos sin alterar su apariencia real.", duracion: "8 min", nivel: "Nivel básico", img: "tutorial-3.jpg", boton: "Ver tutorial", enlace: L.youtube }
  ],
  recursos: [
    { titulo: "Guías de uso responsable de la IA", desc: "Recomendaciones para evitar imágenes engañosas y mantener la confianza de tus clientes.", img: "recurso-1.jpg", boton: "Descargar guía", enlace: "/shared/assets/docs/guia-uso-responsable.pdf" },
    { titulo: "Banco de prompts para gastronomía", desc: "Instrucciones listas para crear publicaciones, promociones y descripciones de platos.", img: "recurso-2.jpg", boton: "Ver banco", enlace: "/shared/assets/docs/banco-de-prompts.pdf" },
    { titulo: "Guía de identidad visual", desc: "Consejos para mantener los colores, tipografías y estilo de tu negocio.", img: "recurso-3.jpg", boton: "Descargar guía", enlace: "/shared/assets/docs/guia-identidad-visual.pdf" }
  ],
  plantillas: [
    { titulo: "Plantilla de flyer para promociones", desc: "Un diseño listo para editar con tus fotos, precios y colores.", img: "plantilla-1.jpg", boton: "Usar plantilla", enlace: "/shared/assets/docs/plantilla-flyer.pdf" },
    { titulo: "Plantilla de menú", desc: "Ordena tu carta de forma clara y atractiva, lista para imprimir o compartir.", img: "plantilla-2.jpg", boton: "Usar plantilla", enlace: "/shared/assets/docs/plantilla-menu.pdf" },
    { titulo: "Plantilla de publicaciones para redes", desc: "Formatos para carruseles y posts que mantienen tu estilo.", img: "plantilla-3.jpg", boton: "Usar plantilla", enlace: "/shared/assets/docs/plantilla-redes.pdf" }
  ]
};
