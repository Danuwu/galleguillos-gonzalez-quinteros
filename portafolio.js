var trabajos = [{
    figure: "media/zoologico.png",
    alt: "Proyecto de enriquecimiento animal. En la foto, el Hombre Ardiente está descansando a resguardo del prototipo.",
    title: "Proyecto Zoológico",
    about: "Objeto de enriquecimiento del zoológico",
    autor: "Autores: Ana Galleguillos y Daniela Quinteros",
    url: "http://cosmopolitica.cl/cosmopolitical-design-project/archivo/bitacora/grupo-16-humano/"
}, {
    figure: "media/iconicard.png",
    alt: "Proyecto de juego. Las tarjetas consisten en trasparencias con figuras divertidas, las que permiten jugar con la perspectiva y superposición de éstas.",
    title: "Iconicard",
    about: "Juego de tarjetas superponibles.",
    autor: "Autores: Ana Galleguillos y Daniela Quinteros",
    url: "https://www.behance.net/gallery/81615135/IconiKard"
}, {
    figure: "media/kwoli.png",
    alt: "Basado en el kheer, comida típica de la India, se elaboró esta comida con frutos secos. Inspirado en la fiesta del Holi, el packaging permite abrirlo con la explosividad de color característica de esta fiesta.",
    title: "Kwoli",
    about: "Comida inspirada en el festival Holi.",
    autor: "Autores: Ana Galleguillos y Daniela Quinteros",
    url: "https://www.instagram.com/p/BoPEJ0-lLpi/"
}, {
    figure: "media/Mockup_bolsa_dexia_reducido.png",
    alt: "Juego de mesa",
    title: "Dexia",
    about: "Juego de simulación para proyectos de investigación.",
    autor: "Autor: Ana Galleguillos",
    url: "https://www.instagram.com/p/B1mrIAwF-DA/"
}, {
    figure: "media/Monstruo_de_dulce.jpg",
    alt: "Banca",
    title: "Monstruo de Dulce",
    about: "Desafío estructural con terciado de 3 mm y amarracables.",
    autor: "Autores: Ana Galleguillos y Daniela Quinteros",
    url: "https://www.flickr.com/photos/183790672@N04/48619674781/in/dateposted-public/"
}, {
    figure: "media/rutina.png",
    alt: "Micrometraje",
    title: "Rutina",
    about: "Micrometraje inspirado en estudio UPA y animación rusa.",
    autor: "Autor: Ana Galleguillos",
    url: "https://www.youtube.com/watch?v=-A7S-ayQL-Y&feature=youtu.be"
}, {
    figure: "media/Proyecto_ASIMO.jpg",
    alt: "Robot",
    title: "Proyecto 3D ASIMO",
    about: "Serie de renders de robot ASIMO, modelado en Rhino.",
    autor: "Autor: Daniela Quinteros",
    url: "https://www.behance.net/gallery/84610385/Examen-Diseno-por-Computacion-III-semestre?"
}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    var cuatro = '<h6>' +  trabajos[i].autor + '</h6>';
    var cinco = '<p><a href="' + trabajos[i].url + '">Link a proyecto</a></p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + cuatro + cinco +'</div>')
});
