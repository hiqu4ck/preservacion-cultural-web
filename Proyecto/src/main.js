// Importamos estilos 
import "./CSS/style.css";

// Importamos estilos landing
import "./CSS/landing.css";

document.title = "K’ajóol Lu’um";

document.querySelector("#app").innerHTML = ``;

// CARRUSEL
const slides = Array.from(document.querySelectorAll(".hero__slide"));
const prevBtn = document.getElementById("heroPrev");
const nextBtn = document.getElementById("heroNext");
const dotsContainer = document.getElementById("heroDots");
const subtitleEl = document.querySelector(".hero__subtitle");

let currentIndex = 0;
let autoTimer = null;
const AUTO_INTERVAL = 6000;


slides.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.className = "hero__dot" + (i === 0 ? " hero__dot--active" : "");
  dot.dataset.index = i;
  dotsContainer.appendChild(dot);
});

const dots = Array.from(document.querySelectorAll(".hero__dot"));

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

function nextSlide() {
  showSlide((currentIndex + 1) % slides.length);
}

function prevSlide() {
  showSlide((currentIndex - 1 + slides.length) % slides.length);
}

function restartAuto() {
  clearInterval(autoTimer);
  autoTimer = setInterval(nextSlide, AUTO_INTERVAL);
}

nextBtn.addEventListener("click", () => {
  nextSlide();
  restartAuto();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  restartAuto();
});

dotsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("hero__dot")) {
    const i = parseInt(e.target.dataset.index, 10);
    showSlide(i);
    restartAuto();
  }
});

autoTimer = setInterval(nextSlide, AUTO_INTERVAL);
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
import './CSS/comentarios.css';
import './JS/comentarios.js';
import './JS/loganSlider.js'
import './CSS/leyendas.css'
import './CSS/artesanias.css'