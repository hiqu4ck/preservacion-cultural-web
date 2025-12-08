// Importamos estilos 
import "./CSS/style.css";

// Importamos estilos landing
import "./CSS/landing.css";

document.title = "K’ajóol Lu’um";

document.querySelector("#app").innerHTML = `
  <div class="page">
    <!-- HEADER -->
    <header class="topbar">
      <div class="topbar__logo logo-wrapper">
        <img src="/img/logo.png" alt="Logo K’ajóol Lu’um" class="logo-img" />
        <span class="logo-text">K’ajóol Lu’um</span>
      </div>

      <nav class="topbar__nav">
        <!-- Aquí luego puedes agregar más enlaces si quieres -->
        <button class="topbar__btn">Iniciar sesión</button>

        <div class="topbar__menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>

    <!-- HERO / CARRUSEL -->
    <section class="hero" id="hero">
      <!-- SLIDE 1 -->
      <div
        class="hero__slide hero__slide--active"
        style="background-image:url('/img/carrusel-1.jpg');"
        data-subtitle="Donde la memoria de la tierra late">
      </div>

      <!-- SLIDE 2 -->
      <div
        class="hero__slide"
        style="background-image:url('/img/carrusel-2.jpeg');"
        data-subtitle="Es comunidad y territorio vivo">
      </div>

      <!-- SLIDE 3 -->
      <div
        class="hero__slide"
        style="background-image:url('/img/carrusel-3.jpeg');"
        data-subtitle="Es tradición, lengua y saber maya">
      </div>

      <div class="hero__overlay"></div>

      <div class="hero__content">
        <h1 class="hero__title">K’ajóol Lu’um</h1>
        <p class="hero__subtitle">
          Donde la memoria de la tierra late
        </p>
      </div>

      <div class="hero__controls">
        <button class="hero__arrow" id="heroPrev">❮</button>
        <button class="hero__arrow" id="heroNext">❯</button>
      </div>

      <div class="hero__dots" id="heroDots"></div>
    </section>

    <!-- SECCIÓN LENGUA MAYA -->

    <section class="section section-about">
    <div class="section-about__inner">

      <h2 class="section__title section__title--center">Lengua maya</h2>

      <div class="section__grid">

        <div>
          La lengua maya es una de las expresiones culturales más antiguas
          y vivas de Mesoamérica. Representa un puente directo con los
          conocimientos ancestrales y la memoria colectiva de los pueblos que
          han habitado esta región por siglos.
          Hoy en día, es hablada por más de 800,000 personas, lo que la
          convierte en una de las lenguas originarias más fuertes y vivas del país.
        </p>

          <p>
            Se considera una lengua
          <span class="yellow">profundamente ligada al territorio</span>,
          pues a través de sus palabras se conserva el nombre de plantas,
          animales, sitios sagrados y fenómenos naturales que no existen en
          español. La lengua, por sí misma, es un mapa vivo del mundo maya.
        </p>
        </div>

        <div>
           <p>
          La transmisión de la lengua se realiza principalmente en el hogar
          y en la comunidad. A través de ella se comparten enseñanzas sobre
          agricultura, medicina tradicional, rituales y convivencia social.
          Es una herramienta clave para preservar la
          <span class="yellow">cosmovisión maya</span>,
          una forma de entender la vida basada en el respeto, el equilibrio
          y la reciprocidad con la naturaleza.
        </p>
          <p>
            También es considerada un elemento de
          <span class="yellow">identidad y resistencia cultural</span>,
          ya que ha sobrevivido a procesos históricos de discriminación y
          desplazamiento. Hoy, diversas comunidades trabajan en su
          revitalización mediante escuelas comunitarias, talleres culturales
          y proyectos que impulsan su uso en la vida cotidiana.
        </p>
        <p>
          Preservar la lengua maya es garantizar la continuidad de un
          conocimiento que ha acompañado a los pueblos mayas durante milenios
          y que sigue siendo fundamental para comprender su forma de vida y
          relación con el entorno.
        </p>
        </div>
      </div>

       <div class="section-about__logo">
      <img src="/img/logo.png" alt="Logo K’ajóol Lu’um" />
    </div>

    </section>
  </div>
`;

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
