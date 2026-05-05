// 🟢 Cuando el usuario envía el formulario de LOGIN
document.getElementById('form-login').addEventListener('submit', function(event) {

  // Evita que el formulario recargue la página por defecto
  event.preventDefault(); 

  // Obtiene el país seleccionado
  const pais = document.getElementById('country').value;

  // Obtiene el número telefónico ingresado y quita espacios al inicio y final
  const usuario = document.getElementById('user').value.trim();

  // Expresión regular para validar:
  // - Solo números
  // - Entre 8 y 15 dígitos
  const phoneRegex = /^[0-9]{8,15}$/;

  // 🔴 Si el número no cumple con la validación, muestra error y detiene todo
  if (!phoneRegex.test(usuario)) {
    mostrarError("Ingresa un número telefónico válido (solo números, mínimo 8 dígitos).");
    return;
  }

  // -------------------------------------------------------------------------
  // 🟡 Aquí iría el login real si tuvieras backend (MongoDB, API o Firebase)
  // -------------------------------------------------------------------------

  // Por ahora simulamos que el login es exitoso
  mostrarExito("Inicio de sesión exitoso. Redirigiendo...");

  // Espera 1 segundo para mostrar el mensaje y luego te envía al índice
  setTimeout(() => {
    window.location.href = "index.html";
  }, 1000);
});


function mostrarError(mensaje) {
  // Crea una caja para el mensaje
  let box = document.createElement("div");
  box.className = "alert-error"; // Clase CSS personalizada
  box.innerText = mensaje;

  // Inserta la caja al inicio del contenedor .login-box
  document.querySelector(".login-box").prepend(box);

  // Borra el mensaje después de 3 segundos
  setTimeout(() => box.remove(), 3000);
}

function mostrarExito(mensaje) {
  // Crea una caja para mostrar mensaje de éxito
  let box = document.createElement("div");
  box.className = "alert-success"; // Clase CSS personalizada
  box.innerText = mensaje;

  // Inserta la caja al inicio del formulario
  document.querySelector(".login-box").prepend(box);

  // Borra el mensaje luego de 2 segundos
  setTimeout(() => box.remove(), 2000);
}
