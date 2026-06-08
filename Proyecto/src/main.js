import { initMapaZonaMaya } from "./JS/zonasMayas.js";

import './JS/slider.js';
import './JS/galeria.js';
import './JS/comidas.js';
import './JS/medicina.js';
import './JS/cultura.js';
import './JS/comentarios.js';
import './JS/loganSlider.js';

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


// ===== MAPA =====
// Inicializamos el mapa gratuito (Leaflet) en cuanto el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  initMapaZonaMaya();
});


// ================= MODAL PRODUCTO =================

// ELEMENTOS
const modal = document.getElementById("productModal");

const modalClose = document.getElementById("modalClose");

const modalOverlay = document.getElementById("modalOverlay");


// CERRAR MODAL
if (modalClose) {
  modalClose.addEventListener("click", () => {
    modal.classList.remove("active");
  });
}

// CERRAR TOCANDO AFUERA
if (modalOverlay) {
  modalOverlay.addEventListener("click", () => {
    modal.classList.remove("active");
  });
}


// ================= PRODUCTOS MYSQL =================

// ACTUALIZAR CONTEO DE PRODUCTOS EN CADA CATEGORÍA
document.querySelectorAll('.catalog-section').forEach(section => {
  const span = section.querySelector('.catalog-header h2 span');
  if (!span) return;
  const count = section.querySelectorAll('.product-card').length;
  span.textContent = `(${count})`;
});

// Helper: llena un campo y oculta su sección/elemento si el valor es null/vacío
function fillSection(elementId, value) {
  const el = document.getElementById(elementId);
  if (!el) return;
  const section = el.closest('.modal-section');
  const hasValue = value != null && String(value).trim() !== '';
  el.textContent = hasValue ? value : '';
  if (section) section.style.display = hasValue ? '' : 'none';
  else el.style.display = hasValue ? '' : 'none';
}

// TODAS LAS CARDS
const cards = document.querySelectorAll(".product-card");

// CLICK EN CADA CARD
cards.forEach(card => {

  card.addEventListener("click", async () => {

    const id = card.dataset.id;

    try {

      const response = await fetch(`http://localhost:4000/productos/${id}`);
      const producto = await response.json();

      modal.classList.add("active");

      // IMAGEN
      document.getElementById("modalImg").src = card.querySelector("img").src;

      // NOMBRE
      document.getElementById("modalTitle").textContent = producto.nombre ?? '';

      // PRECIO
      const priceEl = document.getElementById("modalPrice");
      if (priceEl) {
        const hasPrice = producto.precio != null;
        priceEl.textContent = hasPrice ? `$${producto.precio}` : '';
        priceEl.style.display = hasPrice ? '' : 'none';
      }

      // ETIQUETAS SEGÚN CATEGORÍA
      const categoriaTitle = card.closest('.catalog-section')
        ?.querySelector('.catalog-header h2')
        ?.textContent ?? '';
      const esVestimenta = categoriaTitle.toLowerCase().includes('vestimenta');

      function setLabel(fieldId, defaultLabel, vestimentaLabel) {
        const el = document.getElementById(fieldId);
        if (!el) return;
        el.closest('.modal-section')
          ?.querySelector('.modal-section-title')
          ?.childNodes.forEach(n => { if (n.nodeType === 3) n.textContent = esVestimenta ? vestimentaLabel : defaultLabel; });
      }

      setLabel('modalIngredientes', 'Ingredientes', 'Materiales');
      setLabel('modalPreparacion',  'Preparación',  'Elaboración');
      setLabel('modalUso',          'Modo de uso',  'Modo de uso');
      setLabel('modalPrecauciones', 'Precauciones', 'Cuidados');

      // DESCRIPCIÓN
      fillSection("modalDescription", producto.descripcion);

      // SECCIONES
      fillSection("modalIngredientes", producto.ingredientes);
      fillSection("modalPreparacion", producto.preparacion);
      fillSection("modalUso", producto.modo_uso);
      fillSection("modalPrecauciones", producto.precauciones);

    } catch (error) {
      console.log("Error:", error);
    }

  });

});