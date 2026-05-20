import "./CSS/style.css";
import "./CSS/landing.css";
import './CSS/style.css'
import './CSS/hero.css'
import './CSS/variables.css'
import './CSS/slider.css';
import './JS/slider.js';
import './CSS/galeria.css';
import './JS/galeria.js';
import './CSS/video.css';
import './CSS/comida.css';
import './JS/comidas.js';
import './CSS/medicina.css';
import './JS/medicina.js';
import './CSS/cultura.css';
import './JS/cultura.js';
import './CSS/comentarios.css';
import './JS/comentarios.js';
import './JS/loganSlider.js'
import './CSS/leyendas.css'
import './CSS/artesanias.css'
import './CSS/comunidades.css'

// ===== TÍTULO DE LA PÁGINA =====
document.title = "K’ajóol Lu’um";

// ===== CARRUSEL DEL HERO =====

// Seleccionamos elementos del DOM
const slides = Array.from(document.querySelectorAll(".hero__slide"));
const prevBtn = document.getElementById("heroPrev");
const nextBtn = document.getElementById("heroNext");
const dotsContainer = document.getElementById("heroDots");
const subtitleEl = document.querySelector(".hero__subtitle");

let currentIndex = 0;
let autoTimer = null;
const AUTO_INTERVAL = 6000;

// Crear los dots dinámicamente según cuántos slides haya
slides.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.className = "hero__dot" + (i === 0 ? " hero__dot--active" : "");
  dot.dataset.index = i;
  dotsContainer.appendChild(dot);
});

const dots = Array.from(document.querySelectorAll(".hero__dot"));

// Mostrar un slide específico
function showSlide(index) {
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;

  slides.forEach((slide, i) => {
    slide.classList.toggle("hero__slide--active", i === index);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("hero__dot--active", i === index);
  });

  const subtitle = slides[index].dataset.subtitle;
  if (subtitleEl && subtitle) {
    subtitleEl.textContent = subtitle;
  }

  currentIndex = index;
}

// Avanzar
function nextSlide() {
  showSlide((currentIndex + 1) % slides.length);
}

// Retroceder
function prevSlide() {
  showSlide((currentIndex - 1 + slides.length) % slides.length);
}

// Reiniciar autoplay
function restartAuto() {
  clearInterval(autoTimer);
  autoTimer = setInterval(nextSlide, AUTO_INTERVAL);
}

// Eventos de botones
if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    nextSlide();
    restartAuto();
  });
}

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    prevSlide();
    restartAuto();
  });
}

// Click en dots
if (dotsContainer) {
  dotsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("hero__dot")) {
      const i = parseInt(e.target.dataset.index, 10);
      showSlide(i);
      restartAuto();
    }
  });
}

// Iniciar autoplay
if (slides.length > 1) {
  autoTimer = setInterval(nextSlide, AUTO_INTERVAL);
}




import { initMapaZonaMaya } from "./JS/zonasMayas.js";
document.addEventListener("DOMContentLoaded", () => {
  initMapaZonaMaya();
});

fetch("http://localhost:4000/productos")
  .then(res => res.json())
  .then(data => {

    console.log(data);

    // CONTENEDOR DONDE IRÁN LAS CARDS
    const container = document.getElementById("productos-container");

    // RECORRER PRODUCTOS
    data.forEach(producto => {

      // CREAR CARD
      const card = document.createElement("div");

      // AGREGAR CLASE CSS
      card.classList.add("product-card");

      // CONTENIDO HTML
      card.innerHTML = `
      
        <img src="/productos/${producto.imagen}" alt="${producto.nombre}">

        <h3>${producto.nombre}</h3>

        <p>$${producto.precio}</p>

      `;

      // ABRIR MODAL AL DAR CLICK
      card.addEventListener("click", () => {

        // ACTIVAR MODAL
        modal.classList.add("active");

        // METER INFO
        document.getElementById("modalImg").src =
          `/productos/${producto.imagen}`;

        document.getElementById("modalTitle").textContent =
          producto.nombre;

        document.getElementById("modalPrice").textContent =
          `$${producto.precio}`;

        document.getElementById("modalDescription").textContent =
          producto.descripcion;

        document.getElementById("modalIngredientes").textContent =
          producto.ingredientes;

        document.getElementById("modalPreparacion").textContent =
          producto.preparacion;

        document.getElementById("modalUso").textContent =
          producto.modo_uso;

        document.getElementById("modalPrecauciones").textContent =
          producto.precauciones;

      });

      // METER CARD AL HTML
      container.appendChild(card);

    });

  })
  .catch(error => console.log(error));



// ================= MODAL PRODUCTO =================

// ELEMENTOS
const modal = document.getElementById("productModal");

const modalClose = document.getElementById("modalClose");

const modalOverlay = document.getElementById("modalOverlay");

// CERRAR MODAL
modalClose.addEventListener("click", () => {
  modal.classList.remove("active");
});

// CERRAR TOCANDO AFUERA
modalOverlay.addEventListener("click", () => {
  modal.classList.remove("active");
});



// TODAS LAS CARDS MANUALES
const cards = document.querySelectorAll(".product-card");

// ABRIR MODAL
cards.forEach(card => {

  card.addEventListener("click", () => {

    modal.classList.add("active");

  });

});
