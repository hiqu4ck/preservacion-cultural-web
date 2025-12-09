document.getElementById('form-login').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const pais = document.getElementById('country').value;
  const usuario = document.getElementById('user').value.trim();

  // Validación: solo números, entre 8 y 15 dígitos
  const phoneRegex = /^[0-9]{8,15}$/;

  if (!phoneRegex.test(usuario)) {
    mostrarError("Ingresa un número telefónico válido (solo números, mínimo 8 dígitos).");
    return;
  }

  // --- Aquí podrías conectar a backend o Firebase ---
  // Por ahora simulamos un login correcto:
  mostrarExito("Inicio de sesión exitoso. Redirigiendo...");
  
  setTimeout(() => {
    window.location.href = "index.html";
  }, 1000);
});


// 🔴 Mostrar mensajes de error bonitos (sin alert)
function mostrarError(mensaje) {
  let box = document.createElement("div");
  box.className = "alert-error";
  box.innerText = mensaje;
  document.querySelector(".login-box").prepend(box);

  setTimeout(() => box.remove(), 3000);
}


// 🟢 Mensaje de éxito temporal
function mostrarExito(mensaje) {
  let box = document.createElement("div");
  box.className = "alert-success";
  box.innerText = mensaje;
  document.querySelector(".login-box").prepend(box);

  setTimeout(() => box.remove(), 2000);
}
