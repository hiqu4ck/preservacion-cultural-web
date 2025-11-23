function iniciarGaleria() {
  const track = document.getElementById("galeriaTrack");
  if (!track) {
    console.log("❌ No se encontró #galeriaTrack");
    return;
  }

  console.log("✔️ galeriaTrack encontrado");

  let scrollPos = 0;
  let lastScroll = Date.now();

  function autoScroll() {
    const now = Date.now();
    const diff = now - lastScroll;

    // Ejecuta solo si pasaron al menos 2 segundos
    if (diff < 3000) return;

    lastScroll = now;

    const maxScroll = track.scrollWidth - track.clientWidth;
    const paso = track.clientWidth * 0.6; // avanzar 60% del ancho visible

    scrollPos += paso;

    if (scrollPos > maxScroll + 10) {
      scrollPos = 0; // volver al inicio
    }

    track.scrollTo({
      left: scrollPos,
      behavior: "smooth",
    });
  }

  // Intervalo rápido para evitar optimización del navegador
  setInterval(autoScroll, 500);
}

window.addEventListener("DOMContentLoaded", iniciarGaleria);
