// ── Tab switching ──
function switchTab(tab, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.form-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  const panel = document.getElementById('panel-' + tab);
  panel.classList.add('active');
  panel.style.animation = 'none';
  requestAnimationFrame(() => { panel.style.animation = ''; });
}

// ── Toggle password visibility ──
function togglePw(id, btn) {
  const inp = document.getElementById(id);
  if (inp.type === 'password') {
    inp.type = 'text';
    btn.textContent = '🙈';
  } else {
    inp.type = 'password';
    btn.textContent = '👁';
  }
}

// ── Password strength ──
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
  const lvl = levels[score];
  fill.style.width      = lvl.pct;
  fill.style.background = lvl.color;
  label.textContent     = lvl.text;
}

// ── Validation helpers ──
function showErr(id, msg) {
  const el = document.getElementById(id);
  if (msg) el.textContent = msg;
  el.classList.add('visible');
}
function clearErr(id) {
  document.getElementById(id).classList.remove('visible');
}
function markInput(id, bad) {
  const inp = document.getElementById(id);
  if (bad) inp.classList.add('error-input');
  else     inp.classList.remove('error-input');
}
function showToast(id, msg, isError) {
  const t = document.getElementById(id);
  t.textContent = msg;
  t.className = 'toast visible' + (isError ? ' toast-error' : '');
  setTimeout(() => t.classList.remove('visible'), 4000);
}

// ── Login handler ──
function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const pw    = document.getElementById('login-password').value;
  let ok = true;

  clearErr('login-email-err'); markInput('login-email', false);
  clearErr('login-pw-err');    markInput('login-password', false);

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showErr('login-email-err'); markInput('login-email', true); ok = false;
  }
  if (!pw) {
    showErr('login-pw-err'); markInput('login-password', true); ok = false;
  }
  if (!ok) return;

  const btn = document.getElementById('login-btn');
  btn.disabled = true;
  btn.textContent = 'Verificando…';

  setTimeout(() => {
    btn.disabled = false;
    btn.textContent = 'Iniciar sesión';

    const users = JSON.parse(localStorage.getItem('kl_users') || '[]');
    const match = users.find(u => u.email === email && u.password === pw);
    const isDemo = email === 'demo@kajool.mx' && pw === 'Demo1234!';

    if (match || isDemo) {
      showToast('login-toast', `¡Bienvenido, ${match ? match.nombre : 'Demo'}! Redirigiendo…`, false);
    } else {
      showToast('login-toast', 'Correo o contraseña incorrectos. Intenta de nuevo.', true);
    }
  }, 1200);
}

// ── Register handler ──
function handleRegister(e) {
  e.preventDefault();
  const nombre   = document.getElementById('reg-nombre').value.trim();
  const apellido = document.getElementById('reg-apellido').value.trim();
  const email    = document.getElementById('reg-email').value.trim();
  const pw       = document.getElementById('reg-password').value;
  const confirm  = document.getElementById('reg-confirm').value;
  const terms    = document.getElementById('reg-terms').checked;
  let ok = true;

  ['reg-nombre-err','reg-apellido-err','reg-email-err','reg-pw-err','reg-confirm-err','reg-terms-err']
    .forEach(id => clearErr(id));
  ['reg-nombre','reg-apellido','reg-email','reg-password','reg-confirm']
    .forEach(id => markInput(id, false));

  if (!nombre)   { showErr('reg-nombre-err');   markInput('reg-nombre', true);   ok = false; }
  if (!apellido) { showErr('reg-apellido-err'); markInput('reg-apellido', true); ok = false; }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showErr('reg-email-err'); markInput('reg-email', true); ok = false;
  }
  if (pw.length < 8) { showErr('reg-pw-err'); markInput('reg-password', true); ok = false; }
  if (pw !== confirm) { showErr('reg-confirm-err'); markInput('reg-confirm', true); ok = false; }
  if (!terms) { showErr('reg-terms-err'); ok = false; }
  if (!ok) return;

  const btn = document.getElementById('register-btn');
  btn.disabled = true;
  btn.textContent = 'Creando cuenta…';

  setTimeout(() => {
    btn.disabled = false;
    btn.textContent = 'Crear cuenta';

    const users = JSON.parse(localStorage.getItem('kl_users') || '[]');
    if (users.find(u => u.email === email)) {
      showToast('register-toast', 'Este correo ya está registrado.', true);
      markInput('reg-email', true);
      return;
    }
    users.push({ nombre, apellido, email, password: pw });
    localStorage.setItem('kl_users', JSON.stringify(users));
    showToast('register-toast', `¡Cuenta creada, ${nombre}! Ya puedes iniciar sesión.`, false);
    document.getElementById('register-form').reset();
    checkStrength('');
    setTimeout(() => switchTab('login', document.querySelector('.tab-btn')), 2000);
  }, 1400);
}

// ── Social login stub ──
function socialLogin() {
  alert('La integración con Google estará disponible próximamente.');
}