 // Seleccionamos TODOS los contenedores .slides en JUEGOS (SLIDER DE JUEGOOOSSSS!!!)
const JuegoSliders = document.querySelectorAll(".hero-juegos .slides");

JuegoSliders.forEach(slider => {

  const slides = slider.querySelectorAll(".slide");
  let index = 0;

  setInterval(() => {
    index = (index + 1) % slides.length;
    slider.style.transform = `translateX(-${index * 100}%)`;
  }, 3000);

});






// HOVER ALEATORIO EN FIESTAS!!!!!

const fiestasHoverBoxes = document.querySelectorAll(".hero-fiestas .slideshow");

fiestasHoverBoxes.forEach(fiestasHoverBox => {
  const fiestasHoverImages = fiestasHoverBox.querySelectorAll(".slide img");
  if (fiestasHoverImages.length === 0) return;

  const mainImg = fiestasHoverBox.querySelector(".slide img");
  if (!mainImg) return;

  const fiestasHoverOriginal = mainImg.src;

  // accion de desvanecer, cambiar, reaparecer
  fiestasHoverBox.addEventListener("mouseenter", () => {
    mainImg.style.opacity = "0"; // empieza a desaparecer

    setTimeout(() => {
      // elegir una imagen aleatoria distinta
      let randomIndex = Math.floor(Math.random() * fiestasHoverImages.length);
      if (fiestasHoverImages[randomIndex].src === mainImg.src && fiestasHoverImages.length > 1) {
        randomIndex = (randomIndex + 1) % fiestasHoverImages.length;
      }

      mainImg.src = fiestasHoverImages[randomIndex].src;
      mainImg.style.opacity = "1"; // reaparece suavemente
    }, 250); // este tiempo debe ser un poco menor o igual al del transition (0.3s)
  });

  // accion de salir mouse: desvanecer, volver a la original
  fiestasHoverBox.addEventListener("mouseleave", () => {
    mainImg.style.opacity = "0";

    setTimeout(() => {
      mainImg.src = fiestasHoverOriginal;
      mainImg.style.opacity = "1";
    }, 200);
  });
});












 



// ================ DATOS DE JUEGOS (PRIMERO!!!!!!) =================
// Lista de juegos
const juegosInfoList = [
  {
    titulo: "Juegos tradicionales",
    descripcionLarga: "Información completa del primer juego...",
    imagen: "./public/assets/img/1.png"
  },
  {
    titulo: "Carrera de costales",
    descripcionLarga: "Descripción del juego segundo...",
    imagen: "./public/assets/img/2.png"
  },
  {
    titulo: "Palo encebado",
    descripcionLarga: "Descripción del tercer juego...",
    imagen: "./public/assets/img/3.png"
  }
];

const juegosBtn = document.querySelector(".hero-juegos .ver-mas-j");
const modalJuegos = document.getElementById("modal-juegos");
const modalJuegosTitle = modalJuegos.querySelector(".modal-juegos__title");
const modalJuegosText = modalJuegos.querySelector(".modal-juegos__text");
const modalJuegosImg = modalJuegos.querySelector(".modal-juegos__img");
const nextJuegoBtn = modalJuegos.querySelector(".modal-juegos__next");
const modalJuegosClose = modalJuegos.querySelector(".modal-juegos__close");
const modalJuegosOverlay = modalJuegos.querySelector(".modal-juegos__overlay");

let juegoActual = 0;

// Mostrar juego
function mostrarJuego(index) {
  const juego = juegosInfoList[index];
  modalJuegosTitle.textContent = juego.titulo;
  modalJuegosText.textContent = juego.descripcionLarga;
  modalJuegosImg.src = juego.imagen;
}

// Abrir modal
juegosBtn.addEventListener("click", () => {
  juegoActual = 0;
  mostrarJuego(juegoActual);
  modalJuegos.classList.add("is-open");
  document.body.classList.add("modal-open");
});

// Cambiar al siguiente juego
nextJuegoBtn.addEventListener("click", () => {
  juegoActual = (juegoActual + 1) % juegosInfoList.length;
  mostrarJuego(juegoActual);
});

// Cerrar modal
[modalJuegosClose, modalJuegosOverlay].forEach(el => {
  el.addEventListener("click", () => {
    modalJuegos.classList.remove("is-open");
    document.body.classList.remove("modal-open");
  });
});











// ================ DATOS DE FIESTAS (PRIMERO!!!!!!) =================
// Lista de fiestas
const fiestasInfoList = [
  {
    titulo: "Fiestas tradicionales",
    descripcionLarga: "Información completa del primer juego...",
    imagen: "./public/assets/img/1.png"
  },
  {
    titulo: "Carrera de costales",
    descripcionLarga: "Descripción del juego segundo...",
    imagen: "./public/assets/img/2.png"
  },
  {
    titulo: "Palo encebado",
    descripcionLarga: "Descripción del tercer juego...",
    imagen: "./public/assets/img/3.png"
  }
];

const fiestasBtn = document.querySelector(".hero-fiestas .ver-mas-f");
const modalFiestas = document.getElementById("modal-fiestas");
const modalFiestasTitle = modalFiestas.querySelector(".modal-fiestas__title");
const modalFiestasText = modalFiestas.querySelector(".modal-fiestas__text");
const modalFiestasImg = modalFiestas.querySelector(".modal-fiestas__img");
const nextFiestasBtn = modalFiestas.querySelector(".modal-fiestas__next");
const modalFiestasClose = modalFiestas.querySelector(".modal-fiestas__close");
const modalFiestasOverlay = modalFiestas.querySelector(".modal-fiestas__overlay");

let fiestaActual = 0;

// Mostrar juego
function mostrarFiesta(index) {
  const fiesta = fiestasInfoList[index];
  modalFiestasTitle.textContent = fiesta.titulo;
  modalFiestasText.textContent = fiesta.descripcionLarga;
  modalFiestasImg.src = fiesta.imagen;
}

// Abrir modal
fiestasBtn.addEventListener("click", () => {
  fiestaActual = 0;
  mostrarFiesta(fiestaActual);
  modalFiestas.classList.add("is-open");
  document.body.classList.add("modal-open");
});

// Cambiar al siguiente juego
nextFiestasBtn.addEventListener("click", () => {
  fiestaActual = (fiestaActual + 1) % fiestasInfoList.length;
  mostrarFiesta(fiestaActual);
});

// Cerrar modal
[modalFiestasClose, modalFiestasOverlay].forEach(el => {
  el.addEventListener("click", () => {
    modalFiestas.classList.remove("is-open");
    document.body.classList.remove("modal-open");
  });
});
 

















// ================= DATOS DE LEYENDAS (PRIMERO!!) =================
const leyendasInfo = [
  {
    titulo: "La leyenda del Balam",
    descripcion: "El Balam es un espíritu protector de las selvas mayas...",
    detalle: "Aquí se mostrará el texto completo de la leyenda seleccionada.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia quas nostrum,enim pariatur facilis est, ipsa optio exercitationem totam officia tempora, ea eos ducimus quasi velit. Recusandae dolores facere dolore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eligendiaperiam alias quae quasi, beatae maxime. Aperiam possimus ad consequunturperferendis corrupti maxime, aut nam excepturi dignissimos sapiente rerumquisquam?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam aut porro, itaque ducimus commodi recusandae! Nihil non eveniet nulla. Tenetur, impedit? Eveniet quas dolores molestias impedit ullam earum debitis dolorum.",
    img: "./public/assets/img/leyenda-balam1.jpg"
  },
  {
    titulo: "La Xtabay",
    descripcion: "La Xtabay atrae a los hombres en los caminos solitarios...",
    detalle: "Aquí se mostrará el texto completo de la leyenda seleccionada.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia quas nostrum,enim pariatur facilis est, ipsa optio exercitationem totam officia tempora, ea eos ducimus quasi velit. Recusandae dolores facere dolore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eligendiaperiam alias quae quasi, beatae maxime. Aperiam possimus ad consequunturperferendis corrupti maxime, aut nam excepturi dignissimos sapiente rerumquisquam?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam aut porro, itaque ducimus commodi recusandae! Nihil non eveniet nulla. Tenetur, impedit? Eveniet quas dolores molestias impedit ullam earum debitis dolorum.",
    img: "./public/assets/img/leyenda-balam2.jpg"
  },
  {
    titulo: "El Huay Chivo",
    descripcion: "Un brujo capaz de transformarse en una criatura mezcla de hombre y bestia...",
    detalle: "Aquí se mostrará el texto completo de la leyenda seleccionada.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia quas nostrum,enim pariatur facilis est, ipsa optio exercitationem totam officia tempora, ea eos ducimus quasi velit. Recusandae dolores facere dolore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eligendiaperiam alias quae quasi, beatae maxime. Aperiam possimus ad consequunturperferendis corrupti maxime, aut nam excepturi dignissimos sapiente rerumquisquam?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam aut porro, itaque ducimus commodi recusandae! Nihil non eveniet nulla. Tenetur, impedit? Eveniet quas dolores molestias impedit ullam earum debitis dolorum.",
    img: "./public/assets/img/leyenda-balam3.png"
  },
  {
    titulo: "La Llorona Maya",
    descripcion: "Una mujer que vaga buscando a su hijo entre los cenotes y selvas...",
    detalle: "Aquí se mostrará el texto completo de la leyenda seleccionada.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia quas nostrum,enim pariatur facilis est, ipsa optio exercitationem totam officia tempora, ea eos ducimus quasi velit. Recusandae dolores facere dolore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eligendiaperiam alias quae quasi, beatae maxime. Aperiam possimus ad consequunturperferendis corrupti maxime, aut nam excepturi dignissimos sapiente rerumquisquam?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam aut porro, itaque ducimus commodi recusandae! Nihil non eveniet nulla. Tenetur, impedit? Eveniet quas dolores molestias impedit ullam earum debitis dolorum.",
    img: "./public/assets/img/leyenda-balam4.jpg"
  }
];

// ================= MODAL "LEER MÁS" =================
const leerMasBtn = document.querySelector(".leyendas .leer-mas");
const modalLeyenda = document.getElementById("modal-leyenda");
const modalTitle = modalLeyenda?.querySelector(".modal-leyenda__title");
const modalText = modalLeyenda?.querySelector(".modal-leyenda__text");
const modalClose = modalLeyenda?.querySelector(".modal-leyenda__close");
const modalOverlay = modalLeyenda?.querySelector(".modal-leyenda__overlay");
// Obtener referencia a la imagen dentro del modal
const modalImg = modalLeyenda?.querySelector(".modal-leyenda__img");

// función para abrir modal con cualquier data
const abrirModalLeyenda = (data) => {
  if (!modalLeyenda || !modalTitle || !modalText || !modalImg) return;

  modalTitle.textContent = data.titulo;
  modalText.textContent = data.detalle;
  modalImg.src = data.img || "";
  modalLeyenda.classList.add("is-open");
  document.body.classList.add("modal-open"); // <<< AÑADIDO
};

// Botón "Leer más" de LEYENDAS (ya existía, lo adaptamos)
if (leerMasBtn) {
  leerMasBtn.addEventListener("click", () => {
    const data = leyendasInfo[indexLeyenda] || leyendasInfo[0];
    abrirModalLeyenda(data);
  });
}

// Cerrar modal
[modalClose, modalOverlay].forEach(el => {
  if (!el) return;
  el.addEventListener("click", () => {
    modalLeyenda.classList.remove("is-open");
    document.body.classList.remove("modal-open"); // <<< AÑADIDO
  });
});









// ================= SLIDER DE LEYENDAS =================
const leyendasSlider = document.querySelector(".leyendas .slides-L");
const leyendasSlides = leyendasSlider ? leyendasSlider.querySelectorAll(".slide-L") : [];
const leyendasBtn = document.querySelector(".leyendas .boton-slide .btn");

const leyendaTitulo = document.querySelector(".leyendas .col-L2 .subtitulo");
const leyendaDescripcion = document.querySelector(".leyendas .col-L2 .descripcion");

// index global para usarlo también en el modal
let indexLeyenda = 0;

// Estado inicial
if (leyendasInfo.length > 0 && leyendaTitulo && leyendaDescripcion) {
  leyendaTitulo.textContent = leyendasInfo[0].titulo;
  leyendaDescripcion.textContent = leyendasInfo[0].descripcion;
}


// Controlador por botón
if (leyendasSlider && leyendasSlides.length > 0 && leyendasBtn) {

  leyendasBtn.addEventListener("click", () => {

    indexLeyenda = (indexLeyenda + 1) % leyendasSlides.length;

    // Cambiar imagen
    leyendasSlider.style.transform = `translateX(-${indexLeyenda * 100}%)`;

    // Cambiar texto
    leyendaTitulo.textContent = leyendasInfo[indexLeyenda].titulo;
    leyendaDescripcion.textContent = leyendasInfo[indexLeyenda].descripcion;
  });
}
