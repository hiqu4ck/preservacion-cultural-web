// Seleccionamos TODOS los contenedores .slides en JUEGOS (SLIDER DE JUEGOOOSSSS!!!)
const JuegoSliders = document.querySelectorAll(".hero-juegos .slides");

JuegoSliders.forEach(slider => {

  const slides = slider.querySelectorAll(".slide");
  let index = 0;

  setInterval(() => {
    index = (index + 1) % slides.length;
    slider.style.transform = `translateX(-${index * 100}%)`;
  }, 3000);

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
    descripcionLarga: `El Pok-ta-pok, también conocido como juego de pelota prehispánico maya, 
es una de las manifestaciones deportivas, rituales y simbólicas más antiguas 
de Mesoamérica, con un origen que se remonta a más de 2,000 años atrás. 
Su práctica estaba estrechamente relacionada con la religión, la política y la 
cosmovisión de los pueblos mayas. 
Este juego se desarrollaba en canchas especiales, conocidas como tlachtli o 
batabil, que tenían forma de pasillo largo y estrecho, con muros laterales 
inclinados. En muchos sitios arqueológicos, como Chichén Itzá o Cobá, estos 
muros presentan anillos o aros de piedra colocados a gran altura, a través de 
los cuales los jugadores debían hacer pasar la pelota. Lograrlo era 
extremadamente difícil y simbolizaba un triunfo espiritual y cósmico. 
Reglas y forma de juego 
La pelota era elaborada con hule macizo (látex natural) obtenido del árbol 
Castilla elastica, mezclado con el jugo del bejuco Ipomoea alba, lo que 
permitía que el material fuera más elástico y resistente. Su peso podía oscilar 
entre 3 y 4 kilogramos, lo que la convertía en un objeto pesado y peligroso. 
Los jugadores, organizados en equipos, no podían usar las manos ni los pies; 
solo se permitía golpear la pelota con las caderas, los muslos, los codos y la 
cabeza. El objetivo era mantenerla en juego el mayor tiempo posible y, en las 
versiones más rituales, hacerla pasar por los anillos de piedra. 
Debido a la dureza del balón y a la fuerza necesaria para impulsarlo, los 
jugadores usaban protectores de cuero o algodón en las caderas y los 
antebrazos. Algunos también portaban cinturones o yugos de madera o 
cuero, y adornos que representaban a los dioses del juego. 
Materiales y proceso de fabricación 
1. Recolección del látex: se obtenía de la savia del árbol de hule (Castilla 
elastica) mediante incisiones controladas en la corteza. 
2. Mezcla con jugo vegetal: se combinaba con jugo de la enredadera Ipomoea 
alba (bejuco) para vulcanizar el material de forma natural. 
3. Amasado y modelado: la masa de hule se moldeaba en forma de esfera y se 
dejaba secar a la sombra. 
4. Ajuste del rebote: según la proporción de ingredientes, se lograban diferentes 
niveles de dureza o elasticidad. 
Este proceso muestra el alto conocimiento químico y técnico de los antiguos 
mayas, quienes descubrieron la vulcanización natural siglos antes de que 
Charles Goodyear la patentara en el siglo XIX. 
Significado religioso y cultural 
Más allá de su carácter deportivo, el Pok-ta-pok tenía un profundo significado 
cosmológico y ritual. Representaba la lucha entre las fuerzas del bien y del 
mal, la vida y la muerte, o incluso el movimiento del sol y los astros en el 
cielo. 
En los mitos del Popol Vuh, los héroes gemelos Hunahpú e Ixbalanqué 
derrotan a los señores del inframundo (Xibalbá) a través de un juego de 
pelota, lo que refuerza su valor simbólico como un acto de renovación del 
mundo y del orden cósmico. 
El juego también cumplía funciones políticas y sociales: se usaba para sellar 
alianzas entre pueblos, resolver conflictos o rendir tributo a los dioses. En 
algunas ocasiones, los partidos podían tener un carácter sacrificial, donde 
los perdedores —o en ciertos mitos, los ganadores— ofrecían su vida como 
ofrenda para mantener el equilibrio del universo. 
En la época colonial 
Durante la conquista y la colonia, el Pok-ta-pok fue prohibido por las 
autoridades españolas, que lo consideraban un rito pagano. Sin embargo, el 
juego no desapareció por completo: se siguió practicando en forma simbólica 
y ritual en varias regiones de Yucatán y Quintana Roo, especialmente en 
comunidades apartadas del control colonial. 
El Pok-ta-pok en Felipe Carrillo Puerto, Quintana Roo 
En la región de Felipe Carrillo Puerto, la herencia del Pok-ta-pok se conserva 
tanto en la memoria colectiva como en los vestigios arqueológicos. 
Cerca de la cabecera municipal se encuentran importantes sitios donde se 
practicaba este juego, como Cobá, Muyil (Chunyaxché), Dzibanché, 
Kohunlich y Tulum, todos dentro del territorio quintanarroense. 
En la actualidad, las casas de cultura y escuelas locales realizan talleres de 
Pok-ta-pok como parte de la enseñanza de las tradiciones mayas, 
fomentando la identidad y el orgullo entre los jóvenes de la comunidad.. 
`,
    imagen: "./public/assets/img/Pok-ta-pok.png"
  },
  {
    titulo: "Bul o Buul",
    descripcionLarga: `El Bul (también conocido como Buul o Puluc) es un juego de azar y estrategia de 
origen maya que combina elementos lúdicos, simbólicos y rituales. Era practicado 
tanto por adultos como por jóvenes, y tenía un profundo significado religioso y 
social dentro de las comunidades mayas. 
El juego consiste en una guerra simbólica entre dos grupos de piezas, donde los 
jugadores deben avanzar sus fichas en un tablero para capturar las del oponente. 
Se utilizaban granos de maíz o frijoles marcados como dados, que determinaban 
el número de movimientos. El tablero podía dibujarse directamente en el suelo o 
en una superficie plana, con una serie de casillas o divisiones representadas con 
líneas o piedritas. 
Materiales y proceso de fabricación 
“Dados”: cuatro o más granos de maíz o frijol, algunos marcados con carbón o 
pintura natural para representar diferentes valores. 
Tablero: una línea de casillas marcadas en la tierra, sobre una tabla o incluso 
sobre un petate. 
Fichas: pequeñas piedras, semillas, conchas o trozos de cerámica que 
representaban los “guerreros” o ejércitos. 
Decoraciones: en contextos ceremoniales, los tableros podían adornarse con 
flores, velas o elementos simbólicos relacionados con los dioses tutelares del maíz 
y la guerra. 
Simbolismo y función ritual 
El Bul no era solo un pasatiempo: también se consideraba un medio de 
adivinación. Los sacerdotes (ah kinob) y chamanes lo usaban para consultar la 
voluntad de los dioses y tomar decisiones sobre la siembra, la caza o la guerra. 
Los resultados del juego podían interpretarse como mensajes divinos, y en 
algunas regiones se jugaba antes de eventos importantes, como ceremonias 
agrícolas o batallas. 
Durante la época colonial 
Con la llegada de los españoles, el Bul fue prohibido por su relación con la 
adivinación y la cosmovisión maya. Sin embargo, el juego sobrevivió en 
secreto, practicado dentro de los hogares o en reuniones comunitarias, 
conservando su carácter tradicional, aunque adaptándose como juego de 
entretenimiento. 
El Bul en Felipe Carrillo Puerto, Quintana Roo 
En comunidades mayas del municipio de Felipe Carrillo Puerto, como Señor, 
Tihosuco, Chunhuhub y Tepich, el Bul sigue siendo recordado por los ancianos 
y enseñado a los niños en talleres culturales y ferias tradicionales. 
Durante las celebraciones del Janal Pixan o en encuentros comunitarios, se 
organizan partidas demostrativas del juego como parte del rescate de las 
costumbres mayas locales. Además, algunas escuelas bilingües lo incluyen en 
actividades pedagógicas para fortalecer el vínculo con la lengua y cosmovisión 
maya.`,
    imagen: "./public/assets/img/Bul o Buul.png"
  },
  {
    titulo: "Tinjoroch",
    descripcionLarga: `El Tinjoroch es un juego tradicional maya que combina habilidad, puntería y 
competencia amistosa, practicado principalmente por niños y jóvenes en las 
comunidades rurales de la Península de Yucatán, incluyendo la zona de Felipe 
Carrillo Puerto, Quintana Roo. Aunque no tiene un origen ritual tan antiguo 
como el Pok-ta-pok, el Tinjoroch se considera parte del legado cultural maya 
transmitido oralmente a lo largo de generaciones. 
Origen y significado 
El Tinjoroch tiene sus raíces en los juegos de destreza que los antiguos mayas 
realizaban para entrenar la coordinación y la fuerza física, especialmente en la 
infancia. Su nombre proviene de una palabra maya que hace referencia al acto 
de lanzar o golpear un objeto. En esencia, el Tinjoroch representa la conexión 
entre la vida cotidiana y la naturaleza, ya que los materiales empleados 
provenían del entorno inmediato: ramas, semillas, piedras y fibras vegetales. 
Materiales y proceso de fabricación 
• Base o tabla: se elaboraba con madera ligera o una raíz firme, clavada en 
el suelo o sostenida entre piedras. 
• Blanco o diana: a veces una botella, coco, mazorca seca o fruta, colocada 
sobre la base. 
• Proyectiles: pequeñas bolas de trapo, semillas, o piedras redondeadas 
envueltas en hojas o fibras naturales. 
• Instrumento de lanzamiento: en algunas versiones se usa una ramita en 
forma de palanca o resorte de bejuco, mientras que en otras se lanza 
directamente con la mano. 
Cada comunidad podía adaptar las reglas, dependiendo de los materiales 
disponibles o la edad de los jugadores. 
Reglas y forma de juego 
El objetivo del Tinjoroch es derribar o golpear un objeto a distancia, 
demostrando puntería y control. Los jugadores se colocan en fila y, por turnos, 
lanzan sus proyectiles intentando alcanzar el blanco. 
Gana quien logre derribarlo con el menor número de intentos, o quien sume 
más aciertos en una ronda determinada. En algunas versiones, los jugadores 
apuestan pequeñas recompensas simbólicas, como frutas, dulces o fichas, lo 
que refuerza el carácter social del juego. 
Simbolismo y función cultural 
Aunque carece del componente religioso de juegos como el Pok-ta-pok, el 
Tinjoroch conserva un sentido comunitario profundo, pues solía practicarse 
durante las fiestas patronales, reuniones de milpa o convivencias familiares, 
donde los mayores enseñaban a los jóvenes las tradiciones de su pueblo. 
El Tinjoroch en Felipe Carrillo Puerto, Quintana Roo 
En el municipio de Felipe Carrillo Puerto, el Tinjoroch continúa practicándose 
en comunidades como Señor, X-Hazil Sur, Tepich, Noh-Bec y Chumpón, 
especialmente durante actividades escolares, ferias culturales y festivales del 
Día del Niño. 
De esta manera, el Tinjoroch se ha convertido no solo en un juego tradicional, 
sino en un medio para transmitir valores de cooperación, creatividad y respeto 
por la cultura ancestral.`,
    imagen: "./public/assets/img/Tinjoroch.png"
  },
  {
    titulo: "Kimbomba",
    descripcionLarga: `El Kimbomba es un juego tradicional maya que es muy parecido al beisbol. 
Aunque su forma actual ha adoptado variantes en distintas regiones de México 
y Centroamérica, su origen se remonta a la tradición lúdica maya relacionada 
con el uso de herramientas agrícolas y objetos cotidianos como instrumentos de 
juego. En esencia, el Kimbomba consiste en golpear un pequeño palo con otro 
más largo, lanzándolo al aire lo más lejos posible.  
Origen y significado 
El Kimbomba proviene de antiguas prácticas mayas donde los niños imitaban a 
los adultos en las tareas de caza, corte o agricultura, desarrollando así fuerza y 
coordinación. El juego también servía como una forma de entrenamiento físico 
que preparaba a los jóvenes para las labores de la milpa o para actividades que 
requerían agilidad y puntería. 
En la lengua maya, “kimbomba” se asocia al sonido o acción de golpear o lanzar 
algo con fuerza, evocando el impacto del palo al salir despedido. Aunque en 
algunos lugares se le conoce con otros nombres (como chac-chic, tuk-tuk o 
kimbombita), la dinámica esencial del juego se ha mantenido casi igual durante 
siglos. 
Materiales  
• La bomba: un palo corto y afilado en ambos extremos (de unos 10 a 15 cm), 
hecho de madera ligera como guayacán, jabín o ramón. 
• El bate o varilla: un palo largo (de unos 60 a 80 cm) con un extremo liso, 
usado para golpear la bomba. 
• Superficie de juego: un terreno plano, de preferencia de tierra apisonada o 
pasto. 
• Líneas de distancia: marcadas con ramas, piedras o cuerdas para medir la 
longitud del lanzamiento. 
El proceso es sencillo, pero requiere cuidado: los jugadores afilaban los 
extremos de la bomba para que pudiera levantarse con facilidad al golpearla, y 
alisaban el bate con cuchillos o piedras para lograr un mejor impacto. 
Reglas y forma de juego 
El objetivo del Kimbomba es golpear la bomba con el palo más largo, haciéndola 
saltar y luego lanzándola lo más lejos posible. El juego puede realizarse de forma 
individual o en equipos. 
1. El jugador coloca la bomba en el suelo. 
2. Golpea una de sus puntas para hacerla saltar. 
3. Cuando está en el aire, intenta golpearla de nuevo con el bate para enviarla 
a distancia. 
4. Se mide la distancia alcanzada; el jugador con el lanzamiento más largo 
gana. 
En algunas variantes, si el jugador falla el golpe, cede su turno o pierde puntos. 
El juego puede incluir rondas eliminatorias o desafíos de precisión, como 
alcanzar un blanco o mantener la bomba en el aire varias veces seguidas. 
Simbolismo y función cultural 
En la cosmovisión maya, el acto de golpear y elevar la bomba representa la 
superación y el impulso del espíritu humano hacia el cielo, conectando el 
esfuerzo físico con la dimensión espiritual. 
En la actualidad 
Hoy el Kimbomba es reconocido como un juego tradicional mexicano de origen 
maya. Se enseña en escuelas bilingües, ferias culturales y encuentros 
comunitarios organizados por instituciones como el INAH o la Secretaría de 
Cultura. En algunos festivales, se han creado torneos locales y regionales que 
promueven el rescate de este tipo de actividades tradicionales. 
El Kimbomba en Felipe Carrillo Puerto, Quintana Roo 
En las comunidades mayas del municipio de Felipe Carrillo Puerto, el 
Kimbomba continúa vivo como una actividad recreativa y educativa. En 
poblaciones como Tihosuco, Señor, X-Hazil Sur, Tepich, Noh-Bec y Chumpón, 
los niños suelen jugarlo en los patios escolares o en los espacios abiertos 
durante las festividades locales.`,
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
    descripcionLarga: `La Fiesta de la Santa Cruz (23 de Abril al 3 de Mayo) es la celebración más importante de Felipe Carrillo Puerto y de muchas comunidades mayas del centro de Quintana Roo.
Es una tradición profundamente espiritual y cultural, que une la fe católica con las creencias mayas ancestrales.
Cada dos años durante los meses de abril y mayo, se celebra en los centros ceremoniales mayas de Tixcacal, Guardia, Chun Pon y Chancay las fiestas tradicionales en honor a la Santa Cruz Maya o “Cruz Parlante.”
 El culto a la “Cruz Parlante” tiene su origen en 1850 cuando se encuentra una cruz tallada en el tronco de un árbol de caoba, cerca de un cenote en el rancho llamado Kanpokolché que se encontraba en lo que actualmente es el centro del Estado de Quintana Roo; este acontecimiento se dio a tres años de iniciada la denominada “Guerra de Castas” en los lugares conocidos con el nombre de Noh Cah Santa Cruz y Xbalam Nah, actual ciudad de Felipe Carrillo Puerto.
 Se relata que la “Cruz Parlante” orientó a los mayas en su lucha libertadora a través de los líderes del movimiento Nojochtaata ó aj-k´iin y ah-dziíb sacerdotes y escribas mayas, quiénes obtenían comunicación de manera oral y por escrito. También se cuenta que en principio la Cruz se comunicaba a través de Manuel Nahuat después de su muerte siguió comunicándose a través de Juan de la Cruz conocido escriba o secretario de la Santa Cruz.
 La organización de los festejos está dirigida por las autoridades tradicionales, quienes distribuyen el trabajo comunitario, la siembra del Ya áxche, la corrida de toros, la música que se ha de tocar en las danzas y la danza ceremonial de la “cabeza de cochino;” la comida ritual y festiva, las procesiones que circulan por los centros ceremoniales, pero sobre todo son los que dirigen los rezos en la actividad ceremonial.

`,
    imagen: "./public/assets/img/FiestaSantaCruz.png"
  },
  {
    titulo: "Fiesta de las Tres Cruces",
    comunidad: "Tixcacal Guardia (24 de Abril al 3 de Mayo), Chankah Veracruz (15 al 20 de Abril), Chumpon (1 de Enero al 12 de Mayo), Chunyáh (15 al 18 de Junio)",
    descripcionLarga: `La Fiesta de las Tres Cruces tiene raíces tanto católicas como mayas. Por un lado remite al hallazgo de la Santa Cruz por la emperatriz Helena en el siglo IV (tres cruces juntas) y al Día de la Cruz (3 de mayo) que conmemora esa leyenda cristiana. Por otro, está ligada al culto de la Cruz Parlante surgido durante la Guerra de Castas (siglo XIX) en el oriente de Yucatán. Según la tradición, un líder maya encontró un árbol de cedro pintado con una cruz que llegaría a “hablar”; al cortarlo, con su madera se hizo la cruz llevada al centro ceremonial de Chan Santa Cruz (hoy Felipe Carrillo Puerto), desde donde emitía mensajes que guiaban a la comunidad. Esta cruz verde –simbólica de la ceiba sagrada– representaba para los mayas los cuatro puntos cardinales de la cosmovisión ancestral. Así, la festividad mezcla la fe católica (Santa Cruz) con profundas creencias tradicionales: para los mayas cruzo’ob la cruz divina refleja el árbol ceiba y sustento de vida, y su memoria estuvo ligada a la rebelión de 1847 (Guerra de Castas)
La celebración inicia con actos religiosos comunitarios. El 3 de mayo se oficia misa en iglesias mayas (como en la capilla de la Cruz Parlante), donde las familias llevan ofrendas de comida (tamales, pavo, café, frutas) para compartir en altar y rezan ante las imágenes de la Virgen o de la Cruz. Después de la liturgia, se intercambian breves procesiones con cánticos en lengua maya y visitas recíprocas entre templos (cumpliendo promesas o “j’náat” pactadas). Ese mismo día muchos obreros de la construcción celebran el “Día del Albañil”: colocan sobre sus obras construidas tres cruces de madera (usando trozos de moldes) pidiendo protección y luego festejan con tacos, cerveza y refrescos
En el aspecto profano, las familias elaboran grandes banquetes conocidos como “matán”: platillos de chilmole, relleno negro o cochinita pibil cocinados en hornos de tierra (pib) que se comparten con todos los asistentes. La organización corre a cargo de las guardias o “compañías” tradicionales (los mayordomos diputados), que asumen turnos para cuidar la cruz sagrada y atender a los visitantes. Cada día del festejo estas guardias ofrecen gratuitamente la comida y bebida a la gente, reforzando el carácter comunal de la fiesta.
la Fiesta de las Tres Cruces es vista como una herencia cultural vital para las comunidades mayas de la zona. Actúa como hilo conductor entre generaciones: los viejos custodios (dignatarios) insisten en transmitirla a los jóvenes, resaltando que mantener viva esta tradición es recordarle al pueblo sus raíces. Según autoridades locales, la fuerte religiosidad católica en Felipe Carrillo Puerto se debe en buena parte a los fieles que han resguardado fielmente sus usos y costumbres mayas durante siglos. De ese modo, la fiesta no sólo honra a santos cristianos, sino que reafirma la identidad maya: las canciones en lengua maya, las ofrendas comunales y el simbolismo de la cruz-ceiba mantienen presentes las creencias ancestrales. En suma, la Fiesta de las Tres Cruces es una celebración híbrida (católica–maya) con procesiones, música sagrada, rituales de ceiba y banquetes colectivos, que hoy en día sigue siendo el centro de la vida comunitaria en estas poblaciones.

`,
    imagen: "./public/assets/img/FiestaTresCruces.png"
  },
  {
    titulo: "Virgen María",
    comunidad: "Tixcacal Guardia, Laguna K’ana",
    descripcionLarga: `
En Felipe Carrillo Puerto varias comunidades mayas rinden culto a la Virgen María bajo distintas advocaciones, con fiestas patronales específicas. Por ejemplo, en Tixcacal Guardia se celebra a la Virgen María del 23 al 29 de agosto. En Laguna K’ana festejan a la Virgen María del 4 al 12 de diciembre
Las festividades se organizan comunitariamente a través de cofradías y gremios locales. Familias o comités (cargos como padrinos o kuuchnales de la fiesta) se reparten responsabilidades: financiar la música, preparar la comida, adornar la imagen, etc. Durante la fiesta actúan gremios devocionales (hermandades) que participan en procesiones y puestos de guardia. Por ejemplo, en la Virgen de Guadalupe de la cabecera municipal desfilan gremios de niños, la Legión de María y grupos familiares (como la “Familia Castillo Moo”), que recorren las colonias hasta la capilla correspondiente.
En los centros ceremoniales mayas (como Tixcacal Guardia) existen “compañías” rotativas de mayordomos que cumplen guardias religiosas. Cada compañía se turna para custodiar la iglesia y los santos locales, rezando varios días seguidos. En Tixcacal Guardia, por ejemplo, los mayas adscritos hacen guardias obligatorias de 5–8 días cada una, rotando las compañías para cuidar la Cruz Parlante y las imágenes de la Virgen. También está muy presente el compadrazgo, extendiendo lazos familiares en los rituales: los padrinos de bautizo y de festividad refuerzan alianzas entre familias, lo cual es parte de la organización social de las fiestas
Para las comunidades mayas del sur de Quintana Roo, la Virgen María representa la madre espiritual y protectora de la comunidad. Tradicionalmente, la región veneraba a diosas femeninas prehispánicas (por ejemplo Ixchel, diosa lunar de la fertilidad, lluvia y medicina). La llegada del catolicismo generó un sincretismo: las deidades femeninas antiguas se vinculaban con la Virgen. De hecho, “Ixchel estaba vinculada a la lluvia, la medicina, la procreación…”, funciones que hoy atribuyen a la Virgen. El culto mariano integra así elementos ancestrales: en muchos centros ceremoniales los rituales mezclan símbolos católicos con creencias mayas. Este sincretismo persiste: “el sincretismo entre las dos religiones se mantiene hasta hoy en algunos centros ceremoniales”. En este contexto la Virgen es concebida como mediadora (intercede ante Dios por salud, cosechas o bienestar) y como madre de todos los pueblos, papel que refuerza la identidad maya contemporánea.
A las celebración asiste prácticamente toda la comunidad. Desde niños hasta ancianos acompañan en procesión a la Virgen, tocan en las bandas o bailan con sus trajes típicos. Padres de familia y jóvenes son mayordomos de ofrendas, mientras que las vaqueras, los músicos del maya-pax y grupos corales animan la fiesta. Después de la misa y los rezos, el retorno de la procesión suele ir seguido de una vaquería (baile nocturno). La comida ofrendada es compartida públicamente: al sonar la campana se reparte el guiso principal entre todos los participantes.

`,
    imagen: "./public/assets/img/3.png"
  },
  {
    titulo: "Virgen María de Concepción",
    comunidad: "Tixcacal Guardia, Xpichil, Laguna K’ana",
    descripcionLarga: `
En las comunidades mayas del municipio de Felipe Carrillo Puerto la Inmaculada Concepción de María se celebra con ferias tradicionales que combinan rituales católicos con costumbres ancestrales. Por ejemplo, en Tixcacal Guardia las festividades duran del 6 al 13 de diciembre, en X-Pichil del 7 al 15 de agosto y en Laguna K’ana del 13 al 18 de abril. En cada lugar la fiesta arranca con la siembra del yaxché (ceiba), árbol sagrado que simboliza la vida y la esperanza. Estas fechas coinciden con las celebraciones patronales del pueblo: en Tixcacal Guardia y Laguna K’ana la Virgen de la Concepción es la patrona principal, mientras que en X-Pichil la devoción suele ser a la Virgen de la Asunción (a veces señalada como “Concepción” en la tradición local)
En cada rito religioso se hacen ofrendas de comida y flores. Las familias llevan al altar de la Virgen platillos típicos mayas (tamales, arroz con leche, frutas, etc.) junto con velas e incienso. Después de los rezos, esos alimentos se reparten entre todos los asistentes como una comida comunitaria. Entre los platillos característicos están el chilmole (guiso de carne con recado negro), la chicharra (otro guiso tradicional) y los tamales de pollo o cerdo. También es muy común el pib, es decir, la cocción de guisos bajo tierra en hornos de tierra sagrada preparados para la fiesta. En Kantunilkín (al norte de Quintana Roo) se reporta que en los novenarios por la Concepción los fieles ofrecen tamales, champurrado y otros postres en el altar, generando un rico aroma a comida y copal mientras se entonan los rezos.
Para la comunidad maya-católica, la Virgen de la Concepción encarna la maternidad divina y la prosperidad. La celebración fusiona símbolos cristianos (la cruz, la imagen de María) con signos mayas ancestrales: la plantación del yaxché al inicio (símbolo de vida y fertilidad) expresa la esperanza de un año próspero. Como señala un etnógrafo, “detrás del culto a cruces, vírgenes y santos, están presentes profundas concepciones mayas que hacen indispensable iniciar la celebración ritual con el corte del árbol sagrado: la ceiba”. De este modo, la fiesta refuerza la identidad maya local: la Virgen pura de la Concepción se convierte en protectora de la comunidad y su culto se realiza con bailes, música, rezos en maya y ofrendas que mantienen vivas las tradiciones milenarias mientras expresan la fe cristiana.

`,
    imagen: "./public/assets/img/3.png"
  },
  {
    titulo: "Las Santas Cruces",
    comunidad: "Señor",
    descripcionLarga: `
En Felipe Carrillo Puerto la comunidad maya de Señor celebra cada año la fiesta tradicional de Las Santas Cruces del 19 al 24 de marzo. Se trata de una conmemoración que mezcla la fe católica con ritos mayas ancestrales. Según la leyenda cristiana, Santa Elena encontró las tres cruces de Cristo el 3 de mayo del año 292, estableciéndose desde entonces la tradición de honrar las cruces en esa fecha. Los pobladores mayas de Chan Santa Cruz (hoy Felipe Carrillo Puerto) adaptaron esa creencia: para ellos la cruz simboliza los cuatro puntos cardinales y fue símbolo vital durante la Guerra de Castas de 1847.
Como en otras festividades mayas de Quintana Roo, Las Santas Cruces incluye procesiones y plegarias en la lengua materna. Es habitual que la imagen de la Cruz (o una réplica de las tres cruces) recorra las calles del pueblo al compás de flautas y tambores, deteniéndose en altares improvisados. Los rezadores mayas entonan su payalchiʼ (oración ceremonial) en alto, alternando letanías católicas y fórmulas ancestrales. Según relatos de estudios regionales, eventos semejantes combinan “procesiones, música y bailes mayas” durante la fiesta de las Tres Cruces. Estas manifestaciones públicas refuerzan la dimensión espiritual del evento: los asistentes escuchan las plegarias en maya y participan llevando velas, flores y ofrendas a cada estación del recorrido.
La celebración se organiza comunitariamente a través de comités integrados por varias familias mayas. En ocasiones hay decenas de “socios” o diputados de la fiesta encargados de coordinar las novenas, el financiamiento de la música y la preparación de la comida. Cada casa aporta velas, alimentos y servicios. De este modo, la festividad fusiona actos religiosos con actividades profanas: se combinan los rezos en el templo con vaquerías, juegos y convivios donde todos los vecinos pueden participar. La participación popular es alta: jóvenes y ancianos, creyentes y músicos, así como grupos de vaqueras (mujeres entusiastas) se integran a los cantos y bailes. La coordinación comunitaria garantiza que las tradiciones se transmitan de padres a hijos, manteniendo unida a la comunidad maya de Señor.
La fiesta de Las Santas Cruces tiene un profundo significado espiritual y cultural para los mayas de Señor. Al venerar la Cruz católica (también conocida localmente como Cruz Parlante), los pobladores refuerzan su cosmovisión: la cruz representa la intersección de los rumbos del universo y el centro del mundo maya. Además, la conmemoración rememora la historia de la Guerra de Castas en Chan Santa Cruz (que dio origen al nombre de Felipe Carrillo Puerto), cuando la Cruz Parlante simbolizaba la resistencia indígena. La celebración fortalece la identidad maya pues se realiza en su idioma y con música ancestral, recordándoles su legado de siglos. En palabras de un líder local, se agradece a la Madre Tierra y se pide salud: “Pedimos por la salud integral, que los dioses nos sigan dando fuerzas para hacer estas fiestas”. En conjunto, Las Santas Cruces es vista como una herencia religiosa, histórica y social que une a las familias en la fe y mantiene vivos los antiguos usos y costumbres del pueblo maya.

`,
    imagen: "./public/assets/img/3.png"
  },
  {
    titulo: "Virgen Morena de Guadalupe",
    comunidad: "Señor",
    descripcionLarga: `
La Virgen de Guadalupe es la patrona de México surgida de las apariciones marianas de 1531 a Juan Diego. Tras la evangelización su culto se extendió al sureste; en Felipe Carrillo Puerto la imagen de la “Virgen Morena” (de piel más oscura) se asocia con la antigua diosa maya Tonatzín, integrando la herencia indígena al culto guadalupano.
En Felipe Carrillo Puerto la devoción se manifiesta en misas y rituales solemnes. En la víspera del 12 de diciembre, miles de fieles cantan las tradicionales mañanitas a la Virgen Morena y acuden a Misas multitudinarias frente a la capilla local. Cada año se realiza también la “Misa de Coronación” el 12 de diciembre, ceremonias que reúnen cerca de 1,500 personas. Las comunidades mayas participan formando gremios o grupos de devotos que organizan novenarios y procesiones: por ejemplo, cuadrillas de la Legión de María, niños y “palqueros” (bailarines tradicionales) parten desde barrios como Leona Vicario hacia la capilla de Guadalupe en peregrinación
La fiesta es protagonizada por la población indígena local. En la comunidad de Señor, por ejemplo, participaron “familias de la comunidad” y autoridades locales en la inauguración, evidenciando que el evento es de origen y organización comunitaria. Músicos, danzantes y gremios religiosos (palqueros, músicos, niños, etc.) de las colonias y comunidades rurales cercanas se suman activamente a las procesiones y celebraciones. En general, los pueblos mayas de la región colaboran preparando la fiesta (patrocinan música, bailes y comida tradicional) como medio para transmitir sus usos y costumbres a las nuevas generaciones.
A diferencia del culto guadalupano mayoritario en el centro de México, en Felipe Carrillo Puerto la Virgen de Guadalupe se celebra fuera de la fecha oficial de diciembre. El énfasis en elementos mayas –como la lengua, la música del maya pax y danzas autóctonas– es más marcado que en otras regiones. Por ejemplo, la vaquería (baile de jarana con música hispano-maya) es un rasgo único de la península que caracteriza estas fiestas. También es llamativo el uso de corridas de toros y orquestas locales (como la orquesta La Dinastía) en el marco de la feria, algo poco común en otras celebraciones. La gastronomía festiva (chilmole, relleno negro, etc.) y la estructura de los altares rituales reflejan tradiciones propias del sureste peninsular

`,
    imagen: "./public/assets/img/3.png"
  },
  {
    titulo: "San Bernardino de Siena",
    comunidad: "Xyatil",
    descripcionLarga: `
La fiesta patronal de San Bernardino de Siena en Xyatil se celebra cada año en el mes de mayo. El calendario municipal fija el periodo 15–21 de mayo para esta festividad (el día central es el 20 de mayo, fecha litúrgica del santo).
La devoción a San Bernardino de Siena —fraile franciscano italiano canonizado en 1450— llegó a la península de Yucatán en la época colonial. En la comunidad maya de Xyatil éste es el santo patrón local. Su festividad litúrgica oficial es el 20 de mayo, y en los días previos se organizan novenas religiosas en su honor. La celebración combina elementos católicos (novenas y Misa patronal) con tradiciones mayas locales, reflejando un fuerte sincretismo cultural. Un rasgo destacado es el rito de corte y re-siembra del ya’axche (ceiba sagrada), mediante el cual la comunidad invoca al santo la llegada de las lluvias. 
Novena y Misa Patronal: Se efectúan nueve días de oración (novena) en honor a San Bernardino. En estas novenas los devotos ofrecen comida tradicional (por ejemplo, chilmole de pollo) y organizan bailes comunitarios. La festividad culmina con la Misa solemne en la fecha central.
  Ritual del ya’axche: Un elemento simbólico principal es el corte y replantación del ya’axche, árbol sagrado maya, como petición de lluvia al santo.
 Vaquería y danzas folklóricas: Se realizan vaquerías —festejos con música y danzas tradicionales de estilo regional— y bailes populares que involucran a toda la comunidad. Estos bailes combinan trajes típicos mayas y música local.
  Gastronomía típica: Es tradición compartir platillos mayas entre vecinos. En particular se destaca el chilmole (guiso picante de pollo), que se reparte en el “cuartel maya” u otro espacio comunitario.
  Juegos y cierre festivo: Al finalizar la fiesta suelen realizarse juegos populares, como el palo encebado (escalar un poste embadurnado), y un baile final nocturno que clausura la celebración
La fiesta de San Bernardino en Xyatil es eminentemente comunitaria. Toda la población mayahablante colabora en su preparación y vivencia. Líderes locales señalan que estos festejos “fortalecen el tejido social y la preservación de nuestros valores culturales”: reúnen a las familias (como dice una autoridad, “sobre todo se une a la familia”), promueven valores de solidaridad, honestidad y respeto entre generaciones. El sacerdote maya, Don Juan Bautista Witzil, enfatiza el carácter inclusivo y espiritual del evento: explica que las ofrendas a San Bernardino se hacen “pensando en todos”, en busca de “la paz, la unidad y la armonía” para la comunidad entera. En conjunto, la festividad refuerza la identidad cultural maya de Xyatil, sirviendo como espacio de encuentro social y de reafirmación de la fe compartida.

La fiesta de Xyatil presenta rasgos únicos respecto a otras celebraciones de santo en la región. Su sincretismo es notable: integra ritos agrícolas mayas (como el del ya’axche) con la veneración católica. Asimismo, el uso del payalchiʼ —un conjunto de rezos en lengua maya— es “parte central” de la organización de la fiesta, lo que subraya el papel del idioma y la tradición maya en el ritual. Al concluir las festividades, se destaca el sentido de orgullo identitario: los bailes y ceremonias finales “reafirman la esencia festiva y colectiva” y enaltecen “el orgullo de ser mayahablantes”. Este énfasis en la cultura indígena —junto al corte del ceiba sagrada y otros símbolos mayas— distingue esta celebración de San Bernardino de otras festividades católicas más «urbanas» o occidentales.

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

Esta localidad fue fundada a mediados del siglo XX y, desde sus inicios (hace aproximadamente 60 años), sus pobladores instauraron una fiesta patronal en honor a San Ramón, su santo patrono. De acuerdo con la tradición oral, la festividad comenzó con la llegada de los primeros habitantes y se ha mantenido viva generación tras generación. Es común en la región maya de la Zona Centro de Quintana Roo que cada pueblo tenga un santo patrono y realice anualmente fiestas en su honor como parte de un legado ancestral; estas celebraciones incluyen rituales, danzas y ceremonias transmitidas de padres a hijos. La comunidad de San Ramón no es la excepción: su fiesta patronal forma parte de ese patrimonio cultural heredado y refuerza la identidad histórica del pueblo. Inicialmente, la festividad pudo haberse organizado de forma sencilla por los fundadores, pero con el tiempo ha crecido en participación e importancia local. Además de la devoción católica a San Ramón, la fiesta refleja la mezcla de influencias maya y mestiza propia de la Zona Maya de Quintana Roo.
En su esencia, la fiesta tiene un fuerte componente religioso y ceremonial. Cada año, en la fecha señalada, la comunidad decora la pequeña iglesia o capilla local y organiza misas solemnes en honor al santo patrono. Por lo general se realiza una procesión por las calles de la localidad, durante la cual la imagen de San Ramón es llevada por los fieles, acompañada de estandartes, flores y rezos en español y lengua maya. Los habitantes, ataviados con sus trajes tradicionales, recorren el pueblo al son de música sacra maya (maya pax) y cantos religiosos, expresando su fervor y gratitud al santo. Estas procesiones simbolizan la fusión de la fe católica con la cosmovisión maya: se honra al santo cristiano al tiempo que se pide permiso y bendición a las deidades de la naturaleza. Por ejemplo, en comunidades mayas cercanas se acostumbra iniciar la fiesta con la siembra del yaxché (ceiba sagrada) y oraciones a los Yuumtsiles (dioses mayas del monte) pidiendo buenas cosechas y protección para el pueblo. Es común que en San Ramón, al igual que en otros pueblos de la región, se plante un árbol de ceiba o se coloque una rama adornada en el centro del recinto festivo como símbolo de conexión entre el cielo, la tierra y el inframundo (elemento central en la espiritualidad maya). Durante la ceremonia inaugural, los jerarcas tradicionales y sacerdotes mayas realizan bendiciones y rezos en maya, mientras que el sacerdote católico de la cabecera municipal acude a oficiar la misa principal de la fiesta. Esta combinación ritual refleja el equilibrio entre el mundo espiritual y terrenal que la comunidad busca en su celebración. La fiesta patronal es para el pueblo un momento de renovación espiritual: se agradece por las cosechas y la salud recibida durante el año, y se encomienda a San Ramón la prosperidad futura.
 

Mujeres de la comunidad, vestidas con hipiles bordados tradicionales, encabezando una procesión festiva durante la fiesta patronal. En estas peregrinaciones y gremios participan activamente familias enteras: las vaqueras (mujeres ataviadas en traje regional) portan ofrendas florales y estandartes, seguidas por músicos de maya pax y devotos de todas las edades. Cada día de la fiesta suele estar dedicado a un gremio distinto (grupos de fieles, barrios o gremios como el de niños, jóvenes, señoras, agricultores, etc.), los cuales organizan rezos y ofrendas en honor al santo. Es tradición que la imagen religiosa visite ciertos hogares designados donde se levantan pequeños altares bajo enramadas conocidas como máakan para orar; tras el t’oox o rezo comunitario en maya, la familia anfitriona ofrece comida a los asistentes como acto de convivencia y devoción. Estos rituales domésticos se han ido adaptando: antes eran numerosas las casas que recibían al santo durante la fiesta, pero en años recientes han disminuido (se cuenta que antiguamente se realizaban rezos en hasta siete hogares distintos, y ahora sólo en dos, debido a la menor participación y a la desaparición paulatina de las tradicionales enramadas máakan). Aun así, la parte religiosa de la fiesta sigue siendo el corazón de la celebración, combinando misa, procesión y rezos nocturnos para mantener viva la fe y la tradición comunitaria.
La vaquería tradicional es uno de los elementos centrales y más coloridos de la fiesta de San Ramón. Se trata de un baile regional yucateco que inaugura formalmente las festividades patronales. La primera noche de fiesta típicamente inicia con la Noche de Vaquería: al caer el sol, al son de una orquesta jaranera, parejas de bailarines —hombres vestidos de blanco con paliacate rojo y sombrero de jipijapa, y mujeres luciendo elegantes ternos e hipiles bordados— se reúnen en la plaza o domo del pueblo para bailar jarana. La jarana yucateca es un alegre zapateado en ritmo 3/4 o 6/8, caracterizado por sus pasos zapateados y movimientos sincronizados, que las parejas ejecutan con destreza al compás de canciones tradicionales como “Aires Yucatecos”, “El chinito Koy Koy” o “El torito”. Antes de iniciar el baile, autoridades locales y organizadores pueden realizar un corte de listón inaugural, marcando oficialmente el comienzo de la feria tradicional. Es común que varias comunidades vecinas envíen grupos de jaraneros para participar, reforzando la hermandad regional: en ediciones recientes de la fiesta de San Ramón han acudido bailadores y orquestas de pueblos cercanos como Tihosuco, X-Pichil, Señor, Tepich e incluso de poblaciones de Yucatán. La presencia de estos grupos invitados realza la vaquería, convirtiéndola en un encuentro cultural comunitario.
Durante la vaquería no sólo se baila; también se llevan a cabo ceremonias simbólicas. Por ejemplo, suele realizarse la siembra del yaxché en el recinto de baile: se planta o erige un joven árbol de ceiba adornado, alrededor del cual giran las parejas bailando, como acto de petición de permiso a la madre tierra y de bendición para la fiesta. Esta ceremonia representa la unión de la tradición ganadera colonial (de donde provienen las vaquerías) con la espiritualidad maya. En algunas ocasiones, la noche de vaquería incluye concursos de jarana donde las parejas demuestran su habilidad, compitiendo por aplausos o pequeños premios, lo cual añade entusiasmo entre los jóvenes. Asimismo, se acostumbra coronar a las reinas o embajadoras de la fiesta en el marco de la vaquería inaugural. Actualmente, muchas comunidades realizan un breve certamen o elección para nombrar a la Reina de la Tradición o Reina de la Feria. En eventos similares del municipio, como la fiesta de Santa Rosa, se coronan a la reina, embajadoras y princesas de la fiesta durante la inauguración, con la presencia de los organizadores (nojoch kuuches), autoridades municipales e incluso miembros del Gran Consejo Maya. De manera semejante, en San Ramón suele presentarse públicamente a la Reina de la Vaquería local, quien encabeza los bailes acompañada de las damas de honor, simbolizando la gracia y orgullo de la comunidad. Tras la coronación y los honores iniciales, la orquesta lanza sus primeras notas de jarana —por ejemplo, la pieza “Aires yucatecos”— y las parejas inician el baile levantando alto sus sombreros y pañuelos en señal de alegría. La velada continúa con una serie de jaranas y saltos (intervalos musicales donde los bailarines muestran pasos rápidos), mientras los asistentes rodean la pista aplaudiendo. La vaquería es considerada “el corazón palpitante de la tradición”, pues representa la identidad cultural mestiza-maya del pueblo y su orgullo por las costumbres heredadas.
 
Parejas bailan la jarana yucateca durante la vaquería tradicional que marca el inicio de la fiesta patronal en San Ramón. En esta escena típica se observan los trajes regionales: las mujeres (vaqueras) con sus hipiles blancos bordados de flores multicolores y tocadas con flores rojas, y los hombres con guayabera, pantalón blanco y sombrero, llevando el clásico pañuelo rojo en el bolsillo. Ellos zapatean al unísono, mostrando coordinación y ritmo mientras la banda interpreta sones jaraneros. Mesas largas adornadas rodean la pista, donde se sientan los nojoch kuuch (mayordomos de la fiesta), invitados especiales y ancianos respetados de la comunidad. La vaquería no sólo es un baile, sino un acto social: sirve para reunir a la gente de distintas edades, reforzar lazos comunitarios y expresar, a través de la música y la danza, la alegría de preservar sus tradiciones vivas.
La fiesta de San Ramón trasciende el simple festejo; posee un profundo significado cultural, social y religioso para la comunidad. En términos religiosos, es ante todo un acto de fe y devoción: San Ramón (tradicionalmente identificado con San Ramón Nonato, patrono de las parturientas y protector de las causas difíciles) es venerado como santo patrono del pueblo. Los habitantes le atribuyen los favores recibidos –cosechas abundantes, salud, protección ante calamidades– y durante la fiesta le rinden homenaje y agradecimiento público. Se trata de renovar anualmente el pacto espiritual con el santo, pidiéndole su intercesión y bendición continua. Las misas, procesiones y rezos en maya y español evidencian esa comunión de la gente con lo sagrado. Al mismo tiempo, la cosmovisión maya está muy presente: la fiesta ocurre en los primeros meses del año agrícola, cuando se prepara la milpa, por lo que los rituales de petición a los dioses del monte (los yumiles o yuumtsiles) para pedir lluvias y buenas cosechas se entrelazan con las oraciones al santo católico. De esta manera, el pueblo busca un equilibrio entre el mundo espiritual y el terrenal, uniendo las creencias católicas y mayas en una misma celebración sincrética.
Culturalmente, la fiesta patronal es uno de los pilares de la identidad maya carrilloportense. Representa la continuidad de costumbres ancestrales: las danzas, la música de jarana y maya pax, la lengua maya empleada en rezos, la comida tradicional, todos son elementos culturales que resisten al olvido mediante esta festividad. Como señalaba un promotor cultural local, cada fiesta tradicional es una expresión del “paisaje cultural” de los pueblos mayas, una manifestación festiva con modos propios de ofrendar alimentos, de prepararlos y de compartirlos, cargada de simbolismo. La comunidad de San Ramón ve en su fiesta anual una herencia preciosa legada por sus abuelos. Mantenerla es honrar sus raíces y afirmar la vigencia de la cultura maya en el mundo contemporáneo. Socialmente, la fiesta de San Ramón tiene un valor cohesivo inmenso. Actúa como punto de reunión de la comunidad: muchas personas originarias de San Ramón que hoy viven fuera (en la cabecera Felipe Carrillo Puerto, en Cancún u otras ciudades) regresan al pueblo para estas fechas, aprovechando para reencontrarse con familiares y amigos. Se generan así lazos intergeneracionales, ya que abuelos, padres, hijos y nietos conviven en las actividades, compartiendo experiencias y transmitiendo historias locales. También es un espacio de convivencia comunitaria: todos colaboran de algún modo, ya sea donando para las velas de la iglesia, ayudando a limpiar el recinto de la vaquería, sirviendo comida o integrando los grupos de danza y música. Durante los días de fiesta, el pueblo entero vive un ambiente de solidaridad y alegría colectiva que fortalece su tejido social.
La festividad de San Ramón en Felipe Carrillo Puerto se lleva a cabo cada año a mediados del mes de febrero. Según datos oficiales del municipio, las fechas típicas de celebración oscilan alrededor del 11 al 15 de febrero. En ese rango se concentran los días principales de la fiesta patronal, coincidiendo con la segunda semana de febrero. Sin embargo, la duración exacta del festejo puede variar ligeramente de un año a otro dependiendo de la programación que establezca el comité organizador y de factores como fines de semana o eventos adicionales. Por lo general, la duración abarca aproximadamente 5 días, aunque en la práctica suele extenderse a una semana completa de actividades. Por ejemplo, en la edición de 2024, la comunidad inició los festejos el 11 de febrero con la vaquería inaugural y continuó con eventos diarios (corridas, gremios, bailes) hasta el día 20 de febrero, cuando concluyó la fiesta. Es decir, en esa ocasión se prolongó por casi diez días de celebraciones continuas. Esto indica que la fiesta puede expandirse para incluir dos fines de semana si la organización así lo decide, con tal de maximizar la participación de visitantes y locales.
No obstante, tradicionalmente hay un día principal o día del santo que suele caer dentro de ese periodo (a veces hacia el 15 de febrero), en el cual se realiza la misa más importante y la procesión central en honor a San Ramón. Ese día es considerado el día de fiesta del pueblo, donde asisten las autoridades e invitados especiales, y se llevan a cabo las ceremonias más solemnes. Los días previos y posteriores están dedicados a los diversos gremios y eventos sociales. En años recientes, se ha observado que la inauguración suele programarse en viernes o sábado para facilitar la asistencia (por ejemplo, si el 11 de febrero cae entre semana, quizá muevan la vaquería al fin de semana inmediato). De cualquier forma, febrero es el mes fijo de esta tradición, lo cual la distingue de otras fiestas de la región que ocurren en distintos meses (en abril la Santa Cruz, en agosto la Virgen, etc.). La elección de febrero puede tener origen en acuerdos comunitarios o vínculos históricos locales, ya que en el calendario católico la fiesta de San Ramón Nonato es realmente en agosto. Es posible que la comunidad haya adaptado la fecha por conveniencia agrícola o por tradición propia.

`,
    imagen: "./public/assets/img/FiestaSanRamon_1.png"
  },
  {
    titulo: "San Cristo de Amor",
    comunidad: "Chankah de Repente, Chunhuas.",
    descripcionLarga: `
La devoción al Santo Cristo de Amor tiene raíces antiguas en la península de Yucatán, remontándose a la época colonial. En pueblos mayas de Yucatán como Santa Elena (al sur de Mérida) se convirtió en su patrono y cada enero se celebran misas, procesiones, mañanitas al Cristo y danzas tradicionales (destaca la danza de “Bailar los Pavos”, ejecutada por mujeres jóvenes solteras). Esta veneración al “Cristo del Amor” se fue extendiendo con el tiempo hacia otras localidades rurales. En la Zona Maya de Quintana Roo, la tradición fue adoptada por comunidades que la integraron a su propia cosmovisión. De acuerdo con testimonios locales, en pueblos del municipio de Felipe Carrillo Puerto la festividad se ha transmitido por varias generaciones, enseñada por abuelos y padres a los más jóvenes. Familias enteras han mantenido viva la celebración “como lo hicieron nuestros antepasados”, indicando que la fiesta probablemente se practica al menos desde mediados del siglo XX en la región.

Es importante señalar que la cabecera municipal de Felipe Carrillo Puerto (antigua Chan Santa Cruz) no tiene como patrono al Cristo de Amor, sino a la Santa Cruz (cuyas fiestas se celebran a inicios de mayo, vinculadas a la historia de la Cruz Parlante). En cambio, la devoción al Santo Cristo de Amor pervive especialmente en varias comunidades mayas del municipio. Pueblos como Chunhuas, Chancah de Repente, Polyuc (entre otros) han hecho del Cristo de Amor su santo patrono local, organizando sus fiestas patronales en distintas fechas de primavera. Por ejemplo, Chunhuas realiza su fiesta tradicional aproximadamente a mediados de marzo (8 al 14 de marzo); Chancah de Repente la celebra a inicios de abril (aprox. 1 al 8 de abril); mientras que Polyuc la organiza generalmente en la segunda quincena de abril. Cada comunidad adoptó al Cristo de Amor en su calendario festivo según sus costumbres y ciclos agrícolas, por lo que las fechas exactas varían, pero siempre conservando el mismo espíritu devocional.
El aspecto religioso de la fiesta es fundamental y sigue el esquema de las fiestas patronales yucatecas, combinando ritual católico con tradición maya. Durante los días que preceden al día principal, se realizan rezos y novenarios en honor al Cristo de Amor. Es común la organización de gremios o grupos de fieles que se turnan para encabezar las celebraciones de cada jornada. Cada gremio puede estar formado por familias, barrios, jóvenes o algún sector (por ejemplo, gremio de campesinos, gremio de mujeres, etc.), y ellos son los encargados de llevar a cabo rosarios, misas y pequeñas procesiones que recorren el pueblo con estandartos y la imagen del Cristo. La imagen del santo patrono suele ser bajada de su altar para presidir las celebraciones (en una ceremonia de “bajada” al inicio de la fiesta, semejante a la que se realiza en la rectoría de San Juan Bautista en Mérida cada año).
En algunas comunidades, la venerada imagen visita domicilios particulares donde se han dispuesto altares tradicionales. Se instalan máakanes, que son pequeñas chozas improvisadas con palmas de huano, a modo de capillas temporales frente a las casas de los kuuchnales (cargos tradicionales encargados de la fiesta). Allí se realizan oraciones en maya y español (conocidas como máatan o t’oox), y al finalizar el rezo se sirven ofrendas de comida a los asistentes, típicamente grandes pailas de chirmole (guiso de chile negro) que se comparten comunitariamente. Estos altares domésticos representan la antigua costumbre de “recibir” al santo patrono en distintas casas; antaño en Chunhuas eran siete los hogares que albergaron al Cristo durante la fiesta, aunque hoy han quedado solo dos, reflejo de la reducción en participación a lo largo del tiempo.
El día principal de la fiesta se celebra una Misa solemne en la iglesia maya del pueblo, dedicada al Santo Cristo de Amor, con la asistencia de autoridades tradicionales y devotos de distintas edades. Tras la misa, suele realizarse la procesión principal, en la cual la imagen del Cristo de Amor recorre las calles del poblado adornada con flores. Hombres y mujeres caminan junto a la imagen rezando y cantando, acompañados por estallidos de voladores (cohetes) que anuncian el recorrido. De hecho, la pirotecnia forma parte del lenguaje festivo: el tronido de los voladores marca momentos clave, sirviendo para convocar a la feligresía o señalar el inicio de cada actividad religiosa. Durante la procesión, es común que los fieles ofrezcan velas, flores y rezos; al regresar la imagen al templo, se presentan ofrendas de alimentos ante el altar como acción de gracias. Finalmente, una bendición colectiva cierra la parte litúrgica, tras lo cual la comunidad se prepara para la convivencia festiva.
Paralelamente a los ritos religiosos, la fiesta patronal del Santo Cristo de Amor incluye una variedad de actividades culturales y recreativas que le dan un ambiente de feria tradicional. Una de las primeras ceremonias que marcan el inicio de la fiesta es el corte del árbol sagrado de yaxché (ceiba). Los organizadores y vecinos se internan en el monte para seleccionar un joven árbol de ceiba, al cual consideran sagrado en la cosmovisión maya. En procesión lo trasladan hasta el centro del pueblo y ahí siembran el yaxché en la plaza principal, rito simbólico que representa el eje de la vida y el enlace con lo divino. Esta siembra del árbol sagrado es un momento de gran importancia cultural, acompañado de rezos para pedir permiso y bendición a la naturaleza. Bajo la sombra del yaxché recién plantado se desarrollarán muchas de las actividades festivas.
Después de la siembra del árbol, la comunidad da paso a la Noche de Vaquería, que tradicionalmente inaugura la parte profana de la fiesta. La vaquería es un baile colectivo heredado de la época colonial yucateca, donde parejas ataviadas con traje regional (las mujeres portando elegantes ternos bordados y los hombres con guayabera, paliacate rojo y sombrero) bailan al ritmo de la jarana yucateca. En la vaquería del Santo Cristo de Amor suelen participar grupos de jaraneras locales (conocidas como vaqueras) provenientes no solo de la localidad sino a veces de comunidades vecinas. Una orquesta jaranera ameniza el evento tocando sones tradicionales en compás de 6/8 y 3/4; por ejemplo, la Orquesta La Dinastía de X-Yatil es frecuente invitada a estas fiestas en la Zona Maya. La gente del pueblo y visitantes se reúnen alrededor de la plaza para admirar el zapateado vigoroso de los bailadores. En algunos casos se organizan concursos de jarana, donde se premia la destreza y elegancia de las parejas participantes, manteniendo viva esta expresión folklórica. La vaquería es motivo de orgullo comunitario: “No faltan los bailes de jarana con la vestimenta típica” señala la crónica de estas fiestas, siendo uno de los momentos más coloridos de la celebración.
Además del baile regional, cada noche de fiesta suele culminar con un baile popular abierto a todos. Estas noches de fiesta cuentan con música de grupos populares (cumbia, salsa, rancheras modernas), luces y alegría general, permitiendo la convivencia intergeneracional. Son eventos más informales comparados con la vaquería, pero igualmente importantes para el entretenimiento del pueblo.
Otra atracción infaltable en estas fiestas son las corridas de toros. Siguiendo la costumbre yucateca, la comunidad construye un ruedo o plaza de toros temporal con madera en las afueras de la plaza central. Durante varios días se llevan a cabo corridas o vaquillas por la tarde, donde toreros aficionados y jinetes participan. Cabe aclarar que en la Zona Maya estas corridas son parte integral de la tradición festiva, amenizadas por música y por la algarabía de la gente desde las gradas improvisadas. Por ejemplo, en Chancah de Repente la cartelera de 2025 anunciaba corridas de toros diariamente durante más de una semana de fiesta (del 7 al 15 de abril) en horario vespertino. La presencia del ruedo al lado de la iglesia y de la ceiba sembrada simboliza la combinación de lo sagrado y lo profano en un mismo espacio festivo.
La gastronomía tradicional juega también un papel central. Durante la fiesta, las cocineras de la comunidad preparan grandes cantidades de platos típicos para compartir. Entre los platillos más representativos se encuentran el relleno negro (guiso de pavo con recado negro) y el chirmole de cerdo, que se cocinan en pib (hornos de tierra) para obtener el sabor ahumado distintivo. Tras los eventos religiosos, es costumbre repartir la comida bendecida entre todos los asistentes, reforzando los lazos de hermandad (nadie se va sin comer en estas fiestas). Asimismo, en los alrededores de la plaza se instalan puestos de antojitos regionales – como tacos de cochinita, panuchos, atole nuevo, dulces de papaya y yuca – y juegos mecánicos o tradicionales para los niños, otorgando un ambiente de feria popular.
Por último, los fuegos artificiales acompañan toda la semana festiva. Además de los voladores al inicio, se acostumbra cerrar con broche de oro las celebraciones con toritos (estructuras pirotécnicas portátiles) y castillos luminosos la última noche, iluminando el cielo en honor al Cristo de Amor. La pólvora, la música y la devoción combinadas crean una atmósfera única que mezcla solemnidad y júbilo comunitario.
Comuneros de la Zona Maya transportan un tronco de yaxché (ceiba sagrada) para sembrarlo en el centro del pueblo como parte del inicio de la fiesta tradicional.
Parejas de vaqueros y vaqueras bailan la jarana yucateca durante la noche de vaquería en honor al Santo Cristo de Amor, vistiendo el terno yucateco y zapateando al son de la orquesta regional

Un rasgo notable de esta festividad es que involucra a todos los sectores de la comunidad. Cada grupo social asume roles específicos para garantizar el éxito de la celebración, por ejemplo:
•	Mayordomos o Comité organizador: En cada pueblo suele haber una familia o grupo de personas que funge como principal responsable de la fiesta ese año. Son los encargados de coordinar los preparativos, recaudar apoyo y convocar a los demás. En Chunhuas, por ejemplo, la joven Landy May Chuiquil y sus hermanos asumieron la responsabilidad de organizar la festividad tal como lo hacían sus padres y abuelos. Ellos se aseguran de “reforzar nuestras tradiciones” y convocar a la participación colectiva.
•	Gremios religiosos: Como se mencionó, los gremios reúnen a devotos por afinidad (jóvenes, señoras, campesinos, etc.) para encargarse de las procesiones y rezos en cada día del novenario. Cada gremio porta su estandarte y ofrenda, lidera la entrada a la iglesia, presenta flores y luego ofrece un refrigerio o comida a la comunidad. Esta tradición de gremios fomenta la unión entre vecinos y el sentido de cooperación, pues cada grupo aporta trabajo y recursos para honrar al santo.
•	Vaqueras y jaraneros: Las mujeres del pueblo, especialmente las jóvenes, participan activamente como vaqueras en la noche de vaquería, luciendo el traje regional y bailando con orgullo. De igual manera, hombres de la comunidad se suman como bailadores (jaraneros) y como asistentes en los eventos taurinos. El papel de la mujer es muy visible en la parte cultural: son símbolo de la tradición viva con sus ternos bordados en el baile, y también suelen ser quienes elaboran la comida ritual y transmiten recetas a las nuevas generaciones.
•	Músicos de maya pax: La juventud local participa incorporándose a los grupos musicales tradicionales llamados maya pax. Estas agrupaciones, integradas por jóvenes y adultos, interpretan música sagrada maya con trompetas, tambores, violín y bombo, que acompaña las procesiones y ceremonias religiosas. Varias familias han motivado a sus hijos a aprender estos sones y a unirse a la banda del pueblo, logrando que incluso niños se interesen por preservar la música ancestral. Su presencia garantiza el relevo generacional de esta expresión artística, vital para el ambiente espiritual de la fiesta.
•	Autoridades tradicionales: En las comunidades mayas persisten figuras de dignatarios o principales, que son los ancianos respetados y encargados de las tradiciones. Durante la fiesta, estas autoridades tradicionales suelen encabezar los rituales junto al sacerdote (si lo hay) o al rezador maya. Acompañan la imagen del Cristo en las procesiones y se aseguran de que se cumplan las costumbres (por ejemplo, que el yaxché sea cortado “como manda” o que los rezos se hagan en orden). En eventos relacionados, como la peregrinación de la Vara de San Juan, se menciona que “autoridades tradicionales y un grupo de maya pax compuesto por jóvenes y adultos” lideran el recorrido sagrado y los rezos por las aldeas. Esto refleja cómo los ancianos y líderes comunitarios guían el aspecto espiritual, asesorando a los organizadores más jóvenes con su conocimiento.
•	Autoridades civiles: Las autoridades municipales también juegan un rol de apoyo y legitimación. En los últimos años, es común que el alcalde o funcionarios locales acudan a la inauguración de la fiesta tradicional para mostrar respaldo. Por ejemplo, al reanudarse la fiesta de Polyuc, los pobladores invitaron a la presidenta municipal Paoly Perera a presenciar el corte del listón, buscando “motivar a la población a continuar con el festejo” con el apoyo moral del gobierno. Si bien el peso de la organización recae en la gente, la presencia de autoridades puede ayudar con recursos logísticos (iluminación, seguridad, difusión) y da realce al evento, reconociéndolo como parte del patrimonio cultural local.
En suma, la fiesta del Santo Cristo de Amor es una empresa colectiva donde toda la comunidad – niños, jóvenes, adultos, ancianos, hombres y mujeres – aporta su esfuerzo. Desde quienes limpian y adornan la iglesia, los que arman el ruedo de toros, hasta las cocineras que reparten los alimentos benditos, cada cual contribuye. Este carácter participativo fortalece la cohesión social: trabajar juntos por la fiesta patronal refuerza los lazos de solidaridad y la identidad compartida.
Significado religioso, social y cultural de la festividad
Para las comunidades mayas de Felipe Carrillo Puerto, esta festividad tiene un profundo significado en múltiples dimensiones:
•	Significado religioso: Constituye ante todo un acto de fe y devoción católica hacia Cristo, a quien veneran bajo la advocación del “Cristo de Amor”. Es una oportunidad anual para honrar a Dios y a los santos, agradecer los beneficios recibidos y pedir protección. Durante estas celebraciones, se llevan a cabo actos de renovación espiritual: el pueblo entero reza, canta y participa en ceremonias de ofrecimiento. Se cree que mediante estos rituales se busca “un equilibrio entre el mundo espiritual y terrenal”, honrando a la divinidad y agradeciendo por las cosechas y la salud de la comunidadporesto.com. La imagen del Cristo de Amor se convierte en un símbolo de unidad en la fe, recordando los valores de amor, esperanza y caridad entre los pobladores.
•	Significado social: La fiesta patronal funciona como un encuentro comunitario de gran importancia. Alrededor de ella se congregan familias locales e incluso vecinos de otras poblaciones cercanas, reforzando los lazos sociales. Son días en que los migrantes regresan a su pueblo para festejar, y la comunidad se reencuentra. Se promueve un sentido de orgullo colectivo al mantener una tradición heredada. Además, la celebración actúa como elemento de cohesión intergeneracional: mayores y jóvenes conviven, transmitiendo conocimientos y costumbres. Estas festividades tradicionales “forman parte del legado ancestral” y su práctica colectiva reafirma la identidad del grupoporesto.com. En palabras de los mayas de la región, la fiesta es un espacio para “renovación social y espiritual”, donde se refuerza la armonía comunitaria y la cooperación mutuaporesto.com. También es una ocasión de alegría compartida que alivia las tensiones de la vida cotidiana, brindando momentos de convivencia pacífica.
•	Significado cultural: La festividad del Santo Cristo de Amor es a la vez una expresión cultural maya muy rica. Encierra elementos rituales, musicales, dancísticos, gastronómicos y lingüísticos propios de la cultura local que han sobrevivido al paso del tiempo. Es un ejemplo vivo de sincretismo: combina la devoción católica introducida por los frailes con las tradiciones ancestrales mayas (como la ceiba sagrada, la música maya pax, los rezos en lengua maya y la organización comunitaria indígena). Por ello, esta fiesta es considerada una “rica herencia cultural” del municipioporesto.com. Su continuación permite preservar y visibilizar costumbres que de otro modo podrían perderse frente a la modernidad. Cada danza de jarana, cada platillo típico compartido, cada nota de maya pax tocada, refuerza en los participantes el sentido de pertenencia a una historia y a una cultura única. De hecho, uno de los objetivos declarados por los propios organizadores es “seguir reforzando nuestras tradiciones”, mostrando orgullo por la herencia maya a pesar de las adversidades. En resumen, la fiesta tiene un valor identitario: es un vínculo tangible con el pasado y una afirmación del patrimonio inmaterial que define a estas comunidades.
•	Calendario y duración: Cada pueblo ha fijado las fechas de su fiesta de acuerdo a sus tradiciones locales. Chunhuas la celebra en marzo, Polyuc y Chancah de Repente en abril, otros quizá en fechas distintas, lo cual evita empalmar eventos y permite que pobladores vecinos se visiten mutuamente. La duración de la fiesta puede variar: algunas comunidades realizan una semana de celebraciones (por ejemplo 8–14 de marzo en Chunhuas), mientras que otras extienden los eventos por más de diez días. En Chancah de Repente la festividad tradicional ha llegado a abarcar hasta dos fines de semana completos, dando cabida a más corridas de toros y bailes populares. Polyuc, al haber retomado su fiesta recientemente, inicialmente la programó más corta (unos 5 días) pero con la intención de ampliarla conforme crezca la participación. Estas diferencias dependen del tamaño de la población, su capacidad organizativa y los recursos disponibles, pero en esencia todas honran al mismo santo patrono.
•	Énfasis y actividades particulares: Si bien los elementos centrales (ceremonia religiosa, vaquería, toro, comida) se repiten, cada comunidad puede imprimir su sello particular. Por ejemplo, Chunhuas es reconocida por la solemnidad de sus rezos tradicionales y la conservación estricta de los ritos antiguos, manteniendo las máakanes y la participación de dignatarios mayas. Polyuc, en cambio, al relanzar su fiesta, buscó hacerla muy atractiva para el público: incluyó concursos de jarana, noches de baile con grupos modernos y otras novedades para atraer visitantes de poblados circunvecinos y revitalizar el entusiasmo. Esa orientación hizo que llegara gente de Chunhuhub, José María Morelos e incluso de la cabecera municipal a disfrutar de la fiesta en Polyuc. Chancah de Repente es particularmente famosa por sus corridas de toros, que son el evento principal cada tarde y congregan a mucha afición de rancherías aledañas. En algunas localidades más pequeñas, quizás no hay corrida formal pero sí jaripeos o montas simples. Otras comunidades podrían incluir danzas o ceremonias únicas: por ejemplo, en Xocén (Yucatán) existía el baile de cabezudos, y en Santa Elena la danza de los pavos – manifestaciones que no necesariamente se ven en Quintana Roo, pero muestran cómo cada pueblo adapta la devoción a su propio folklore.
•	Participación de otras comunidades: Otro aspecto variable es qué tanto afluencia externa tiene cada fiesta. En ciertos pueblos la fiesta patronal es un acontecimiento multicomunitario, recibiendo mayordomías y visitantes de diferentes localidades (especialmente si en ese momento no hay otra fiesta cercana). Tal es el caso de la región de la Zona Maya, donde las fiestas se escalonan: habitantes de un pueblo asisten a la fiesta del vecino y viceversa. Por ejemplo, la vaquería de Polyuc 2024 contó con asistentes provenientes de Chunhuhub, de José María Morelos y de la ciudad de Felipe Carrillo Puerto, además de los locales. En cambio, en aldeas más aisladas o pequeñas, la celebración puede ser más íntima, enfocada casi exclusivamente en la propia comunidad y sus invitados familiares. En cualquier caso, todas estas variantes enriquecen el mosaico cultural: cada comunidad ha hecho suyo al Santo Cristo de Amor, manifestando la devoción en estilos ligeramente distintos pero con igual fervor.


Transformaciones a lo largo del tiempo y preservación de la tradición
Como muchas tradiciones, la fiesta del Santo Cristo de Amor ha enfrentado cambios generacionales y desafíos modernos, pero también ha visto esfuerzos conscientes para preservarla:
•	Pérdida de interés y riesgos de discontinuidad: En las últimas décadas, factores como la migración a las ciudades, la influencia de otras religiones, e incluso el auge de la tecnología y el entretenimiento moderno han mermado la participación de la juventud en estas costumbres. Organizadores veteranos señalan con preocupación que “estas manifestaciones se han ido debilitando” y que existe el peligro real de que la tradición desaparezca si no se atiende. Un claro ejemplo es lo ocurrido en Polyuc, donde la fiesta patronal prácticamente se dejó de celebrar por más de 30 años; la última edición completa habría sido en los 1980s, tras lo cual la tradición se interrumpió por falta de organización y recursos. Recién en 2016 la comunidad hizo un pequeño recordatorio simbólico, y para 2017 se propusieron “retomar la algarabía que la caracterizó durante décadas”, organizándose de nuevo para rescatar la fiesta tradicional. Este hiato de tres décadas muestra cómo fácilmente puede quebrantarse la continuidad si no hay relevo generacional. En otros lugares, la celebración continuó cada año pero en escala menguante: Chunhuas, por ejemplo, pasó de tener siete familias anfitrionas a solo dos actualmente, signo de que menos gente asume las cargas de la organización. Además, como expresó Landy May, los teléfonos móviles y la atracción de la modernidad compiten con las costumbres – muchos jóvenes hoy encuentran más entretenido el mundo digital que participar en rituales tradicionales.
•	Esfuerzos de rescate y continuidad: Frente a estos desafíos, los propios habitantes han emprendido acciones para preservar su fiesta. En Polyuc, el delegado municipal Gabriel Cauich convocó a la población para reorganizar el festejo, formando un comité y volviendo a planear un programa completo con actividades religiosas y populares. Contaron con el apoyo moral de ex habitantes y se esforzaron por reavivar el entusiasmo, recordando a todos el valor de la tradición. En Chunhuas, familias jóvenes como la de Landy decidieron tomar la estafeta de sus mayores para que la celebración no muera, poniendo de su tiempo y recursos personales para seguir “como lo hicieron nuestros abuelos y padres”. Asimismo, integrar a la niñez ha sido clave: ahora varias familias llevan a sus hijos a los ensayos de la orquesta maya pax, les enseñan a bailar jarana o a ayudar en la cocina comunitaria, de modo que crezcan valorando estas vivencias. Algunos niños han mostrado especial interés en la música tradicional, aprendiendo instrumentos y participando con orgullo, lo cual es esperanzador para el futuro de la fiesta.
•	Apoyo institucional y apertura cultural: A nivel municipal y estatal, la importancia de estas fiestas no ha pasado inadvertida. Instituciones culturales y autoridades locales han comenzado a reconocerlas como parte del patrimonio cultural inmaterial de Quintana Roo, susceptible de ser apoyado. Por ejemplo, el Instituto para el Desarrollo del Pueblo Maya (INMAYA) y las direcciones de cultura municipales suelen brindar asistencia con difusión, logística o pequeños fondos para estas festividades tradicionales (como ha ocurrido con otras fiestas patronales de la zona). La presencia de la alcaldesa en inauguraciones, como se vio en Polyuc, es un mensaje público de respaldo a la continuidad de la tradición. Por otro lado, ha habido un cambio de actitud en las comunidades respecto a la divulgación de sus costumbres: antiguamente eran muy celosas y privadas, e incluso “no se permitía” a extraños tomar fotografías durante ciertos rituales nocturnos. Hoy en día, los organizadores han comprendido que “para preservar una cultura, primero debe ser conocida y valorada por nuestra gente así como por quienes nos visitan”. En consecuencia, ahora existe mayor apertura a los visitantes y a los medios: se invita a turistas culturales, investigadores y periodistas a presenciar la fiesta, siempre con respeto. Esto no solo genera un intercambio enriquecedor, sino que también enorgullece a la comunidad al ver apreciada su tradición. Actualmente es común ver cámaras captando la vaquería o procesión – algo impensable hace años – y esas imágenes ayudan a difundir la devoción al Santo Cristo de Amor más allá de la región.
la fiesta tradicional del Santo Cristo de Amor en Felipe Carrillo Puerto se mantiene como un baluarte de fe, cultura e identidad maya. Ha experimentado transformaciones, sí, pero esencialmente conserva su esencia comunitaria. Las nuevas generaciones, de la mano de sus mayores, están tomando el relevo para que las campanas, los voladores, la música de maya pax y los bailes de jarana sigan sonando cada año bajo el yaxché sagrado. Mientras haya personas comprometidas que, como dice la joven Landy, “hagan un gran esfuerzo por mantener viva esta celebración”, el Santo Cristo de Amor seguirá recibiendo honores en la Zona Maya, uniendo pasado y futuro en una misma fiesta. La tradición, enriquecida con pequeños cambios para adaptarse a los nuevos tiempos, continúa resistiendo el olvido y afirmándose como una rica herencia cultural que los mayas de Quintana Roo legarán a las próximas generaciones


`,
    imagen: "./public/assets/img/3.png"
  },
  {
    titulo: "San Juan Bautista",
    comunidad: "K’opch’en",
    descripcionLarga: `
Orígenes y Antecedentes Históricos
La devoción a San Juan Bautista en la región maya de Quintana Roo tiene raíces que se remontan a la época colonial, cuando los evangelizadores introdujeron el culto al santo. Sin embargo, la historia turbulenta de Felipe Carrillo Puerto (antiguamente Chan Santa Cruz) marcó la expresión de esta fe. Durante la Guerra de Castas (siglo XIX), los mayas rebeldes establecieron su propio centro religioso en torno a la Cruz Parlante, alejándose del control católico. Tras la reincorporación de la zona al país a inicios del siglo XX, la Iglesia Católica retomó influencia y muchas comunidades adoptaron de nuevo a santos patronos como San Juan Bautista, integrándolos con sus creencias ancestrales. La devoción del pueblo maya a San Juan arraigó profundamente en el centro de Quintana Roo, al igual que en toda la península de Yucatán. Con el tiempo, esta festividad sincrética combinó la fe católica con rituales agrícolas prehispánicos (peticiones de lluvia, ofrendas de maíz), configurando una tradición única en la Zona Maya.
Comunidades Participantes y Fechas de Celebración
La fiesta tradicional de San Juan Bautista se celebra en la cabecera municipal de Felipe Carrillo Puerto y, sobre todo, en numerosas comunidades mayas del municipio. Al menos diez a trece localidades mantienen viva esta festividad, entre las que destacan: Kopchén, X-Hazil Sur, Uh May, San Andrés, Noh Cah, Chancah Veracruz, Mixtequilla, Chan Santa Cruz (la ciudad capitalina), Yoactún, Laguna K’ana, Santa María Poniente, Naranjal Poniente y Petcacab, entre otras. En todas ellas San Juan es reverenciado como patrono o santo protector de la comunidad.
Las fechas giran en torno al 24 de junio, día de San Juan. Formalmente, la fiesta patronal en Kopchén –considerada el corazón de esta tradición– se celebra del 20 al 25 de junio aproximadamente, con la culminación el 24. No obstante, los preparativos comienzan con mucha anticipación: desde inicios de mayo se realiza la Peregrinación de la “Vara de San Juan”, en la cual la imagen o símbolo del santo recorre a pie todas las comunidades participantes. Este recorrido ritual inicia en Kopchén (unos 40 km al sur de la cabecera) y visita pueblo por pueblo durante varias semanas. Al llegar San Juan Bautista a cada comunidad, los habitantes lo reciben jubilosos para luego acompañarlo en su trayecto al siguiente destino. Finalmente, a mediados de junio el santo regresa a Kopchén, dando paso a la gran fiesta patronal central en esa localidad. De esta manera, la celebración abarca varios días y conecta a múltiples pueblos en una devoción compartida.
Procesión tradicional de San Juan Bautista en una comunidad maya de Felipe Carrillo Puerto. Mujeres vestidas con hipiles y ternos típicos acompañan al santo con velas y ofrendas, mostrando la devoción comunitaria. 



Actividades Religiosas de la Festividad
La fiesta de San Juan Bautista está llena de actos religiosos profundos. En cada comunidad se organizan misas solemnes, novenas y rezos en honor al santo. Es habitual que gran parte de la liturgia y los cantos se realicen en lengua maya, para mantener la esencia cultural local. El punto central es la procesión o recorrido del santo: San Juan Bautista es llevado en hombros por los fieles devotos a través de veredas y caminos antiguos, visitando cada pueblo. Durante esta peregrinación sagrada se entonan cánticos, se tocan piezas de música Maya Pax (música ceremonial con violín y tambores) y se elevan plegarias, todo ello como petición de lluvias para asegurar una buena cosecha de la milpa. Cada familia espera el arribo de la comitiva en su comunidad y, a la llegada del santo patrono, lo celebra con fervor religioso: se realizan ofrendas especiales, se bendicen alimentos y se realizan oraciones tanto dentro como fuera de la iglesia local.
En Kopchén, al iniciar la fiesta mayor tras el retorno del santo, tiene lugar una velación nocturna: los devotos pasan la víspera del 24 de junio en oración continua, velando junto a la imagen de San Juan Bautista con velas encendidas, rezos (llamados máatan o t’oox en maya) y cantos religiosos. Esta vigilia culmina con las Mañanitas al santo al despuntar el 24 de junio. Posteriormente se celebra la Misa principal en la iglesia maya del pueblo, oficiada a menudo en maya y español, donde se agradece al santo por las bendiciones recibidas. Tras la misa, se suele efectuar una procesión local alrededor de la plaza, con San Juan llevado en andas, mientras los fieles le muestran su respeto. En muchos casos, la procesión incorpora elementos autóctonos: por ejemplo, en algunos pueblos se dirige la imagen hacia algún cenote, pozo o milpa cercana para bendecir las fuentes de agua y los sembradíos, simbolizando la unión de la fe católica con la naturaleza.
Un componente importante paralelo a la devoción católica es la ceremonia maya de petición de lluvia, el Ch’a Cháak. En ciertas comunidades la llegada de San Juan Bautista se complementa con este ritual ancestral en honor a Yuum Cháak (el dios maya de la lluvia). Bajo la guía de sacerdotes mayas (h-men) o rezadores tradicionales, se prepara un altar con ofrendas agrícolas y se recitan oraciones en maya pidiendo lluvia: “Uti’al u toj óolalil yóok’ol kaab yéetel uti’al u k’áaxal ja’, tu kilich k’aaba’ Ajaw, Amén” (“Por la salud del mundo y para que llueva, en el nombre del gran señor, Amén”). Este ritual agrícola –el Ch’a Cháak– suele realizarse en fechas cercanas al día de San Juan, aprovechando la congregación de la comunidad, y refuerza el sentido original de la festividad como rogativa por el agua y la fertilidad de la tierra. Así, la fe católica (personificada en San Juan, bautista que utiliza el agua como símbolo) se entrelaza con la cosmovisión maya, creando una experiencia espiritual única.
Actividades Culturales y Populares
En torno a la celebración religiosa florece una rica gama de actividades culturales y festivas que le dan un carácter alegre y comunitario a la fiesta de San Juan. Una de las más características es la noche de vaquería, un baile tradicional yucateco de origen colonial. Al iniciar la fiesta patronal (ya sea en la víspera o en la primera noche), se realiza la Vaquería: bajo luces festivas, la plaza o cancha del pueblo se llena de parejas bailando jarana yucateca al son de una orquesta jaranera. Se interpretan piezas como Aires Yucatecos y otras jaranas con rítmicos zapateados. Las mujeres (vaqueras) lucen elegantes ternos bordados o hipiles con faldas amplias, mientras los hombres visten el tradicional traje blanco con paliacate rojo. Por lo general, se invita a orquestas regionales –por ejemplo, La Dinastía de X-Yatil es muy conocida en la zona– que con trompetas, saxores o conjuntos polifacéticos amenizan la velada. El inicio formal de la fiesta suele anunciarse con voladores o cohetes que truenan en el aire, dando paso al jolgorio de la vaquería. Este baile comunitario no solo es entretenimiento: es un homenaje cultural en el que se refuerza la identidad mestiza-maya de la región.
Vaquería tradicional durante la fiesta de San Juan Bautista en la comunidad de Kopchén. Parejas de bailadores interpretan la jarana yucateca al ritmo de la música maya pax y orquesta, celebrando con alegría y colorido la noche festiva. 
Otro momento destacado es la “siembra del yaxché”, ceremonia simbólica en la que se planta un árbol de ceiba (yaxché), considerado sagrado en la cosmovisión maya y símbolo de la vida. Como parte de los eventos iniciales de la fiesta en Kopchén, hombres del pueblo cargan solemnemente un joven árbol de ceiba en procesión y lo plantan en el centro de la plaza o junto a la iglesia. Este acto ritual, acompañado de música y aplausos, representa el arraigo de la tradición y la conexión entre la festividad y la naturaleza. La ceiba plantada se convierte en testigo vivo de la celebración y en ofrenda a Dios y a los yumtsilo’ob (señores de la naturaleza).
Las manifestaciones populares continúan a lo largo de la semana de festejos. En muchos pueblos se instala un ruedo de madera para realizar eventos con toros (corridas tradicionales o jaripeos), retomando la costumbre arraigada en Yucatán de celebrar al santo patrón con lidias de toros. Estos eventos, amenizados por música y animadores, congregan a la población en torno a la adrenalina y la tradición taurina regional (actualmente adaptada a normas de seguridad y a veces sustituida por rodeos, según la comunidad).
La gastronomía tradicional ocupa un lugar central en la fiesta. Desde días antes, las familias se organizan para preparar grandes cantidades de comida que será ofrecida tanto al santo como compartida entre los asistentes. El maíz es el elemento fundamental: con él se elaboran atoles, tortillas recién hechas y variados platos típicos. Destaca particularmente el chilmole o chirmole, un guiso ancestral de carne de cerdo o ave con recado negro (especia de chiles tatemados), que se cocina en enormes pailas. Cada día de la fiesta en Kopchén llegan provisiones de las comunidades: gallinas, pavos y hasta 15 a 20 cerdos (k’uches) donados por los pueblos vecinos se sacrifican para alimentar a la multitud. El relleno negro, uno de los platillos representativos de la región, se prepara en un horno de tierra (pib) y es servido el día principal como ofrenda culinaria y banquete comunitario. También se reparten tamales, frijoles con puerco, dulces tradicionales y otras delicias de la cocina maya yucateca. Este compartir de alimentos tiene un profundo significado ritual: al comer juntos los frutos de la milpa y la crianza, la comunidad agradece a San Juan y a la tierra por la abundancia.
No faltan otras atracciones populares: juegos mecánicos sencillos para los niños, antojitos y puestos de artesanías alrededor de la plaza, y bailes populares cada noche con grupos musicales de la región para amenizar la convivencia. Sin embargo, incluso en medio de la festividad profana, los elementos culturales mayas están siempre presentes. La música maya pax –con sus violines, tamborcillos y bombo– no solo acompaña actos religiosos, sino que también se toca durante las vaquerías y procesiones, aportando un sonido distintivo que diferencia estas fiestas de las de otras regiones de México. Asimismo, grupos de danzas folclóricas locales a veces presentan bailables durante el día, y en ciertas comunidades puede haber competencias tradicionales (como juegos de lazos o trajes típicos). En conjunto, las actividades culturales en honor a San Juan Bautista mezclan el fervor religioso con la alegría festiva, creando un ambiente de hermandad y orgullo cultural.
Participación Comunitaria y Roles Sociales
La festividad de San Juan Bautista es, por encima de todo, un evento comunitario donde todos los sectores del pueblo participan y asumen roles específicos:
•	Autoridades tradicionales: Encabezan la organización y ceremonias. Cada pueblo cuenta con figuras como el juez tradicional, alcalde o kapitán, y rezadores mayores que guían las plegarias. Ellos lideran la peregrinación del santo, portando en muchos casos el estandarte o la misma Vara de San Juan, y coordinan la recepción en cada comunidad. Estas autoridades, heredadas de la estructura social maya, se encargan de la logística sagrada: deciden las rutas, fechas y rituales, y mantienen la disciplina y respeto durante los actos religiosos. Según testimonios, los nojoch máako’ob (ancianos principales) sensibilizan a la población para que todos se sumen a la festividad, y gestionan apoyos ante el gobierno para fortalecer la tradición.
•	Familias anfitrionas y comités festivos: Tradicionalmente, la organización de la fiesta se repartía entre varias casas de la comunidad. En cada una se instalaba un pequeño altar o máakan (enramada de huano) frente a la vivienda para recibir al santo, realizar rezos y servir comida a los participantes. Hace algunas décadas era común que 6 o 7 familias (cofradías locales) se turnaran, cada una haciéndose cargo de un día de novena o de una parte de la fiesta. Actualmente este número ha disminuido (se reporta que apenas quedan dos máakanes activos en ciertos pueblos), pero dichas casas continúan siendo el centro de la actividad: allí llegan los peregrinos con San Juan, se reúnen las vaqueras antes del baile y los músicos de maya pax tocan sus sones durante los rezos. Los miembros de estas familias anfitrionas son considerados “kuuchamales” o diputados de la fiesta, es decir, responsables de cargar con la organización material (adornar la iglesia, preparar la leña y pozos para el pib, coordinar la matanza de animales, etc.). Su rol es vital para conservar el orden y la continuidad de las celebraciones de un año a otro, pasando el conocimiento organizativo a sus hijos.
•	Mujeres (vaqueras y rezadoras): Las mujeres de la comunidad tienen una participación muy activa y multifacética. Por un lado, están las vaqueras, generalmente jóvenes y señoras, que integran el grupo de baile durante la vaquería. Ellas visten el traje regional con elegancia y dan realce a la fiesta con su presencia, bailando con devoción y alegría. Por otro lado, las mujeres mayores suelen ser las principales encargadas de la gastronomía y ofrendas: se reúnen días antes para nixtamalizar maíz, hacer tortillas, preparar condimentos y guisos como el chilmole, y coordinar la distribución de los alimentos en los almuerzos comunitarios. Muchas también fungen como rezadoras, liderando rosarios y cantos tanto en español como en maya, especialmente en las novenas previas al día grande. Su trabajo silencioso sostiene buena parte de la tradición: “con antelación, la gente (sobre todo las señoras) prepara los alimentos que se ofrecerán” señala un cronista local. Además, las mujeres se encargan de vestir y adornar la imagen de San Juan con flores, velas y listones, y de mantener limpia la capilla. En suma, su rol es nutrir –en sentido literal y espiritual– a la comunidad durante la fiesta.
•	Hombres (cargadores, músicos, mayordomos): Los varones de la comunidad suelen asumir tareas que requieren esfuerzo físico y liderazgo ceremonial. Un grupo de cargadores acompaña siempre la imagen de San Juan; ellos se turnan para llevar en hombros al santo durante kilómetros, demostrando su fe y compromiso. Otros hombres construyen la infraestructura temporal: levantan el ruedo de toros, colocan la enramada para el baile, instalan la iluminación y los cohetes. Existen también mayordomos o fiscales de la iglesia, quienes junto con las autoridades tradicionales organizan la liturgia (coordinan la misa con el sacerdote, disponen las ofrendas en el altar, etc.). En el aspecto musical, varios hombres integran las orquestas jaraneras y los conjuntos de maya pax. Este último, el maya pax, ha sido por tradición ejecutado por varones adultos (violín, tarola, bombo), pero en años recientes se han sumado mujeres y jóvenes a estos grupos musicales familiares. Asimismo, hombres de mayor edad suelen oficiar de mestres de ceremonia o narradores durante los eventos, explicando a los visitantes el significado de cada rito. Cabe mencionar a los toreros improvisados o jinetes locales que participan si hay jaripeo, ilustrando la valentía festiva característica de la zona.
•	Jóvenes y niños: La nueva generación participa de diversas maneras, aunque con retos. Muchos jóvenes colaboran con sus familias en los preparativos y durante la fiesta actúan como ayudantes generales: reparten alimentos, atienden a los invitados, tocan en la banda de guerra escolar que a veces abre los desfiles, o apoyan en la logística (sonido, luces). Un aspecto alentador es la incorporación de niños y adolescentes a los grupos de música tradicional; se ha visto que varios aprenden desde temprana edad a tocar el violín o el tambor del maya pax junto a sus padres y abuelos. Esto no solo les inculca disciplina y orgullo cultural, sino que asegura la continuidad de la música sagrada. Algunos jóvenes también bailan la jarana, integrándose como pareja de las vaqueritas y aportando energía al festejo. Sin embargo, líderes comunitarios señalan que no todos los chicos muestran interés: las distracciones modernas como los teléfonos móviles han restado atención a las costumbres. Aun así, en las comunidades más tradicionales se incentiva a la juventud a involucrarse, recordándoles que la fiesta de San Juan es parte de su identidad.
•	Autoridades civiles y apoyo institucional: Aunque la organización recae principalmente en la comunidad, las autoridades municipales de Felipe Carrillo Puerto suelen brindar apoyo logístico y reconocimiento. La presidencia municipal, a través de su Dirección de Cultura o el comisariado ejidal local, puede aportar recursos como la contratación de la orquesta, equipos de sonido o iluminación. En inauguraciones oficiales de fiestas patronales es común la presencia de representantes del ayuntamiento, quienes dan realce institucional al evento y reconocen el esfuerzo de los pueblos por mantener sus tradiciones. En 2025, por ejemplo, se reportó la inauguración de la fiesta de San Juan en Laguna K’ana con la participación de líderes locales y la banda de música, simbolizando la unión de esfuerzos entre gobierno y comunidad. Además, organismos culturales estatales han documentado y registrado esta festividad en el Inventario de Patrimonio Cultural Inmaterial, dada su importancia sociocultural para la región. Todo ello muestra que la fiesta de San Juan involucra a todos los niveles de la sociedad local: desde el anciano rezador hasta el joven músico, pasando por madres de familia, agricultores, maestros de escuela y autoridades, todos encuentran un papel para honrar al santo patrono y fortalecer la cohesión del pueblo.
Significado Religioso, Social y Cultural de la Festividad
La celebración de San Juan Bautista en Felipe Carrillo Puerto trasciende lo meramente ritual; está cargada de significados profundos en múltiples dimensiones:
•	Significado religioso: Para los fieles mayas-católicos, San Juan Bautista representa un intercesor poderoso y cercano. Es el santo que “bautiza con agua” y por ello se le asocia simbólicamente con la lluvia y la fertilidad. Su festividad ocurre al inicio de la temporada de lluvias, lo que refuerza la creencia de que San Juan “trae el agua”. Las procesiones con el santo por las milpas y poblados son actos de fe y súplica a Dios para obtener el don de la lluvia y bendecir las cosechas. En cada pueblo, la llegada de la imagen es vista como una bendición itinerante: los habitantes reciben al santo con respeto casi tangible, creyendo que su presencia renovará espiritualmente el lugar y protegerá a la comunidad de enfermedades o sequías. La misa y rezos en su honor reafirman la devoción católica; muchos devotos cumplen promesas a San Juan por favores recibidos, ya sea cargando la imagen descalzos, preparando ofrendas especiales o nombrando a sus hijos “Juan” o “Juana” en agradecimiento. En suma, el significado religioso central es la renovación de la fe: la fiesta es un tiempo de gracia en que el pueblo vuelve sus ojos a Dios a través de San Juan, recordando valores de humildad, servicio y esperanza que el santo ejemplifica (Juan Bautista predicó en el desierto y bautizó a Jesús, anunciando la salvación). La persistencia de esta devoción indica que, pese a los cambios, “la fe y devoción siguen presentes” en el corazón de la comunidad.
•	Significado social: La fiesta patronal funge como eje de unidad comunitaria. Es un evento anual en el que familias dispersas se reencuentran, paisanos que viven fuera regresan a su pueblo, y las comunidades vecinas conviven en armonía. La peregrinación misma de San Juan crea lazos inter-poblados: cada aldea espera al santo de la anterior y lo acompaña a la siguiente, generando un sentimiento de solidaridad regional. Durante esos días, las divisiones cotidianas se diluyen; todos colaboran ya sea cocinando, limpiando, decorando o participando en las ceremonias. La festividad ofrece un espacio para reforzar la identidad colectiva y transmitir conocimientos entre generaciones: los mayores enseñan a los jóvenes cómo se realiza tal o cual rito, o el significado de cierta música. Además, se fomenta el mestizaje comunitario: tanto hombres como mujeres, jóvenes y ancianos tienen roles destacados, lo que enfatiza la idea de que el aporte de cada quien es necesario para el éxito común. Autoridades locales han señalado que estas fiestas tradicionales son “un espacio para unificar a la comunidad”, especialmente en tiempos donde otras influencias podrían dispersarla. También se fortalece el espíritu de cooperación: comerciantes donan insumos, ganaderos aportan animales, músicos tocan por devoción, vecinos alojan a visitantes; todos comparten lo que tienen. El día de San Juan es, además, un encuentro de pueblos: en Kopchén, cuando llegan comitivas de hasta 13 comunidades a la vez, el espectáculo de culturas hermanadas celebrando juntas refuerza el orgullo de pertenecer a la Zona Maya. Socialmente, pues, la fiesta es un tejedor de lazos: renueva amistades, sella compadrazgos y genera un ambiente de paz y festejo que perdura en la memoria colectiva.

•	Significado cultural e identitario: La festividad de San Juan Bautista es un baluarte de la cultura maya peninsular. En ella convergen símbolos y prácticas tanto de origen prehispánico como colonial, dando lugar a una expresión cultural sincrética única. Por un lado, la música maya pax, la lengua maya en oraciones, la siembra del yaxché, las ofrendas de maíz y el ritual de Ch’a Cháak evidencian la continuidad de la cosmovisión maya dentro de la celebración. Por otro lado, las danzas mestizas como la jarana, la figura del santo católico, la misa y la vaquería provienen del acervo hispano-mexicano. La combinación de ambos mundos en un mismo festejo resalta la riqueza identitaria de los mayas contemporáneos: son orgullosamente católicos y mayas a la vez. Cada elemento cultural tiene su carga simbólica: la ceiba plantada es el árbol sagrado de la vida, que conecta los tres niveles del universo maya; la música de violín y tambor fue adoptada por los mayas desde la colonia y transformada en su lenguaje ceremonial; la vaquería rememora las antiguas faenas ganaderas pero aquí se reviste de colores indígenas; incluso el consumo ritual del chilmole y carnes de cerdo muestra la adaptación de ingredientes traídos por los españoles al paladar y ritualidad maya. Todo esto convierte a la fiesta en un patrimonio cultural inmaterial vivo, que ilumina la identidad maya de Felipe Carrillo Puerto. Los propios promotores culturales destacan que en estas ceremonias “la creencia, el misticismo y la esperanza están presentes en cada acto ceremonial de los pueblos”, y que a pesar de la modernidad, “los caminos siguen siendo testigo de la devoción a San Juan Bautista”. Así, el significado cultural radica en la resistencia y continuidad: cada año que la fiesta se realiza, la cultura maya sobrevive un año más, evolucionando pero fiel a su esencia. Es una declaración de que las tradiciones mayas “siguen vigentes... preservando nuestras futuras generaciones”, como expresa orgullosamente un participante. Además, la apertura reciente a visitantes externos (turistas, fotógrafos, investigadores) ha agregado un matiz de orgullo público: la comunidad muestra al mundo su herencia con dignidad, reforzando la autoestima cultural local.
En síntesis, la fiesta de San Juan Bautista tiene un valor religioso (renueva la fe y la gratitud a lo divino), un valor social (fortalece la unidad y el tejido comunitario) y un valor cultural (afirma la identidad maya mestiza y transmite un legado ancestral). Es a la vez acto de devoción, celebración de la vida comunitaria y reivindicación de un legado histórico que ha pasado de generación en generación.
Ceremonia de la siembra del yaxché durante la fiesta de San Juan. Miembros de la comunidad cargan y plantan el sagrado árbol de ceiba como parte de los rituales iniciales, simbolizando la conexión entre la festividad católica y la naturaleza venerada en la cultura maya. 
Cambios a lo Largo del Tiempo y Acciones para Preservar la Tradición
Como toda tradición centenaria, la fiesta de San Juan Bautista ha experimentado transformaciones con el paso del tiempo. Antiguamente, estas celebraciones contaban con una participación prácticamente unánime de la población local: era “la” fiesta del año, esperada con ilusión por todos. No obstante, factores como la migración de jóvenes a las ciudades, la influencia de nuevas costumbres y la modernización han generado cierta merma en la práctica tradicional. Rezadores veteranos lamentan que las nuevas generaciones no se interesan tanto en dar seguimiento al legado. Por ejemplo, en comunidades como Chunhuás se recuerda que décadas atrás siete hogares se turnaban para organizar los rezos y comidas, mientras hoy solo quedan dos, debido a la falta de gente comprometida. Asimismo, kermeses y bailes modernos en ciudades vecinas a veces compiten con las fiestas tradicionales, restándoles público juvenil. Un líder cultural señala que la tecnología –en especial los teléfonos móviles y redes sociales– resulta muy atractiva para los jóvenes y compite con su propia cultura local, haciendo que prefieran otras diversiones sobre las noches de vaquería o los rezos en maya. Todo esto ha encendido las alertas sobre la necesidad de preservar la tradición antes de que se debilite irreversiblemente.
Frente a estos desafíos, tanto la comunidad como instituciones locales han emprendido acciones para salvaguardar la fiesta de San Juan Bautista:
•	Transmisión generacional dentro de las familias: Muchas familias mayas están tomando medidas para que sus hijos e hijas participen desde pequeños en la festividad. Un claro ejemplo es el de la joven Landy May, quien junto a sus hermanos asumió la responsabilidad de la organización en Chunhuás tal como lo hacían sus abuelos. Historias similares se repiten en otras localidades, donde los padres llevan a sus niños a las procesiones, les enseñan a bailar jarana o a tocar instrumentos del maya pax. “Ahora, algunos niños también han mostrado interés por preservar estas prácticas, especialmente la música” refiere orgullosamente una nota local. Esta continuidad familiar es crucial: la tradición se aprende viviéndola, y los mayores se esfuerzan por motivar el relevo generacional contándoles el significado de cada costumbre.
•	Concientización y liderazgo comunitario: Los jefes tradicionales mayas han redoblado sus esfuerzos para promover la participación. Antes de la fiesta, recorren las casas alentando a la gente a unirse, explicando la importancia espiritual y cultural de San Juan. En asambleas ejidales o reuniones del pueblo, insisten en que “para preservar una cultura, primero debe ser conocida y valorada por nuestra gente”, enfatizando el orgullo de nuestras raíces. Este liderazgo ha logrado que, a pesar de todo, la devoción y el Ch’a Cháak “sigan presentes con el paso de los años”. Asimismo, se han incorporado jóvenes líderes (muchos bilingües en maya-español) que sirven de puente entre la tradición y la modernidad, organizando a sus coetáneos para tareas específicas (por ejemplo, cuadrillas de limpieza, grupos de danza juvenil, etc.).
•	Apertura a visitantes y turismo cultural: Un cambio notable es la actitud hacia la presencia de visitantes externos durante la fiesta. Tradicionalmente, ciertos rituales (como la vaquería nocturna o el Ch’a Cháak) se realizaban a puerta cerrada y no se permitía fotografiar por considerarlo una falta de respeto o por celos culturales. Sin embargo, en años recientes las comunidades han mostrado “mayor apertura hacia los visitantes, quienes suelen capturar estos momentos a través de fotografías, algo que antes no se permitía”. Esta apertura controlada tiene un propósito: difundir la riqueza de la festividad para que otros la valoren y, sobre todo, para que los propios jóvenes locales la revaloren al ver el interés que despierta. En algunos pueblos, guías comunitarios reciben a pequeños grupos de turistas o investigadores durante la fiesta, explicándoles las danzas y rituales. También se han realizado documentales locales y cápsulas históricas (con apoyo de cronistas como Mario Chan Collí) que difunden la historia de Chan Santa Cruz y sus celebraciones. La exposición mediática, manejada con respeto, ha dado fruto en mayor orgullo local y en apoyos externos.
•	Apoyo institucional y declaratoria patrimonial: Reconociendo la importancia de esta tradición, las autoridades culturales han dado pasos para institucionalizar su preservación. La Secretaría de Cultura federal, a través del programa de patrimonio inmaterial, registró la peregrinación y fiesta de San Juan (aunque erróneamente titulada “de San Juan de Dios”) en el Inventario del Patrimonio Cultural Inmaterial de México, subrayando su relevancia para 13 comunidades maya de Carrillo Puerto. Dicha ficha describe detalladamente los elementos rituales y recomienda medidas de salvaguardia. A nivel estatal y municipal, frecuentemente se gestionan recursos del PACMyC (Programa de Culturas Comunitarias) para apoyar aspectos de la fiesta: por ejemplo, en algunos años se ha financiado la confección de trajes para las vaqueras, la reparación de instrumentos de maya pax, o talleres para enseñar a los jóvenes las técnicas culinarias tradicionales. Las casas de la cultura locales y el Instituto Quintanarroense de la Cultura han organizado conversatorios con ancianos para rescatar anécdotas y leyendas en torno a San Juan. Incluso iniciativas independientes como el mapa digital “Fiesta es Resistencia” han incluido esta festividad, reconociéndola como una expresión de resistencia cultural indígena frente a la homogenización global.
•	Adaptación e innovación respetuosa: Para atraer a las nuevas generaciones sin perder la esencia, algunas comunidades han introducido elementos nuevos a la celebración. Por ejemplo, concursos juveniles de jarana, ferias del libro en maya durante la fiesta, o la inclusión de música moderna (grupo de cumbia o mariachi) después de la vaquería tradicional, para que los jóvenes también disfruten. Estas adiciones se hacen cuidadosamente al margen de los actos centrales, de modo que no compitan con ellos sino que complementen la experiencia festiva. Asimismo, se han integrado elementos religiosos actuales: en la misa se canta tanto en maya como en español, y a veces se incluye una oración por causas contemporáneas (como el cuidado del medio ambiente, muy acorde con la petición de lluvia). De esta manera, la festividad va evolucionando sin romper con sus fundamentos.

`,
    imagen: "./public/assets/img/3.png"
  },
  {
    titulo: "San Miguel",
    comunidad: "X-Hazil ",
    descripcionLarga: `
La fiesta tradicional en honor a San Miguel Arcángel se celebra principalmente en la comunidad de X-Hazil Sur, perteneciente al municipio de Felipe Carrillo Puerto en Quintana Roo. Esta festividad es una expresión viva de la cultura maya fusionada con tradiciones católicas, y resalta el sincretismo religioso de la zona. Aunque no es la fiesta principal de la cabecera municipal (que se enfoca más en la Santa Cruz o los Tres Reyes), en X-Hazil Sur se lleva a cabo con gran fervor, atrayendo a locales y visitantes.
Fechas de Celebración
•	La principal se realiza del 24 al 30 de septiembre, culminando el 29 de septiembre, día dedicado a San Miguel Arcángel (protector contra el mal y líder de los ángeles).
•	Hay una celebración adicional del 7 al 12 de febrero, posiblemente vinculada a tradiciones locales o preparativos, aunque menos documentada.
Estas fechas pueden variar ligeramente año con año, pero se mantienen cercanas al calendario litúrgico católico. En 2025, por ejemplo, se promocionaron eventos del 28 de septiembre al 1 de octubre, con bailes y música en vivo.
Descripción y Tradiciones
La fiesta combina elementos religiosos, culturales y festivos, reflejando la herencia maya de la región. San Miguel es venerado como guardián espiritual, y la celebración incluye rituales que honran tanto al santo como a las raíces indígenas. Es común la participación comunitaria, con énfasis en el respeto a la naturaleza y la unión familiar. Entre las tradiciones destacan:
•	Siembra del yaxché (ceiba sagrada): Un ritual ancestral maya donde se planta un árbol ceiba, símbolo de la conexión entre el cielo, la tierra y el inframundo.
•	Mayapaax: Música tradicional maya con instrumentos como tambores, flautas y marimbas, que anima las procesiones y bailes.
•	Danzas y voladores: Incluye la Danza de los Voladores (papantla, adaptada localmente), donde participantes giran desde un poste alto, representando un ritual prehispánico de fertilidad y lluvia. También hay danzas aztecas o mayas.
•	Procesiones y misas: Se inician con caminatas desde la iglesia local, trayendo imágenes del santo, acompañadas de rezos y ofrendas.
•	Feria y bailes populares: Puestos de comida con antojitos mayas (como cochinita pibil, tamales), juegos mecánicos, torneos de charrería o vaquerías, y bailes nocturnos con bandas tropicales o grupos locales como "La Tacha" o "Jose Julio y su Zarpazo Tropical

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

San Román, como santo patrono, es venerado como protector, y la fiesta combina elementos religiosos con celebraciones comunitarias que fomentan la unión familiar y el respeto a las costumbres locales.
Fechas de Celebración
•	Generalmente se lleva a cabo del 10 al 15 de abril, coincidiendo con el calendario litúrgico y tradiciones locales. Sin embargo, las fechas pueden variar ligeramente según el año y decisiones comunitarias. Por ejemplo, en 2025, inició alrededor del 19 de abril con rezos y rituales preparatorios.
Descripción y Tradiciones
La fiesta honra a San Román con un enfoque en la devoción, la preservación de la identidad maya y la convivencia. Dzulá, ubicada a unos 50 km de la cabecera municipal, es una comunidad rural con fuerte herencia maya, y la celebración atrae a habitantes de pueblos cercanos que acuden a cumplir promesas o disfrutar de las actividades. Entre las tradiciones destacan:
•	Rituales mayas ancestrales: Incluye el corte y la siembra del Yax'ache' (árbol sagrado de la ceiba), símbolo de la conexión entre el cielo, la tierra y el inframundo. Este acto se realiza en el centro ceremonial y representa renovación y respeto a la naturaleza.
•	Actividades religiosas: Rezos, ofrendas al santo patrono (como velas, flores y alimentos), misas y procesiones con la imagen de San Román. Se conmemora la historia local, como la batalla de Dzulá durante la Guerra de Castas, donde se protegieron cruces sagradas y al santo.
•	Gastronomía y música: Se ofrecen platillos tradicionales mayas como cochinita pibil, tamales, atoles y bebidas regionales. La música incluye mayapaax (música maya con tambores y flautas) y bandas regionales para animar los bailes populares.
•	Entretenimiento comunitario: Corridas de toros tradicionales (con toreros locales), vaquerías (bailes con vestimenta típica como huipiles y sombreros), juegos mecánicos y ferias con puestos de artesanías. Los bailes nocturnos fomentan la participación de visitantes de comunidades vecinas.
La fiesta también sirve para pedir salud, buenas cosechas y prosperidad, y en años recientes se ha enfatizado en mantener las tradiciones sin elementos como pirotecnia excesiva para promover la sostenibilidad.

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

 Esta festividad resalta el sincretismo entre las tradiciones mayas ancestrales y el catolicismo, similar a otras celebraciones en la zona. San Antonio es venerado como patrono protector, asociado con milagros, la búsqueda de objetos perdidos y la ayuda en causas difíciles, y la fiesta refleja la herencia cultural de la región, influenciada por la historia de la Guerra de Castas.

Fechas de Celebración
•	Se lleva a cabo del 10 al 14 de junio, culminando el 13 de junio, día dedicado a San Antonio de Padua. Las fechas pueden ajustarse ligeramente según el calendario local, pero se alinean con la tradición católica.
Descripción y Tradiciones
La fiesta en Dzulá es una oportunidad para la comunidad de reunirse en devoción y celebración, atrayendo a habitantes de pueblos cercanos. Incluye elementos religiosos y culturales que honran tanto al santo como las raíces mayas, fomentando la unidad familiar y el respeto a las costumbres indígenas. Entre las tradiciones destacan:
•	Rituales mayas: El corte y la siembra del Yax'ache' (ceiba sagrada), un acto simbólico de renovación y conexión con la naturaleza, el cielo y el inframundo.
•	Actividades religiosas: Procesiones con la imagen de San Antonio, misas, rezos, novenas y ofrendas como velas, flores y alimentos. Se conmemora la protección del santo en la historia local.
•	Gastronomía: Platillos tradicionales mayas como cochinita pibil, tamales, atole y bebidas regionales, compartidos en ferias comunitarias.
•	Entretenimiento: Bailes populares con música mayapaax (con tambores, flautas y marimbas), vaquerías (danzas con huipiles y sombreros típicos), corridas de toros tradicionales y juegos mecánicos. Los bailes nocturnos animan la convivencia.
La celebración promueve la identidad cultural y, en años recientes, se ha enfocado en prácticas sostenibles, evitando exceso de pirotecnia.

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

     Esta festividad es un claro ejemplo de sincretismo cultural, fusionando tradiciones católicas con elementos ancestrales mayas, y refleja la herencia histórica de la región, marcada por la Guerra de Castas (1847-1901). Tihosuco es considerado el lugar de origen de esta rebelión indígena, y el Templo del Niño Jesús (o Iglesia del Niño Dios) es un sitio histórico clave, declarado monumento, donde inician muchas actividades. El Niño Jesús es el santo patrono del pueblo, y la fiesta atrae a familias locales y visitantes de comunidades cercanas, promoviendo la unidad comunitaria y el respeto a las costumbres.
Además, en la comunidad de Yaxley (también en el municipio), hay una celebración más pequeña del 23 al 25 de diciembre, enfocada en rituales religiosos básicos sin detalles extensos documentados.
Fechas de Celebración
•	En Tihosuco, la fiesta principal se extiende del 21 de diciembre al 1 de enero, con extensiones hasta el 8 de enero para algunas actividades como la Danza de los Pastores. Inicia con preparativos el 21 y culmina con eventos navideños y de Año Nuevo. El 25 de diciembre marca el nacimiento del Niño Dios, punto central de las veneraciones.
•	Estas fechas pueden variar ligeramente por año, pero se alinean con el calendario litúrgico católico y tradiciones locales. En años recientes (como 2023-2025), se ha mantenido el enfoque en la participación comunitaria, incluso durante restricciones como la pandemia.
Descripción y Tradiciones
La fiesta es organizada por un comité comunitario que incluye un presidente, un encargado de música y otro de danzantes, con participación de "diputados" (familias designadas) que coordinan los recorridos diarios. Representa la lucha entre el bien y el mal, con énfasis en la devoción, la renovación y la preservación cultural maya. Entre las tradiciones destacan:
•	Danza de los Pastores (o Señoro’ob): Una representación dramática con personajes bíblicos como Isaac, Abraham, Jacob, el diablo (Kisin) y el Niño Dios. Los danzantes recorren calles, colonias y casas, escenificando cómo el diablo roba y los pastores lo capturan para devolver lo robado. Las familias ofrecen posada (alojamiento temporal) y ofrendas, como maíz sagrado en variedades blancas, amarillas y moradas. Esta danza inicia el 25 de diciembre y se extiende, simbolizando la victoria del bien.
•	Pastorela Maya: Una versión local de la pastorela navideña, dramatizada en lengua maya, que narra el nacimiento de Jesús con toques indígenas. Incluye música, diálogos humorísticos y lecciones morales sobre el bien vs. mal.
•	Gremios y Procesiones: Familias católicas inician con música, cohetes y peregrinaciones desde el Templo del Niño Dios. Los gremios (grupos o guilds) recorren el pueblo, ofreciendo rezos y ofrendas al santo patrono.
•	Siembra del Yaxché: Ritual ancestral maya donde se planta un árbol ceiba sagrado, simbolizando la conexión entre el cielo, la tierra y el inframundo, y pidiendo renovación y prosperidad.
•	Vaquería y Entretenimiento: Noche de vaquería con grupos jaraneros (músicos de jarana) y vaqueras (bailarinas) de Yucatán y Quintana Roo. Incluye corridas de toros tradicionales, shows cómicos taurinos, bailes populares y ferias con antojitos mayas como cochinita pibil, tamales y atole. Las mujeres visten huipiles coloridos.
•	Aspectos Históricos: La fiesta se remonta a la repoblación de Tihosuco post-Guerra de Castas y prioriza usos y costumbres indígenas, incluso sobre leyes modernas (como las de protección animal para las corridas).
La celebración fomenta la identidad maya, con énfasis en la familia y la comunidad, y se ha adaptado para mantenerse viva pese a cambios sociales.

`,
    imagen: "./public/assets/img/FiestaNiñoJesus_1.png"
  },
  {
    titulo: "San José",
    comunidad: "Chun On, Tepich, San José II",
    descripcionLarga: `
La fiesta patronal de San José es una de las tradiciones más arraigadas en la zona maya del municipio de Felipe Carrillo Puerto, Quintana Roo. Se trata de celebraciones dedicadas a San José, santo considerado el esposo de la Virgen María y padre terrenal de Jesús, a quien la comunidad católica venera como protector de la familia y poderoso intercesor ante Dios. Esta festividad combina lo religioso con expresiones culturales mayas, reflejando siglos de historia y sincretismo.
Origen y antecedentes históricos de la devoción a San José
La devoción a San José en la región tiene sus raíces en la época colonial. La costumbre de celebrar a este santo fue introducida en Occidente desde la Edad Media y traída a América por los misioneros católicos en el siglo XVI. Durante la colonización española, los pueblos mayas adoptaron el culto a los santos, reinterpretándolo e incorporando sus propias creencias tradicionales. En la zona maya de Quintana Roo, tras las guerras y revueltas del siglo XIX (como la Guerra de Castas), las comunidades gradualmente retomaron las festividades católicas al reintegrarse a la Iglesia. A inicios del siglo XX se comenzaron a organizar formalmente las fiestas patronales en honor a San José en varios poblados. Por ejemplo, la comunidad de Tepich –conocida por su papel histórico en la Guerra de Castas– lleva más de un siglo celebrando a San José como santo patrono cada mes de marzo. De hecho, se reporta que esta festividad en Tepich cuenta con alrededor de 113 años de antigüedad, siendo iniciada poco después de la reincorporación del territorio a la vida nacional. La veneración local frecuentemente se dirige a “San José de la Montaña” (advocación de San José popular en Yucatán) o San José Obrero, nombres con que se le conoce en la regiónpeninsulataurina.com.
La importancia del culto se explica por la figura misma del santo: San José es visto como un modelo de fe, justicia y obediencia divina, protector de la Sagrada Familia. A lo largo de generaciones, muchos fieles han acudido a él con peticiones en momentos de necesidad, confiando en su ayuda y protección providencial. Esa fe se arraigó profundamente entre los mayas de Quintana Roo, que encontraron en San José un símbolo de esperanza y resguardo familiar, complementario a sus propias deidades tradicionales. Desde entonces, la fiesta anual en su honor se ha mantenido viva hasta nuestros días, transmitida de padres a hijos como parte del patrimonio espiritual de la zona maya.
Comunidades que celebran la festividad y fechas principales
En el municipio de Felipe Carrillo Puerto, varias comunidades indígenas y la cabecera municipal celebran fiestas patronales dedicadas a San José. Las fechas suelen concentrarse en los meses de marzo (en torno al día de San José, 19 de marzo), aunque algunas localidades festejan en otras épocas. De acuerdo con registros municipales, las localidades más destacadas que honran a San José como santo patrono son:
•	Tepich: realiza su fiesta tradicional en honor a San José cada año a mediados de marzo (aproximadamente del 14 al 22 de marzo), coincidiendo con el día 19. Durante esos días Tepich organiza misas, procesiones y eventos taurinos, siendo el 17 de marzo habitualmente un día central con corrida de toros en la plaza tradicionalpeninsulataurina.com. Cabe mencionar que algunas fuentes se refieren al santo patrono de Tepich como San José Obrero o San José de la Montaña, nombres bajo los cuales se le venera allípeninsulataurina.com.
•	San José II: es un ejido de la región cuyo patrono es San José. Su fiesta anual se lleva a cabo alrededor del 17 al 19 de marzo, con celebraciones que coinciden con la festividad de San José en el calendario católico. Este poblado, conocido localmente como San José II, ha dado nombre a la propia festividad (fiesta de San José II), muy reconocida en la zona maya.
•	Betania: esta comunidad rural también celebra a San José en marzo. Si bien Betania no lleva el nombre de un santo, ha adoptado a San José como patrono y realiza su fiesta tradicional en la segunda quincena de marzo. Por ejemplo, en 2024 los festejos de Betania tuvieron lugar hacia finales de marzo, incluyendo la ofrenda de alimentos entregada el día 25 en la iglesia local.
•	Chun On: pueblo que festeja a San José a mediados de febrero (del 15 al 18 de febrero aproximadamente). Su celebración podría estar asociada a la advocación de San José Obrero (cuya festividad litúrgica es el 1 de mayo) adelantada en el calendario local, o responder a tradiciones particulares de la comunidad.
Además de las anteriores, muchas otras localidades y barrios del municipio realizan celebraciones en honor a San José en las fechas cercanas a marzo. En total, entre 20 y 25 comunidades rurales de Felipe Carrillo Puerto organizan fiestas patronales entre marzo y mayo de cada año. Entre ellas se cuentan pueblos como Chunhuas, Chancah de Repente, Noh Bec, Chunhuhub, entre otros, así como varias colonias de la cabecera municipalquintanaroohoy.com. Estas colonias urbanas –barrios en la ciudad de Felipe Carrillo Puerto– suelen tener pequeñas capillas o gremios dedicados a distintos santos; algunas celebran a San José con fiestas barriales. Por ejemplo, la colonia Emiliano Zapata II (popularmente conocida como San José II por su capilla homónima) en la cabecera municipal realiza anualmente la fiesta de San José, con la participación de vecinos y autoridades locales.
En términos generales, las festividades de San José en la zona maya se concentran alrededor del 19 de marzo, pudiendo iniciar uno o dos días antes (desde el 18) y prolongarse varios días después. Esto se debe a la tradición de los novenarios y gremios (ver siguiente sección), que extienden la celebración más allá del día principal. No obstante, cada comunidad tiene un calendario propio de actividades y es común que las fechas no se traslapen completamente, lo que permite a familias de una localidad acudir como visitantes a las fiestas de pueblos vecinos en distintos fines de semana.
Actividades religiosas: misas, procesiones y rezos
El núcleo de la fiesta de San José es religioso. En cada comunidad, la iglesia o capilla local organiza ceremonias y ritos en honor al santo. Una Misa solemne se celebra el día principal (por ejemplo, el 19 de marzo) para conmemorar a San José, con la asistencia masiva de fieles. A lo largo de los días festivos también se realizan rezos y novenas: grupos de rezadoras y rezadores de la comunidad se reúnen para recitar el rosario, cánticos y oraciones especiales, ya sea en el templo o en las casas de los mayordomos que organizan la fiesta.
Uno de los momentos más emotivos es la procesión con la imagen de San José. La estatua del santo –frecuentemente una talla antigua vestida con ropajes– es adornada con flores y velas, y llevada en andas por las calles del pueblo.
Procesión tradicional en honor a San José de la Montaña en la comunidad maya de Tepich (Felipe Carrillo Puerto). Los fieles recorren el pueblo acompañando la imagen del santo, portando estandartes y velas, al son de música de charanga y tambores de maya pax, integrando devoción católica con elementos mayas tradicionales. 
Generalmente, la procesión inicia en la iglesia y recorre las principales calles, deteniéndose en altares domésticos preparados por familias devotas. Durante el recorrido se entonan alabanzas en español y en lengua maya, evidenciando el sincretismo cultural. En algunos casos, la procesión marca el inicio de los gremios: cada día de la fiesta, un gremio (grupo organizado de fieles) “entra” con el santo en procesión al templo para ofrecerle rituales y cumplir sus promesas.
Los gremios son componentes esenciales de la religiosidad popular y consisten en asociaciones de feligreses (a veces por oficio, por barrio o por sector de la sociedad) que toman turnos para patrocinar y dirigir las ceremonias de cada día. Por ejemplo, puede haber gremio de campesinos, de jóvenes, de mujeres, de niños, etc. Cada gremio porta un estandarte propio y acude en procesión acompañado de cohetes, música y marcas (ofrendas simbólicas), encargándose de un día específico de la novena. Esta práctica de los gremios, heredada de la época colonial, se ha mantenido viva en Felipe Carrillo Puerto y es muestra de la organización comunitaria en torno a la fe.
Durante la fiesta se realizan también ceremonias mayas en paralelo a los ritos católicos. En varias comunidades, la noche previa al día principal, los ancianos mayas preparan una ofrenda de alimentos conocida en maya como jo’ che de la chicharra, que consiste en presentar en la iglesia diversos platillos preparados con maíz y otros productos del campo. Esta ofrenda es llevada al altar de San José en procesión, acompañada por música de charanga (banda de vientos) y los sonidos ancestrales de la maya pax. La ofrenda incluye comida típica –por ejemplo frijol con manteca, tortillas de maíz, chaya, atole nuevo, entre otros manjares locales– y tiene un doble propósito: por un lado, agradecer a Dios y a San José por las cosechas y bendiciones recibidas; por otro, honrar a los Yúumtsiles o dioses mayas de la naturaleza, pidiendo su favor. De hecho, estas fiestas patronales en la zona maya se distinguen por el sincretismo: además de las misas al santo, se realizan representaciones y ofrendas dedicadas a las deidades del monte, como señal de respeto a la cosmovisión maya ancestral. Así, la celebración de San José integra la fe católica con ritos agrarios mayas, reforzando la identidad espiritual híbrida de la comunidad.
Debido a la importancia espiritual del evento, la participación religiosa es muy fervorosa. Muchos devotos hacen promesas a San José –por ejemplo, realizar la procesión descalzos, cargar la imagen, financiar flores o fuegos artificiales, etc.– en agradecimiento por favores atribuidos al santo. Estas promesas se cumplen cada año, fortaleciendo el vínculo de fe. Incluso durante situaciones difíciles, como ocurrió en 2021 durante la pandemia de COVID-19, los pobladores de Tepich no dejaron de rendir culto a San José: ese año suspendieron bailes y corridas por precaución, pero mantuvieron las procesiones, rezos y la música tradicional como parte de la “promesa al santo patrono”. Este hecho demuestra la resiliencia de la devoción, que se adapta a las circunstancias sin perder su esencia.
Actividades culturales: danzas, vaquería, gastronomía y festejos populares
En torno a la celebración litúrgica se despliega una rica gama de actividades culturales y festivas que dan vida y color a la fiesta de San José. Estas actividades, más allá de lo puramente religioso, son espacios de convivencia, alegría y preservación de la cultura maya y mestiza local.
Una tradición destacada es la vaquería, baile regional característico de Yucatán y Quintana Roo. Por las noches de fiesta, generalmente el primer día o la víspera del día principal, se organiza una noche de vaquería: al compás de la jarana yucateca (género musical y baile tradicional), parejas de danzantes ataviados en traje típico –las mujeres con el hipil bordado y los hombres con filipina blanca, paliacate rojo y sombrero– llenan la pista para zapatear y girar con gran entusiasmo. La vaquería inicia con la clásica diana y suele incluir la “alzada de la cabeza de cochino”, un ritual donde se presenta una cabeza de cerdo asada adornada con cintas, simbolizando la abundancia y la generosidad del pueblo. En la comunidad de Betania, por ejemplo, se han realizado encuentros de grupos jaraneros de todo el estado durante las vaquerías, con orquestas populares como la del maestro Arturo González “El Rey de las Vaquerías” amenizando el evento. Estas noches de baile pueden además servir como marco para la coronación de las embajadoras o reinas de la fiesta – usualmente jóvenes de la localidad elegidas para representar la belleza y tradición del pueblo. La coronación de la Reina o Madrina de la feria es un momento festivo donde las autoridades coronan a la elegida, seguida de fuegos artificiales y aplausos de los asistentes.
Junto con la vaquería, se celebran bailes populares en los que se presentan grupos musicales modernos (bandas de cumbia, tríos jaraneros, mariachis o DJs locales) para amenizar las noches. La comunidad entera acude al recinto ferial o explanada municipal para bailar y divertirse en un ambiente familiar. En ocasiones se organizan concursos de jarana, concursos de baile de salón o presentaciones folklóricas, asegurando la participación de todas las generaciones.
La gastronomía tradicional juega un papel central en la fiesta. Durante estos días es común la preparación de platillos típicos en grandes cantidades para compartir. Familias y gremios cocinan guisos como pochero, relleno negro, cochinita pibil, lechón al horno, frijoles con puerco, tortillas a mano, acompañados de bebidas como pozol frío o atole de maíz nuevo. Muchos de estos alimentos se ofrecen gratuitamente a los visitantes como parte de la hospitalidad comunitaria o se venden en puestos alrededor de la plaza. Un aspecto único es que cierta comida se prepara como ofrenda ritual (por ejemplo el frijol con manteca mencionado), la cual tras ser bendecida se reparte entre los asistentes, convirtiéndose en una comida comunitaria cargada de simbolismoquintanaroohoy.com. De esta manera, la cocina local –basada en el maíz, la calabaza, la chaya, el venado y cerdo– se enaltece durante la festividad, permitiendo degustar sabores ancestrales.
Otros eventos populares incluyen los juegos mecánicos y feria: en la cabecera municipal y en pueblos grandes se instalan pequeñas ferias con juegos infantiles, carruseles, puestos de tiro al blanco y venta de antojitos (elotes, marquesitas, etc.), creando un ambiente de feria regional. También se suelen organizar torneos deportivos (como partidos de béisbol o fútbol entre comunidades) y competencias tradicionales. En algunos lugares se realiza la competencia de las cintas a caballo, reminiscencia de las fiestas patronales yucatecas, donde jinetes galopan para atrapar con un lápiz unas argollas colgantes. Estas actividades varían según cada pueblo, pero en conjunto aportan diversión y participación amplia.
Mención especial merecen las corridas de toros o corridas de rejones que se realizan en varias comunidades, entre ellas Tepich, Chunhuas, X-Hazil y otras. Siguiendo la usanza yucateca, se construyen plazas de toros de tablas (palqueros) temporales y se llevan a cabo corridas durante los días de fiesta. Sin embargo, a diferencia de las corridas tradicionales españolas, en la zona maya actualmente no se lastima ni sacrifica al toro en el ruedo. La modalidad que se practica es la del baxal toro (que en maya significa “jugar con el toro”), en la cual toreros aficionados realizan suertes frente al astado pero no se le clavan banderillas ni se le da muerte, por respeto tanto a la tradición como a las leyes de protección animal vigentesquintanaroohoy.comquintanaroohoy.com. Esta adaptación ha sido bien recibida por la comunidad, que mantiene la emoción y el arte taurino sin crueldad. Las tardes de toros suelen ir acompañadas de música de charanga, venta de cerveza y un ambiente de jolgorio general. En Tepich, por ejemplo, cada 17 de marzo se programa una corrida de feria con toreros invitados de la región e incluso internacionales, haciendo del evento un atractivo importantepeninsulataurina.com.
Finalmente, durante la noche principal es común la quema del “castillo” y de juegos pirotécnicos. El castillo es una estructura pirotécnica de varios metros de altura cargada de cohetes, ruedas y figuras que giran y lanzan luces de colores, cerrando la fiesta con un espectáculo luminoso. También se elevan globos de cantoya (grandes linternas de papel) al cielo dedicados a San José, llevando oraciones y agradecimientos simbólicos.
En conjunto, estas actividades culturales hacen de la fiesta de San José no solo un evento religioso sino una feria popular completa, donde convergen devoción, tradición maya y diversión comunitaria. Son días en que el pueblo “viste de fiesta” sus calles con banderines de colores, se escuchan risas y música hasta la madrugada, y el aroma de la comida tradicional impregna el aire.
Participación comunitaria y roles sociales
La fiesta de San José es un esfuerzo colectivo donde toda la comunidad participa, desde las autoridades hasta los más pequeños. Cada grupo social desempeña roles específicos para asegurar el éxito y la continuidad de la tradición:
•	Mayordomos y comités organizadores: Por lo general, cada año se nombra a uno o varios mayordomos o encargados de la fiesta (en algunas comunidades se les llama diputados de la fiesta o capitanes). Son hombres o mujeres de la localidad, usualmente de amplia devoción y prestigio, que asumen la coordinación general: convocan a los gremios, recaudan fondos, administran los gastos, invitan a los sacerdotes y gestionan permisos para eventos como la vaquería o la corrida de toros. Tradicionalmente, ser mayordomo es una promesa o cargo de honor que implica mucho trabajo y gasto personal, pero también gran reconocimiento comunitario. Estas personas se encargan, junto con el comité de fiesta (formado por voluntarios), de que haya flores, velas, cohetes, músicos y todo lo necesario.
•	Gremios o cofradías: Como se mencionó, los gremios son grupos organizados (a veces llamados también cofradías) que se reparten los días de celebración. Cada gremio tiene sus líderes y sus devotos miembros que colaboran. Por ejemplo, puede haber un gremio de jóvenes que se encargue de un día de rezos y de organizar una kermés juvenil; un gremio de madres de familia que prepare la comida de la ofrenda otro día; un gremio de campesinos que done parte del maíz y monte las estructuras del palenque, etc. Estos gremios reúnen a distintos sectores: hombres y mujeres, jóvenes y ancianos trabajan codo a codo bajo el paraguas del santo. La entrega de los estándartes de gremio durante la misa (un estandarte bordado con la imagen de San José que cada grupo porta) es un momento significativo que simboliza la unidad y coordinación entre grupos sociales para honrar al patrono.
•	Mujeres de la comunidad: Las mujeres, y en especial las rezadoras mayores, son el alma de los rezos y la preparación de alimentos. Son usualmente las encargadas de los rosarios y novenas, conservando cánticos en maya y español que han aprendido de sus madres y abuelas. Además, son protagonistas en la cocina comunitaria: días antes de la fiesta se organizan en grupos para nixtamalizar el maíz, hacer tortillas, preparar tamales, guisos y dulces típicos que se compartirán. Su labor es fundamental en la ofrenda de alimentos –por ejemplo, en Betania, mujeres y hombres colaboraron para cocinar el tradicional frijol con chicharra ofrecido en la iglesia–. También participan en adornar la iglesia con flores y en vestir a la imagen de San José con sus mejores galas. Las mujeres jóvenes, por su parte, a menudo se involucran como embajadoras o reinas de la fiesta, representando con orgullo a su pueblo; y muchas integran los grupos de baile folklórico o jarana que se presentan en la vaquería.
•	Hombres de la comunidad: Los varones tradicionalmente se encargan de los preparativos pesados: armar el tablado de la plaza de toros, colocar el alumbrado y sonido, detonar los fuegos pirotécnicos y amenizar con la música de charanga y maya pax. En pueblos como Chunhuas, por ejemplo, la agrupación de música maya pax está dirigida por maestros varones –como Don Jerónimo Mis, violinista mayor que encabeza la banda tradicional en la ofrenda de comida–. Los hombres adultos suelen integrar las cuadrillas de toreros improvisados para el baxal toro, así como equipos deportivos en los torneos de la fiesta. Muchos también cumplen el papel de fiscales o auxiliares de la iglesia, encargados del orden durante las ceremonias religiosas.
•	Jóvenes y niños: La nueva generación se va incorporando activamente. Los jóvenes participan en los bailes populares, organizan comparsas, ayudan a sus padres en la logística y hoy en día también apoyan en la difusión en redes sociales de la fiesta (anunciando las actividades en Facebook, WhatsApp, etc., para invitar a la región). En algunas comunidades se han creado grupos juveniles de jarana o de música para animar la festividad y asegurar que aprendan las tradiciones. Un ejemplo de iniciativa para los jóvenes fue el encuentro jaranero "U Biix Pixan" en Betania, coordinado por jóvenes de apellido Cen, cuyo fin es afianzar la tradición de la vaquería entre las nuevas generaciones. Los niños también toman parte: es común ver gremios infantiles donde los pequeños, vestidos de angelitos o con trajes regionales, llevan flores a San José; o concursos para niños durante la feria. De este modo, se asegura la continuidad generacional de la devoción.
•	Autoridades y líderes comunitarios: El Ayuntamiento de Felipe Carrillo Puerto y las autoridades locales suelen brindar apoyo logístico y recursos. La presidencia municipal a veces aporta módulos de servicios, seguridad pública durante los eventos masivos y facilidades para la realización de la feria. Representantes municipales e incluso estatales asisten a inauguraciones de ferias o coronaciones. Por ejemplo, el Instituto para el Desarrollo del Pueblo Maya (INMAYA) ha dado acompañamiento para fortalecer estas celebraciones: en 2024, el director general del INMAYA estuvo presente en la fiesta de San José II, mostrando el respaldo institucional a la tradición. Las autoridades tradicionales mayas (como los principales de los centros ceremoniales cercanos) también pueden acudir como invitados de honor, reforzando el lazo entre las festividades católicas y las estructuras comunitarias mayas. En muchos pueblos, el alcalde pedáneo o delegado (autoridad local) funge como presidente del comité de fiesta, actuando de enlace entre el gobierno y la comunidad para cualquier necesidad.
En suma, la fiesta de San José funciona gracias a un tejido social bien articulado. Cada quien aporta su talento: unos rezan, otros cocinan, otros bailan, otros organizan –y todos juntos celebran–. Esta colaboración refuerza los lazos de solidaridad e identidad comunitaria. Además, involucra a comunidades vecinas: es usual que acudan familias de pueblos aledaños como visitantes o que incluso traigan sus propias danzas y estandartes a la procesión, consolidando un sentido de hermandad maya más amplio. La participación de todos los grupos (mujeres, hombres, jóvenes, niños, ancianos, autoridades) garantiza que la tradición siga viva y dinámica, adaptándose a los tiempos pero conservando su esencia.
Significado religioso, social y cultural de la festividad
La festividad de San José en Felipe Carrillo Puerto tiene un profundo significado multidimensional –religioso, social y cultural– para sus participantes:
En el plano religioso-espiritual, representa un momento de renovación de la fe y expresión de gratitud. Para los católicos mayas, San José simboliza virtudes importantes (humildad, trabajo, protección familiar) y acudir a él es afirmar la confianza en la providencia divina. Las misas, rezos y procesiones permiten cumplir promesas, pedir bendiciones y agradecer milagros atribuidos al santo. Muchos devotos asisten movidos por la fe heredada de sus antepasados, manteniendo viva la llama espiritual de la comunidad. Además, la inclusión de rituales mayas (ofrendas al monte, música tradicional) le añade una capa de significado cósmico: se agradece no solo al santo católico, sino también a la Madre Tierra y las deidades mayas por la fertilidad del campo y la protección de la milpa. Es decir, la fiesta cumple la función ancestral de agradecer por las cosechas, la salud y la protección recibida durante el año. De este modo, integra en un mismo evento la devoción católica y la espiritualidad maya, reforzando la identidad religiosa dual de los habitantes.
En el ámbito social y comunitario, la fiesta patronal actúa como un elemento cohesionador. Es la ocasión en que familias dispersas regresan al pueblo para reunirse; hijos migrantes vuelven a casa para compartir la celebración con sus mayores; se reencuentran vecinos y compadres. Durante esos días, el sentido de comunidad se fortalece al trabajar todos juntos y al convivir en los rezos, en la cocina y en el baile. La fiesta propicia la transmisión generacional de valores y conocimientos: los mayores enseñan a los jóvenes cómo se organiza un gremio, cómo se prepara un pib (enterrado) o cómo se baila la jarana; con ello, las tradiciones se transfieren de manera viva. Socialmente también es un evento que afirma la identidad colectiva del pueblo: celebrar a su santo patrono diferencia a cada comunidad (ej. “somos el pueblo de San José”) y al mismo tiempo las une dentro de la gran familia maya-cruzoob que comparte costumbres similares. Las fiestas patronales en Quintana Roo se consideran “expresiones culturales vivas” y también una forma de resistencia cultural y orgullo identitario, pues a pesar de la influencia externa, los pueblos conservan sus celebraciones como señal de autonomía cultural. La participación comunitaria amplia, incluyendo autoridades, demuestra que estas festividades siguen siendo relevantes para la organización social actual.
Culturalmente, la fiesta de San José tiene un significado enorme como patrimonio inmaterial. En ella convergen música, danza, gastronomía, lengua y artes populares propias de la región maya peninsular. Cada elemento (la maya pax, la jarana, el hipil, el estandarte bordado, el platillo de maíz) es portador de memoria histórica y cultural. Al celebrarse año con año, la fiesta funciona como un museo viviente de la cultura maya mestiza, donde nuevas generaciones aprenden en la práctica las tradiciones de sus ancestros. Es, además, un espacio de sincretismo y creatividad, donde se resignifican símbolos católicos dentro de un marco maya: por ejemplo, la Santa Cruz o el mismo San José pueden verse entrelazados con la simbología maya en los altares. Esto refleja cómo la cultura maya ha incorporado elementos occidentales haciéndolos suyos, dotándolos de un sabor local único. Por otra parte, la festividad también tiene importancia en términos de economía cultural: atrae visitantes de otras comunidades (incluso turistas culturales), promueve la artesanía local (venta de bordados, hamacas, objetos de bejuco en la feria) y difunde el uso del idioma maya en anuncios y eventos públicos. En esencia, la fiesta de San José es una celebración de la identidad maya contemporánea, que combina la fe católica, la herencia histórica de la rebelión (Cruz Parlante) y las costumbres agrícolas, mostrando la rica diversidad cultural de Quintana Roo.
Cambios a lo largo del tiempo y preservación de la tradición
A pesar de su vitalidad, la fiesta tradicional de San José no ha estado exenta de cambios y desafíos con el paso del tiempo. La sociedad maya ha experimentado transformaciones (modernización, migración, influencia de medios globales) que han impactado en cierta medida la manera de celebrar. Por ejemplo, los ancianos recuerdan que décadas atrás los festejos podían durar hasta nueve días completos de novenario, mientras que hoy en algunas comunidades se concentran en un fin de semana por cuestiones prácticas. También ha cambiado la música: antes toda la música era en vivo (jaraneros, tríos, marimba), ahora se combinan con sonido grabado y géneros modernos. Sin embargo, es notable cómo muchos elementos esenciales permanecen casi intactos, gracias al apego comunitario a la tradición.
Uno de los cambios recientes más relevantes ha sido el mencionado ajuste en las corridas de toros para alinearlas con la sensibilidad actual hacia el trato animal: la eliminación de las banderillas y la prohibición de matar al toro en público muestran una adaptación de la tradición a las normas éticas modernas. Esto causó cierta fricción cuando se legisló la protección animal, pues muchas comunidades protestaron temiendo que se les prohibiera su baxal toro, logrando finalmente continuar la práctica bajo condiciones humanitarias. El hecho de que las autoridades hayan permitido esta continuidad con ajustes es un ejemplo de cómo tradición y modernidad pueden dialogar.
Otro aspecto en evolución es la participación de la juventud. Si bien hubo una época en que las nuevas generaciones parecían menos interesadas en las costumbres (migrando a ciudades o adoptando estilos de vida urbanos), en años recientes se observa un renovado involucramiento juvenil. Actividades como concursos de altares, encuentros jaraneros juveniles, difusión en redes sociales y talleres culturales están acercando a los jóvenes a sus raíces. Por ejemplo, se realizan eventos como la Noche de Fandango Jaranero o el U Biix Pixan mencionados en Betania, precisamente para entusiasmar a los chicos con la vaquería y las danzas tradicionales. Esto indica una transición generacional más fluida, donde los jóvenes se apropian de la fiesta dándole su propio matiz (mezclando, por qué no, una banda de rock local junto con la jarana en el programa festivo).
En términos organizativos, la fiesta también se ha tenido que adaptar a nuevas dinámicas económicas. Antaño, gran parte de los gastos eran cubiertos por promesas y donaciones voluntarias, mientras que ahora a veces se gestionan apoyos gubernamentales o patrocinios (para contratar grupos musicales, instalar luz y sonido, etc.). Aún así, la esencia comunitaria se mantiene: la mayoría de recursos sigue proviniendo de colectas entre vecinos, rifas pro-festejo, venta de comida en kermeses previas, etc. Esto asegura que la fiesta siga siendo “del pueblo”.
Conscientes de la importancia de proteger esta tradición, tanto la comunidad como instituciones culturales han emprendido acciones de rescate y preservación. El gobierno de Quintana Roo, por ejemplo, declaró Patrimonio Cultural Intangible el sistema de cargos y festividades de los santuarios mayas del centro del estado, reconociendo formalmente el valor de estas celebraciones tradicionales. Asimismo, organismos como el INMAYA y la Secretaría de Cultura apoyan con difusión y capacitación. En 2025 se llevó a cabo un mapeo de fiestas tradicionales en Felipe Carrillo Puerto, en el cual promotores culturales documentaron cada comunidad, sus festividades, la forma de ofrendar alimentos, los platillos típicos que preparan y el significado de sus rituales. Este esfuerzo busca crear un registro detallado para entender qué manifestaciones culturales podrían estar en riesgo de perderse, y así orientar apoyos para su conservación. Iniciativas como ésta permiten visibilizar las necesidades de las comunidades: por ejemplo, si un pueblo requiere apoyo para comprar instrumentos de maya pax o para reconstruir su capilla, el mapeo ayuda a canalizar recursos donde hace falta, garantizando que la tradición no decaiga por falta de medios.
Otra estrategia de preservación ha sido la educación y difusión. En escuelas locales se incluye la enseñanza de bailes regionales y lengua maya, vinculando a los niños con su patrimonio. Durante las fiestas, es común ver a grupos escolares desfilar o presentarse, afianzando su sentido de pertenencia. Medios locales (radio comunitaria, prensa regional) publican crónicas y reportajes exaltando la tradición cada año, lo cual fortalece el orgullo local. Un titular de prensa la describió acertadamente: “Felipe Carrillo Puerto celebra sus fiestas con tradición y alegría”, subrayando cómo estas fiestas patronales son más que eventos religiosos, son expresiones de júbilo colectivo y continuidad cultural.
Por último, la adaptabilidad ha sido clave en la pervivencia. Incluso cuando la pandemia amenazó con interrumpir las celebraciones, las comunidades encontraron formas seguras de continuar sus ritos básicos. Esto demuestra que mientras exista fe y voluntad comunitaria, la fiesta de San José seguirá reinventándose para persistir. Los cambios en la forma de celebrar no han significado pérdida del significado; al contrario, muestran la capacidad de la tradición de evolucionar sin romperse.

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
Hace muchos, muchos años, cuando el mundo aún estaba joven y las noches eran más oscuras que ahora, los pueblos mayas vivían rodeados por la inmensa selva. Allí habitaban animales poderosos, espíritus antiguos y fuerzas que los humanos aún no comprendían. Entre todos esos seres, ninguno era tan temido y respetado como el Balam, el jaguar sagrado.
Cuenta la leyenda que el jaguar no era un animal cualquiera, sino un ser espiritual enviado por los dioses para proteger a los hombres. Cuando los primeros pobladores llegaron a la tierra y comenzaron a sembrar maíz, no sabían cómo defenderse de los peligros de la noche. Los vientos fríos, los espíritus traviesos y las criaturas de la oscuridad amenazaban las aldeas.
Fue entonces cuando los dioses crearon a los Balames, cuatro jaguares guardianes, cada uno ubicado en un punto cardinal.

Balam Kin, guardián del Este, recibía la fuerza del sol naciente.

Balam Ix, guardián del Norte, vigilaba los vientos y el espíritu de los animales.

Balam Chak, guardián del Oeste, controlaba los atardeceres y el mundo de las sombras.

Balam Ux, guardián del Sur, protegía el agua, la lluvia y la vida que brota de la tierra.

Cada Balam tenía el poder de recorrer la selva en silencio y de ver lo que ningún humano podía ver. Sus ojos brillantes eran capaces de atravesar la oscuridad, y sus pasos al caminar no dejaban rastro. Por eso, cuando la noche caía sobre los pueblos, la gente sabía que los Balames caminaban entre los árboles, vigilando a los suyos.

Se dice que, cuando un espíritu maligno intentaba entrar en una casa, el Balam aparecía en la puerta, con los colmillos blancos como el copal ardiendo, y ahuyentaba al intruso con un rugido que hacía temblar la tierra. Por eso, los antiguos mayas decían que mientras se escuchara el rugido de un jaguar cerca del pueblo, no había nada que temer, pues el guardián estaba haciendo su trabajo.

También cuentan que los Balames protegían las milpas, espantando a los animales que querían destruir el maíz y cuidando los cultivos durante la noche. Los campesinos, agradecidos, dejaban ofrendas de comida y encendían velas de cera para honrar a los jaguares protectores.

Con el paso de los siglos, la figura del Balam se convirtió en símbolo de fuerza, equilibrio y sabiduría. Incluso hoy, en muchas comunidades, se dice que todos tenemos un Balam que cuida nuestro camino, y que cuando caminamos por la selva o pasamos noches difíciles, su espíritu nos acompaña.

Así, la leyenda del Balam sigue viva:
un jaguar sagrado, protector del pueblo maya, guardián de la noche y defensor de la vida.`,
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
    detalle: `Dicen los abuelos que, en los montes profundos de la antigua tierra maya, existe un ser que nadie desea encontrar.
No corre rápido como el venado ni ruge como el jaguar.
Su presencia no se anuncia con pisadas, sino con algo peor:
un olor tan fuerte y tan podrido que se clava en el pecho y hace temblar el alma.

A ese ser lo llaman El Boop, La Bestia Fétida.

Cuentan que, hace mucho tiempo, cuando los hombres comenzaron a abrir caminos entre la selva, molestaron a ciertos espíritus antiguos que dormían bajo la tierra húmeda. Entre ellos estaba el Boop, guardián oscuro del monte, encargado de mantener lejos a cualquiera que no respetara la naturaleza.

No era una criatura hecha de carne viva, sino un espíritu atrapado en el cuerpo de un animal grande y pesado, parecido a un cerdo salvaje, cubierto de lodo y heridas viejas que jamás cicatrizaban. Sus ojos brillaban como brasas, y su aliento era tan espeso que marchitaba las hojas a su paso.

Dicen que, cuando el Boop despierta, la selva entera guarda silencio.
Ni los grillos cantan.
Ni los árboles se mueven.
Y solo entonces, desde esa quietud profunda, surge el hedor:
un olor tan intenso que hace llorar, marear y perderse a quien lo respira.

Los antiguos caminantes sabían que, si ese olor aparecía en el camino, no debían avanzar.
Porque el Boop no ataca por hambre.
Ataca a quienes desafían su advertencia.

Una vez, un cazador que no creía en cuentos decidió seguir adelante aunque el aire se hubiera vuelto irrespirable. Cada paso lo llevaba más hondo al monte, donde el olor se hacía más denso. De pronto, el suelo se volvió blando como lodo fresco y las sombras parecían moverse solas.

Allá, entre los árboles, vio dos ojos encendidos.
Y antes de que pudiera levantar su antorcha, el Boop se levantó ante él, enorme, cubierto de barro y heridas purulentas. El cazador sintió que el aire se volvía pesado como piedra. Quiso correr, pero sus piernas ya no le respondían.
Dicen que nadie volvió a verlo.

Desde entonces, los abuelos repiten siempre las mismas palabras:

“Si el monte te avisa con su olor, retrocede.
El Boop no persigue:
espera a que tú seas quien decida perderse.”

Algunos creen que es una criatura maldita.
Otros, un espíritu que protege la selva.
Pero todos coinciden en algo:

De noche, en los montes de la Península, el Boop aún camina,
silencioso, invisible, apestado…
esperando a quien ignore su advertencia.`,
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
