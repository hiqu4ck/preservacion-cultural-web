//Aquí inicializo el slider de temas mayas.
//Primero obtengo el contenedor donde están las tarjetas (sliderTrack) y las dos flechas.
//Luego, si los tres elementos existen, les asigno eventos: al hacer clic en la flecha derecha, desplazo el slider 800 píxeles hacia la derecha, y con la flecha izquierda lo muevo 800 píxeles hacia la izquierda.
//Uso scrollBy con behavior: "smooth" para que el movimiento sea suave.
// |
// v
function iniciarSliderTemas() {                // Declaro la función principal que inicializa todo el comportamiento del slider y del modal.
  // ELEMENTOS DEL SLIDER
  const sliderTrack = document.getElementById("sliderTrack");   // Obtengo el contenedor horizontal donde están todas las tarjetas (.slide).
  const btnLeft = document.getElementById("sliderLeft");        // Obtengo el botón de la flecha izquierda.
  const btnRight = document.getElementById("sliderRight");      // Obtengo el botón de la flecha derecha.

  if (sliderTrack && btnLeft && btnRight) {                     // Solo si existen estos tres elementos en el DOM, configuro los eventos.
    btnRight.addEventListener("click", () => {                  // Cuando se hace clic en la flecha derecha...
      sliderTrack.scrollBy({ left: 800, behavior: "smooth" });  // ...desplazo el track 800px hacia la derecha con animación suave.
    });

    btnLeft.addEventListener("click", () => {                   // Cuando se hace clic en la flecha izquierda...
      sliderTrack.scrollBy({ left: -800, behavior: "smooth" }); // ...desplazo el track 800px hacia la izquierda con animación suave.
    });
  }

//Esta parte prepara todo lo necesario para el modal ‘Ver más’.
//Obtengo el contenedor del modal, el overlay oscuro, el botón de cerrar y los elementos donde voy a insertar la imagen, el título y el texto.
//Si falta alguno de esos elementos importantes, salgo de la función para evitar errores, porque el modal no podría funcionar bien.
// |
// v
  // ELEMENTOS DEL MODAL "VER MÁS"
  const modalVerMas = document.getElementById("modalVerMas");   // Obtengo el contenedor principal del modal "Ver más".
  const overlayVerMas = modalVerMas                             // Si el modal existe...
    ? modalVerMas.querySelector(".modal-vermas__overlay")       // ...busco dentro de él el overlay (fondo oscuro).
    : null;                                                     // Si no existe, overlayVerMas queda como null.
  const cerrarModalVerMas = document.getElementById("cerrarModalVerMas"); // Obtengo el botón (X) para cerrar el modal.

  // ELEMENTOS NUEVOS
  const modalImg = document.getElementById("modalVerMasImg");           // Imagen que se muestra en la parte superior del modal.
  const modalTitulo = document.getElementById("modalVerMasTitulo");     // Elemento donde se coloca el título del contenido.
  const modalTexto = document.getElementById("modalVerMasTexto");       // Elemento donde se inyecta el texto largo (descripción).

  if (!modalVerMas || !modalImg || !modalTitulo || !modalTexto) return; // Si falta cualquiera de estos elementos, salgo de la función para evitar errores.

//Esta función se encarga de abrir el modal y llenarlo con la información del slide que el usuario seleccionó.
//Recibe el título, el texto y la imagen:
//Coloco el título con textContent.
//El contenido largo lo inserto con innerHTML para permitir <br> y <b>.
//Si viene una imagen, actualizo el src y la muestro; si no, la oculto.
//Al final agrego la clase is-open al modal, y esa clase es la que activa la animación y lo hace visible según el CSS
// |
// v
// Función para abrir modal con contenido
  function abrirVerMas(titulo, texto, imagen) {                // Declaro una función que recibe el título, el texto y la imagen a mostrar en el modal.

    modalTitulo.textContent = titulo;                          // Inserto el título recibido en el elemento del modal (solo texto, sin HTML).
    modalTexto.innerHTML = texto;                              // Inserto el contenido en el cuerpo del modal permitiendo HTML (saltos de línea, <b>, etc.).

    if (imagen) {                                              // Si se proporcionó una ruta de imagen...
      modalImg.src = imagen;                                   // ...cambio el src de la imagen del modal.
      modalImg.style.display = "block";                        // Aseguro que la imagen se vea (por si estaba oculta antes).
    } else {                                                   // Si no se pasa imagen...
      modalImg.style.display = "none";                         // ...oculto la imagen para que no ocupe espacio.
    }

    modalVerMas.classList.add("is-open");                      // Agrego la clase 'is-open' al modal para que se muestre (CSS maneja la animación).
  }

//“Aquí conecto cada botón ‘Ver más’ del slider con el modal.
//Selecciono todos los elementos que tienen la clase .slide-link y a cada uno le agrego un evento click.
//Cuando el usuario hace clic, evito que el enlace navegue (preventDefault), leo los atributos data-* del enlace (data-titulo, data-texto, data-imagen) y con esos valores llamo a abrirVerMas.
//Así, cada tarjeta manda su propio contenido al modal sin necesidad de tener muchos modales diferentes.
// |
// v
// Conectar los links "Ver más"
  const linksVerMas = document.querySelectorAll(".slide-link"); // Selecciono todos los enlaces con clase .slide-link dentro de los slides.

  linksVerMas.forEach((link) => {                              // Recorro cada enlace "Ver más".
    link.addEventListener("click", (e) => {                     // A cada enlace le agrego un listener al evento click.
      e.preventDefault();                                      // Prevengo el comportamiento por defecto del enlace (que no navegue a otra URL).
      const titulo = link.dataset.titulo || "";                // Leo el atributo data-titulo del enlace, o cadena vacía si no existe.
      const texto = link.dataset.texto || "";                  // Leo el atributo data-texto, que contiene el contenido extendido.
      const imagen = link.dataset.imagen || "";                // Leo el atributo data-imagen, que trae la ruta de la imagen para el modal.
      abrirVerMas(titulo, texto, imagen);                      // Llamo a abrirVerMas pasando los datos del enlace para llenar el modal.
    });
  });

//Definí una función cerrar que simplemente quita la clase is-open del modal.
//Luego reutilizo esa función tanto para el botón de cerrar (la X) como para el overlay oscuro.
//De esa forma, el usuario puede cerrar el modal haciendo clic en la X o haciendo clic fuera del contenido, y en ambos casos la lógica es la misma.
// |
// v
// Cerrar modal
  const cerrar = () => modalVerMas.classList.remove("is-open"); // Defino una función flecha que cierra el modal quitando la clase 'is-open'.

  if (cerrarModalVerMas) {                                     // Si el botón de cerrar (X) existe...
    cerrarModalVerMas.addEventListener("click", cerrar);        // ...le agrego el evento click para cerrar el modal.
  }

  if (overlayVerMas) {                                         // Si el overlay existe...
    overlayVerMas.addEventListener("click", cerrar);            // ...también cierro el modal cuando se hace clic fuera del contenido.
  }
}

//Aquí hago que todo este código se ejecute hasta que el HTML haya cargado completamente.
//Cuando se dispara el evento DOMContentLoaded, llamo a iniciarSliderTemas, que es la función que arma el slider y el modal.
// |
// v
// Esperar a que cargue el HTML antes de iniciar
window.addEventListener("DOMContentLoaded", iniciarSliderTemas); // Cuando todo el HTML está cargado, llamo a iniciarSliderTemas().
//- Gracias al DOM, JavaScript puede acceder, modificar y reaccionar a los elementos de la página en tiempo real.

