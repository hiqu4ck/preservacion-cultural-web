/* =========================================================
   MODAL DE MEDICINA TRADICIONAL — JAVASCRIPT
   ========================================================= */

const btnExplorarMedicina = document.querySelector('.btn-explorar');
const modalMedicina = document.getElementById('modal-medicina');

if (btnExplorarMedicina && modalMedicina) {
  const overlayMedicina = modalMedicina.querySelector('.modal-medicina__overlay');
  const closeMedicina = modalMedicina.querySelector('.modal-medicina__close');

  // Abrir
  function abrirModalMedicina(e) {
    e.preventDefault(); // evita que <a href="#"> recargue la página
    modalMedicina.classList.add('activo');
  }

  // Cerrar
  function cerrarModalMedicina() {
    modalMedicina.classList.remove('activo');
  }

  btnExplorarMedicina.addEventListener('click', abrirModalMedicina);
  overlayMedicina.addEventListener('click', cerrarModalMedicina);
  closeMedicina.addEventListener('click', cerrarModalMedicina);
}
