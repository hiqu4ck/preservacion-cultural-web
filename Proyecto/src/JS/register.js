// 🟢 Detectamos cuando el usuario envía el formulario de registro
document.getElementById('registerForm').addEventListener('submit', function(event) {

  // Evitamos que la página se recargue automáticamente
  event.preventDefault();

  // Obtenemos los valores escritos en los campos del formulario
  const nombre = document.getElementById('nombre').value;        // Nombre del usuario
  const correo = document.getElementById('correo').value;        // Correo electrónico
  const contrasena = document.getElementById('contrasena').value; // Contraseña

  // 🔍 Validamos si TODOS los campos están llenos
  if (nombre && correo && contrasena) {

    // 🟢 Éxito: todos los campos están llenos
    alert('Cuenta registrada exitosamente');

    // Redirige al usuario a la página de LOGIN
    window.location.href = 'login.html';
  } 
  
  // 🔴 Si algún campo está vacío:
  else {
    alert('Por favor, completa todos los campos.');
  }
});
