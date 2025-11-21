
// ===================== COMENTARIOS =====================

// URL del backend (el que corre en backend/index.js)
const URL_API_COMENTARIOS = "http://localhost:4000/comments";

function iniciarComentarios() {
  const formComentario = document.getElementById("formComentario");
  const listaComentarios = document.getElementById("listaComentarios");

  // Si en esta página no existe el formulario, no hacemos nada
  if (!formComentario || !listaComentarios) return;

  // Enviar comentario
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

      // Limpiar formulario
      formComentario.reset();

      // Recargar lista
      cargarComentarios();
    } catch (error) {
      console.error(error);
      alert("No se pudo conectar con el servidor de comentarios");
    }
  });

  // Cargar comentarios existentes
  async function cargarComentarios() {
    try {
      const res = await fetch(URL_API_COMENTARIOS);
      const comentarios = await res.json();

      if (!Array.isArray(comentarios)) {
        listaComentarios.innerHTML = "<p>No hay comentarios aún.</p>";
        return;
      }

      if (comentarios.length === 0) {
        listaComentarios.innerHTML = "<p>No hay comentarios aún.</p>";
        return;
      }

      listaComentarios.innerHTML = comentarios
        .map(
          (c) => `
          <article class="comentario">
            <p><strong>${c.nombre}</strong></p>
            <p>${c.mensaje}</p>
          </article>
        `
        )
        .join("");
    } catch (error) {
      console.error(error);
      listaComentarios.innerHTML =
        "<p>Error al cargar los comentarios.</p>";
    }
  }

  // Llamar al cargar la página
  cargarComentarios();
}

// Esperar a que cargue el HTML antes de buscar los elementos
window.addEventListener("DOMContentLoaded", iniciarComentarios);
