/* =========================================================
   MODAL CULTURA (BAILES / MÚSICA / VESTIMENTA)
   ========================================================= */

// Contenido por tema
const datosCultura = {
    bailes: `
    <h2>Bailes Tradicionales de Felipe Carrillo Puerto</h2>

    <div class="cultura-item">
      <h3>Maya Pax</h3>
      <img src="./assets/cultura/mayapax.png" alt="Maya Pax" class="cultura-item_img">
      <p><strong>Descripción:</strong> Danza ritual-musical característica de Felipe Carrillo Puerto y comunidades cercanas como Kopchén y Tihosuco. Se interpreta en ceremonias religiosas y fiestas patronales en honor al Santo Cristo de Amor, acompañada por violines, tambores y guitarras.</p>
      <p><strong>Lugar:</strong> Felipe Carrillo Puerto, Kopchén, Tihosuco</p>
      <p><strong>Tipo:</strong> Ritual</p>
      <p><strong>Época/Festividad:</strong> Fiestas religiosas (mayo, octubre) y ceremonias tradicionales</p>
    </div>

    <div class="cultura-item">
      <h3>Danza de los Pastores</h3>
      <img src="./assets/cultura/danza-pastor.png" alt="Danza de los Pastores" class="cultura-item_img">
      <p><strong>Descripción:</strong> Danza de origen religioso representada durante las festividades navideñas y de Año Nuevo, con personajes bíblicos y guiada por la música del Maya Pax.</p>
      <p><strong>Lugar:</strong> Tihosuco y comunidades cercanas</p>
      <p><strong>Tipo:</strong> Ritual-Festiva</p>
      <p><strong>Época/Festividad:</strong> 24 de diciembre al 6 de enero</p>
    </div>

    <div class="cultura-item">
      <h3>Danza de la Cabeza de Cochino</h3>
      <img src="./assets/cultura/cabeza-cochino.png" alt="Danza de la Cabeza de Cochino" class="cultura-item_img">
      <p><strong>Descripción:</strong> Danza combinando elementos prehispánicos y coloniales; una cabeza de cerdo adornada se lleva al ritmo de música tradicional, simbolizando abundancia y gratitud por las cosechas.</p>
      <p><strong>Lugar:</strong> Felipe Carrillo Puerto y comunidades rurales</p>
      <p><strong>Tipo:</strong> Ritual-Festiva</p>
      <p><strong>Época/Festividad:</strong> Durante las fiestas patronales</p>
    </div>

    <div class="cultura-item">
      <h3>Baile de los Chicleros</h3>
      <img src="./assets/cultura/chiclero.png" alt="Baile de los Chicleros" class="cultura-item_img">
      <p><strong>Descripción:</strong> Representa la vida de los recolectores de chicle; hombres con machetes y sombreros, mujeres con trajes regionales.</p>
      <p><strong>Lugar:</strong> Felipe Carrillo Puerto y zonas selváticas</p>
      <p><strong>Tipo:</strong> Festiva</p>
      <p><strong>Época/Festividad:</strong> Durante ferias, festivales culturales y eventos escolares</p>
    </div>

    <div class="cultura-item">
      <h3>Jarana Quintanarroense</h3>
      <img src="./assets/cultura/jarana.png" alt="Jarana Quintanarroense" class="cultura-item_img">
      <p><strong>Descripción:</strong> Derivada de la jarana yucateca; compás más marcado, movimientos enérgicos; mujeres con ternos bordados y hombres con guayaberas.</p>
      <p><strong>Lugar:</strong> Felipe Carrillo Puerto</p>
      <p><strong>Tipo:</strong> Festiva</p>
      <p><strong>Época/Festividad:</strong> Ferias culturales y presentaciones artísticas</p>
    </div>
  `,

    musica: `
  <h2>Música Tradicional Maya</h2>

  <p>
    En la cultura maya, la música tradicional más representativa es la llamada “Maya Pax”, nombre que designa tanto a la música como a la danza ceremonial
    originaria de los pueblos mayas del oriente de la península de Yucatán, especialmente en Quintana Roo. Su origen se remonta al periodo de la Guerra de Castas
    (siglo XIX), cuando los pueblos mayas crearon una música ritual que fusionaba elementos prehispánicos y europeos, como símbolo de resistencia e identidad cultural.
  </p>

  <p>
    El Maya Pax se interpreta principalmente en las fiestas religiosas y comunitarias, como las dedicadas a la Santa Cruz Parlante en comunidades del municipio de Felipe Carrillo Puerto,
    entre ellas Tixcacal Guardia, Señor, Chunhuás y Chancah. Esta música combina melodías de violín y clarinete con ritmos de bombo y tarola, acompañados de rezos, danzas y cantos en lengua maya.
  </p>

  <!-- Violín de Maya Pax -->
  <div class="cultura-item">
    <h3>Violín de Maya Pax</h3>
    <img src="./assets/cultura/violin-maya.jpg" alt="Violín de Maya Pax" class="cultura-item_img">
    <p><strong>Preparación / Fabricación:</strong> Madera de cedro o k’ulché, resina del pich o caera de abeja como pegamento; cuerdas de tripa de animal o henequén.</p>
    <p><strong>Uso:</strong> Instrumento principal para melodías ceremoniales y acompañamiento de danzas.</p>
  </div>

  <!-- Bombo -->
  <div class="cultura-item">
    <h3>Bombo</h3>
    <img src="./assets/cultura/bombo.jpg" alt="Bombo" class="cultura-item_img">
    <p><strong>Preparación / Fabricación:</strong> Troncos ahuecados de k’ulché, piel de venado y soga de henequén o nylon.</p>
    <p><strong>Uso:</strong> Marca el pulso de la música y otorga sonoridad en fiestas y ceremonias.</p>
  </div>

  <!-- Tarola -->
  <div class="cultura-item">
    <h3>Tarola</h3>
    <img src="./assets/cultura/tarola.jpg" alt="Tarola" class="cultura-item_img">
    <p><strong>Preparación / Fabricación:</strong> Instrumento de percusión de madera, usado con baquetas.</p>
    <p><strong>Uso:</strong> Acompaña danzas y procesiones.</p>
  </div>


  <!-- Caracol marino -->
  <div class="cultura-item">
    <h3>Caracol marino</h3>
    <img src="./assets/cultura/caracol.png" alt="Caracol marino" class="cultura-item_img">
    <p><strong>Preparación / Fabricación:</strong> Se perfora en un extremo y se sopla por la abertura.</p>
    <p><strong>Uso:</strong> Señal ceremonial; convocar al pueblo o a los dioses.</p>
  </div>


  <!-- Sonajas / Maracas -->
  <div class="cultura-item">
    <h3>Sonajas o maracas</h3>
    <img src="./assets/cultura/sonaja.png" alt="Sonajas o maracas" class="cultura-item_img">
    <p><strong>Preparación / Fabricación:</strong> Calabazas secas (luuch) rellenas con semillas o piedritas.</p>
    <p><strong>Uso:</strong> Mantener el ritmo en ceremonias, danzas y rituales de curación.</p>
  </div>

  <!-- Flautas y silbatos -->
  <div class="cultura-item">
    <h3>Flautas de barro o caña</h3>
    <img src="./assets/cultura/flautas.png" alt="Flautas y silbatos" class="cultura-item_img">
    <p><strong>Preparación / Fabricación:</strong> Instrumentos prehispánicos con formas zoomorfas o humanas, de barro, hueso o caña.</p>
    <p><strong>Uso:</strong> Marcan pasos de la danza y representan sonidos de animales sagrados.</p>
  </div>

  <!-- Hom / Trompeta maya -->
  <div class="cultura-item">
    <h3>Hom o trompeta maya</h3>
    <img src="./assets/cultura/hom.png" alt="Hom o trompeta maya" class="cultura-item_img">
    <p><strong>Preparación / Fabricación:</strong> Caña o madera hueca con calabaza como pabellón resonador.</p>
    <p><strong>Uso:</strong> Anuncia ceremonias y procesiones importantes.</p>
  </div>
`,


    vestimenta: `
    <h2>Vestimenta Tradicional Maya</h2>

    <div class="cultura-item">
      <h3>Hipil / Hipil</h3>
      <img src="./assets/cultura/hipil.png" alt="Hipil" class="cultura-item_img">
      <p><strong>Descripción:</strong> Blusa o vestido blanco con canesú bordado, usado en fiestas, ceremonias y uso cotidiano; combina con fustán y accesorios.</p>
    </div>

    <div class="cultura-item">
      <h3>Fustán / Enagua</h3>
      <img src="./assets/cultura/justan.png" alt="Fustán" class="cultura-item_img">
      <p><strong>Descripción:</strong> Prenda usada debajo del hipil, visible en conjuntos formales; utilizada en ceremonias y eventos importantes.</p>
    </div>

    <div class="cultura-item">
      <h3>Rebozo / Chal</h3>
      <img src="./assets/cultura/rebozo.png" alt="Rebozo" class="cultura-item_img">
      <p><strong>Descripción:</strong> Pieza rectangular para cubrir hombros o cabeza; protege del sol y complementa atuendos formales o festivos.</p>
    </div>

    <div class="cultura-item">
      <h3>Terno (conjunto formal)</h3>
      <img src="./assets/cultura/terno.png" alt="Terno" class="cultura-item_img">
      <p><strong>Descripción:</strong> Conjunto femenino formal que combina hipil, fustán y accesorios; usado en bodas, fiestas patronales y celebraciones importantes.</p>
    </div>

    <div class="cultura-item">
      <h3>Guayabera</h3>
      <img src="./assets/cultura/guayabera.png" alt="Guayabera" class="cultura-item_img">
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
