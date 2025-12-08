const LUGARES_ZONA_MAYA = [
  {
    id: "muyil",
    nombre: "Zona arqueológica de Muyil",
    tipo: "Zona arqueológica",
    etiquetas: ["selva", "arqueología", "sian ka'an", "cultura maya"],
    descripcionCorta:
      "Muyil era ya una importante ciudad en la que se construyeron importantes edificios de estilo Petén, como El Castillo y los tres basamentos del Grupo de la Entrada. ",
    lat: 20.0784,
    lng: -87.6151,
    direccion: "Felipe Carrrillo Puerto, Q. Roo",
    imagen: "/assets/img/muyil.jpg"
  },
  {
    id: "coba",
    nombre: "Zona arqueológica de Cobá",
    tipo: "Zona arqueológica",
    etiquetas: ["arqueología", "lagunas", "nohoch mul", "turismo"],
    descripcionCorta:
      "La zona arqueológica de Cobá es un importante y extenso asentamiento maya precolombino ubicado en el estado de Quintana Roo, México, conocido por su densa vegetación, su ubicación entre lagunas y sus antiguos caminos elevados, o sacbe'ob",
    lat: 20.4887,
    lng: -87.732,
    direccion: "Tulum, Quintana Roo",
    imagen: "/assets/img/coba.jpg"
  },
  {
    id: "tulum",
    nombre: "Zona arqueológica de Tulum",
    tipo: "Zona arqueológica",
    etiquetas: ["costa", "mar caribe", "muralla", "turismo"],
    descripcionCorta:
      "Antigua ciudad maya amurallada frente al mar Caribe, uno de los sitios más emblemáticos de la región.",
    lat: 20.214,
    lng: -87.429,
    direccion: "Tulum, Quintana Roo",
    imagen: "/assets/img/tulum.jpg"
  },
  {
    id: "sian_kaan",
    nombre: "Reserva de la Biosfera Sian Ka’an",
    tipo: "Reserva natural",
    etiquetas: ["reserva", "naturaleza", "patrimonio mundial", "lagunas"],
    descripcionCorta:
      "La Reserva de la Biósfera de Sian Ka'an es un espacio natural protegido que se localiza en la costa caribeña del estado de Quintana Roo, México. Fue declarada Patrimonio de la Humanidad por la Unesco en el año 1987 y sitio Ramsar en 2003.​",
    lat: 19.363,
    lng: -87.802,
    direccion: "Costa de Quintana Roo",
    imagen: "/assets/img/sian-ka-an.jpg"
  },
];

let mapa;          
let marcadores = [];

const CENTRO_ZONA_MAYA = { lat: 19.577, lng: -88.045 };

export function initMapaZonaMaya() {
  console.log("Iniciando mapa con Leaflet (Plan B sin Google Places)...");

  const contenedor = document.getElementById("mapaComunidad");
  if (!contenedor) {
    console.error("No se encontró el elemento #mapaComunidad");
    return;
  }

  mapa = L.map(contenedor).setView(
    [CENTRO_ZONA_MAYA.lat, CENTRO_ZONA_MAYA.lng],
    7
  );

  // Mapa público OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
  }).addTo(mapa);

  // Geolocalización
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const userLatLng = [pos.coords.latitude, pos.coords.longitude];

        const userIcon = L.circleMarker(userLatLng, {
          radius: 6,
          color: "#ffffff",
          weight: 2,
          fillColor: "#4285F4",
          fillOpacity: 1
        }).addTo(mapa);

        userIcon.bindPopup("Tu ubicación aproximada").openPopup();

        mapa.setView(userLatLng, 9);
      },
      () => {
        console.warn("No se pudo obtener la ubicación del usuario.");
      }
    );
  }

  // Barra de búsqueda
  const inputBusqueda = document.getElementById("inputBusquedaLugar");
  const btnBuscar = document.getElementById("btnBuscarLugar");

  if (inputBusqueda && btnBuscar) {
    const hacerBusqueda = () => {
      const termino = inputBusqueda.value.trim();
      if (!termino) return;
      buscarEnListaLocal(termino);
    };

    btnBuscar.addEventListener("click", hacerBusqueda);
    inputBusqueda.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        hacerBusqueda();
      }
    });
  }
}

function buscarEnListaLocal(query) {
  if (!mapa) return;

  const q = query.toLowerCase();

  const resultados = LUGARES_ZONA_MAYA.filter((lugar) => {
    return (
      lugar.nombre.toLowerCase().includes(q) ||
      lugar.tipo.toLowerCase().includes(q) ||
      (lugar.direccion && lugar.direccion.toLowerCase().includes(q)) ||
      lugar.etiquetas.some((tag) => tag.toLowerCase().includes(q))
    );
  });

  console.log("Buscando en lista local:", query, resultados);

  if (resultados.length === 0) {
    alert("No se encontraron lugares para: " + query);
    return;
  }

  const lugarSeleccionado = resultados[0];

  limpiarMarcadores();

  const marker = crearMarcadorLugarEstatico(lugarSeleccionado);

  mapa.setView(marker.getLatLng(), 11);

  actualizarTarjetas(lugarSeleccionado);
}

function limpiarMarcadores() {
  marcadores.forEach((m) => mapa.removeLayer(m));
  marcadores = [];
}

function crearMarcadorLugarEstatico(lugar) {
  const marker = L.marker([lugar.lat, lugar.lng]).addTo(mapa);

  marker.bindTooltip(lugar.nombre, { direction: "top" });

  marker.on("click", () => {
    actualizarTarjetas(lugar);
  });

  marcadores.push(marker);
  return marker;
}

function actualizarTarjetas(lugar) {
  const grid = document.getElementById("comunidadesGrid");
  if (!grid) return;

  grid.classList.add("visible");

  const primeraCard = grid.querySelector(".com-item.color1");
  if (!primeraCard) return;

  const fotoEl = primeraCard.querySelector(".com-foto");
  const nombreEl = primeraCard.querySelector(".com-nombre");

  const foto =
    lugar.imagen ||
    "https://via.placeholder.com/400x250?text=Sitio+cultural+maya";

  const direccion = lugar.direccion || "Dirección aproximada en la zona maya";

  if (fotoEl) {
    fotoEl.innerHTML = `
      <img src="${foto}" alt="${lugar.nombre}"
           style="width:100%;border-radius:8px;margin-bottom:8px;">
      <span><strong>Tipo:</strong> ${lugar.tipo}</span><br>
      <span><strong>Dirección:</strong> ${direccion}</span><br>
      <span><strong>Descripción:</strong> ${lugar.descripcionCorta}</span>
    `;
  }

  if (nombreEl) {
    nombreEl.textContent = lugar.nombre;
  }
}
