document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const contrasena = document.getElementById('contrasena').value;
  
  if (nombre && correo && contrasena) {
    alert('Cuenta registrada exitosamente');
    window.location.href = 'login.html'; // Redirige al login después de registrar
  } else {
    alert('Por favor, completa todos los campos.');
  }
});
