function iniciarSliderTemas() {
  // ELEMENTOS DEL SLIDER
  const sliderTrack = document.getElementById("sliderTrack");
  const btnLeft = document.getElementById("sliderLeft");
  const btnRight = document.getElementById("sliderRight");

  if (sliderTrack && btnLeft && btnRight) {
    btnRight.addEventListener("click", () => {
      sliderTrack.scrollBy({ left: 400, behavior: "smooth" });
    });

    btnLeft.addEventListener("click", () => {
      sliderTrack.scrollBy({ left: -400, behavior: "smooth" });
    });
  }

  // ELEMENTOS DEL MODAL "VER MÁS"
  const modalVerMas = document.getElementById("modalVerMas");
  const overlayVerMas = modalVerMas
    ? modalVerMas.querySelector(".modal-vermas__overlay")
    : null;
  const cerrarModalVerMas = document.getElementById("cerrarModalVerMas");
  const contenidoVerMas = document.getElementById("contenidoVerMas");

  if (!modalVerMas || !contenidoVerMas) return;

  // Función para abrir modal con contenido
  function abrirVerMas(titulo, texto, imagen) {
    let html = `
      <h2 class="modal-vermas__title">${titulo}</h2>
      <p class="modal-vermas__text">${texto}</p>
    `;

    if (imagen) {
      html += `<img src="${imagen}" alt="${titulo}" class="modal-vermas__img">`;
    }

    contenidoVerMas.innerHTML = html;
    modalVerMas.classList.add("is-open");
  }

  // Conectar los links "Ver más"
  const linksVerMas = document.querySelectorAll(".slide-link");

  linksVerMas.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const titulo = link.dataset.titulo || "";
      const texto = link.dataset.texto || "";
      const imagen = link.dataset.imagen || "";
      abrirVerMas(titulo, texto, imagen);
    });
  });

  // Cerrar modal
  const cerrar = () => modalVerMas.classList.remove("is-open");

  if (cerrarModalVerMas) {
    cerrarModalVerMas.addEventListener("click", cerrar);
  }

  if (overlayVerMas) {
    overlayVerMas.addEventListener("click", cerrar);
  }
}

// Esperar a que cargue el HTML antes de iniciar
window.addEventListener("DOMContentLoaded", iniciarSliderTemas);
