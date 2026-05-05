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
const nextJuegoBtnBack = modalJuegos.querySelector(".modal-juegos__back");
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

// Regresar al juego anterior
nextJuegoBtnBack.addEventListener("click", () => {
  // Sumamos la longitud antes de restar para evitar números negativos
  // y luego aplicamos el módulo.
  juegoActual = (juegoActual - 1 + juegosInfoList.length) % juegosInfoList.length;
  mostrarJuego(juegoActual);
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
    imagen: "./public/assets/img/vm.jpg"
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
 
];

const fiestasBtn = document.querySelector(".hero-fiestas .ver-mas-f");
const modalFiestas = document.getElementById("modal-fiestas");
const modalFiestasTitle = modalFiestas.querySelector(".modal-fiestas__title");
const modalFiestasText = modalFiestas.querySelector(".modal-fiestas__text");
const modalFiestasImg = modalFiestas.querySelector(".modal-fiestas__img");
const nextFiestaBtnBack = modalFiestas.querySelector(".modal-fiestas__back");
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

// Regresar a la fiesta anterior
nextFiestaBtnBack.addEventListener("click", () => {
  // Sumamos la longitud antes de restar para evitar números negativos
  // y luego aplicamos el módulo.
  fiestaActual = (fiestaActual - 1 + fiestasInfoList.length) % fiestasInfoList.length;
  mostrarFiesta(fiestaActual);
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
    detalle: `Hace mucho tiempo, cuando la selva era más densa y el mundo aún guardaba secretos que los hombres no podían comprender, los dioses mayas crearon a los Balames, cuatro poderosos jaguares guardianes. No eran simples animales: eran espíritus antiguos, nacidos del corazón de la tierra y del cielo nocturno, destinados a proteger a los pueblos y mantener el equilibrio entre lo visible y lo oculto.

Cada Balam vigilaba un punto cardinal. Uno custodiaba el oriente, donde nace el sol; otro el poniente, donde muere la luz; el tercero guardaba el norte, frío y misterioso; y el último protegía el sur, profundo y lleno de vida. Juntos formaban un círculo invisible que rodeaba a los hombres, aunque pocos podían percibirlo.

Se decía que al caer la noche, cuando el viento dejaba de moverse y la selva quedaba en silencio absoluto, los Balames despertaban. Sus ojos brillaban entre la oscuridad como brasas encendidas, y su caminar no dejaba huella alguna. Nadie podía verlos con claridad… pero todos podían sentirlos.

Los ancianos contaban que si un intruso, un espíritu maligno o un hombre con malas intenciones se adentraba en la selva, un rugido profundo retumbaba en la distancia. No era un sonido común: era un eco que parecía venir de todas partes al mismo tiempo. Quienes lo escuchaban sabían que debían retroceder… porque el Balam ya los había encontrado.

Los campesinos, conscientes de su presencia, dejaban ofrendas de maíz, velas y copal en los bordes de sus milpas. No lo hacían por miedo, sino por respeto. Sabían que los Balames cuidaban sus cultivos, alejaban a los depredadores y protegían a sus familias mientras dormían.

Sin embargo, no todos comprendían su poder.

Se cuenta que un hombre arrogante, que no creía en las antiguas historias, decidió internarse en la selva una noche sin pedir permiso. Caminó durante horas, ignorando el silencio extraño que lo rodeaba… hasta que el aire cambió. Un olor húmedo y pesado lo envolvió, y el sonido de sus propios pasos dejó de escucharse.

Entonces lo vio.

Dos ojos brillando entre los árboles.

El hombre intentó correr, pero sus piernas no respondieron. El rugido que escuchó no fue fuerte… fue profundo, como si viniera desde dentro de la tierra misma. Nadie volvió a verlo.

Desde entonces, los mayas dicen que los Balames no solo protegen… también castigan.

Con el paso del tiempo, su figura dejó de ser solo la de un jaguar y se convirtió en símbolo de fuerza, sabiduría y guía espiritual. Hoy en día, muchos creen que cada persona tiene un Balam que la acompaña, observando en silencio, protegiéndola en los momentos más oscuros, especialmente cuando se adentra en la selva… o en su propio destino.

Y aunque ya no todos pueden verlos, hay quienes aseguran que, en noches muy tranquilas, cuando todo parece detenerse…

todavía se escuchan sus pasos.
`,
    img: "./public/assets/img/leyenda-balam2.jpg"
  },
  {
    titulo: "La Xtá’abay: La mujer seductora de la selva",
    descripcion: "Esta es una de las leyendas más conocidas en la zona maya de Quintana Roo, narrada en pueblos como Felipe Carrillo Puerto, Lázaro Cárdenas, Tulum y José María Morelos. ",
    detalle: `Dicen los abuelos que, cuando la luna llena se alza sobre la selva y el aire se vuelve pesado y silencioso, hay algo que despierta entre los árboles…

La llaman Xtá’abay.

No llega con ruido ni con pasos apresurados. Aparece lentamente, como si la noche misma tomara forma de mujer. Es hermosa, imposible de ignorar. Su piel parece brillar bajo la luz de la luna, y viste un hipil tan ligero que se mueve con el viento como si fuera parte de la niebla. Sentada bajo un yaxche’, la ceiba sagrada, se peina con espinas de cactus venenoso, sin mostrar dolor, como si su cuerpo no perteneciera del todo a este mundo.

Los hombres que la ven —especialmente aquellos que han bebido de más o que cargan culpas en el corazón— sienten cómo algo los llama. No es su voz… es algo más profundo. Una atracción que no pueden explicar.

—Ven… —parece susurrar el viento.

Y ellos van.

Pero hay algo que no todos notan… hasta que es demasiado tarde.

Sus pies.

Uno tiene forma de pezuña de chivo, el otro de pata de pavo. Y al caminar, produce un sonido seco y extraño…

“tsss’ tak… tsss’ tak…”

Quienes alcanzan a escucharlo sienten un escalofrío recorrerles la espalda. Pero para entonces, ya no pueden detenerse.

La Xtá’abay los guía hacia lo más profundo de la selva, donde la luz ya no entra y los caminos desaparecen. Allí, en una cueva oculta, cumple su destino: abrazar a sus víctimas en un acto que mezcla deseo y muerte… hasta que su aliento se apaga para siempre.

Nadie regresa.

Pero esta historia no comenzó con un espíritu… sino con dos mujeres.

Hace mucho tiempo vivían x k’eban, conocida por su vida “pecadora” pero con un corazón generoso, y utz kó’olel, admirada por su aparente virtud, aunque fría y egoísta por dentro. Cuando murieron, algo extraño ocurrió: del cuerpo de x k’eban nació una flor dulce y fragante, el xtabentún, mientras que del de utz kó’olel brotó una planta espinosa, amarga y venenosa.

Los dioses habían revelado la verdad.

Y de esa oscuridad nació la Xtá’abay.

Un espíritu de engaño, belleza y castigo.

Los antiguos sabían cómo protegerse. Decían que no debías caminar solo en la noche, ni dejarte dominar por el alcohol o los malos deseos. Y si alguna vez la veías… debías tener el valor de enfrentarla.

Tres golpes.

Tres cintarazos.

Solo así su belleza se rompería, revelando su verdadera forma: una serpiente que huye entre la maleza.

Hoy en día, en lugares como Felipe Carrillo Puerto, aún se cuentan estas historias. Algunos aseguran haber escuchado ese sonido en la selva… otros dicen haber sentido su presencia sin verla.

Y hay quienes juran que, si te quedas en silencio bajo la luna…

puedes escucharla llamarte.
`,
    img: "./public/assets/img/Xtabay_2.png"
  },
  {
    titulo: "La Cruz Parlante: El símbolo de la resistencia maya",
    descripcion: "Esta leyenda histórica surge durante la Guerra de Castas (1847-1901), un levantamiento maya contra la opresión en Quintana Roo.",
    detalle: `En lo profundo de la selva, donde el agua brota silenciosa de la tierra y los árboles guardan secretos antiguos, ocurrió un suceso que cambiaría para siempre el destino del pueblo maya.

Cuentan que, cerca de un manantial en lo que hoy es Felipe Carrillo Puerto —entonces conocido como Chan Santa Cruz—, un hombre llamado José María Barrera encontró un árbol de cedro distinto a todos los demás. No era más alto ni más frondoso… pero algo en él parecía observarlo.

Movido por una fuerza que no comprendía, tomó un cuchillo y talló en su corteza una cruz.

Lo que ocurrió después no tuvo explicación.

Con el paso de los días, el árbol comenzó a crecer de forma extraña. Su tronco se expandió, envolviendo la cruz, como si la estuviera protegiendo… o dándole vida. Y entonces, una noche, cuando el silencio de la selva era absoluto…

la cruz habló.

No con una voz humana, sino con un susurro profundo que parecía surgir del viento, del agua, de la tierra misma. Un mensaje que solo algunos podían escuchar, pero que todos podían sentir.

Pronto, los rebeldes mayas comenzaron a reunirse alrededor de ella. Decían que la cruz les daba instrucciones, que les advertía de peligros, que les indicaba cuándo avanzar y cuándo resistir. Sus palabras eran transmitidas por hombres como Barrera y Manuel Nahuat, quienes se convirtieron en sus intérpretes.

La cruz dejó de ser un símbolo… y se convirtió en guía.

Tallada después en madera de caoba, pequeña pero poderosa, se transformó en un oráculo sagrado. Bajo su presencia, nació un gobierno distinto, uno donde lo divino y lo humano se entrelazaban. Un gobierno guiado no por reyes… sino por la voluntad de la cruz.

Se decía que otorgaba protección en la batalla, legitimidad a los líderes y sabiduría para enfrentar al enemigo. Su poder no solo venía de la fe católica, sino también de las raíces más profundas del mundo maya: la ceiba sagrada, el maíz, la conexión con los ancestros.

Entre quienes creyeron en ella estuvo María Petrona Uicab, sacerdotisa que consultaba el oráculo y transmitía sus mensajes. Para muchos, la cruz no solo hablaba… sino que elegía.

Pero no todos aceptaron su poder.

Con el tiempo, el ejército mexicano avanzó hasta tomar Chan Santa Cruz en 1901. Sin embargo, aunque el territorio fue conquistado, la voz de la cruz nunca fue silenciada.

Porque lo que había nacido en aquel manantial no era solo un objeto… era una creencia.

Hoy en día, la Cruz Parlante sigue siendo venerada en su santuario. Cada 3 de mayo, las personas se reúnen para honrarla, encender velas y escuchar, en medio del murmullo del viento…

si aún queda algo de su voz.

Y hay quienes aseguran que, si uno guarda silencio suficiente…

la cruz todavía responde.`,
    img: "./public/assets/img/CruzParlante_2.png"
  },
  {
    titulo: "Los Aluxes: Los guardianes traviesos de la naturaleza",
    descripcion: "Los aluxes (aluxo’ob en maya) son pequeños duendes de la mitología maya, altos como hasta las rodillas, vestidos como antiguos mayas.",
    detalle: `En lo más profundo de la selva maya, donde la luz apenas logra atravesar las copas de los árboles y el silencio se siente vivo, habitan seres que pocos han visto… pero muchos han sentido.

Los llaman aluxes.

Son pequeños, apenas del tamaño de un niño, pero no deben ser subestimados. Viven ocultos en grutas, entre raíces de árboles antiguos y en las profundidades de cenotes que parecen no tener fondo. La mayoría del tiempo son invisibles, moviéndose entre el mundo de los hombres y el del Xibalbá, el inframundo maya.

Pero cuando lo desean… pueden aparecer.

Se dice que los aluxes fueron creados hace siglos por sacerdotes mayas, quienes moldeaban figuras con barro, miel y flores sagradas. Mediante rituales y palabras antiguas, les daban vida. No eran simples juguetes ni espíritus cualquiera… eran guardianes.

Guardianes de la tierra.

Protegen las milpas, hacen crecer el maíz y llaman a la lluvia cuando la sequía amenaza. Si un campesino les deja ofrendas —comida, maíz, miel o incluso pequeñas casas— los aluxes cuidan sus tierras como si fueran propias. Nadie roba, nadie daña… porque ellos vigilan.

Pero no todo es protección.

También son traviesos.

Si alguien entra en su territorio sin permiso, comienzan las señales: piedras que se mueven solas, pasos que se escuchan detrás de ti, susurros que no puedes entender. Y si el visitante ignora estas advertencias… las cosas empeoran.

Accidentes inexplicables. Enfermedades repentinas. Ruidos en la noche que no dejan dormir.

Dicen que los aluxes no atacan por maldad… sino por respeto.

En Quintana Roo, una historia es repetida una y otra vez: la del puente en Cancún. Cada vez que intentaban construirlo, algo fallaba. Estructuras que caían, materiales que desaparecían, trabajadores que escuchaban risas en la oscuridad. Hasta que alguien comprendió…

ese lugar ya tenía dueños.

Solo cuando les construyeron una pequeña casa, un santuario para ellos, los problemas cesaron. Desde entonces, el puente permanece en pie.

Los ancianos aconsejan: si vas a entrar a la selva, pide permiso. Habla en voz baja. Deja una ofrenda.

Porque nunca sabes quién te está observando.

Y hay quienes aseguran que, si te detienes en completo silencio, puedes escuchar risitas suaves entre los árboles…

como si alguien pequeño corriera cerca de ti… pero sin dejar huellas.
`,
    img: "./public/assets/img/Aluxes.png"
  },
  {
    titulo: "El Huay Chivo: El brujo transformado en bestia",
    descripcion: "Esta leyenda de terror maya habla de un hechicero que se transforma en un ser mitad hombre, mitad chivo, con ojos rojos, pelo negro y cuernos...",
    detalle: `
    Dicen que hay criaturas que no nacen… se hacen.

En los caminos solitarios, donde la selva se cierra y la noche cae sin aviso, los viajeros han contado historias de una presencia que no se ve… pero se siente antes de aparecer.

Un olor.

Fuerte. Pesado. Como azufre quemado.

Y luego… el silencio.

Los animales dejan de moverse, el viento se detiene… y algo comienza a acercarse.

Lo llaman Huay Chivo.

Una bestia que camina entre dos mundos. Mitad hombre, mitad chivo. Ojos encendidos en la oscuridad, cuerpo cubierto de sombras y un aliento que anuncia desgracia. Se dice que ataca a quienes vagan solos por la noche: viajeros, ganado… o aquellos que han traicionado, engañado o cargan culpas en el alma.

Pero en los alrededores de Felipe Carrillo Puerto, la historia toma un giro aún más inquietante.

Había una vez un curandero llamado Don Eustaquio. Era respetado, buscado por muchos por sus remedios, sus rezos y su aparente conexión con lo espiritual. Sanaba enfermedades, quitaba males… y hablaba con fuerzas que pocos entendían.

Pero no todo era lo que parecía.

Un joven del pueblo, movido por la curiosidad, decidió seguirlo una noche de luna llena. Caminó en silencio entre los árboles, ocultándose entre sombras, hasta que vio algo que jamás podría olvidar.

Don Eustaquio se detuvo.

El aire cambió.

Su cuerpo comenzó a retorcerse, sus huesos crujieron como ramas secas… y su figura humana se deformó hasta convertirse en algo monstruoso. Sus ojos brillaron, su espalda se encorvó… y un hedor insoportable llenó el aire.

El curandero había desaparecido.

En su lugar… estaba el Huay Chivo.

El joven huyó, pero no antes de escuchar un gruñido que parecía perseguirlo desde la oscuridad misma. Cuando contó lo sucedido, el pueblo no dudó. Sabían que algo estaba mal.

Esa misma noche, lo confrontaron.

Don Eustaquio no negó nada.

Dicen que sus ojos ya no eran los mismos… que hablaba con una voz que no parecía suya. Antes de que pudieran hacer algo, escapó hacia la selva, perdiéndose en la espesura hasta llegar a un cenote profundo.

Ahí, acorralado, lanzó una maldición.

Su voz resonó entre las piedras y el agua:

—Nadie que me busque aquí encontrará paz…

Y desapareció.

Desde entonces, durante las noches de tormenta, cuando el cielo ruge y el viento sacude los árboles, hay quienes aseguran escuchar un aullido. No es de perro, ni de cabra… es algo más.

Algo que duele al escucharlo.

Los ancianos advierten: no confíes en todo curandero. No invoques lo que no entiendes. Y nunca sigas un sonido extraño en la noche.

Porque hay cosas que, una vez que te encuentran…

ya no te sueltan.
`,
    img: "./public/assets/img/Huay-Chivo.png"
  },
  {
    titulo: "Los hermanos Kinich y Tizic: El origen del Chechén y el Chacá",
    descripcion: "Esta leyenda, narrada por habitantes de Felipe Carrillo Puerto como Gregorio Canchén, se ambienta en la selva de Quintana Roo y explica el equilibrio natural entre el bien y el mal...",
    detalle: `Hace mucho tiempo, cuando los dioses aún caminaban entre los hombres y la selva susurraba secretos al viento, existieron dos príncipes guerreros cuyo destino estaba entrelazado desde antes de nacer.

Sus nombres eran Kinich y Tizic.

Kinich era amado por su pueblo: valiente, justo y de corazón noble. Su presencia inspiraba paz, y su palabra era tan firme como la tierra misma. Tizic, en cambio, era fuerte y temido. Orgulloso, impulsivo y consumido por su propio poder, no aceptaba ser inferior a nadie.

Ambos compartían algo más que sangre y rivalidad…

Compartían el amor por una misma mujer.

Su nombre era Nicté-Ha, cuya belleza era tan pura que parecía haber sido creada por los dioses mismos. Su voz era suave como el agua y su mirada calmaba incluso al más feroz de los guerreros.

Pero el amor… se convirtió en guerra.

La tensión entre los príncipes creció como una tormenta a punto de estallar. Ninguno estaba dispuesto a ceder, ninguno aceptaba perder. Así, una noche, bajo la mirada silenciosa de la luna, decidieron resolver su destino de la única forma que conocían:

con un duelo a muerte.

El combate fue feroz.

Espadas chocaron, la tierra se levantó bajo sus pies y el aire se llenó de furia. Kinich luchaba con honor… Tizic, con rabia. Ninguno retrocedió. Ninguno dudó.

Hasta que, en un último golpe, ambos cayeron.

La selva quedó en silencio.

Nicté-Ha, al verlos, lloró con un dolor que atravesó los cielos. Sus lágrimas tocaron la tierra… y los dioses escucharon.

En el inframundo, las almas de Kinich y Tizic despertaron. Frente a ellos, las deidades observaron su destino marcado por el amor y el odio.

—Denos otra oportunidad —suplicaron—. Solo queremos verla una vez más.

Los dioses, sabios y severos, aceptaron… pero con una condición.

Regresarían al mundo de los vivos.

Pero no como hombres.

Y jamás volverían a separarse.

Así, Tizic fue transformado en el árbol chechén, oscuro y peligroso, cuya savia quema la piel y deja heridas profundas. Su esencia seguía siendo la misma: intensa, hiriente, dominada por su propio veneno.

Kinich, en cambio, se convirtió en el árbol chacá, de corteza clara y espíritu sanador. Su savia tiene el poder de curar las heridas del chechén, como si su bondad aún intentara equilibrar el daño de su antiguo rival.

Desde entonces, en lo profundo de la selva, ambos árboles crecen siempre uno junto al otro.

Inseparables.

Eternos.

Como si incluso después de la muerte, su historia se negara a terminar.

Los mayas aprendieron a reconocerlos, a respetarlos. Sabían que no podían tocar uno sin considerar al otro. Que el daño y la cura, el bien y el mal… siempre coexistían.

Y aún hoy, cuando alguien se adentra en la selva y encuentra un chechén, no tarda en descubrir que, muy cerca…

el chacá también está ahí.

Esperando.`,
    img: "./public/assets/img/Kinich-Tizic_2.png"
  },
  {
    titulo: "La leyenda de Jacinto Pat: El guerrero protegido por la Cruz",
    descripcion: "Originaria de comunidades como Tihosuco y Chumpon, cerca de Felipe Carrillo Puerto, esta historia heroica de la Guerra de Castas (1847-1901) retrata a Jacinto Pat como un líder invulnerable...",
    detalle: `En tiempos de guerra, cuando la selva ardía en silencio y el miedo caminaba junto a los hombres, surgió una figura que muchos no sabían si llamar guerrero… o leyenda.

Su nombre era Jacinto Pat.

Pero entre sus enemigos, tenía otro nombre.

Lo llamaban “el tigre”.

Decían que no peleaba como un hombre común. Que algo lo protegía. Que algo lo guiaba. Mientras otros caían en combate, él avanzaba sin temor, como si la muerte no pudiera tocarlo.

Los ancianos aseguraban que estaba bajo la protección de la Santísima Cruz, y que poseía el poder del way, la capacidad de transformarse, de volverse más que humano cuando la batalla lo exigía.

Una noche, marcada por la oscuridad y la sangre, su nombre se volvió imposible de olvidar.

El cielo estaba cubierto, la selva en completo silencio. Sus enemigos avanzaban confiados, seguros de su número… sin saber que ya estaban siendo observados.

Entonces ocurrió.

Como una sombra entre los árboles, Jacinto Pat apareció. Su machete brilló apenas con la poca luz… y lo que siguió fue tan rápido como brutal. Uno tras otro, sus enemigos cayeron sin entender de dónde venían los ataques.

Se dice que esa noche…

cortó más de sesenta cabezas.

Y no recibió ni una sola herida.

Algunos juraron haber visto algo más. No solo a un hombre… sino a una figura que se movía con velocidad imposible, que desaparecía y reaparecía entre la selva, como si no perteneciera del todo a este mundo.

El miedo comenzó a crecer.

Pero Jacinto Pat no solo peleaba… también pensaba.

En las rutas hacia Bacalar y Ascensión, comenzó a tender trampas. Creaba falsos campamentos, dejaba rastros engañosos, enterraba cuerpos en pib, los hornos tradicionales, haciendo creer a los soldados que se enfrentaban a algo más oscuro… algo que no seguía las reglas humanas.

El rumor se esparció:

—No es un hombre… es algo más.

Los enemigos comenzaron a temer a la selva misma. Cada árbol, cada sombra… podía ocultarlo.

Porque Jacinto Pat no solo luchaba por la guerra.

Luchaba por su pueblo.

Por su libertad.

Por algo más grande que él.

Y en cada paso, en cada emboscada, en cada golpe de machete… creía estar guiado por una fuerza divina que lo protegía.

Con el tiempo, su figura se volvió historia… y la historia, leyenda.

Hoy en día, algunos dicen que su espíritu aún recorre los caminos antiguos. Que en las noches más oscuras, cuando la selva se queda en silencio…

puede sentirse una presencia vigilando.

Como si el “tigre” nunca hubiera dejado de pelear.`,
    img: "./public/assets/img/Jacinto-Pat.png"
  },
  {
    titulo: "La leyenda de la violación de la hija de Cecilio Chi: El detonante de la Guerra de Castas",
    descripcion: "Esta narración fundacional se cuenta en Tihosuco, Chetumal y Nohbec, cercanas a Felipe Carrillo Puerto, y explica el inicio de la rebelión maya...",
    detalle: `La noche caía pesada sobre la selva, y el silencio no era paz… era advertencia. Entre los árboles antiguos, donde el viento apenas se atrevía a pasar, comenzó a correr un susurro que encendería la furia de todo un pueblo.

Se decía que un sacerdote, enviado para “educar” y guiar, había cometido un acto imperdonable: abusó de la hija de un gran líder maya, ya fuera de Cecilio Chi o, en otras versiones, de Jacinto Pat. La joven, entregada con confianza, fue traicionada en lo más profundo de su dignidad. Pero la selva no olvida… y el pueblo maya tampoco.

Cuando la verdad salió a la luz, no hubo gritos innecesarios ni discusiones largas. Solo una decisión firme, nacida del dolor y del honor. Bajo el cielo oscuro, un grupo de hombres se reunió, con los ojos encendidos por la rabia contenida. No buscaban venganza… buscaban justicia.

El sacerdote fue llevado hasta un sitio que con el tiempo sería conocido como Polenk’in, “la cabeza del cura”. Ahí, entre sombras y antorchas temblorosas, su destino quedó sellado. El machete descendió en un instante que partió no solo carne, sino también el dominio de una autoridad impuesta. Su cabeza fue separada de su cuerpo como símbolo de lo que ya no sería tolerado.

Dicen que esa noche la selva rugió. Que los árboles crujieron como si aprobaran el acto. Que la tierra misma absorbió la sangre como testigo de una justicia antigua, más vieja que cualquier iglesia.

A partir de ese momento, el hecho no quedó como un simple castigo, sino como una chispa. Un fuego que se extendió entre los mayas, alimentando el levantamiento contra los dzules, los extranjeros que habían traído opresión y abuso. La Iglesia, que antes imponía temor, comenzó a perder su poder frente a la fe en la Santísima Cruz, símbolo de resistencia y guía espiritual del pueblo.

Hasta hoy, quienes conocen esta historia dicen que no es solo una leyenda… es un recordatorio. Un eco que advierte que la dignidad no se negocia, que la tierra protege a los suyos, y que cuando la injusticia cruza el límite, la selva misma se levanta para reclamar equilibrio.

Y hay quienes aseguran que, si pasas por Polenk’in en una noche sin luna, el viento susurra entre los árboles… como si aún recordara aquel momento en que la justicia cayó, rápida y definitiva.`,
    img: "./public/assets/img/Cecilio-Chi.png"
  },
  {
    titulo: "La historia de Bernardino Ken y Florentino Cituk",
    descripcion: "Proveniente de relatos orales en Noh Kah Balam Na (Felipe Carrillo Puerto) y Vigía Chico, esta leyenda describe la tenaz oposición de Ken y Cituk contra el general Bravo a inicios del siglo XX...",
    detalle: `La historia de Bernardino Ken y Florentino Cituk no se cuenta en voz alta en cualquier lugar. Dicen que sólo debe narrarse cuando la noche es espesa y el viento parece susurrar entre los árboles, como si aún guardara memoria de lo ocurrido.

Hace muchos años, cuando la tierra ardía de injusticia y el pueblo maya luchaba por su libertad, Bernardino Ken y Florentino Cituk reunieron a cien hombres valientes. No eran soldados comunes: eran hombres marcados por la fe, por la desesperación y por una extraña certeza de que algo más grande los guiaba.

Se ocultaban en cuevas profundas, donde la luz apenas tocaba las paredes y el eco deformaba las voces. Allí, en la oscuridad, comenzaron a recibir lo que juraban eran mensajes divinos. Decían que venían del cielo, susurrados en sueños o escuchados como un murmullo en el silencio absoluto. Algunos afirmaban haber visto señales: luces en la noche, sombras que se movían sin dueño, o símbolos grabados en piedra que nadie recordaba haber hecho.

Convencidos de que estaban protegidos por fuerzas sagradas, iniciaron actos de sabotaje contra los trenes que cruzaban sus tierras. Usaban dinamita, pero antes de cada explosión, rezaban. Rezaban con fervor, con miedo, con la esperanza de que ninguna bala los alcanzaría mientras su fe se mantuviera firme. Y por un tiempo… parecía funcionar. Las historias cuentan que salían ilesos, como si algo invisible desviara el peligro.

Pero toda leyenda tiene su precio.

Poco a poco, algo comenzó a cambiar. Los mensajes se volvieron más oscuros, más urgentes, como advertencias de un destino inevitable. Algunos hombres empezaron a dudar, otros se aferraron aún más a su fe, convencidos de que una gran prueba estaba por llegar.

Y entonces llegó.

Una enfermedad silenciosa, cruel, comenzó a extenderse entre ellos. La llamaron viruela negra. No hacía ruido como las explosiones ni dejaba huellas visibles al principio, pero avanzaba sin detenerse. Uno por uno, los hombres fueron cayendo. Las oraciones se volvieron más desesperadas, más intensas… pero el mal no se detenía.

Las cuevas, que antes eran refugio, se transformaron en tumbas.

Se dice que al final, casi nadie quedó en pie. Sólo unos pocos sobrevivieron, a quienes llamaron “la semilla”, los destinados a mantener viva la memoria y la lucha en las generaciones futuras.

Hasta hoy, algunos aseguran que si te adentras en ciertas cuevas y guardas silencio, puedes escuchar rezos lejanos… o incluso el eco de una explosión que nunca termina.

Y hay quienes creen que los mensajes del cielo… nunca dejaron de llegar.`,
    img: "./public/assets/img/Bernardino_Ken-Florentino_Cituk.png"
  },
  {
    titulo: "El tesoro arqueológico de los aluxes",
    descripcion: "En esta leyenda, asociada a comunidades rurales de Quintana Roo, un hombre llamado Santiago entra en una gruta durante excavaciones y...",
    detalle: `En algunas comunidades rurales de Quintana Roo, se cuenta una historia que pocos se atreven a repetir cuando cae la noche. Dicen que no es un simple relato, sino una advertencia que ha pasado de generación en generación.

Hace años, un hombre llamado Santiago participaba en unas excavaciones cerca de la selva. Era conocido por su valentía, pero también por su curiosidad desmedida. Una tarde, mientras el sol comenzaba a ocultarse, descubrió la entrada a una gruta oculta entre raíces y piedra, como si la misma tierra intentara esconderla.

Impulsado por algo que no supo explicar, decidió entrar.

Dentro, el aire era frío y pesado. Cada paso que daba parecía despertar ecos antiguos. Fue entonces cuando los vio: pequeñas figuras que se movían entre las sombras. Eran los aluxes, guardianes traviesos y misteriosos de la tradición maya. No hablaban con palabras, pero Santiago entendía sus intenciones, como si le susurraran directamente en la mente.

Lo guiaron a lo más profundo de la gruta.

Ahí encontró un tesoro oculto desde tiempos antiguos: figuras de jade y barro, perfectamente conservadas, alineadas como si aún esperaran ser protegidas. Pero no estaban solas. Enroscada alrededor del tesoro, inmóvil y silenciosa, yacía una serpiente. Sus ojos brillaban en la oscuridad, vigilantes, como si hubiera esperado ese momento durante siglos.

Santiago dudó… pero la tentación fue más fuerte.

Tomó las piezas y salió de la gruta, convencido de que había sido elegido para encontrarlas. Durante días, repartió las figuras entre conocidos, vendió algunas y guardó otras, ignorando las advertencias que parecían perseguirlo en sueños.

Entonces comenzaron las noches.

Una de las figuras… cambió.

Al principio fue un ligero movimiento, casi imperceptible. Luego, sonidos en la oscuridad. Finalmente, quienes dormían cerca juraron ver cómo una de las piezas cobraba vida: se deslizaba como serpiente, recorriendo la casa, observando en silencio. Sus ojos, antes inertes, ahora parecían juzgar.

El miedo creció.

Santiago empezó a enfermar, y las personas que recibieron las figuras también reportaron sucesos extraños: susurros, sombras, pesadillas con la gruta… y con la serpiente.

Los ancianos del lugar no tardaron en entenderlo.

Aquello no era un tesoro, era un legado protegido. Los aluxes no habían guiado a Santiago para recompensarlo, sino para probarlo. Y él había fallado.

Dicen que, con el tiempo, las piezas regresaron misteriosamente a la selva, una por una. Nadie sabe quién las llevó de vuelta… o si regresaron solas.

Desde entonces, la historia se cuenta como advertencia: los lugares sagrados no deben ser perturbados, y los guardianes antiguos no olvidan.

Y hay quienes aseguran que, en noches silenciosas, si te acercas a una gruta… puedes escuchar el leve arrastre de algo que vigila, esperando que alguien más cometa el mismo error.`,
    img: "./public/assets/img/Tesoro_Aluxes.png"
  },
  {
    titulo: "El primer encuentro con los aluxes",
    descripcion: "Esta leyenda, relatada por Gaspar Antonio Xiu Cachón, ocurrió en 1954 en la comunidad de Sabán, Quintana Roo...",
    detalle: `En las comunidades mayas de Quintana Roo, los ancianos suelen advertir a los más jóvenes que no todo lo que habita la selva desea ser visto… y mucho menos seguido.

Cuentan que, hace tiempo, dos niños caminaban cerca del monte al caer la tarde. La luz del sol se filtraba entre los árboles, y el canto de los pájaros comenzaba a apagarse, dando paso a un silencio extraño, casi inquietante. Fue entonces cuando notaron movimiento entre la vegetación.

De entre las sombras salieron dos pequeños seres: eran aluxes. Sus ojos brillaban con una luz difícil de describir, y sus sonrisas parecían amables… pero había algo en ellas que no terminaba de ser humano.

Los aluxes se acercaron sin hacer ruido, como si flotaran sobre la tierra. Con voces suaves, casi como un susurro que se cuela en la mente, invitaron a los niños a acompañarlos. Les prometieron juegos, comida abundante y un lugar secreto donde nunca se aburrirían. Hablaban de su morada como un sitio maravilloso, oculto en lo profundo de la selva, donde el tiempo no existía.

Los niños se miraron entre sí.

La curiosidad los tentaba, pero también recordaban las palabras de sus mayores: “No sigas a quienes no pertenecen a este mundo”. Algo en su interior les decía que debían desconfiar.

Por un momento, el silencio se volvió pesado.

Y entonces, desde la distancia, se escuchó una voz.

Era su hermana, llamándolos con urgencia. Su grito rompió el encanto, como si despertara a los niños de un sueño. Sin pensarlo más, dieron un paso atrás. Los aluxes dejaron de sonreír.

El ambiente cambió.

Los pequeños seres los observaron fijamente, sin moverse, sin parpadear… como si algo en ellos se hubiera quebrado. Los niños, dominados por un miedo repentino, salieron corriendo sin mirar atrás, mientras la voz de su hermana los guiaba de regreso a casa.

Dicen que, al voltear por última vez, uno de ellos alcanzó a ver que los aluxes ya no estaban… o quizá nunca estuvieron donde creían.

Esa noche, los ancianos explicaron lo ocurrido: los aluxes son guardianes de la naturaleza, seres antiguos que protegen la selva. A veces se muestran juguetones, pero también pueden ser peligrosos si alguien cae en su engaño o invade su mundo.

Desde entonces, la historia se repite como advertencia: la curiosidad puede abrir puertas que no deben cruzarse, y no todas las invitaciones deben aceptarse… especialmente cuando provienen de la selva.

Y hay quienes aseguran que, cuando el viento sopla entre los árboles al anochecer, aún se escuchan risas suaves… esperando a que alguien más decida seguirlas.`,
    img: "./public/assets/img/Encuentro-Alux.png"
  },
 {
    titulo: "La Pila de los Azotes: El castigo indígena",
    descripcion: "Más que una leyenda pura, es un relato histórico con tintes míticos de Chan Santa Cruz (actual Felipe Carrillo Puerto).",
    detalle: `En los años oscuros de la Guerra de Castas de Yucatán, cuando la ley no se escribía en papel sino en la memoria del pueblo, existía un lugar del que pocos se atrevían a hablar: la Pila de los Azotes.

Construida en 1918 por el general Francisco May Pech, esta estructura de piedra no era simplemente un objeto, sino un símbolo del orden y del castigo dentro de las comunidades mayas. Allí se hacía cumplir la justicia indígena con un rigor que no dejaba lugar a dudas.

Quienes rompían las normas —adúlteros, desobedientes o aquellos que atentaban contra las costumbres— eran llevados hasta la pila. Frente a la comunidad, se ejecutaba el castigo: cincuenta azotes que caían uno tras otro, marcando no solo la piel, sino también el espíritu. Y como si el dolor no fuera suficiente, las heridas eran bañadas con jugo de naranja agria, intensificando el sufrimiento como recordatorio de la falta cometida.

Dicen que nadie olvidaba aquel castigo.

Con el paso del tiempo, la pila quedó en silencio… o eso parecía.

Los ancianos cuentan que, cuando la noche cae y el viento sopla entre los árboles, algo despierta en ese lugar. Un murmullo apenas perceptible, que poco a poco se transforma en lamentos. Algunos aseguran haber escuchado gritos lejanos, como si el eco de aquellos castigos aún permaneciera atrapado entre las piedras.

Hay quienes afirman que no es solo el viento.

Que son las voces de quienes fueron castigados, repitiendo su dolor una y otra vez, como advertencia para quienes olvidan el respeto a las costumbres y a la ley de sus antepasados.

Pocos se atreven a acercarse a la pila durante la noche. Y los que lo han hecho… rara vez vuelven a hablar de lo que escucharon.

Porque en ese lugar, la justicia no solo dejó huellas en la tierra… sino también en el tiempo.`,
    img: "./public/assets/img/Azotes.png"
  },
  {
    titulo: "Xunaan Tunich: La piedra mujer",
    descripcion: "En Muna (Yucatán, pero con paralelos en Quintana Roo), Saasil Eek, hija de un sacerdote, se enamora de un guerrero enemigo y queda embarazada...",
    detalle: `En lo profundo de la selva de la península, donde la humedad cubre las piedras y el silencio parece guardar secretos antiguos, existe una cueva de la que pocos hablan sin bajar la voz. En ella, dicen, permanece Xunaan Tunich, “la mujer de piedra”.

Cuentan los ancianos que, en tiempos antiguos, cuando las normas sociales eran estrictas y el honor familiar lo era todo, vivía una joven de gran belleza. Su nombre se ha perdido con el tiempo, pero su historia no. Era admirada por todos, pero también vigilada, pues su pureza representaba el orgullo de su linaje.

Un día, su destino cambió.

Los rumores comenzaron a crecer como sombra al atardecer. Palabras sin prueba, miradas acusadoras, susurros que se deslizaban entre la gente. Su propio padre, consumido por la vergüenza y la ira, decidió castigarla de la forma más cruel, convencido de que así limpiaría el honor de su familia.

La llevó a una cueva, lejos de la mirada del pueblo.

Ahí, entre la oscuridad y el eco de la tierra, terminó con su vida. Pero no bastó con eso. En un acto de humillación que desafió incluso a los espíritus, dejó parte de su cuerpo expuesto, como advertencia para quienes osaran desafiar las normas.

Entonces ocurrió algo que nadie pudo explicar.

Con el paso del tiempo, el cuerpo no se descompuso… se petrificó.

La piedra tomó forma humana, conservando rasgos que aún hoy, dicen, parecen demasiado reales. Algunos aseguran que su expresión no es de ira, sino de tristeza profunda, como si aún recordara el momento de su traición.

Desde entonces, la cueva se convirtió en un lugar sagrado y temido. No solo por lo que ocurrió, sino por lo que representa.

Los mayores advierten que Xunaan Tunich no es solo una historia, sino un recordatorio de los conflictos sociales, del peso del honor y de las decisiones impulsadas por el miedo y la vergüenza. Una advertencia silenciosa que permanece inmóvil, pero presente.

Hay quienes aseguran que, si te acercas demasiado y guardas silencio, puedes sentir una extraña presión en el aire… como si alguien te observara. Otros dicen que en ciertas noches húmedas, gotas de agua recorren la piedra como lágrimas.

Y algunos, los más valientes o los más imprudentes, juran que la piedra… no siempre ha estado exactamente en la misma posición.

Por eso, quienes conocen la historia recomiendan respeto. Porque en la selva, hay relatos que no solo se cuentan… se quedan.`,
    img: "./public/assets/img/Piedra-Mujer.png"
  },
  {
    titulo: "El Boop (o Boob): La bestia fétida",
    descripcion: "Una criatura peluda y maloliente que ataca a viajeros solitarios en la selva, causando vómitos y muerte. Advierte sobre los peligros de la noche y el respeto al inframundo maya...",
    detalle: `En los montes profundos de la antigua tierra maya, donde la selva se vuelve tan densa que la luz apenas logra tocar el suelo, existe un relato que pocos se atreven a ignorar. Es la historia del Boop, también llamado “La Bestia Fétida”, una presencia que no necesita mostrarse para ser temida.

A diferencia de otros seres, el Boop no anuncia su llegada con pasos ni rugidos. Su señal es más sutil… y mucho más perturbadora.

Primero llega el silencio.

Las aves dejan de cantar, los insectos desaparecen, y el viento parece detenerse por completo. Es entonces cuando aparece el olor: un hedor espeso, penetrante, imposible de confundir. Un aroma a podredumbre y tierra vieja que se mete en la garganta y hace difícil respirar. Quienes lo han percibido aseguran que no es un simple olor… es una advertencia.

Dicen que el Boop es un espíritu atrapado en la forma de un animal, parecido a un cerdo salvaje, cubierto de lodo seco y heridas que nunca cicatrizan. Sus ojos, ocultos entre la suciedad, observan en silencio, como si juzgaran a quien se atreve a entrar en su territorio.

No caza por hambre.

No persigue por instinto.

El Boop protege.

Los antiguos mayas sabían que, al percibir ese olor, debían retroceder sin dudar. No mirar atrás, no intentar encontrar el origen, no desafiar lo que no debía ser comprendido. Porque quien ignoraba la advertencia… no regresaba igual.

O no regresaba.

Se cuenta que un cazador, confiado en su experiencia, decidió seguir adelante cuando el hedor lo envolvió. Pensó que era solo un animal muerto, algo común en el monte. Pero mientras avanzaba, el silencio se hizo más profundo, casi insoportable.

Entonces lo vio.

Una figura inmóvil entre los árboles, apenas distinguible, como si la selva misma intentara ocultarla. El aire se volvió pesado, y el olor, insoportable. El cazador intentó retroceder… pero ya era tarde.

Nunca volvió.

Algunos dicen que se perdió en la selva, desorientado por el olor. Otros creen que el Boop se lo llevó, no como castigo, sino como ejemplo para los demás.

Hasta hoy, en regiones como Quintana Roo, hay quienes aseguran haber percibido ese hedor en medio del monte. Y todos coinciden en lo mismo: cuando el Boop se anuncia, no hay que buscarlo.

Porque hay advertencias que no están hechas para ser desafiadas.

Y en lo profundo de la selva, la bestia fétida sigue caminando… esperando a que alguien más decida ignorar su aviso.
`,
    img: "./public/assets/img/Boop.png"
  },

];

// ================= MODAL "LEER MÁS" =================
const slidesL = document.querySelectorAll('.slide-L');
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
const leyendasBtnNext = document.querySelector(".leyendas .boton-slide .btnNext");
const leyendasBtnBack = document.querySelector(".leyendas .boton-slide .btnBack");

const leyendaTitulo = document.querySelector(".leyendas .col-L2 .subtitulo");
const leyendaDescripcion = document.querySelector(".leyendas .col-L2 .descripcion");

let indexLeyenda = 0;

if (
  leyendasSlider &&
  leyendasSlides.length > 0 &&
  leyendasBtnNext &&
  leyendasBtnBack &&
  leyendaTitulo &&
  leyendaDescripcion
) {

  leyendasBtnNext.addEventListener("click", () => {
    indexLeyenda = (indexLeyenda + 1) % leyendasSlides.length;
    actualizarSlider();
  });

  leyendasBtnBack.addEventListener("click", () => {
    indexLeyenda = (indexLeyenda - 1 + leyendasSlides.length) % leyendasSlides.length;
    actualizarSlider();
  });

  // 🔥 IMPORTANTE: inicializar
  actualizarSlider();
}

function actualizarSlider() {
  leyendasSlider.style.transform = `translateX(-${indexLeyenda * 100}%)`;

  leyendaTitulo.textContent = leyendasInfo[indexLeyenda].titulo;
  leyendaDescripcion.textContent = leyendasInfo[indexLeyenda].descripcion;
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
