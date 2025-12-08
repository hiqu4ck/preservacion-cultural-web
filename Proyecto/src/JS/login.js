document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const correo = document.getElementById('correo').value;
  const contrasena = document.getElementById('contrasena').value;
  
  if (correo && contrasena) {
    alert('Inicio de sesión exitoso');
    window.location.href = 'index.html'; // Redirige al índice (puedes cambiarlo a la página de destino)
  } else {
    alert('Por favor, completa todos los campos.');
  }
});
