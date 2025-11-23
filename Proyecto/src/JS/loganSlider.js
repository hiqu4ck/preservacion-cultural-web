// Seleccionamos TODOS los contenedores .slides en juegos y fiestas
const sliders = document.querySelectorAll(".slides");

sliders.forEach(slider => {
    
    const slides = slider.querySelectorAll(".slide");
    let index = 0;

    setInterval(() => {
        index = (index + 1) % slides.length;
        slider.style.transform = `translateX(-${index * 100}%)`;
    }, 3000);

});
// ===== SLIDER DE LEYENDAS + TEXTO DINÁMICO =====

// 1. Slider de imágenes
const leyendasSlider = document.querySelector(".leyendas .slides-L");
const leyendasSlides = leyendasSlider ? leyendasSlider.querySelectorAll(".slide-L") : [];
const leyendasBtn = document.querySelector(".leyendas .boton-slide .btn");

// 2. Elementos de texto de la derecha
const leyendaTitulo = document.querySelector(".leyendas .col-L2 .subtitulo");
const leyendaDescripcion = document.querySelector(".leyendas .col-L2 .descripcion");

// 3. Datos para cada leyenda
const leyendasInfo = [
    {
        titulo: "La leyenda del Balam",
        descripcion: "El Balam es un espíritu protector de las selvas mayas..."
    },
    {
        titulo: "La Xtabay",
        descripcion: "La Xtabay atrae a los hombres en los caminos solitarios..."
    },
    {
        titulo: "El Huay Chivo",
        descripcion: "Un brujo capaz de transformarse en una criatura mezcla de hombre y bestia..."
    },
    {
        titulo: "La Llorona Maya",
        descripcion: "Una mujer que vaga buscando a su hijo entre los cenotes y selvas..."
    }
];

// 4. Controlador por botón
if (leyendasSlider && leyendasSlides.length > 0 && leyendasBtn) {

    let indexLeyenda = 0;

    leyendasBtn.addEventListener("click", () => {

        // Cambiar imagen
        indexLeyenda = (indexLeyenda + 1) % leyendasSlides.length;
        leyendasSlider.style.transform = `translateX(-${indexLeyenda * 100}%)`;

        // Cambiar texto
        leyendaTitulo.textContent = leyendasInfo[indexLeyenda].titulo;
        leyendaDescripcion.textContent = leyendasInfo[indexLeyenda].descripcion;
    });
}
