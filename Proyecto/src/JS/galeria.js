//Aquí defino la función que controla el auto-scroll de la galería.
//Toda la lógica relacionada con mover automáticamente las imágenes la encapsulé dentro de esta función.
// |
// v
function iniciarGaleria() {  // Función principal que inicializa el auto-scroll de la galería.
//Busco el contenedor horizontal que contiene todas las imágenes de la galería. 
//Si ese elemento no existe, la función no puede seguir.                              
// |
// v
  const track = document.getElementById("galeriaTrack"); // Obtengo el contenedor horizontal donde están todas las fotos.

//Hago una verificación defensiva: si el elemento no está en el DOM, detengo la función para evitar errores. 
//Esto ayuda a que el script no falle aunque la sección no cargue
// |
// v
  if (!track) {                                          // Si el elemento no existe en el DOM...
    console.log("No se encontró #galeriaTrack");      // ...mando mensaje de error a la consola.
    return;                                              // Salgo de la función para evitar errores.
  }

  console.log("galeriaTrack encontrado");             // Confirmación de que el elemento sí fue encontrado.

//Declaro dos variables: una para llevar la posición actual del scroll y otra para guardar el tiempo en que ocurrió el último movimiento automático. 
//Con eso controlo cada cuánto avanza la galería.
// |
// v
  let scrollPos = 0;                                     // Variable que lleva el control de la posición de scroll actual.
  let lastScroll = Date.now();                           // Guarda el momento en que se ejecutó el último desplazamiento automático.

  function autoScroll() {     // Función que hace avanzar la galería automáticamente.
                               
//Aquí verifico que hayan pasado al menos 3 segundos antes de volver a mover la galería. 
//Aunque la función se ejecuta cada 500 ms, sólo avanza cuando el tiempo se cumple.
// |
// v
    const now = Date.now();                              // Obtengo el tiempo actual en milisegundos.
    const diff = now - lastScroll;                       // Diferencia entre el tiempo actual y el último scroll ejecutado.

    // Ejecuta solo si pasaron al menos 2 segundos
    if (diff < 3000) return;                             // Si no han pasado 3 segundos, no hace scroll aún.

    lastScroll = now;                                    // Actualizo la marca temporal para el próximo scroll.

//Calculo cuánto puede desplazarse la galería antes de llegar al final.
//Uso scrollWidth para el ancho total y clientWidth para el espacio visible.
// |
// v
    const maxScroll = track.scrollWidth - track.clientWidth; 
                                                          // Calculo cuánto puede desplazarse máximo el contenedor (scroll total - ancho visible).

//Decidí que el scroll avance un 60% del ancho visible en cada movimiento. 
//Esto hace que se mueva lo suficiente sin saltos bruscos.
// |
// v
    const paso = track.clientWidth * 0.6;                // Cantidad que avanzará en cada auto-scroll (60% del ancho visible).

    scrollPos += paso;                                   // Avanzo la posición de scroll acumulada.

//Cuando la galería llega al final, la devuelvo al inicio para que parezca un carrusel infinito.
// |
// v
    if (scrollPos > maxScroll + 10) {                    // Si me pasé del final del scroll por un pequeño margen...
      scrollPos = 0;                                     // ...regreso al inicio para crear efecto de loop.
    }

//Uso scrollTo con behavior: smooth para que el desplazamiento visual sea suave, no brusco.
// |
// v
    track.scrollTo({                                     // Realiza el desplazamiento suave a la posición calculada.
      left: scrollPos,
      behavior: "smooth",
    });
  }

  //Aquí ejecuto la función autoScroll cada 500 ms, pero como dentro controlo el tiempo, el scroll real sólo ocurre cada 3 segundos. 
  //Esto evita problemas de optimización del navegador.
  // |
  // v
  // Intervalo rápido para evitar optimización del navegador
  setInterval(autoScroll, 500);                          // Llamo a autoScroll cada 500ms,
                                                         // pero como internamente revisa el tiempo (3s),
                                                         // solo hará scroll cuando corresponda.
}
//Me aseguro de que la galería se inicialice sólo cuando el HTML ya está cargado, evitando errores porque los elementos no existen aún.
// |
// v
window.addEventListener("DOMContentLoaded", iniciarGaleria); 
                                                         // Cuando el HTML termina de cargar, ejecuto iniciarGaleria().
