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

  // ELEMENTOS NUEVOS
  const modalImg = document.getElementById("modalVerMasImg");
  const modalTitulo = document.getElementById("modalVerMasTitulo");
  const modalTexto = document.getElementById("modalVerMasTexto");

  if (!modalVerMas || !modalImg || !modalTitulo || !modalTexto) return;

  // Función para abrir modal con contenido
  function abrirVerMas(titulo, texto, imagen) {

    modalTitulo.textContent = titulo;
    modalTexto.textContent = texto;

    if (imagen) {
      modalImg.src = imagen;
      modalImg.style.display = "block";
    } else {
      modalImg.style.display = "none";
    }

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
