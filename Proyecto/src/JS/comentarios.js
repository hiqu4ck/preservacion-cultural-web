//COMENTARIOS

//Aquí inicializo toda la lógica de la sección de comentarios.
//Primero defino la constante URL_API_COMENTARIOS, que es la ruta de mi backend donde se guardan y se leen los comentarios.
//Luego, en la función iniciarComentarios, obtengo del DOM todos los elementos que necesito: el formulario, la lista de comentarios, el modal y los botones. Esta función es la que se ejecuta cuando carga la página y se encarga de conectar la interfaz con el backend.
// |
// v
//URL del backend (el que corre en backend/index.js)
const URL_API_COMENTARIOS = "http://localhost:4000/comments"; 
// Constante que guarda la URL base de la API donde se guardan y se leen los comentarios.

/* Función principal que inicializa toda la lógica de la sección de comentarios */
function iniciarComentarios() {
  //Obtener elementos del DOM
  const formComentario = document.getElementById("formComentario");          // Formulario donde el usuario escribe nombre y comentario.
  const listaComentarios = document.getElementById("listaComentarios");      // Contenedor (debajo del formulario) para la lista de comentarios (aquí lo dejas vacío a propósito).
  const listaComentariosModal = document.getElementById("listaComentariosModal"); // Contenedor de la lista de comentarios dentro del modal.
  const btnMas = document.getElementById("btnMas");                          // Botón "Leer comentarios" que abre el modal.
  const modal = document.getElementById("modalComentarios");                 // Contenedor general del modal de comentarios.
  const btnCerrarModal = document.getElementById("cerrarModalComentarios");  // Botón (X) para cerrar el modal.

  //Overlay del modal (fondo oscuro) si existe
  const overlayModal = modal                                                 // Si el modal existe...
    ? modal.querySelector(".comentarios-modal__overlay")                     // ...busco el elemento overlay dentro del modal.
    : null;                                                                  // Si no existe el modal, overlayModal será null.

  //Si esta sección no existe en el HTML, detenemos la ejecución
  if (!formComentario || !listaComentarios) return;                          // Si no hay formulario o lista, salgo de la función para evitar errores.

//Esta función recibe un comentario que viene del backend y lo transforma en HTML.
//Primero saco la inicial del nombre para mostrarla dentro del avatar redondo.
//Luego regreso un template string con la estructura del comentario: nombre, inicial y mensaje.
//Esta función la uso después para pintar todos los comentarios dentro del modal.
// |
// v
  //Función para generar el HTML de un comentario
  function renderComentario(c) {                                             // Función que recibe un objeto comentario y devuelve un bloque HTML.
    // Inicial del usuario (primera letra del nombre)
    const inicial = c.nombre ? c.nombre.charAt(0).toUpperCase() : "?";       // Toma la primera letra del nombre, la pasa a mayúscula. Si no hay nombre, usa "?".
    
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
    // Este template string construye la estructura HTML de un comentario,
    // incluyendo avatar con inicial, nombre del usuario y el texto del mensaje.
  }


//Aquí manejo el envío del formulario de comentarios.
//Cancelo el envío tradicional con preventDefault() para que la página no se recargue.
//Leo el nombre y el mensaje, hago una validación básica para que no vayan vacíos y, si todo está bien, construyo un objeto nuevoComentario.
//Luego uso fetch con método POST hacia mi API (URL_API_COMENTARIOS), mando los datos en formato JSON y, si la respuesta es correcta, limpio el formulario y vuelvo a cargar la lista de comentarios.
// |
// v
  //Enviar comentario
  formComentario.addEventListener("submit", async (e) => {                   // Cuando el usuario envíe el formulario...
    e.preventDefault(); // Evita recargar la página                           // Detengo el comportamiento por defecto (no recargar la página).

    const nombre = document.getElementById("nombre").value.trim();           // Obtengo el valor del input 'nombre' y le quito espacios sobrantes.
    const mensaje = document.getElementById("mensaje").value.trim();         // Obtengo el valor del textarea 'mensaje' y también lo recorto.

    //Validación básica
    if (!nombre || !mensaje) {                                               // Si alguno de los campos está vacío...
      alert("Por favor llena todos los campos");                             // ...muestro un mensaje de alerta al usuario.
      return;                                                                // y salgo de la función (no se envía nada).
    }

    const nuevoComentario = { nombre, mensaje };                             // Creo un objeto con los datos del nuevo comentario.

    try {
      //Enviamos el comentario al backend
      const res = await fetch(URL_API_COMENTARIOS, {                         // Hago una petición HTTP al backend usando fetch.
        method: "POST",                                                      // Método POST porque estoy creando un nuevo recurso.
        headers: { "Content-Type": "application/json" },                     // Indico que el cuerpo se envía en formato JSON.
        body: JSON.stringify(nuevoComentario),                               // Convierto el objeto 'nuevoComentario' a JSON y lo mando en el cuerpo.
      });

      const data = await res.json();                                         // Espero la respuesta del servidor y la convierto de JSON a objeto JS.

      //Si el servidor devuelve error
      if (!res.ok) {                                                         // Si el estatus HTTP no está en el rango 200–299...
        alert(data.error || "Error al guardar comentario");                  // ...muestro el mensaje de error del backend o uno genérico.
        return;                                                              // Salgo de la función sin continuar.
      }

      //Resetea el formulario tras enviar
      formComentario.reset();                                                // Limpio los campos del formulario para que queden vacíos.

      //Recargar lista de comentarios desde la BD
      cargarComentarios();                                                   // Llamo a la función que vuelve a consultar los comentarios al backend.
    } catch (error) {                                                        // Si ocurre un error en la petición (por ejemplo, el servidor no responde)...
      console.error(error);                                                  // Lo muestro en la consola para depuración.
      alert("No se pudo conectar con el servidor de comentarios");           // Aviso al usuario que hubo un problema de conexión.
    }
  });

//Esta función se encarga de leer los comentarios que ya existen en la base de datos.
//Hago una petición GET con fetch a la misma URL de la API, convierto la respuesta a JSON y reviso si hay comentarios.
//Si no hay, muestro un mensaje de ‘No hay comentarios aún’.
//Si sí hay, los ordeno del más reciente al más antiguo usando reverse() y luego uso map(renderComentario) para convertir cada comentario en HTML antes de insertarlos dentro del modal.
// |
// v
  //Cargar comentarios desde el backend
  async function cargarComentarios() {                                       // Función asíncrona para leer los comentarios desde la API.
    try {
      const res = await fetch(URL_API_COMENTARIOS);                          // Hago una petición GET a la misma URL.
      const comentarios = await res.json();                                  // Convierto la respuesta en un arreglo de comentarios.

      // Si no hay comentarios aún
      if (!Array.isArray(comentarios) || comentarios.length === 0) {         // Verifico que sea un arreglo y que tenga al menos 1 elemento.
        // No los mostramos debajo del formulario
        listaComentarios.innerHTML = "";                                     // Aseguro que debajo del formulario siga vacío.

        // En el modal mostramos mensaje vacío
        if (listaComentariosModal) {                                         // Si existe el contenedor del modal...
          listaComentariosModal.innerHTML = "<p>No hay comentarios aún.</p>";// ...muestro un mensaje indicando que no hay comentarios.
        }
        return;                                                              // Salgo de la función porque ya no hay nada más que renderizar.
      }

      // Ordenar de más reciente a más antiguo
      const ordenados = comentarios.slice().reverse();                       // Creo una copia del arreglo y lo invierto para ver primero los más recientes.

      // Debajo del formulario NO mostramos nada (lista vacía a propósito)
      listaComentarios.innerHTML = "";                                       // Dejo vacía la lista que está debajo del formulario (diseño decidido así).

      // En el modal sí mostramos TODOS los comentarios
      if (listaComentariosModal) {                                           // Si existe la lista dentro del modal...
        listaComentariosModal.innerHTML = ordenados                          // Asigno el HTML generado al contenedor:
          .map(renderComentario) // Generar HTML                              // - Con map convierto cada comentario en un bloque HTML usando renderComentario().
          .join("");             // Unir en un solo bloque                    // - Con join uno todos los bloques en un solo string.
      }
    } catch (error) {                                                        // Si ocurre un error al hacer el fetch...
      console.error(error);                                                  // Lo muestro en consola.
      if (listaComentariosModal) {                                           // Si existe el contenedor del modal...
        listaComentariosModal.innerHTML =
          "<p>Error al cargar los comentarios.</p>";                         // Muestro un mensaje de error al usuario.
      }
    }
  }

  //Llamar a la carga inicial de comentarios al entrar a la página
  cargarComentarios();                                                       // Apenas se inicializa la sección, consulto y pinto los comentarios existentes.

//Esta parte controla la apertura y cierre del modal donde se ven todos los comentarios.
//Cuando el usuario hace clic en el botón ‘Leer comentarios’, agrego la clase is-open al modal para que se muestre con la animación definida en CSS.
//También programé que se cierre tanto al hacer clic en la X como al hacer clic en el fondo oscuro (overlay), quitando esa misma clase.
//Toda la interacción visual del modal depende de agregar o quitar esa clase.
// |
// v
  //ABRIR MODAL (botón "Leer más")
  if (btnMas && modal) {                                                     // Si existen el botón "Leer comentarios" y el modal...
    btnMas.addEventListener("click", (e) => {                                // Agrego un listener al click del botón.
      e.preventDefault();                                                    // Evito comportamiento por defecto (por si es parte de un link/form).
      modal.classList.add("is-open"); // Activa la animación CSS del modal   // Agrego la clase 'is-open' para abrir el modal (CSS se encarga del efecto).
    });
  }

  //CERRAR MODAL (botón X)
  if (btnCerrarModal && modal) {                                             // Si existen el botón de cierre y el modal...
    btnCerrarModal.addEventListener("click", () => {                         // Agrego listener al botón X.
      modal.classList.remove("is-open");                                     // Quito la clase 'is-open' para cerrar el modal.
    });
  }

  //CERRAR MODAL al hacer clic en el overlay
  if (overlayModal && modal) {                                               // Si existen el overlay y el modal...
    overlayModal.addEventListener("click", () => {                           // Agrego listener al hacer clic sobre el fondo oscuro.
      modal.classList.remove("is-open");                                     // También cierro el modal.
    });
  }
}


//Aquí me aseguro de que toda la lógica de comentarios se ejecute hasta que el HTML esté completamente cargado.
//Cuando ocurre el evento DOMContentLoaded, llamo a iniciarComentarios(), que es donde conecto el DOM, el formulario, el modal y las peticiones al backend.
// |
// v
// Esperar a que el DOM esté listo para inicializar todo
window.addEventListener("DOMContentLoaded", iniciarComentarios);             // Cuando el HTML termina de cargar, ejecuto iniciarComentarios().
