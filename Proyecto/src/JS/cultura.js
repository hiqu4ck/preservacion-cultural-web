/* =========================================================
   MODAL CULTURA (BAILES / MÚSICA / VESTIMENTA)
   ========================================================= */

// Contenido por tema
const datosCultura = {
  bailes: `
    <h2>Bailes Tradicionales de Felipe Carrillo Puerto</h2>

    <div class="platillo">
      <h3>Maya Pax</h3>
      <img src="./assets/img/maya-pax.png" alt="Maya Pax" class="platillo-imagen">
      <p><strong>Descripción:</strong> Danza ritual-musical característica de Felipe Carrillo Puerto y comunidades cercanas como Kopchén y Tihosuco. Se interpreta en ceremonias religiosas y fiestas patronales en honor al Santo Cristo de Amor, acompañada por violines, tambores y guitarras.</p>
      <p><strong>Lugar:</strong> Felipe Carrillo Puerto, Kopchén, Tihosuco</p>
      <p><strong>Tipo:</strong> Ritual</p>
      <p><strong>Época/Festividad:</strong> Fiestas religiosas (mayo, octubre) y ceremonias tradicionales</p>
    </div>

    <div class="platillo">
      <h3>Danza de los Pastores</h3>
      <img src="./assets/img/danza-pastores.png" alt="Danza de los Pastores" class="platillo-imagen">
      <p><strong>Descripción:</strong> Danza de origen religioso representada durante las festividades navideñas y de Año Nuevo, con personajes bíblicos y guiada por la música del Maya Pax.</p>
      <p><strong>Lugar:</strong> Tihosuco y comunidades cercanas</p>
      <p><strong>Tipo:</strong> Ritual-Festiva</p>
      <p><strong>Época/Festividad:</strong> 24 de diciembre al 6 de enero</p>
    </div>

    <div class="platillo">
      <h3>Danza de la Cabeza de Cochino</h3>
      <img src="./assets/img/cabeza-cochino.png" alt="Danza de la Cabeza de Cochino" class="platillo-imagen">
      <p><strong>Descripción:</strong> Danza combinando elementos prehispánicos y coloniales; una cabeza de cerdo adornada se lleva al ritmo de música tradicional, simbolizando abundancia y gratitud por las cosechas.</p>
      <p><strong>Lugar:</strong> Felipe Carrillo Puerto y comunidades rurales</p>
      <p><strong>Tipo:</strong> Ritual-Festiva</p>
      <p><strong>Época/Festividad:</strong> Durante las fiestas patronales</p>
    </div>

    <div class="platillo">
      <h3>Baile de los Chicleros</h3>
      <img src="./assets/img/chicleros.png" alt="Baile de los Chicleros" class="platillo-imagen">
      <p><strong>Descripción:</strong> Representa la vida de los recolectores de chicle; hombres con machetes y sombreros, mujeres con trajes regionales.</p>
      <p><strong>Lugar:</strong> Felipe Carrillo Puerto y zonas selváticas</p>
      <p><strong>Tipo:</strong> Festiva</p>
      <p><strong>Época/Festividad:</strong> Durante ferias, festivales culturales y eventos escolares</p>
    </div>

    <div class="platillo">
      <h3>Calabaceado</h3>
      <img src="./assets/img/calabaceado.png" alt="Calabaceado" class="platillo-imagen">
      <p><strong>Descripción:</strong> Baile de salón en parejas; ritmo ágil de ocho tiempos, adoptado por comunidades mayas.</p>
      <p><strong>Lugar:</strong> Felipe Carrillo Puerto (zona urbana y rural)</p>
      <p><strong>Tipo:</strong> Festiva</p>
      <p><strong>Época/Festividad:</strong> Fiestas comunitarias y ferias locales</p>
    </div>

    <div class="platillo">
      <h3>Pasacalle</h3>
      <img src="./assets/img/pasacalle.png" alt="Pasacalle" class="platillo-imagen">
      <p><strong>Descripción:</strong> Danza de salón que combina pasos de marcha con giros elegantes; origen colonial español, adaptado a la región.</p>
      <p><strong>Lugar:</strong> Felipe Carrillo Puerto (zona urbana)</p>
      <p><strong>Tipo:</strong> Festiva</p>
      <p><strong>Época/Festividad:</strong> Fiestas patrias y festividades municipales</p>
    </div>

    <div class="platillo">
      <h3>Jarana Quintanarroense</h3>
      <img src="./assets/img/jarana.png" alt="Jarana Quintanarroense" class="platillo-imagen">
      <p><strong>Descripción:</strong> Derivada de la jarana yucateca; compás más marcado, movimientos enérgicos; mujeres con ternos bordados y hombres con guayaberas.</p>
      <p><strong>Lugar:</strong> Felipe Carrillo Puerto</p>
      <p><strong>Tipo:</strong> Festiva</p>
      <p><strong>Época/Festividad:</strong> Ferias culturales y presentaciones artísticas</p>
    </div>
  `,
  
  musica: `
    <h2>Música Tradicional Maya</h2>

    <div class="platillo">
      <h3>Maya Pax</h3>
      <img src="./assets/img/maya-pax-musica.png" alt="Maya Pax música" class="platillo-imagen">
      <p><strong>Descripción:</strong> Música ceremonial originaria de Felipe Carrillo Puerto, creada durante la Guerra de Castas (siglo XIX) como símbolo de resistencia e identidad cultural.</p>
      <p><strong>Lugar:</strong> Felipe Carrillo Puerto y comunidades como Tixcacal Guardia, Señor, Chunhuás y Chancah</p>
      <p><strong>Instrumentos:</strong> Violín, clarinete, bombo, tarola, tunkul, caracol marino, caparazón de tortuga, sonajas, flautas y silbatos, hom o trompeta maya</p>
    </div>
  `,
  
  vestimenta: `
    <h2>Vestimenta Tradicional Maya</h2>

    <div class="platillo">
      <h3>Hipil / Huipil</h3>
      <img src="./assets/img/hipil.png" alt="Hipil" class="platillo-imagen">
      <p><strong>Descripción:</strong> Blusa o vestido blanco con canesú bordado, usado en fiestas, ceremonias y uso cotidiano; combina con fustán y accesorios.</p>
    </div>

    <div class="platillo">
      <h3>Fustán / Enagua</h3>
      <img src="./assets/img/fustan.png" alt="Fustán" class="platillo-imagen">
      <p><strong>Descripción:</strong> Prenda usada debajo del hipil, visible en conjuntos formales; utilizada en ceremonias y eventos importantes.</p>
    </div>

    <div class="platillo">
      <h3>Rebozo / Chal</h3>
      <img src="./assets/img/rebozo.png" alt="Rebozo" class="platillo-imagen">
      <p><strong>Descripción:</strong> Pieza rectangular para cubrir hombros o cabeza; protege del sol y complementa atuendos formales o festivos.</p>
    </div>

    <div class="platillo">
      <h3>Terno (conjunto formal)</h3>
      <img src="./assets/img/terno.png" alt="Terno" class="platillo-imagen">
      <p><strong>Descripción:</strong> Conjunto femenino formal que combina hipil, fustán y accesorios; usado en bodas, fiestas patronales y celebraciones importantes.</p>
    </div>

    <div class="platillo">
      <h3>Guayabera</h3>
      <img src="./assets/img/guayabera.png" alt="Guayabera" class="platillo-imagen">
      <p><strong>Descripción:</strong> Camisa masculina de manta o algodón, usada con pantalón blanco y sombrero, en bodas, procesiones y celebraciones formales.</p>
    </div>
  `
};


const modalCultura = document.getElementById('modal-cultura');
const modalCulturaBody = document.getElementById('modal-cultura-body');

if (modalCultura && modalCulturaBody) {
    const overlayCultura = modalCultura.querySelector('.modal-cultura__overlay');
    const closeCultura = modalCultura.querySelector('.modal-cultura__close');
    const tarjetasCultura = document.querySelectorAll('.cultura-card');

    function abrirModalCultura(tema) {
        modalCulturaBody.innerHTML = datosCultura[tema] || '<p>Próximamente contenido.</p>';
        modalCultura.classList.add('activo');
    }

    function cerrarModalCultura() {
        modalCultura.classList.remove('activo');
    }

    tarjetasCultura.forEach(card => {
        card.addEventListener('click', () => {
            const tema = card.dataset.tema; // bailes / musica / vestimenta
            abrirModalCultura(tema);
        });
    });

    overlayCultura.addEventListener('click', cerrarModalCultura);
    closeCultura.addEventListener('click', cerrarModalCultura);
}
