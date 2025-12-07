//COMENTARIOS

//URL del backend (el que corre en backend/index.js)
const URL_API_COMENTARIOS = "http://localhost:4000/comments";

function iniciarComentarios() {
  //Obtener elementos del DOM
  const formComentario = document.getElementById("formComentario");
  const listaComentarios = document.getElementById("listaComentarios");
  const listaComentariosModal = document.getElementById("listaComentariosModal");
  const btnMas = document.getElementById("btnMas");
  const modal = document.getElementById("modalComentarios");
  const btnCerrarModal = document.getElementById("cerrarModalComentarios");

  //Overlay del modal (fondo oscuro) si existe
  const overlayModal = modal
    ? modal.querySelector(".comentarios-modal__overlay")
    : null;

  //Si esta sección no existe en el HTML, detenemos la ejecución
  if (!formComentario || !listaComentarios) return;

  //Función para generar el HTML de un comentario
  function renderComentario(c) {
    // Inicial del usuario (primera letra del nombre)
    const inicial = c.nombre ? c.nombre.charAt(0).toUpperCase() : "?";

    // Devuelve una tarjeta de comentario en HTML
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

  //Enviar comentario
  formComentario.addEventListener("submit", async (e) => {
    e.preventDefault(); // Evita recargar la página

    const nombre = document.getElementById("nombre").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    //Validación básica
    if (!nombre || !mensaje) {
      alert("Por favor llena todos los campos");
      return;
    }

    const nuevoComentario = { nombre, mensaje };

    try {
      //Enviamos el comentario al backend
      const res = await fetch(URL_API_COMENTARIOS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoComentario),
      });

      const data = await res.json();

      //Si el servidor devuelve error
      if (!res.ok) {
        alert(data.error || "Error al guardar comentario");
        return;
      }

      //Resetea el formulario tras enviar
      formComentario.reset();

      //Recargar lista de comentarios desde la BD
      cargarComentarios();
    } catch (error) {
      console.error(error);
      alert("No se pudo conectar con el servidor de comentarios");
    }
  });

  //Cargar comentarios desde el backend
  async function cargarComentarios() {
    try {
      const res = await fetch(URL_API_COMENTARIOS);
      const comentarios = await res.json();

      // Si no hay comentarios aún
      if (!Array.isArray(comentarios) || comentarios.length === 0) {
        // No los mostramos debajo del formulario
        listaComentarios.innerHTML = "";

        // En el modal mostramos mensaje vacío
        if (listaComentariosModal) {
          listaComentariosModal.innerHTML = "<p>No hay comentarios aún.</p>";
        }
        return;
      }

      // Ordenar de más reciente a más antiguo
      const ordenados = comentarios.slice().reverse();

      // Debajo del formulario NO mostramos nada (lista vacía a propósito)
      listaComentarios.innerHTML = "";

      // En el modal sí mostramos TODOS los comentarios
      if (listaComentariosModal) {
        listaComentariosModal.innerHTML = ordenados
          .map(renderComentario) // Generar HTML
          .join("");             // Unir en un solo bloque
      }
    } catch (error) {
      console.error(error);
      if (listaComentariosModal) {
        listaComentariosModal.innerHTML =
          "<p>Error al cargar los comentarios.</p>";
      }
    }
  }

  //Llamar a la carga inicial de comentarios al entrar a la página
  cargarComentarios();

  //ABRIR MODAL (botón "Leer más")
  if (btnMas && modal) {
    btnMas.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.add("is-open"); // Activa la animación CSS del modal
    });
  }

  //CERRAR MODAL (botón X)
  if (btnCerrarModal && modal) {
    btnCerrarModal.addEventListener("click", () => {
      modal.classList.remove("is-open");
    });
  }

  //CERRAR MODAL al hacer clic en el overlay
  if (overlayModal && modal) {
    overlayModal.addEventListener("click", () => {
      modal.classList.remove("is-open");
    });
  }
}

// Esperar a que el DOM esté listo para inicializar todo
window.addEventListener("DOMContentLoaded", iniciarComentarios);
