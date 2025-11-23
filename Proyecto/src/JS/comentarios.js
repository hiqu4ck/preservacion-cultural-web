// ===================== COMENTARIOS =====================

// URL del backend (el que corre en backend/index.js)
const URL_API_COMENTARIOS = "http://localhost:4000/comments";

function iniciarComentarios() {
  const formComentario = document.getElementById("formComentario");
  const listaComentarios = document.getElementById("listaComentarios");
  const listaComentariosModal = document.getElementById("listaComentariosModal");
  const btnMas = document.getElementById("btnMas");
  const modal = document.getElementById("modalComentarios");
  const btnCerrarModal = document.getElementById("cerrarModalComentarios");
  const overlayModal = modal
    ? modal.querySelector(".comentarios-modal__overlay")
    : null;

  // Si no existe la sección aquí, no hacemos nada
  if (!formComentario || !listaComentarios) return;

  // ------- función para generar el HTML de un comentario -------
  function renderComentario(c) {
    const inicial = c.nombre ? c.nombre.charAt(0).toUpperCase() : "?";

    return `
      <article class="comentario">
        <div class="comentario__info">

          <div class="comentario__usuario">
            <div class="comentario__avatar">${inicial}</div>
            <span>${c.nombre}</span>
          </div>

          <p class="comentario__texto">${c.mensaje}</p>

        </div>
      </article>
    `;
  }

  // ------- Enviar comentario -------
  formComentario.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !mensaje) {
      alert("Por favor llena todos los campos");
      return;
    }

    const nuevoComentario = { nombre, mensaje };

    try {
      const res = await fetch(URL_API_COMENTARIOS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoComentario),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Error al guardar comentario");
        return;
      }

      formComentario.reset();
      cargarComentarios(); // recargar lista tras guardar
    } catch (error) {
      console.error(error);
      alert("No se pudo conectar con el servidor de comentarios");
    }
  });

  // ------- Cargar comentarios existentes -------
  async function cargarComentarios() {
    try {
      const res = await fetch(URL_API_COMENTARIOS);
      const comentarios = await res.json();

      if (!Array.isArray(comentarios) || comentarios.length === 0) {
  // Debajo del formulario no mostramos nada
  listaComentarios.innerHTML = "";

  if (listaComentariosModal) {
    listaComentariosModal.innerHTML = "<p>No hay comentarios aún.</p>";
  }
  return;
}


      const ordenados = comentarios.slice().reverse();

      // ⬇️ Debajo del formulario NO mostramos la lista de comentarios
      // (queda vacío para que solo se vean en el modal)
      listaComentarios.innerHTML = "";

      // 🔹 Modal: TODOS los comentarios con el diseño simple
      if (listaComentariosModal) {
        listaComentariosModal.innerHTML = ordenados
          .map(renderComentario)
          .join("");
      }
    } catch (error) {
      console.error(error);
      if (listaComentariosModal) {
        listaComentariosModal.innerHTML =
          "<p>Error al cargar los comentarios.</p>";
      }
    }
  }

  // Llamar al cargar la página
  cargarComentarios();

  // ------- ABRIR MODAL -------
  if (btnMas && modal) {
    btnMas.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.add("is-open");
    });
  }

  // ------- CERRAR MODAL -------
  if (btnCerrarModal && modal) {
    btnCerrarModal.addEventListener("click", () => {
      modal.classList.remove("is-open");
    });
  }

  if (overlayModal && modal) {
    overlayModal.addEventListener("click", () => {
      modal.classList.remove("is-open");
    });
  }
}

// Esperar a que cargue el HTML antes de buscar los elementos
window.addEventListener("DOMContentLoaded", iniciarComentarios);
