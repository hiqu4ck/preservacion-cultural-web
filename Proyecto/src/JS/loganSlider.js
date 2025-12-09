// Seleccionamos TODOS los contenedores .slides en JUEGOS (SLIDER DE JUEGOOOSSSS!!!)
const JuegoSliders = document.querySelectorAll(".hero-juegos .slides");

JuegoSliders.forEach(slider => {
  const slides = slider.querySelectorAll(".slide"); // Seleccionamos todas las diapositivas dentro de cada slider
  let index = 0; // Establecemos el índice inicial de la diapositiva a 0

  // Creamos un intervalo para cambiar la diapositiva cada 3 segundos
  setInterval(() => {
    index = (index + 1) % slides.length; // Aumentamos el índice y lo restablecemos cuando llega al final
    slider.style.transform = `translateX(-${index * 100}%)`; // Desplazamos el slider hacia la diapositiva actual
  }, 3000); // El intervalo es de 3000 ms (3 segundos)
});






// HOVER ALEATORIO EN FIESTAS!!!!!

const fiestasHoverBoxes = document.querySelectorAll(".hero-fiestas .slideshow");

fiestasHoverBoxes.forEach(fiestasHoverBox => {
  const fiestasHoverImages = fiestasHoverBox.querySelectorAll(".slide img");
  if (fiestasHoverImages.length === 0) return;

  const mainImg = fiestasHoverBox.querySelector(".slide img");
  if (!mainImg) return;

  const fiestasHoverOriginal = mainImg.src;

  // accion de desvanecer, cambiar, reaparecer
  fiestasHoverBox.addEventListener("mouseenter", () => {
    mainImg.style.opacity = "0"; // empieza a desaparecer

    setTimeout(() => {
      // elegir una imagen aleatoria distinta
      let randomIndex = Math.floor(Math.random() * fiestasHoverImages.length);
      if (fiestasHoverImages[randomIndex].src === mainImg.src && fiestasHoverImages.length > 1) {
        randomIndex = (randomIndex + 1) % fiestasHoverImages.length;
      }

      mainImg.src = fiestasHoverImages[randomIndex].src;
      mainImg.style.opacity = "1"; // reaparece suavemente
    }, 250);
  });

  // accion de salir mouse: desvanecer, volver a la original
  fiestasHoverBox.addEventListener("mouseleave", () => {
    mainImg.style.opacity = "0";

    setTimeout(() => {
      mainImg.src = fiestasHoverOriginal;
      mainImg.style.opacity = "1";
    }, 200);
  });
});
















// ================ DATOS DE JUEGOS (PRIMERO!!!!!!) =================
// Lista de juegos
const juegosInfoList = [
  {
    titulo: "Pok-ta-pok (Juego de Pelota) ",
    descripcionLarga: `El Pok-ta-pok, o juego de pelota prehispánico maya, es una de las manifestaciones deportivas y rituales más antiguas de Mesoamérica, con más de 2,000 años de historia. Se jugaba en canchas especiales llamadas tlachtli, con muros inclinados y aros de piedra donde los jugadores debían hacer pasar una pelota de hule macizo. Los jugadores usaban caderas, muslos, codos y cabeza para golpear la pelota, cuyo objetivo era pasarla por los aros. La pelota, de 3 a 4 kg, se fabricaba con látex obtenido del árbol de hule y jugo vegetal para darle elasticidad.

El juego tenía un profundo significado religioso y cultural, representando la lucha entre las fuerzas del bien y el mal, o el movimiento cósmico de los astros. En el Popol Vuh, los héroes gemelos derrotan a los señores del inframundo mediante un juego de pelota, simbolizando la renovación del orden cósmico. Además, el Pok-ta-pok cumplía funciones políticas y sociales, sirviendo para sellar alianzas, resolver conflictos y rendir tributo a los dioses. En ocasiones, los partidos tenían un carácter sacrificial.

Durante la colonia, los españoles prohibieron el juego, pero se siguió practicando en regiones alejadas del control colonial. En Felipe Carrillo Puerto, Quintana Roo, la herencia del Pok-ta-pok se conserva en sitios arqueológicos y talleres locales que enseñan el juego, promoviendo la identidad y el orgullo maya.

`,
    imagen: "./public/assets/img/Pok-ta-pok.png"
  },
  {
    titulo: "Bul o Buul",
    descripcionLarga: `El Bul (también conocido como Buul o Puluc) es un juego de azar y estrategia de origen maya, con un profundo significado religioso y social. El juego simboliza una guerra entre dos grupos de piezas, donde los jugadores avanzan sus fichas para capturar las del oponente. Se usaban granos de maíz o frijoles marcados como dados para determinar el número de movimientos. El tablero podía dibujarse en el suelo o sobre una superficie plana, con casillas representadas por líneas o piedritas.

Los materiales incluían granos de maíz o frijoles como "dados", con valores representados por marcas, y fichas hechas de piedras, semillas, conchas o cerámica, que representaban los "guerreros". En contextos ceremoniales, los tableros se adornaban con flores, velas y otros elementos simbólicos relacionados con los dioses.

El Bul no solo era un juego, sino también un medio de adivinación. Los sacerdotes y chamanes lo utilizaban para consultar la voluntad de los dioses sobre decisiones importantes, como la siembra o la guerra. Durante la época colonial, fue prohibido por su vínculo con la adivinación, pero sobrevivió en secreto y se adaptó como juego de entretenimiento.

En Felipe Carrillo Puerto, Quintana Roo, el Bul se conserva en comunidades como Señor, Tihosuco, Chunhuhub y Tepich, donde los ancianos lo recuerdan y enseñan a los niños en talleres y celebraciones como el Janal Pixan. También se incluye en actividades pedagógicas en escuelas bilingües, reforzando la conexión con la lengua y cosmovisión maya.
`,
    imagen: "./public/assets/img/Bul o Buul.png"
  },
  {
    titulo: "Tinjoroch",
    descripcionLarga: `El Tinjoroch es un juego tradicional maya de habilidad y puntería, practicado principalmente por niños y jóvenes en las comunidades rurales de la Península de Yucatán, incluyendo Felipe Carrillo Puerto, Quintana Roo. Su nombre proviene de una palabra maya relacionada con el acto de lanzar o golpear un objeto. Aunque no tiene un origen ritual tan antiguo como el Pok-ta-pok, el Tinjoroch forma parte del legado cultural maya transmitido oralmente.

**Materiales**: El juego utiliza una base o tabla de madera ligera o raíces firmes, un blanco o diana que puede ser una botella, coco, mazorca seca o fruta, y proyectiles hechos de bolas de trapo, semillas o piedras envueltas en hojas. A veces se usa una ramita como palanca para lanzar los proyectiles.

**Reglas**: El objetivo es derribar o golpear el objeto a distancia, demostrando puntería. Los jugadores se turnan para lanzar, y gana quien logre derribar el blanco con menos intentos o quien más aciertos tenga en una ronda. En algunas versiones, los jugadores apuestan pequeñas recompensas como frutas o dulces.

**Simbolismo y función cultural**: Aunque no tiene un componente religioso como otros juegos mayas, el Tinjoroch tiene un fuerte sentido comunitario. Se juega en fiestas patronales, reuniones familiares y actividades escolares, donde los mayores enseñan a los jóvenes las tradiciones del pueblo.

En **Felipe Carrillo Puerto**, el Tinjoroch sigue siendo practicado en comunidades como Señor, X-Hazil Sur, Tepich, Noh-Bec y Chumpón, especialmente durante festivales del Día del Niño y ferias culturales, convirtiéndose en un medio para transmitir valores de cooperación, creatividad y respeto por la cultura ancestral.
`,
    imagen: "./public/assets/img/Tinjoroch.png"
  },
  {
    titulo: "Kimbomba",
    descripcionLarga: `El **Kimbomba** es un juego tradicional maya similar al béisbol, cuyo origen se remonta a las antiguas prácticas lúdicas relacionadas con las herramientas agrícolas y objetos cotidianos. En esencia, consiste en golpear un pequeño palo (la bomba) con otro más largo (el bate), lanzándolo al aire lo más lejos posible.

**Origen y significado**: El Kimbomba surgió de las actividades de los niños que imitaban las tareas de caza, corte y agricultura, desarrollando fuerza y coordinación. El juego preparaba a los jóvenes para las labores de la milpa y actividades que requerían agilidad y puntería. En maya, "kimbomba" hace referencia al sonido o acción de golpear o lanzar algo con fuerza.

**Materiales**:

* **La bomba**: un palo corto (10-15 cm) afilado en ambos extremos, hecho de madera ligera como guayacán, jabín o ramón.
* **El bate o varilla**: un palo largo (60-80 cm) con un extremo liso, utilizado para golpear la bomba.
* **Superficie de juego**: preferentemente un terreno plano de tierra apisonada o pasto.
* **Líneas de distancia**: marcadas con ramas, piedras o cuerdas para medir la distancia del lanzamiento.

**Reglas y forma de juego**: El objetivo es golpear la bomba con el bate, haciéndola saltar y lanzándola lo más lejos posible. El juego puede ser individual o en equipos. Las reglas incluyen:

1. Colocar la bomba en el suelo.
2. Golpear una punta para hacerla saltar.
3. Golpearla en el aire con el bate para enviarla lejos.
4. Se mide la distancia alcanzada, y quien logre el lanzamiento más largo gana.

**Simbolismo y función cultural**: El acto de golpear y elevar la bomba representa la superación y el impulso del espíritu humano hacia el cielo, conectando el esfuerzo físico con lo espiritual.

**En la actualidad**: El Kimbomba sigue siendo un juego tradicional en México, especialmente en festivales, escuelas bilingües y ferias culturales, promovido por instituciones como el INAH y la Secretaría de Cultura. En **Felipe Carrillo Puerto**, las comunidades de Tihosuco, Señor, X-Hazil Sur, Tepich, Noh-Bec y Chumpón mantienen vivo este juego, practicándolo durante festividades locales y en los patios escolares.
`,
    imagen: "./public/assets/img/Kimbomba.png"
  },
  {
    titulo: "Chácara",
    descripcionLarga: `El Chácara es un juego tradicional maya que es la versión maya del juego llamado 
“avioncito”. Su nombre proviene del maya chak’ara o chaac’ar, que hace 
referencia al acto de lanzar o rebotar algo pequeño. 
En este juego, se dibuja una figura en el suelo y se va saltando por las casillas 
numeradas sin pisar las líneas. También puede ser un instrumento de percusión 
de origen canario, similar a las castañuelas, o un tipo de bolsa tejida con fibras 
vegetales.  
Es un juego tradicional que se juega lanzando una piedra (o "chácara") y saltando 
por casillas dibujadas en el suelo, que generalmente van del 1 al 10.  
Los jugadores lanzan la piedra a la primera casilla, luego saltan por las casillas 
alternando un pie y dos pies, sin tocar las líneas. Gana el jugador que completa el 
recorrido de ida y vuelta sin cometer errores.  
Se relaciona con juegos similares de otras culturas y es parte de la herencia 
cultural maya.`,
    imagen: "./public/assets/img/Chácara.png"
  },
  {
    titulo: "Caza Venado",
    descripcionLarga: `Caza Venado es un juego maya en donde hay dos roles, el cazador y el o los 
venados; el cazador es el único que debe tener un balón y debe de lanzarlo a los 
demás con la intención de “cazarlos”, todos los demás tienen que evitar que los 
casen, y esto lo evitan mientras corren del cazador, el juego acaba cuando el 
cazador le haya pegado o más bien, haya cazado a todos los venados. 
`,
    imagen: "./public/assets/img/Caza Venado.png"
  }
];

const juegosBtn = document.querySelector(".hero-juegos .ver-mas-j");
const modalJuegos = document.getElementById("modal-juegos");
const modalJuegosTitle = modalJuegos.querySelector(".modal-juegos__title");
const modalJuegosText = modalJuegos.querySelector(".modal-juegos__text");
const modalJuegosImg = modalJuegos.querySelector(".modal-juegos__img");
const nextJuegoBtn = modalJuegos.querySelector(".modal-juegos__next");
const modalJuegosClose = modalJuegos.querySelector(".modal-juegos__close");
const modalJuegosOverlay = modalJuegos.querySelector(".modal-juegos__overlay");
const modalJuegosContent = modalJuegos?.querySelector(".modal-juegos__content");

let juegoActual = 0;

// Mostrar juego
function mostrarJuego(index) {
  const juego = juegosInfoList[index];
  modalJuegosTitle.textContent = juego.titulo;
  modalJuegosText.textContent = juego.descripcionLarga;
  modalJuegosImg.src = juego.imagen;

  if (modalJuegosContent) {
    modalJuegosContent.scrollTop = 0;
  }
}

// Abrir modal
juegosBtn.addEventListener("click", () => {
  juegoActual = 0;
  mostrarJuego(juegoActual);
  modalJuegos.classList.add("is-open");
  document.body.classList.add("modal-open");
});

// Cambiar al siguiente juego
nextJuegoBtn.addEventListener("click", () => {
  juegoActual = (juegoActual + 1) % juegosInfoList.length;
  mostrarJuego(juegoActual);
});

// Cerrar modal
[modalJuegosClose, modalJuegosOverlay].forEach(el => {
  el.addEventListener("click", () => {
    modalJuegos.classList.remove("is-open");
    document.body.classList.remove("modal-open");
  });
});











// ================ DATOS DE FIESTAS (PRIMERO!!!!!!) =================
// Lista de fiestas
const fiestasInfoList = [
  {
    titulo: "Día de los Tres Reyes Magos",
    comunidad: "Felipe Carrillo Puerto",
    descripcionLarga: `

    <p>
      La celebración del Día de los Tres Reyes Magos (5 al 12 de enero)
en Felipe Carrillo Puerto es una festividad religiosa y comunitaria
en la cual se honra a los tres Magos de Oriente (Melchor, Gaspar
y Baltazar) mediante procesiones, misas, ferias populares y
eventos sociales en honor a la devoción católica, adaptada al
contexto de la comunidad maya-cristiana de la región.

    </p>

    <div class="modal-fiestas__row modal-fiestas__row--reverse">
      <p>
       Durante esta celebración se practican misas y procesiones con la
imagen de los Tres Reyes Magos que recorren calles de la
cabecera municipal o de colonias como la Colonia Francisco May
y también actividades de convivencia comunitaria, entrega de
regalos o eventos especiales para niñas y niños en algunos casos.

      </p>
      <img src="./public/assets/img/ReyesMagos_2.png" alt="Procesión de Reyes Magos" />
    </div>

    <div class="modal-fiestas__row">
     <img src="./public/assets/img/ReyesMagos_3.png" alt="Feria y juegos mecánicos en la fiesta de Reyes Magos" />
      <p>
       Feria popular: instalación de juegos mecánicos, bailes, concursos
(por ejemplo, concursos de jarana o danzas tradicionales) y
vaquerías (baile con orquesta) como parte de la fiesta. Bailes con
música tropical o de cumbia, y actividades de feria abiertas a la
comunidad.

      </p>
     
    </div>
  `,
    imagen: "./public/assets/img/ReyesMagos_1.png"
  },
  {
    titulo: "Fiesta de la santa cruz",
    comunidad: "Felipe Carrillo Puerto",
    descripcionLarga: `La Fiesta de la Santa Cruz, celebrada del 23 de abril al 3 de mayo, es la festividad más importante de Felipe Carrillo Puerto y de muchas comunidades mayas del centro de Quintana Roo. Es una fusión entre la fe católica y las creencias mayas ancestrales, celebrada cada dos años en los centros ceremoniales de Tixcacal, Guardia, Chun Pon y Chancay.

El culto a la Cruz Parlante comenzó en 1850, cuando se encontró una cruz tallada en un árbol de caoba cerca de un cenote en el rancho Kanpokolché, tres años después del inicio de la Guerra de Castas. Se dice que la Cruz Parlante orientó a los mayas en su lucha por la libertad, comunicándose a través de los líderes del movimiento, como los sacerdotes y escribas mayas Nojochtaata y ah-dziíb. Inicialmente, la cruz se comunicaba a través de Manuel Nahuat, y después de su muerte, a través de Juan de la Cruz, conocido como el escriba de la Santa Cruz.

La organización de los festejos está a cargo de las autoridades tradicionales, quienes distribuyen el trabajo comunitario, que incluye la siembra del Ya áxche (planta sagrada), la corrida de toros, la música para las danzas, la danza ceremonial de la cabeza de cochino, la comida ritual y festiva, y las procesiones por los centros ceremoniales. Además, lideran los rezos durante las actividades ceremoniales.

`,
    imagen: "./public/assets/img/FiestaSantaCruz.png"
  },
  {
    titulo: "Fiesta de las Tres Cruces",
    comunidad: "Tixcacal Guardia (24 de Abril al 3 de Mayo), Chankah Veracruz (15 al 20 de Abril), Chumpon (1 de Enero al 12 de Mayo), Chunyáh (15 al 18 de Junio)",
    descripcionLarga: `La Fiesta de las Tres Cruces fusiona raíces católicas y mayas. Tiene dos orígenes: el cristiano, relacionado con el hallazgo de la Santa Cruz por la emperatriz Helena, y el maya, ligado al culto de la Cruz Parlante, surgido durante la Guerra de Castas en el siglo XIX. La cruz encontrada en un árbol de cedro representaba los cuatro puntos cardinales y la ceiba sagrada para los mayas.

El 3 de mayo se oficia misa en iglesias mayas como la capilla de la Cruz Parlante, donde las familias llevan ofrendas y rezan. Después, se realizan procesiones con cánticos en lengua maya. También se celebra el "Día del Albañil", cuando los obreros colocan tres cruces de madera en sus obras pidiendo protección.

Las familias preparan banquetes llamados matán, con platillos tradicionales que se comparten. Las guardias tradicionales se encargan de la organización, cuidando la cruz y ofreciendo comida y bebida gratuitamente, fortaleciendo el carácter comunal de la fiesta.

La Fiesta de las Tres Cruces mantiene vivas las tradiciones mayas y católicas, reafirmando la identidad maya y actuando como un vínculo entre generaciones. Hoy, sigue siendo una de las celebraciones más importantes de la comunidad.

`,
    imagen: "./public/assets/img/FiestaTresCruces.png"
  },
  {
    titulo: "Virgen María",
    comunidad: "Tixcacal Guardia, Laguna K’ana",
    descripcionLarga: `
En Felipe Carrillo Puerto, varias comunidades mayas rinden culto a la Virgen María bajo diferentes advocaciones, celebrando fiestas patronales específicas. Por ejemplo, en Tixcacal Guardia se honra a la Virgen María del 23 al 29 de agosto, y en Laguna K’ana del 4 al 12 de diciembre. Las festividades son organizadas por cofradías y gremios locales, donde familias o comités asumen responsabilidades como financiar la música, preparar la comida y adornar la imagen de la Virgen.

Durante las celebraciones, gremios devocionales participan en procesiones y en los puestos de guardia. En lugares como la Virgen de Guadalupe en la cabecera municipal, desfilan gremios de niños, la Legión de María y grupos familiares. Además, en centros ceremoniales como Tixcacal Guardia, las “compañías” de mayordomos cumplen guardias religiosas, turnándose para custodiar la iglesia y las imágenes religiosas, incluida la Cruz Parlante.

El compadrazgo juega un papel importante, fortaleciendo las relaciones familiares a través de los rituales. Los padrinos de bautizo y festividades refuerzan estas alianzas. Para las comunidades mayas del sur de Quintana Roo, la Virgen María simboliza la madre espiritual y protectora, un papel que se vincula con antiguas deidades femeninas como Ixchel, diosa de la fertilidad, la lluvia y la medicina. El sincretismo entre las creencias mayas y el catolicismo se refleja en los rituales, donde la Virgen es vista como mediadora de salud, cosechas y bienestar.

La comunidad entera participa en las celebraciones: niños, ancianos y jóvenes acompañan a la Virgen en procesión, tocan en las bandas o bailan con trajes típicos. Tras la misa y los rezos, la procesión regresa y es seguida de una vaquería (baile nocturno). La comida ofrendada se comparte públicamente, con el guiso principal repartido entre todos los asistentes al sonar la campana.

`,
    imagen: "./public/assets/img/3.png"
  },
  {
    titulo: "Virgen María de Concepción",
    comunidad: "Tixcacal Guardia, Xpichil, Laguna K’ana",
    descripcionLarga: `
En las comunidades mayas del municipio de Felipe Carrillo Puerto, la Inmaculada Concepción de María se celebra con ferias tradicionales que combinan rituales católicos y costumbres ancestrales. Las festividades, que varían según la comunidad, se celebran en fechas como del 6 al 13 de diciembre en Tixcacal Guardia, del 7 al 15 de agosto en X-Pichil y del 13 al 18 de abril en Laguna K’ana. En cada lugar, la fiesta comienza con la siembra del **yaxché** (ceiba), árbol sagrado que simboliza la vida y la esperanza.

Estas festividades coinciden con las celebraciones patronales, donde la Virgen de la Concepción es la patrona principal en Tixcacal Guardia y Laguna K’ana, y en X-Pichil se venera a la Virgen de la Asunción (a veces conocida como “Concepción”). Los ritos religiosos incluyen ofrendas de comida y flores, donde las familias llevan platillos típicos mayas como tamales, chilmole (guiso de carne con recado negro), chicharra, y pib (guisos cocidos bajo tierra), que se reparten entre los asistentes como comida comunitaria. En Kantunilkín, durante los novenarios, se ofrecen tamales, champurrado y postres, mientras se rezan oraciones y se queman copal.

Para la comunidad maya-católica, la Virgen de la Concepción representa la maternidad divina y la prosperidad. La fiesta fusiona símbolos cristianos, como la cruz y la imagen de la Virgen, con signos mayas ancestrales, como la plantación del yaxché, que expresa la esperanza de un año próspero. Así, el culto a la Virgen se celebra con bailes, música, rezos en maya y ofrendas, manteniendo vivas las tradiciones mayas mientras se expresa la fe cristiana.

`,
    imagen: "./public/assets/img/3.png"
  },
  {
    titulo: "Las Santas Cruces",
    comunidad: "Señor",
    descripcionLarga: `
En Felipe Carrillo Puerto, la comunidad maya de **Señor** celebra cada año la **Fiesta de Las Santas Cruces** del 19 al 24 de marzo, fusionando la fe católica con ritos mayas ancestrales. La festividad tiene sus raíces en la leyenda cristiana de Santa Elena, quien encontró las tres cruces de Cristo en el año 292, pero los mayas de Chan Santa Cruz (hoy Felipe Carrillo Puerto) adaptaron esta tradición, asociando la cruz con los cuatro puntos cardinales y usándola como símbolo de resistencia durante la **Guerra de Castas** de 1847.

La celebración incluye procesiones y plegarias en lengua maya, con la imagen de la cruz (o una réplica) recorriendo las calles del pueblo al ritmo de flautas y tambores. Los rezadores mayas alternan letanías católicas con oraciones ancestrales, y los asistentes participan llevando velas, flores y ofrendas a lo largo del recorrido.

La fiesta es organizada por comités comunitarios integrados por varias familias que se encargan de coordinar las novenas, financiar la música y preparar la comida. La festividad mezcla actos religiosos con actividades sociales como vaquerías, juegos y convivios, en los que participan jóvenes, ancianos, músicos y grupos de vaqueras.

La **Cruz Parlante**, venerada en la fiesta, representa la intersección de los rumbos del universo y el centro del mundo maya. Además, rememora la historia de la Guerra de Castas, cuando la cruz simbolizó la resistencia indígena. La celebración refuerza la identidad maya al ser celebrada en su idioma y con música ancestral, uniendo a las familias y manteniendo vivas las tradiciones del pueblo.

`,
    imagen: "./public/assets/img/3.png"
  },
  {
    titulo: "Virgen Morena de Guadalupe",
    comunidad: "Señor",
    descripcionLarga: `
La Virgen de Guadalupe es la patrona de México, vinculada a las apariciones marianas de 1531 a Juan Diego. En Felipe Carrillo Puerto, la devoción se fusiona con la herencia indígena, asociando a la Virgen con la diosa maya Tonatzín.

La festividad comienza la víspera del 12 de diciembre, cuando miles de fieles cantan las mañanitas y asisten a misas multitudinarias. En la Misa de Coronación, que reúne a cerca de 1,500 personas, las comunidades mayas participan en gremios y procesiones, como las cuadrillas de la Legión de María y los palqueros.

La fiesta es comunitaria, protagonizada por la población indígena local, y la participación de las comunidades cercanas en la organización de la fiesta (música, bailes, comida) refuerza la transmisión de tradiciones.

A diferencia de otras regiones, en Felipe Carrillo Puerto se celebra fuera de la fecha oficial de diciembre, destacando el uso de la lengua maya, música maya pax, danzas autóctonas y la vaquería (baile de jarana). Además, se incluyen corridas de toros y orquestas locales, como la orquesta La Dinastía, y una gastronomía festiva típica del sureste, como el chilmole y el relleno negro.

`,
    imagen: "./public/assets/img/3.png"
  },
  {
    titulo: "San Bernardino de Siena",
    comunidad: "Xyatil",
    descripcionLarga: `
La fiesta patronal de San Bernardino de Siena en Xyatil se celebra del 15 al 21 de mayo, con el 20 de mayo como el día central. Esta festividad combina la devoción católica con tradiciones mayas locales, reflejando un fuerte sincretismo cultural.

La celebración incluye novenas religiosas en honor a San Bernardino, donde se ofrecen comidas tradicionales como chilmole de pollo y se organizan bailes comunitarios. Un ritual clave es el corte y replantación del ya’axche (ceiba sagrada), que simboliza la petición de lluvias.

También se realizan vaquerías y danzas folklóricas con música regional y trajes típicos mayas. La gastronomía típica incluye el reparto de platillos mayas, especialmente el chilmole, en el "cuartel maya". Al final de la festividad, se llevan a cabo juegos populares y un baile nocturno de clausura.

La fiesta es comunitaria, uniendo a las familias mayahablantes, y se enfoca en valores de solidaridad y respeto. Además, el uso del payalchiʼ (oraciones en maya) y el sincretismo entre los ritos agrícolas mayas y la devoción católica refuerzan la identidad cultural de Xyatil. La celebración destaca el orgullo de ser mayahablantes y mantiene vivas las tradiciones locales.

`,
    imagen: "./public/assets/img/3.png"
  },
  {
    titulo: "San Ramón",
    comunidad: "San Ramón",
    descripcionLarga: `
<div class="modal-fiestas__row modal-fiestas__row--reverse">
      <p>
       

La fiesta tradicional de San Ramón se celebra anualmente en el municipio de Felipe Carrillo Puerto, Quintana Roo, particularmente en la comunidad maya de San Ramón.
</p>
<img src="./public/assets/img/FiestaSanRamon_2.png" alt="Procesión de Reyes Magos" />
    </div>
La localidad de San Ramón fue fundada a mediados del siglo XX, y desde entonces, sus pobladores instauraron una fiesta patronal en honor a San Ramón. Esta tradición se ha mantenido viva por generaciones. La fiesta refleja la mezcla de influencias maya y mestiza, típica de la Zona Maya de Quintana Roo, y refuerza la identidad histórica del pueblo.

La festividad tiene un fuerte componente religioso y ceremonial, con novenas y misas solemnes en honor a San Ramón. La comunidad organiza una procesión por las calles, llevando la imagen del santo acompañada de rezos en español y maya, música maya (maya pax) y flores. Se realiza la siembra del yaxché (ceiba sagrada), pidiendo lluvias y protección. La vaquería, un baile tradicional, inicia la fiesta, y la comunidad participa activamente en los rituales, rezos y convivios.

La fiesta también tiene un profundo significado cultural y social, fortaleciendo la unidad de la comunidad. Es un espacio de encuentro intergeneracional, donde familias de fuera regresan a San Ramón para reencontrarse. Además, la fiesta refuerza la identidad maya, al mantener vivas las tradiciones y la fe, fusionando elementos católicos y mayas en un solo evento sincrético.

`,
    imagen: "./public/assets/img/FiestaSanRamon_1.png"
  },
  {
    titulo: "San Cristo de Amor",
    comunidad: "Chankah de Repente, Chunhuas.",
    descripcionLarga: `
La fiesta del Santo Cristo de Amor tiene raíces coloniales en Yucatán y se ha extendido a varias comunidades mayas de la Zona Maya de Quintana Roo, como Chunhuas, Chancah de Repente y Polyuc. En estas localidades, la celebración se realiza entre marzo y abril, dependiendo del pueblo, y refleja un sincretismo cultural, combinando rituales católicos con costumbres mayas.

La festividad incluye novenas, procesiones y misas solemnes en honor al santo, junto con danzas tradicionales y la siembra de un yaxché (ceiba sagrada) como rito simbólico. En algunas comunidades, se instalan máakanes (chozas de palma) donde se hacen oraciones en maya, y se sirve comida como chirmole.

La vaquería (baile regional) es uno de los eventos centrales de la fiesta, acompañada de música de maya pax. Además, se celebran corridas de toros y actividades recreativas. La festividad tiene un fuerte significado religioso, social y cultural, siendo un acto de fe y una oportunidad para renovar el pacto espiritual con el santo, así como un espacio de convivencia comunitaria.

A lo largo del tiempo, la fiesta ha enfrentado desafíos, como la migración y la disminución de la participación juvenil, pero ha visto esfuerzos de preservación. Los habitantes, con el apoyo de autoridades y nuevos participantes, continúan celebrando la tradición, adaptándola a los tiempos modernos sin perder su esencia cultural y espiritual.


`,
    imagen: "./public/assets/img/3.png"
  },
  {
    titulo: "San Juan Bautista",
    comunidad: "K’opch’en",
    descripcionLarga: `
La fiesta de San Juan Bautista en Felipe Carrillo Puerto tiene orígenes coloniales y ha sido transmitida por generaciones. En la región, las festividades de San Juan combinan el culto católico con rituales mayas, como la siembra del yaxché (ceiba sagrada), pidiendo lluvias para las cosechas. La celebración incluye misas, procesiones, rezos en maya y español, y actividades culturales como la vaquería (baile tradicional) y la gastronomía local.

San Juan es venerado como el intercesor por la lluvia y la fertilidad, y la fiesta se lleva a cabo entre el 20 y el 25 de junio, con la peregrinación del santo entre comunidades. Además de los ritos religiosos, la comunidad organiza eventos como la vaquería y corridas de toros. Las familias anfitrionas participan en la organización y la fiesta incluye juegos, danzas y alimentos tradicionales.

La festividad tiene un gran significado religioso, social y cultural. Refuerza la identidad maya, con la lengua y música maya presentes, y se ve como una oportunidad para fortalecer los lazos comunitarios. A pesar de los desafíos, como la migración y la modernidad, las comunidades han trabajado para preservar la fiesta, adaptándola a los tiempos actuales sin perder su esencia cultural.

`,
    imagen: "./public/assets/img/3.png"
  },
  {
    titulo: "San Miguel",
    comunidad: "X-Hazil ",
    descripcionLarga: `
La fiesta tradicional en honor a San Miguel Arcángel se celebra principalmente en la comunidad de X-Hazil Sur, en el municipio de Felipe Carrillo Puerto, Quintana Roo. Esta festividad combina tradiciones católicas con elementos mayas, destacando el sincretismo religioso de la zona. Aunque no es la fiesta principal de la cabecera municipal, en X-Hazil Sur se celebra con gran fervor, atrayendo tanto a locales como visitantes.

La celebración principal tiene lugar del 24 al 30 de septiembre, culminando el 29 de septiembre, día de San Miguel Arcángel. También se celebra del 7 al 12 de febrero, aunque de manera menos documentada. Las fechas pueden variar ligeramente, pero se mantienen cercanas al calendario litúrgico católico. En 2025, los eventos se promocionaron del 28 de septiembre al 1 de octubre.

La fiesta combina rituales religiosos, culturales y festivos. Entre las tradiciones destacan la **siembra del yaxché** (ceiba sagrada), el **mayapaax** (música tradicional maya), **danza de los voladores**, procesiones, misas, y **ferias** con comida típica, juegos mecánicos y bailes populares con grupos locales. La celebración honra tanto a San Miguel Arcángel como a las raíces indígenas de la comunidad.

`,
    imagen: "./public/assets/img/FiestaSanMiguel.png"
  },
  {
    titulo: "San Román",
    comunidad: "Dzulá",
    descripcionLarga: `

<div class="modal-fiestas__row modal-fiestas__row--reverse">
      <p>
       
La fiesta tradicional en honor a San Román se celebra principalmente en la comunidad de Dzulá (también escrita como Dzula), perteneciente al municipio de Felipe Carrillo Puerto en Quintana Roo.      </p>
<img src="./public/assets/img/FiestaSanRoman_2.png" alt="Procesión de Reyes Magos" />
    </div>

    <div class="modal-fiestas__row">
    <img src="./public/assets/img/FiestaSanRoman_3.png" alt="Procesión de Reyes Magos" /> 
      <p>
Esta festividad es un ejemplo claro del sincretismo cultural entre las tradiciones mayas ancestrales y el catolicismo, y resalta la importancia histórica de Dzulá en la Guerra Social Maya (o Guerra de Castas), donde la comunidad jugó un rol clave en la resistencia indígena. 
</p>
    </div>
San Román es venerado como protector y su fiesta combina elementos religiosos con celebraciones comunitarias, fomentando la unión familiar y el respeto a las costumbres locales.

La festividad se celebra generalmente del 10 al 15 de abril, aunque las fechas pueden variar según el año. En 2025, los eventos comenzaron alrededor del 19 de abril, con rezos y rituales preparatorios.

La fiesta honra a San Román con un enfoque en la devoción y la preservación de la identidad maya. Dzulá, una comunidad rural con fuerte herencia maya, atrae a habitantes de pueblos cercanos para participar en actividades. Entre las tradiciones destacan:

* Rituales mayas ancestrales, como el corte y siembra del Yax'ache' (ceiba sagrada), simbolizando la conexión entre el cielo, la tierra y el inframundo.
* Actividades religiosas, como rezos, ofrendas al santo, misas y procesiones con la imagen de San Román. También se conmemora la historia local, como la batalla de Dzulá durante la Guerra de Castas.
* Gastronomía y música, con platillos tradicionales como cochinita pibil, tamales, atoles y bebidas regionales, acompañados de música maya pax y bandas regionales para los bailes populares.
* Entretenimiento comunitario, como corridas de toros, vaquerías (bailes con vestimenta típica), juegos mecánicos y ferias con puestos de artesanías.

La festividad también es una ocasión para pedir salud, buenas cosechas y prosperidad, y en años recientes se ha puesto énfasis en mantener las tradiciones mientras se promueve la sostenibilidad, evitando el uso excesivo de pirotecnia.

`,
    imagen: "./public/assets/img/FiestaSanRoman_1.png"
  },
  {
    titulo: "San Antonio",
    comunidad: "Dzulá",
    descripcionLarga: `

<div class="modal-fiestas__row modal-fiestas__row--reverse">
      <p>
       
La fiesta tradicional en honor a San Antonio (de Padua) se celebra principalmente en la comunidad de Dzulá, perteneciente al municipio de Felipe Carrillo Puerto en Quintana Roo.
      </p>
<img src="./public/assets/img/FiestaSanAntonio_2.png" alt="Procesión de Reyes Magos" />
    </div>
La festividad de San Antonio resalta el sincretismo entre las tradiciones mayas y el catolicismo, similar a otras celebraciones en la región. San Antonio es venerado como patrono protector, asociado con milagros y ayuda en causas difíciles. La fiesta refleja la herencia cultural de la región, influenciada por la Guerra de Castas.

La celebración se realiza del 10 al 14 de junio, culminando el 13 de junio, día de San Antonio de Padua. Las fechas pueden variar ligeramente según el calendario local, pero siempre se alinean con la tradición católica.

La fiesta en Dzulá reúne a la comunidad en devoción y celebración, combinando elementos religiosos y culturales. Entre las tradiciones destacan:

* Rituales mayas como el corte y la siembra del Yax'ache' (ceiba sagrada), simbolizando la renovación y conexión con la naturaleza.
* Actividades religiosas, como procesiones, misas, rezos, novenas y ofrendas al santo.
* Gastronomía tradicional con platillos como cochinita pibil, tamales, atole y bebidas regionales, compartidos en ferias comunitarias.
* Entretenimiento con música maya pax, vaquerías (danzas con trajes típicos), corridas de toros y juegos mecánicos.

La celebración promueve la identidad cultural y, en años recientes, se ha enfocado en prácticas sostenibles, evitando el exceso de pirotecnia.

`,
    imagen: "./public/assets/img/FiestaSanAntonio_1.png"
  },
  {
    titulo: "Niño Jesus",
    comunidad: "Yaxley, Tihosuco",
    descripcionLarga: `

<div class="modal-fiestas__row modal-fiestas__row--reverse">
      <p>
       
La fiesta tradicional en honor al Niño Jesús (también conocido como Niño Dios) se celebra principalmente en la comunidad de Tihosuco, perteneciente al municipio de Felipe Carrillo Puerto en Quintana Roo.

      </p>
      <img src="./public/assets/img/FiestaNiñoJesus_2.png" alt="Procesión de Reyes Magos" />
    </div>
La fiesta en honor al Niño Jesús en Tihosuco es un claro ejemplo de sincretismo cultural, combinando tradiciones católicas y mayas, y refleja la herencia histórica de la región, especialmente marcada por la Guerra de Castas. El Templo del Niño Jesús es un sitio clave en las celebraciones.

La fiesta principal se celebra del 21 de diciembre al 1 de enero, con actividades que se extienden hasta el 8 de enero. El 25 de diciembre es el día central de las veneraciones. Estas fechas varían, pero siguen el calendario litúrgico católico.

Las tradiciones incluyen:

* Danza de los Pastores: Los danzantes escenifican la lucha entre el bien y el mal, con posadas y ofrendas de maíz.
* Pastorela Maya: Una versión local en lengua maya que narra el nacimiento de Jesús.
* Gremios y Procesiones: Los gremios recorren el pueblo ofreciendo rezos y ofrendas.
* Siembra del Yaxché: Un ritual maya donde se planta un árbol de ceiba, simbolizando la conexión entre el cielo, la tierra y el inframundo.
* Vaquería y Entretenimiento: Incluye música de jarana, corridas de toros, bailes populares y ferias con comida típica.

La fiesta refuerza la identidad maya y la unidad familiar, adaptándose a los cambios sociales mientras mantiene vivas las tradiciones.

`,
    imagen: "./public/assets/img/FiestaNiñoJesus_1.png"
  },
  {
    titulo: "San José",
    comunidad: "Chun On, Tepich, San José II",
    descripcionLarga: `
La fiesta de San José en Felipe Carrillo Puerto tiene raíces coloniales y refleja el sincretismo cultural entre las tradiciones católicas y mayas. Celebrada del 21 de diciembre al 1 de enero, con el 25 de diciembre como el día central, la fiesta honra al santo patrono y es una muestra de la herencia histórica y la lucha entre el bien y el mal, especialmente relacionada con la Guerra de Castas.

La celebración incluye rituales como la siembra del yaxché (ceiba sagrada), danzas como la de los pastores, misas, procesiones y ofrendas. También se realizan actividades culturales como la vaquería, música de jarana y gastronomía tradicional. Además, se combinan elementos religiosos y rituales mayas, como la petición de lluvia a través del ritual de Ch’a Cháak.

La comunidad participa activamente en la organización, con roles asignados a diferentes grupos, incluidos mayordomos, gremios y jóvenes. La fiesta también refleja la preservación cultural, adaptándose a los cambios sociales y manteniendo viva la tradición. A pesar de la modernización, la festividad sigue siendo un evento de unidad social y religiosa, transmitiendo la identidad maya y católica de la comunidad.

`,
    imagen: "./public/assets/img/1.png"
  }
];

const fiestasBtn = document.querySelector(".hero-fiestas .ver-mas-f");
const modalFiestas = document.getElementById("modal-fiestas");
const modalFiestasTitle = modalFiestas.querySelector(".modal-fiestas__title");
const modalFiestasText = modalFiestas.querySelector(".modal-fiestas__text");
const modalFiestasImg = modalFiestas.querySelector(".modal-fiestas__img");
const nextFiestasBtn = modalFiestas.querySelector(".modal-fiestas__next");
const modalFiestasClose = modalFiestas.querySelector(".modal-fiestas__close");
const modalFiestasOverlay = modalFiestas.querySelector(".modal-fiestas__overlay");
const modalFiestasComunidad = modalFiestas.querySelector(".modal-fiestas-comunidad");
const modalFiestasContent = modalFiestas?.querySelector(".modal-fiestas__content");


let fiestaActual = 0;

// Mostrar fiesta
function mostrarFiesta(index) {
  const fiesta = fiestasInfoList[index];
  modalFiestasTitle.textContent = fiesta.titulo;
  modalFiestasComunidad.textContent = fiesta.comunidad;
  modalFiestasText.innerHTML = fiesta.descripcionLarga;
  modalFiestasImg.src = fiesta.imagen;


  if (modalFiestasContent) {
    modalFiestasContent.scrollTop = 0;
  }
}

// Abrir modal
fiestasBtn.addEventListener("click", () => {
  fiestaActual = 0;
  mostrarFiesta(fiestaActual);
  modalFiestas.classList.add("is-open");
  document.body.classList.add("modal-open");
});

// Cambiar a la siguiente fiesta 
nextFiestasBtn.addEventListener("click", () => {
  fiestaActual = (fiestaActual + 1) % fiestasInfoList.length;
  mostrarFiesta(fiestaActual);
});

// Cerrar modal
[modalFiestasClose, modalFiestasOverlay].forEach(el => {
  el.addEventListener("click", () => {
    modalFiestas.classList.remove("is-open");
    document.body.classList.remove("modal-open");
  });
});


















// ================= DATOS DE LEYENDAS (PRIMERO!!) =================
const leyendasInfo = [
  {
    titulo: "La leyenda del Balam",
    descripcion: "    En la tradición maya, la palabra Balam significa jaguar, pero no se refiere únicamente al animal: es un ser protector, un guardián espiritual relacionado con la noche, la selva y la fuerza sagrada. El Balam aparece en muchas leyendas y relatos donde cumple el papel de defensor del pueblo, del maíz, de los hogares y de los caminos.",
    detalle: ` 
Tienes razón, el texto no estaba resumido. Aquí va una versión más corta:

Hace mucho tiempo, los dioses crearon a los Balames, cuatro jaguares guardianes, para proteger a los pueblos mayas. Cada Balam estaba asociado con un punto cardinal y tenía la misión de vigilar la selva y proteger a los humanos de los peligros de la noche, como espíritus malignos y animales que amenazaban los cultivos. Se decía que los Balames tenían la capacidad de ver en la oscuridad y caminar sin dejar rastro, ahuyentando a los intrusos con un rugido fuerte.

Los campesinos ofrecían ofrendas y velas para honrar a los Balames, quienes también cuidaban las milpas. Con el tiempo, el Balam se convirtió en símbolo de fuerza y sabiduría. Hoy en día, se cree que cada persona tiene un Balam que la cuida, protegiéndola en su camino, especialmente en la selva o en momentos difíciles.

Esta leyenda resalta el papel del Balam como guardián y protector del pueblo maya.
`,
    img: "./public/assets/img/leyenda-balam2.jpg"
  },
  {
    titulo: "La Xtá’abay: La mujer seductora de la selva",
    descripcion: "Esta es una de las leyendas más conocidas en la zona maya de Quintana Roo, narrada en pueblos como Felipe Carrillo Puerto, Lázaro Cárdenas, Tulum y José María Morelos. ",
    detalle: `Xtá’abay es una hermosa mujer que emerge de la selva en noches de luna llena, atrayendo a hombres ebrios o infieles con su encanto. Viste un hipil transparente y se peina con espinas de cactus venenoso (tzá’akan) bajo un yaxche’ (ceiba sagrada). Sus pies son mutados: uno como pezuña de chivo y otro como pata de pavo, produciendo un sonido "tsss’ tak" al caminar. Lleva a sus víctimas a una cueva para "amarlas" hasta la muerte.
El origen se remonta a dos mujeres: la "x k’eban" (pecadora pero bondadosa), que se transformó en la flor dulce del xtabentún, y la "utz kó’olel" (aparentemente virtuosa pero egoísta), que se convirtió en la Xtá’abay, una flor espinosa y venenosa. Para protegerse, se recomienda no embriagarse y, si aparece, dar tres cintarazos para transformarla en una serpiente que huye. En Felipe Carrillo Puerto, el museo Noh Kah Santa Cruz Balan Nah expone pinturas sobre esta leyenda, y recientemente (octubre 2025) se inauguró una exposición en la Casa de la Cultura.
`,
    img: "./public/assets/img/Xtabay_2.png"
  },
  {
    titulo: "La Cruz Parlante: El símbolo de la resistencia maya",
    descripcion: "Esta leyenda histórica surge durante la Guerra de Castas (1847-1901), un levantamiento maya contra la opresión en Quintana Roo.",
    detalle: `En un manantial cerca de lo que hoy es Felipe Carrillo Puerto (antes Chan Santa Cruz), un mestizo llamado José María Barrera encontró un cedro y pintó una cruz en él. El árbol creció y "habló", guiando a los rebeldes mayas con mensajes divinos transmitidos por líderes como Barrera o Manuel Nahuat. La cruz, tallada en madera de caoba (de 7-10 cm), se convirtió en oráculo: otorgaba protección, legitimidad y estrategias militares, fusionando creencias católicas con elementos prehispánicos como la ceiba sagrada y el maíz.
    Representó un gobierno teocrático independiente, inspirando a figuras como la sacerdotisa María Petrona Uicab, quien consultaba el oráculo en Tulum. Aunque el ejército mexicano tomó Chan Santa Cruz en 1901, el culto persiste. Hoy, la cruz se venera en el Santuario de la Cruz Parlante en Felipe Carrillo Puerto, con fiestas el 3 de mayo.`,
    img: "./public/assets/img/CruzParlante_2.png"
  },
  {
    titulo: "Los Aluxes: Los guardianes traviesos de la naturaleza",
    descripcion: "Los aluxes (aluxo’ob en maya) son pequeños duendes de la mitología maya, altos como hasta las rodillas, vestidos como antiguos mayas.",
    detalle: `Viven en selvas, grutas y cenotes de la península de Yucatán, incluyendo Quintana Roo. Son invisibles pero pueden materializarse para interactuar. Protegen el Xibalbá (inframundo maya) y los campos: ayudan a crecer el maíz, llaman la lluvia y espantan ladrones si se les deja ofrendas. Si se les irrespeta, causan accidentes, enfermedades o travesuras como ruidos extraños.
Creados por sacerdotes mayas con barro, miel y flores, se activan con rituales. En Quintana Roo, una famosa anécdota es el puente de Cancún, derribado por aluxes hasta que les construyeron una casa. Para entrar en sus territorios, pide permiso y deja ofrendas para buena suerte.
`,
    img: "./public/assets/img/Aluxes.png"
  },
  {
    titulo: "El Huay Chivo: El brujo transformado en bestia",
    descripcion: "Esta leyenda de terror maya habla de un hechicero que se transforma en un ser mitad hombre, mitad chivo, con ojos rojos, pelo negro y cuernos...",
    detalle: `
    Ataca a viajeros, ganado o infieles por las noches, dejando un hedor a azufre. En una versión local cerca de Felipe Carrillo Puerto, un curandero respetado llamado Don Eustaquio curaba con rituales, pero se convertía en Huay Chivo bajo la luna llena. Un joven lo descubrió y el pueblo lo confrontó, obligándolo a huir a un cenote, donde maldijo al lugar. Desde entonces, se escucha su aullido en tormentas, y se advierte no confiar en curanderos sospechosos ni invocar espíritus.
`,
    img: "./public/assets/img/Huay-Chivo.png"
  },
  {
    titulo: "Los hermanos Kinich y Tizic: El origen del Chechén y el Chacá",
    descripcion: "Esta leyenda, narrada por habitantes de Felipe Carrillo Puerto como Gregorio Canchén, se ambienta en la selva de Quintana Roo y explica el equilibrio natural entre el bien y el mal...",
    detalle: `Dos príncipes guerreros mayas, Kinich (el bondadoso y amado) y Tizic (el arrogante y cruel), se enamoran de la hermosa Nicté-Ha. Para resolver su rivalidad, se enfrentan en un duelo mortal donde ambos perecen. En el inframundo, suplican a los dioses mayas por una segunda oportunidad para ver a Nicté-Ha. Los dioses les permiten regresar, pero unidos para siempre: Tizic se transforma en el árbol chechén (Metopium brownei), cuya resina causa quemaduras y llagas, simbolizando el mal; Kinich en el chacá (Bursera simaruba), cuyo néctar alivia los efectos del chechén, representando el bien. En la selva, estos árboles siempre crecen cerca uno del otro, y se usan en la medicina tradicional maya. La moraleja enseña el respeto a la naturaleza y el dualismo del mundo.`,
    img: "./public/assets/img/Kinich-Tizic_2.png"
  },
  {
    titulo: "La leyenda de Jacinto Pat: El guerrero protegido por la Cruz",
    descripcion: "Originaria de comunidades como Tihosuco y Chumpon, cerca de Felipe Carrillo Puerto, esta historia heroica de la Guerra de Castas (1847-1901) retrata a Jacinto Pat como un líder invulnerable...",
    detalle: `. Pat, un "tigre" con machete, es protegido por la gracia divina de la Santísima Cruz y poderes de way (transformación). En una noche, corta 60 cabezas de enemigos sin ser herido, guiado por órdenes de Dios.
     Embosca a perseguidores en rutas hacia Bacalar y Ascensión, usando tácticas como falsos campamentos con cadáveres enterrados en pib (hornos tradicionales) para aterrorizar a los soldados, simulando canibalismo.
      La leyenda enfatiza la resistencia maya y la fe en lo divino para la liberación.`,
    img: "./public/assets/img/Jacinto-Pat.png"
  },
  {
    titulo: "La leyenda de la violación de la hija de Cecilio Chi: El detonante de la Guerra de Castas",
    descripcion: "Esta narración fundacional se cuenta en Tihosuco, Chetumal y Nohbec, cercanas a Felipe Carrillo Puerto, y explica el inicio de la rebelión maya...",
    detalle: `Un sacerdote viola a la hija de Cecilio Chi (o en variantes, de Jacinto Pat), entregada para educación. Los mayas, furiosos, decapitan al cura en Polenk'in ("cabeza del cura"). Simboliza la opresión colonial y la redención de la feminidad maya y la tierra. Esto lleva al levantamiento contra los "dzules" (blancos), oponiendo la Iglesia Católica a la Santísima Cruz. La moraleja resalta la justicia y la defensa de la dignidad indígena.`,
    img: "./public/assets/img/Cecilio-Chi.png"
  },
  {
    titulo: "La historia de Bernardino Ken y Florentino Cituk",
    descripcion: "Proveniente de relatos orales en Noh Kah Balam Na (Felipe Carrillo Puerto) y Vigía Chico, esta leyenda describe la tenaz oposición de Ken y Cituk contra el general Bravo a inicios del siglo XX...",
    detalle: `Con 100 hombres, se esconden en cuevas, reciben mensajes divinos del cielo y sabotean trenes con dinamita, protegidos por rezos. La lucha termina con una epidemia de viruela negra, dejando solo "semilla" para futuras generaciones. Enfatiza la devoción a Dios y la entrega por la libertad maya, con elementos de profecías catastrofistas.`,
    img: "./public/assets/img/Bernardino_Ken-Florentino_Cituk.png"
  },
  {
    titulo: "El tesoro arqueológico de los aluxes",
    descripcion: "En esta leyenda, asociada a comunidades rurales de Quintana Roo, un hombre llamado Santiago entra en una gruta durante excavaciones y...",
    detalle: `En esta leyenda, asociada a comunidades rurales de Quintana Roo, un hombre llamado Santiago entra en una gruta durante excavaciones y encuentra aluxes que lo guían a un tesoro de figuras de jade y 
    barro custodiado por una serpiente. Él distribuye las piezas, pero una cobra vida por las noches, recordando el respeto a los guardianes mayas y el castigo por profanar sitios sagrados.`,
    img: "./public/assets/img/Tesoro_Aluxes.png"
  },
  {
    titulo: "El hombre que fue convertido en alux",
    descripcion: "Relatada en contextos de Quintana Roo durante la construcción de carreteras, obreros roban reliquias mayas de un adoratorio y...",
    detalle: `Relatada en contextos de Quintana Roo durante la construcción de carreteras, obreros roban reliquias mayas de un adoratorio y son castigados con accidentes y enfermedades.
    Uno de ellos se encoge progresivamente hasta convertirse en un alux, sirviendo como advertencia eterna contra el robo de la herencia cultural.`,
    img: "./public/assets/img/Hombre-Alux.png"
  },
  {
    titulo: "Xaho'hot Tuun: El sacrificio del Guerrero",
    descripcion: "Esta narración prehispánica habla de un guerrero que seduce a una vestal dedicada a la diosa Suhuy K'aak'...",
    detalle: `Esta narración prehispánica habla de un guerrero que seduce a una vestal dedicada a la diosa Suhuy K'aak'. Como castigo, le sacan el corazón en un sacrificio y usan su piel, mientras la vestal es arrojada a un cenote por perder su pureza.
    Enfatiza el culto a la castidad y los rituales sagrados en la sociedad maya.`,
    img: "./public/assets/img/Xaho'hot Tuun.png"
  },
  {
    titulo: "El primer encuentro con los aluxes",
    descripcion: "Esta leyenda, relatada por Gaspar Antonio Xiu Cachón, ocurrió en 1954 en la comunidad de Sabán, Quintana Roo...",
    detalle: `Dos niños mayas observan a dos aluxes saliendo de la selva, quienes los invitan a su morada con promesas de diversión y comida. Los niños, prudentes, rechazan la oferta y huyen al oír a su hermana.
    Enseña sobre la curiosidad infantil y el respeto a los espíritus guardianes de la naturaleza, comunes en zonas rurales mayas`,
    img: "./public/assets/img/Encuentro-Alux.png"
  },
  {
    titulo: "La Pila de los Azotes: El castigo indígena",
    descripcion: "Más que una leyenda pura, es un relato histórico con tintes míticos de Chan Santa Cruz (actual Felipe Carrillo Puerto).",
    detalle: `Durante la Guerra de Castas y hasta 1920, esta pila de piedra se usaba para azotar a infractores de las leyes mayas, como adúlteros (50 azotes cada uno, seguidos de jugo de naranja agria en las heridas) o desobedientes. Construida en 1918 por el general Francisco May Pech, simboliza la justicia indígena y el rigor social.
    Se dice que los gritos de los castigados aún resuenan en el sitio, advirtiendo sobre el respeto a las costumbres.`,
    img: "./public/assets/img/Azotes.png"
  },
  {
    titulo: "El cuidador del bosque (Ajkanul)",
    descripcion: "De un libro reciente de leyendas mayas, esta historia destaca la valentía de guerreros y el respeto a la naturaleza...",
    detalle: `Ajkanul, un guardián del bosque, protege la selva de amenazas, fusionando elementos ancestrales con lecciones sobre familia y rituales. Aunque no exclusiva de Felipe Carrillo Puerto, se relaciona con la cosmovisión de comunidades quintanarroenses.`,
    img: "./public/assets/img/Ajkanul.png"
  },
  {
    titulo: "Xunaan Tunich: La piedra mujer",
    descripcion: "En Muna (Yucatán, pero con paralelos en Quintana Roo), Saasil Eek, hija de un sacerdote, se enamora de un guerrero enemigo y queda embarazada...",
    detalle: `Su padre la mata y entierra, dejando su busto expuesto en una cueva como humillación. El cuerpo se petrifica, visible aún hoy. Advierte sobre la castidad y conflictos sociales en la era prehispánica, común en relatos de la península.
Hay muchas más en antologías universitarias y orales, como variaciones de aluxes o espíritus en cenotes. Si quieres enfocarte en una temática (ej. más sobre justicia o naturaleza) o versiones completas, dime para buscar más detalles.
`,
    img: "./public/assets/img/Piedra-Mujer.png"
  },
  {
    titulo: "El Boop (o Boob): La bestia fétida",
    descripcion: "Una criatura peluda y maloliente que ataca a viajeros solitarios en la selva, causando vómitos y muerte. Advierte sobre los peligros de la noche y el respeto al inframundo maya...",
    detalle: `En los montes de la antigua tierra maya, se dice que existe una criatura llamada El Boop, La Bestia Fétida. No corre ni ruge como otros animales, pero su presencia se anuncia por un olor tan fuerte y repulsivo que aterra a quien lo percibe.

El Boop es un espíritu atrapado en el cuerpo de un animal, similar a un cerdo salvaje cubierto de lodo y heridas. Su misión es proteger la selva y alejar a los intrusos. Cuando aparece, la selva queda en completo silencio, y el hedor es tan intenso que quien lo respira se pierde o cae debilitado.

Los antiguos sabían que, si olían este olor, debían retroceder, ya que el Boop no ataca por hambre, sino para advertir a los que desafiaban la selva. Se cuenta que un cazador, al ignorar esta advertencia, encontró al Boop en el monte y nunca más se le vio.

Hoy, se dice que el Boop sigue caminando por los montes, esperando a aquellos que ignoran su aviso.
`,
    img: "./public/assets/img/Boop.png"
  },

];

// ================= MODAL "LEER MÁS" =================
const leerMasBtn = document.querySelector(".leyendas .leer-mas");
const modalLeyenda = document.getElementById("modal-leyenda");
const modalTitle = modalLeyenda?.querySelector(".modal-leyenda__title");
const modalText = modalLeyenda?.querySelector(".modal-leyenda__text");
const modalClose = modalLeyenda?.querySelector(".modal-leyenda__close");
const modalOverlay = modalLeyenda?.querySelector(".modal-leyenda__overlay");
// Obtener referencia a la imagen dentro del modal
const modalImg = modalLeyenda?.querySelector(".modal-leyenda__img");

// función para abrir modal con cualquier data
const abrirModalLeyenda = (data) => {
  if (!modalLeyenda || !modalTitle || !modalText || !modalImg) return;

  modalTitle.textContent = data.titulo;
  modalText.innerHTML = data.detalle;
  modalImg.src = data.img || "";
  modalLeyenda.classList.add("is-open");
  document.body.classList.add("modal-open");
};

// Botón "Leer más" de LEYENDAS
if (leerMasBtn) {
  leerMasBtn.addEventListener("click", () => {
    const data = leyendasInfo[indexLeyenda] || leyendasInfo[0];
    abrirModalLeyenda(data);
  });
}

// Cerrar modal
[modalClose, modalOverlay].forEach(el => {
  if (!el) return;
  el.addEventListener("click", () => {
    modalLeyenda.classList.remove("is-open");
    document.body.classList.remove("modal-open"); // <<< AÑADIDO
  });
});









// ================= SLIDER DE LEYENDAS =================
const leyendasSlider = document.querySelector(".leyendas .slides-L");
const leyendasSlides = leyendasSlider ? leyendasSlider.querySelectorAll(".slide-L") : [];
const leyendasBtn = document.querySelector(".leyendas .boton-slide .btn");

const leyendaTitulo = document.querySelector(".leyendas .col-L2 .subtitulo");
const leyendaDescripcion = document.querySelector(".leyendas .col-L2 .descripcion");

// index global para usarlo también en el modal
let indexLeyenda = 0;

// Estado inicial
if (leyendasInfo.length > 0 && leyendaTitulo && leyendaDescripcion) {
  leyendaTitulo.textContent = leyendasInfo[0].titulo;
  leyendaDescripcion.textContent = leyendasInfo[0].descripcion;
}


// Controlador por botón
if (leyendasSlider && leyendasSlides.length > 0 && leyendasBtn) {

  leyendasBtn.addEventListener("click", () => {

    indexLeyenda = (indexLeyenda + 1) % leyendasSlides.length;

    // Cambiar imagen
    leyendasSlider.style.transform = `translateX(-${indexLeyenda * 100}%)`;

    // Cambiar texto
    leyendaTitulo.textContent = leyendasInfo[indexLeyenda].titulo;
    leyendaDescripcion.textContent = leyendasInfo[indexLeyenda].descripcion;
  });
}









/// =========== SECCIÓN PARA ARTESANÍAS =======!!!!!!!!

// Datos de las artesanías por categoría
const artesaniasData = {
  "textiles-bordados": {

    items: [
      {
        img: "./public/assets/img/telar-cintura.jpg",
        title: "Telar de cintura",
        description: `Herencia directa de los mayas precolombinos, consiste en un telar amarrado a la cintura de la tejedora y a un árbol o poste.`
      },
      {
        img: "./public/assets/img/teñido-natural.jpg",
        title: "Teñido natural",
        description: `Pigmentos naturales: achiote, añil, cochinilla, jabín y guayacán.`
      },
      {
        img: "./public/assets/img/Hilos-Telas.jpg",
        title: "Hilos y telas",
        description: `Se usa algodón hilado a mano, hilos de seda, lino o mezclas sintéticas 
        según la pieza.`
      },
      {
        img: "./public/assets/img/Hipil.jpg",
        title: "Huipiles",
        description: `Prendas femeninas tradicionales, con bordados que representan flores, 
        animales, cruces solares y grecas geométricas. `
      },
      {
        img: "./public/assets/img/Blusas-Faldas.jpg",
        title: "Blusas y faldas bordadas",
        description: `Adaptaciones modernas del huipil, usadas en festividades 
        o vendidas al turismo. `
      },
      {
        img: "./public/assets/img/Rebozos-Manteles.jpg",
        title: "Rebozos y manteles",
        description: `Tejidos en telar, utilizados tanto en la vida diaria como en 
        rituales religiosos.`
      },
      {
        img: "./public/assets/img/Bolso.jpg",
        title: "Bolsos",
        description: `Elaborados para uso doméstico y venta 
        artesanal.`
      },
      {
        img: "./public/assets/img/Servilleta.jpg",
        title: "Servilletas",
        description: `Elaborados para uso doméstico y venta 
        artesanal.`
      },
      {
        img: "./public/assets/img/Caminos-mesa.jpg",
        title: "Caminos de mesa",
        description: `Elaborados para uso doméstico y venta 
        artesanal.`
      },
    ]
  },

  "tallado-madera": {

    items: [
      {
        img: "./public/assets/img/Tronco.jpg",
        title: "Materiales",
        description: `Los artesanos utilizan maderas nobles de la selva maya, como: 
        • Chicozapote: dura y rojiza, muy usada en utensilios y esculturas. 
        • Tzalam y K’ulché: resistentes y de veta fina. 
        • Cedro y caoba: preferidas para tallas decorativas o muebles pequeños. `
      },
      {
        img: "./public/assets/img/Figuras-madera.jpg",
        title: "Figuras zoomorfas",
        description: `Jaguares, monos, aves y serpientes (símbolos de fuerza o 
        sabiduría). `
      },
      {
        img: "./public/assets/img/Mascaras.jpg",
        title: "Máscaras rituales",
        description: `Utilizadas en danzas tradicionales.`
      },
      {
        img: "./public/assets/img/Objetos-domesticos.jpg",
        title: "Objetos domésticos",
        description: `Cucharones, platos, morteros o muebles rústicos.`
      },
      {
        img: "./public/assets/img/Arte-decorativo.jpg",
        title: "Arte decorativo contemporáneo",
        description: `Inspirado en la selva o los mitos mayas.`
      },

    ]
  },

  "ceramica-alfareria": {

    items: [
      {
        img: "./public/assets/img/Ceramica-Alfareria.jpg",
        title: "Cerámica y alfarería tradicional",
        description: `Desde tiempos prehispánicos, la cerámica fue fundamental en la vida maya: servía 
para almacenar agua, cocinar, guardar semillas y realizar rituales funerarios. 
En la zona de Carrillo Puerto, algunas familias aún practican la alfarería de manera 
tradicional, usando barro de los suelos rojos locales.`
      },
    ]
  },

  "cesteria-palma": {

    items: [
      {
        img: "./public/assets/img/Cesteria.jpg",
        title: "Cestería",
        description: `El tejido con fibras vegetales refleja la armonía del pueblo maya con la selva. Las 
        materias primas son recolectadas de manera sustentable, respetando los ciclos de la 
        naturaleza.`
      },
    ]
  },

  "joyeria-artesanal": {

    items: [
      {
        img: "./public/assets/img/Joyeria_1.jpg",
        title: "Joyería artesanal",
        description: `La joyería maya contemporánea combina elementos naturales y simbólicos. Los 
diseños evocan el esplendor del arte prehispánico, especialmente los adornos usados 
por sacerdotes y nobles mayas`
      },
      {
        img: "./public/assets/img/Joyeria_2.jpg",
        title: "Joyería artesanal",
        description: `Se utilizan semillas silvestres, hueso, conchas, jade, obsidiana, madera, plata y cuerno. 
En algunos talleres se experimenta con resinas ecológicas y metales reciclados. `
      },
      {
        img: "./public/assets/img/Joyeria_3.jpg",
        title: "Joyería artesanal",
        description: `Los motivos suelen representar: 
• El sol y la luna (dualidad de energía). 
• Glifos mayas y símbolos calendáricos. 
• Animales sagrados: jaguar (protección), colibrí (buen augurio), serpiente 
(renovación).`
      },
    ]
  },

  "velas-tradicionales": {

    items: [
      {
        img: "./public/assets/img/Vela-melipona.jpg",
        title: "Velas de miel de melipona",
        description: `La cera de abeja se utilizaba para fabricar velas ceremoniales, que aún hoy se 
elaboran para ofrendas y fiestas religiosas como el Hanal Pixán (Día de Muertos) o 
las celebraciones del Hetzmek. 
Se elaboran de forma manual, enrollando pabilos de algodón y sumergiéndolos 
repetidamente en cera fundida.`
      },
      {
        img: "./public/assets/img/Jabon-melipona.jpg",
        title: "Jabones de miel de melipona maya",
        description: `Los mayas de la península practicaron desde tiempos antiguos la apicultura con la 
abeja melipona (Xunán Kab’), una especie sin aguijón nativa del sureste de México. 
De esta abeja obtenían miel, cera y propóleo, productos fundamentales en la 
economía y en los rituales religiosos prehispánicos.`
      },
      {
        img: "./public/assets/img/Melipocultura.jpg",
        title: "Melipocultura",
        description: `Además de las velas, los artesanos elaboran jabones, bálsamos, cosméticos y 
amuletos a base de miel, cera y propóleos de abeja melipona, siguiendo fórmulas 
tradicionales 
heredadas 
de 
los 
abuelos. 
Estas artesanías son parte del conocimiento etnobotánico maya, donde la 
naturaleza se usa con respeto y propósito medicinal o espiritual. 
`
      },
    ]
  },

  "instrumentos-musicales": {

    items: [
      {
        img: "./public/assets/img/Bombo.jpg",
        title: "Bombo o tunkul: ",
        description: `Hecho de troncos ahuecados de k’ulché o chicozapote, cubiertos 
con piel de venado. `
      },
      {
        img: "./public/assets/img/Tambores.jpg",
        title: "Tambores y tarolas",
        description: `Utilizados en la música maya pax, derivada de la Guerra de 
Castas.`
      },
      {
        img: "./public/assets/img/Violin.jpg",
        title: "Violín tradicional",
        description: `Elaborado con madera local y cuerdas de henequén o tripas de 
animal.`
      },
      {
        img: "./public/assets/img/Maracas.jpg",
        title: "Maracas y sonajas",
        description: `Fabricadas con jícaras secas rellenas de semillas o piedrecillas.`
      },
      {
        img: "./public/assets/img/Flauta.jpg",
        title: "Flautas de carrizo y ocarinas",
        description: `Inspiradas en instrumentos prehispánicos.`
      },
    ]
  },

  "figuras-esculturas": {

    items: [
      {
        img: "./public/assets/img/Esculturas_1.jpg",
        title: "Producción de figurillas y esculturas con piedra y yeso ",
        description: `En las zonas cercanas a ruinas arqueológicas como Tihosuco, Xpichil o Chunyaxché, 
algunos artesanos reproducen figuras inspiradas en el arte escultórico maya 
antiguo, combinando técnicas tradicionales con moldes modernos.`
      },
    ]
  },

  "jicaras-calabazas": {

    items: [
      {
        img: "./public/assets/img/Jicaras_1.jpg",
        title: "Arte en jícaras y calabazas secas ",
        description: `Las jícaras (frutos del árbol Crescentia cujete) han sido utilizadas por siglos para hacer 
utensilios, recipientes y adornos. 
Elaboración 
• Las frutas se secan al sol y se limpian. 
• Se decoran con incisiones, pirograbado o pintura natural. 
• Se barnizan con resina de copal o cera de abeja. 
`
      },
      {
        img: "./public/assets/img/Jicaras_2.jpg",
        title: "Arte en jícaras y calabazas secas ",
        description: `Usos 
• Vasijas para agua o bebidas rituales (como el balché). 
• Cucharones, vasos y jícaras decorativas. 
• Recipientes ceremoniales usados por los jmeen (sacerdotes mayas).`
      },
    ]
  }
};


// 1. Seleccionar tarjetas principales
const artesaniaCards = document.querySelectorAll(".artesanias-grid .artesania-card");

// 2. Elementos del modal
const modalArtesania = document.getElementById("modal-artesania");
const modalArtTitle = modalArtesania.querySelector(".modal-artesania__title");
const modalArtText = modalArtesania.querySelector(".modal-artesania__text");
const modalArtGrid = modalArtesania.querySelector(".modal-artesania__grid");
const modalArtClose = modalArtesania.querySelector(".modal-artesania__close");
const modalArtOverlay = modalArtesania.querySelector(".modal-artesania__overlay");

if (modalArtesania.parentElement !== document.body) {
  document.body.appendChild(modalArtesania);
}

// 3. Evento clic — abrir modal
artesaniaCards.forEach(card => {
  card.addEventListener("click", () => {

    const categoryId = card.getAttribute("data-id");
    const categoryData = artesaniasData[categoryId];

    if (!categoryData) return;

    // Título
    modalArtTitle.textContent = categoryId.replace(/-/g, " ").toUpperCase();

    // Descripción general (si existe)
    modalArtText.textContent = categoryData.descripcion || "";

    // Limpiar grid
    modalArtGrid.innerHTML = "";

    // Crear tarjetas internas
    categoryData.items.forEach(item => {
      const article = document.createElement("article");
      article.classList.add("artesania-card");

      article.innerHTML = `
        <div class="artesania-card__img-contenedor">
          <img src="${item.img}" alt="${item.title}" class="artesania-card__img">
        </div>

        <h3 class="artesania-card__title">${item.title}</h3>
        <p>${item.description}</p>
      `;

      modalArtGrid.appendChild(article);
    });

    // Abrir modal
    modalArtesania.classList.add("activo");
    document.body.classList.add("modal-open");
  });
});


// 4. Cerrar modal
[modalArtClose, modalArtOverlay].forEach(el => {
  el.addEventListener("click", () => {
    modalArtesania.classList.remove("activo");
    document.body.classList.remove("modal-open");
  });
});
