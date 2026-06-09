function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  const toast = document.getElementById('login-toast');

  if (email === '' || password === '') {
    toast.textContent = 'Por favor, ingresa tu correo y contraseña.';
    toast.className = 'toast toast-error visible';
    setTimeout(() => toast.classList.remove('visible'), 3000);
    return;
  }

  const users = JSON.parse(localStorage.getItem('kl_users') || '[]');
  const match = users.find(u => u.email === email && u.password === password);

  if (!match) {
    toast.textContent = 'Correo o contraseña incorrectos.';
    toast.className = 'toast toast-error visible';
    setTimeout(() => toast.classList.remove('visible'), 3000);
    return;
  }

  toast.textContent = `¡Bienvenido, ${match.nombre}! Redirigiendo...`;
  toast.className = 'toast visible';
  toast.style.backgroundColor = 'var(--success)';

  setTimeout(() => {
    const origen = document.referrer;
    if (origen && origen.includes('productos')) {
        window.location.href = '/productos.html';
    } else {
        window.location.href = '/index.html';
    }
}, 1500);
}

function handleRegister(event) {
  event.preventDefault();

  const nombre   = document.getElementById('reg-nombre').value.trim();
  const apellido = document.getElementById('reg-apellido').value.trim();
  const email    = document.getElementById('reg-email').value.trim();
  const pw       = document.getElementById('reg-password').value;
  const confirm  = document.getElementById('reg-confirm').value;
  const terms    = document.getElementById('reg-terms').checked;
  const toast    = document.getElementById('register-toast');

  if (!nombre || !apellido || !email || !pw || !confirm) {
    toast.textContent = 'Por favor, llena todos los campos.';
    toast.className = 'toast toast-error visible';
    setTimeout(() => toast.classList.remove('visible'), 3000);
    return;
  }
  if (pw.length < 8) {
    toast.textContent = 'La contraseña debe tener mínimo 8 caracteres.';
    toast.className = 'toast toast-error visible';
    setTimeout(() => toast.classList.remove('visible'), 3000);
    return;
  }
  if (pw !== confirm) {
    toast.textContent = 'Las contraseñas no coinciden.';
    toast.className = 'toast toast-error visible';
    setTimeout(() => toast.classList.remove('visible'), 3000);
    return;
  }
  if (!terms) {
    toast.textContent = 'Debes aceptar los términos.';
    toast.className = 'toast toast-error visible';
    setTimeout(() => toast.classList.remove('visible'), 3000);
    return;
  }

  const users = JSON.parse(localStorage.getItem('kl_users') || '[]');
  if (users.find(u => u.email === email)) {
    toast.textContent = 'Este correo ya está registrado.';
    toast.className = 'toast toast-error visible';
    setTimeout(() => toast.classList.remove('visible'), 3000);
    return;
  }

  users.push({ nombre, apellido, email, password: pw });
  localStorage.setItem('kl_users', JSON.stringify(users));

  toast.textContent = `¡Cuenta creada, ${nombre}! Ya puedes iniciar sesión.`;
  toast.className = 'toast visible';
  setTimeout(() => switchTab('login', document.querySelector('.tab-btn')), 2000);
}

function switchTab(tab, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.form-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(`panel-${tab}`).classList.add('active');
}

function togglePw(inputId, btn) {
  const input = document.getElementById(inputId);
  if (input.type === 'password') {
    input.type = 'text';
    btn.textContent = '🙈';
  } else {
    input.type = 'password';
    btn.textContent = '👁';
  }
}

function checkStrength(val) {
  const fill  = document.getElementById('strength-fill');
  const label = document.getElementById('strength-label');
  let score = 0;
  if (val.length >= 8)          score++;
  if (/[A-Z]/.test(val))        score++;
  if (/[0-9]/.test(val))        score++;
  if (/[^A-Za-z0-9]/.test(val)) score++;

  const levels = [
    { pct: '0%',   color: 'transparent', text: '' },
    { pct: '25%',  color: '#b94a2c',     text: 'Muy débil' },
    { pct: '50%',  color: '#c17f24',     text: 'Débil' },
    { pct: '75%',  color: '#88a030',     text: 'Buena' },
    { pct: '100%', color: '#4a7c4a',     text: 'Fuerte' },
  ];
  fill.style.width      = levels[score].pct;
  fill.style.background = levels[score].color;
  label.textContent     = levels[score].text;
}

function handleForgot(event) {
  event.preventDefault();
  const email = document.getElementById('forgot-email').value.trim();
  const toast = document.getElementById('forgot-toast');

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    toast.textContent = 'Ingresa un correo válido.';
    toast.className = 'toast toast-error visible';
    setTimeout(() => toast.classList.remove('visible'), 3000);
    return;
  }

  const users = JSON.parse(localStorage.getItem('kl_users') || '[]');
  const match = users.find(u => u.email === email);

  if (!match) {
    toast.textContent = 'No encontramos una cuenta con ese correo.';
    toast.className = 'toast toast-error visible';
    setTimeout(() => toast.classList.remove('visible'), 3000);
    return;
  }

  toast.textContent = `Tu contraseña es: ${match.password}`;
  toast.className = 'toast visible';
}

// Dentro de handleLogin, cuando la respuesta sea exitosa:
localStorage.setItem('kajool_user', JSON.stringify({
  nombre: 'Nombre del usuario',  // el que venga de tu BD
  email: loginEmail
}));
window.location.href = '/index.html';