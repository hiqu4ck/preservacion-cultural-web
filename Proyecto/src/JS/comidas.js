// Contenido que se mostrará en el modal según la tarjeta
const datosComidas = {
  dulces: `
      <h2>Dulces y Snacks</h2>

      <div class="platillo">
        <h3>Ts’onot Kaab (Miel y pan ceremonial)</h3>

        <!-- Imagen opcional -->
        <img src="./assets/img/melipona.png" alt="Ts’onot Kaab" class="platillo-imagen">

        <p><strong>Origen geográfico:</strong> Comunidades melipolicultoras de Noh-Bec, Chunhuhub y Santa Rosa, en el municipio de Felipe Carrillo Puerto.</p>
        <p><strong>Descripción:</strong> Preparación sagrada hecha con miel melipona, considerada una sustancia divina. La miel se combina con maíz o harina para elaborar panes, dulces y bebidas rituales. Las abejas sin aguijón habitan en troncos huecos llamados <em>jobones</em>.</p>
        <p><strong>Significado ritual o cultural:</strong> La miel melipona representa pureza, sabiduría y equilibrio. Está consagrada al dios Ah Mucen Kab, deidad de las abejas meliponas y símbolo de cooperación y fertilidad.</p>
        <p><strong>Ingredientes tradicionales:</strong> Miel de abeja melipona, harina de maíz, canela, ralladura de coco o frutas locales.</p>
        <p><strong>Costumbres y prácticas comunitarias:</strong> Durante rituales agrícolas o el Hanal Pixán se preparan panes bañados en miel que se colocan en los altares para bendecir las colmenas y garantizar buenas cosechas.</p>
      </div>

      <div class="platillo">
        <h3>Cocoyoles en miel</h3>
        <img src="./assets/img/cocoyol.png" alt="Cocoyoles en miel" class="platillo-imagen">
        <p><strong>Descripción:</strong> Fruto de la palma cocoyol cocido lentamente en miel melipona o de abeja, de sabor dulce y ligeramente ácido. Se prepara especialmente en fiestas y ferias.</p>
      </div>

      <div class="platillo">
        <h3>Dulce de papaya</h3>
        <img src="./assets/img/papaya.png" alt="Dulce de papaya" class="platillo-imagen">
        <p><strong>Descripción:</strong> Trozos de papaya verde cocidos en almíbar con canela y clavo. Representa la dulzura de la vida y suele ofrecerse en altares durante el Hanal Pixán.</p>
      </div>

      <div class="platillo">
        <h3>Caballeros pobres</h3>
        <img src="./assets/img/caballeros.png" alt="Caballeros pobres" class="platillo-imagen">
        <p><strong>Descripción:</strong> Pan o tortilla frita bañada en jarabe de azúcar y canela, a veces con huevo batido. Postre de origen colonial adoptado por las familias mayas.</p>
      </div>

      <div class="platillo">
        <h3>Pepita con miel</h3>
        <img src="./assets/img/pepita-miel.png" alt="Pepita con miel" class="platillo-imagen">
        <p><strong>Descripción:</strong> Pepitas de calabaza tostadas y molidas mezcladas con miel para formar pequeñas barras o bolitas, consideradas un snack energético tradicional.</p>
      </div>

      <div class="platillo">
        <h3>Cocadas</h3>
        <img src="./assets/img/cocadas.png" alt="Cocadas" class="platillo-imagen">
        <p><strong>Descripción:</strong> Ralladura de coco cocida con azúcar o miel hasta obtener una consistencia firme. Se preparan en ferias locales y son símbolo de celebración.</p>
      </div>

      <div class="platillo">
        <h3>Dulce de yuca</h3>
        <img src="./assets/img/dulce-yuca.png" alt="Dulce de yuca" class="platillo-imagen">
        <p><strong>Descripción:</strong> Ralladura de yuca mezclada con azúcar o miel, cocida lentamente hasta formar un dulce suave.</p>
      </div>

      <div class="platillo">
        <h3>Mazapanes artesanales</h3>
        <img src="./assets/img/mazapan.png" alt="Mazapanes artesanales" class="platillo-imagen">
        <p><strong>Descripción:</strong> Elaborados con pepita molida o cacahuate y azúcar, moldeados a mano. Se venden en ferias o se colocan en altares.</p>
      </div>

      <div class="platillo">
        <h3>Ciricote confitado</h3>
        <img src="./assets/img/ciricote.png" alt="Ciricote confitado" class="platillo-imagen">
        <p><strong>Descripción:</strong> Fruto local de sabor intenso cocido en miel o azúcar, típico de las comunidades rurales de la región maya.</p>
      </div>

      <div class="platillo">
        <h3>Dulce de calabaza</h3>
        <img src="./assets/img/dulce-calabaza.png" alt="Dulce de calabaza" class="platillo-imagen">
        <p><strong>Descripción:</strong> Calabaza cocida con piloncillo y canela. Su aroma acompaña celebraciones como el Día de Muertos maya.</p>
      </div>

      <div class="platillo">
        <h3>Nance en almíbar</h3>
        <img src="./assets/img/nanche.png" alt="Nance en almíbar" class="platillo-imagen">
        <p><strong>Descripción:</strong> Fruto del árbol de nance cocido en azúcar o miel, de sabor agrio y dulce. Se conserva en frascos y se comparte en reuniones familiares.</p>
      </div>
    
    `,
  comidas: `
      <h2>Comidas tradicionales mayas</h2>

      <div class="platillo">
        <h3>Pibipollo o Mukbil Pollo</h3>

        <!-- Imagen opcional -->
        <img src="./assets/img/mukbil-pollo.png" alt="Pibipollo o Mukbil Pollo" class="platillo-imagen">

        <p><strong>Origen geográfico:</strong> Felipe Carrillo Puerto y comunidades como Tihosuco, Tepich y Señor.</p>
        <p><strong>Descripción:</strong> Platillo emblemático del Hanal Pixán. Se cocina en un horno de tierra (<em>pib</em>), lo que da una textura y sabor únicos gracias a la cocción lenta y al recado rojo de achiote.</p>
        <p><strong>Significado ritual o cultural:</strong> Representa el agradecimiento a los antepasados y a los dioses del maíz. Enterrar el alimento simboliza el ciclo vida-muerte-renacimiento.</p>
        <p><strong>Ingredientes tradicionales:</strong> Masa de maíz nixtamalizado, pollo o pavo, recado rojo, tomate, cebolla, hoja de plátano, sal y manteca.</p>
        <p><strong>Costumbres y prácticas comunitarias:</strong> Se prepara en familia un día antes del Hanal Pixán y se coloca en los altares junto a flores y velas.</p>
      </div>

      <div class="platillo">
        <h3>Chachac Waa (Tamal rojo ceremonial)</h3>

        <!-- Imagen opcional -->
        <img src="./assets/img/tamal-rojo.png" alt="Chachac Waa" class="platillo-imagen">

        <p><strong>Origen geográfico:</strong> Comunidades mayas de X-Hazil Sur y Señor.</p>
        <p><strong>Descripción:</strong> Tamal sagrado preparado en ceremonias agrícolas, especialmente durante la petición de lluvias (<em>Ch’a Chaak</em>). Su color rojo proviene del achiote, símbolo de vida y fertilidad.</p>
        <p><strong>Significado ritual o cultural:</strong> Simboliza la abundancia y la renovación de la vida. Se ofrece al dios Chaak, protector de las lluvias.</p>
        <p><strong>Ingredientes tradicionales:</strong> Masa de maíz, recado rojo, carne de cerdo o gallina, hoja de plátano y sal.</p>
        <p><strong>Costumbres y prácticas comunitarias:</strong> Se prepara colectivamente por las mujeres, mientras los hombres realizan oraciones en el altar del monte.</p>
      </div>
    `,
  bebidas: `
      <h2>Bebidas tradicionales mayas</h2>

      <div class="platillo">
        <h3>Saka’ (Bebida sagrada de maíz)</h3>

        <!-- Imagen opcional -->
        <img src="./assets/img/saka.png" alt="Saka’, bebida sagrada de maíz" class="platillo-imagen">

        <p><strong>Origen geográfico:</strong> Felipe Carrillo Puerto y comunidades agrícolas de Tepich y Tihosuco.</p>
        <p><strong>Descripción:</strong> Bebida ritual que se ofrece a los dioses durante las ceremonias de petición de lluvias o en la bendición de la milpa. Es considerada el “alimento líquido” de los dioses.</p>
        <p><strong>Significado ritual o cultural:</strong> Simboliza la fertilidad del maíz y el agradecimiento a la tierra. Es esencial en las ceremonias del Ch’a Chaak.</p>
        <p><strong>Ingredientes tradicionales:</strong> Masa de maíz blanco, agua, miel, canela y, en ocasiones, anís o cáscara de naranja.</p>
        <p><strong>Costumbres y prácticas comunitarias:</strong> Los ancianos la ofrecen primero al altar del monte antes de compartirla con la comunidad.</p>
      </div>
    `,

};

const modal = document.getElementById('modal-comidas');

if (modal) {
  const modalBody = document.getElementById('modal-body');
  const overlay = modal.querySelector('.modal-overlay');
  const cerrarBtn = modal.querySelector('.modal-close');

  document.querySelectorAll('.seccion-comidas .tarjeta').forEach(tarjeta => {
    tarjeta.addEventListener('click', () => {
      const tipo = tarjeta.dataset.tipo;
      modalBody.innerHTML = datosComidas[tipo] || '<p>No hay información disponible.</p>';
      modal.classList.add('activo');
    });
  });

  function cerrarModal() {
    modal.classList.remove('activo');
  }

  cerrarBtn.addEventListener('click', cerrarModal);
  overlay.addEventListener('click', cerrarModal);
}

