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

// ===== INFO PARA LOS MODALES DE JUEGOS Y FIESTAS =====
const juegosModalInfo = {
  titulo: "Juegos tradicionales",
  detalle: "Aquí puedes escribir la explicación completa de los juegos tradicionales: cómo se juegan, su origen, quiénes los practican, por qué son importantes para la comunidad, etc.",
  img: "./public/assets/img/1.png" // pon la imagen que tú quieras
};

const fiestasModalInfo = {
  titulo: "Fiestas tradicionales",
  detalle: "Aquí va la explicación completa de las fiestas tradicionales: fechas importantes, tipos de bailes, trajes típicos, significado cultural, etc.",
  img: "./public/assets/img/2.png" // cambia la ruta a la imagen que quieras
};



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
};

// Botón "Leer más" de LEYENDAS (ya existía, lo adaptamos)
if (leerMasBtn) {
  leerMasBtn.addEventListener("click", () => {
    const data = leyendasInfo[indexLeyenda] || leyendasInfo[0];
    abrirModalLeyenda(data);
  });
}

// Botón "Ver más" de JUEGOS
const verMasJuegos = document.querySelector(".hero-juegos .ver-mas");
if (verMasJuegos) {
  verMasJuegos.addEventListener("click", (e) => {
    e.preventDefault();
    abrirModalLeyenda(juegosModalInfo);
  });
}

// Botón "Ver más" de FIESTAS
const verMasFiestas = document.querySelector(".hero-fiestas .ver-mas");
if (verMasFiestas) {
  verMasFiestas.addEventListener("click", (e) => {
    e.preventDefault();
    abrirModalLeyenda(fiestasModalInfo);
  });
}


// Cerrar modal
[modalClose, modalOverlay].forEach(el => {
  if (!el) return;
  el.addEventListener("click", () => {
    modalLeyenda.classList.remove("is-open");
  });
});
