// ---------> MODULOS-Librerias (1)
// Express: Framework para crear el servidor y manejar las rutas HTTP
const express = require("express");

// CORS: Permite que el frontend pueda comunicarse con el backend sin bloqueos
const cors = require("cors");

// Mongoose: Librería para conectar y trabajar con MongoDB Atlas
const mongoose = require("mongoose");
      /*
      require(...): es la forma de importar librerías en Node.js

      express: framework para crear el servidor y las rutas (/comments)

      cors: permite que la página (frontend en localhost:5173) pueda hacer peticiones al backend (localhost:4000) sin que el navegador las bloquee

      mongoose: es un “traductor” entre tu código JS y MongoDB. Te permite trabajar con documentos de la base de datos usando clases y métodos (Comment.find(), new Comment(), etc)*/


// ------->  CONFIGURACIÓN(2)

// Cree la aplicación de Express
const app = express();

// Puerto donde correrá el backend (http://localhost:4000)
const PORT = 4000;
      /*
      app = express(): crea la aplicación/servidor. A partir de aquí, app será el objeto al que le vamos a ir agregando rutas, etc.

      PORT = 4000: el número de puerto donde escuchará el servidor. */



// --------->   MIDDLEWARES (3)

// Habilitar CORS para permitir conexión desde la página web
app.use(cors());

// Permite que Express reciba datos en formato JSON
app.use(express.json());

      /*
      ¿Qué es un middleware?
      Es una función que se ejecuta entre que llega la petición y la ruta que la atiende. Modifica o prepara los datos.

      app.use(cors()): activa CORS. Sin esto, el navegador no dejaría que el frontend (otro puerto) pida cosas al backend.

      app.use(express.json()): le dice a Express: “si llega una petición con cuerpo en formato JSON, conviértelo automáticamente en un objeto JS para que pueda leerlo”. */



// --------->  CONEXIÓN A MONGODB ATLAS (4)

// Cadena de conexión a base de datos en la nube (atlas)
// IMPORTANTE!! : reemplazar la contraseña del usuario en Atlas y escribir todo correctamente.
const MONGODB_URI = "mongodb+srv://ARTURO1:ARTURO15@clusterdatademy.guouo9h.mongodb.net/?appName=ClusterDatademy";



// --------> INTENTO DE CONEXIÓN A MONGODB ATLAS (5)
// Intentento de conectar a MongoDB Atlas
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("✔ Conectado a MongoDB Atlas"))
  .catch((err) => console.error("❌ Error al conectar a MongoDB:", err));

      /*
      mongoose.connect(MONGODB_URI): intenta abrir la conexión usando la URL.

      .then(...): se ejecuta cuando la conexión fue exitosa, imprime un mensaje de validación.

      .catch(...): se ejecuta cuando hubo un error (contraseña estuvo mal, cluster cayó o la IP está bloqueada), y muestra el error en consola.*/



// --------> DEFINICION DEL ESQUEMA (6)

// Este esquema define cómo lucirá un comentario dentro de la base de datos.
const commentSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },   // Nombre del usuario ( es obligatorio)
    mensaje: { type: String, required: true }   // Comentario (es obligatorio)
  },
  {
    timestamps: true // Agrega automáticamente createdAt y updatedAt
  }
);

      /*mongoose.Schema(...): define la estructura de los documentos que se guardarán.

      Dentro del primer objeto:

      nombre: debe ser de tipo String y es obligatorio (required: true).

      mensaje: igual, String y obligatorio.

      Segundo objeto:

      timestamps: true: hace que MongoDB agregue automáticamente createdAt y updatedAt a cada documento. */


// --------> CREACIÓN DE ESQUEMA DE COMMENTS (7)
// Crear el modelo basado en el esquema → esto crea la colección "comments"
const Comment = mongoose.model("Comment", commentSchema);
      /*
      Un modelo es como una “clase” construida a partir del esquema anterior.

      "Comment" será el nombre del modelo (y en la base de datos la colección se llamará comments).

      Con Comment puedo:

      crear comentarios → new Comment(...)

      buscar comentarios → Comment.find()

      borrar, actualizar, etc. */



// -------> RUTA GET: (Obtener comentarios) (8)

// Cuando el frontend pida GET /comments, devolvemos todos los comentarios
app.get("/comments", async (req, res) => {
  try {
    // Buscar todos los comentarios y se ordenan del más nuevo al más viejo
    const comentarios = await Comment.find().sort({ createdAt: -1 });

    res.json(comentarios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener comentarios" });
  }
});
      /*
      app.get("/comments", ...): define una ruta GET.
      Cuando el frontend hace un fetch("http://localhost:4000/comments"), entra aquí.

      async (req, res) => { ... }: la función es asíncrona porque vamos a usar await.

      Comment.find(): busca todos los documentos de la colección comments.

      .sort({ createdAt: -1 }): los ordena por fecha de creación, del más nuevo al más viejo.

      res.json(comentarios): envía el arreglo de comentarios al frontend como JSON.

      catch: si algo se rompe (por ejemplo, la base de datos no responde), se envía un error con código 500. */



// -------> RUTA POST: (Guardar un comentario) (9)

// Cuando el frontend envíe un nuevo comentario por POST /comments
app.post("/comments", async (req, res) => {
  const { nombre, mensaje } = req.body;

  // Validación por si el frontend envía datos vacíos
  if (!nombre || !mensaje) {
    return res.status(400).json({ error: "Falta nombre o mensaje" });
  }
  try {
    // Crear un nuevo comentario basado en el modelo
    const nuevoComentario = new Comment({ nombre, mensaje });
      /*
      Si alguno viene vacío → responde 400 (petición incorrecta).

      new Comment({ nombre, mensaje }): crea un objeto comentario usando el modelo.

      await nuevoComentario.save();: guarda el documento en MongoDB.

      res.json({ ... }): devuelve al frontend un mensaje de éxito y el comentario guardado.

      catch: si algo falla al guardar → responde con 500. */



    // Guardarlo en la base de datos
    await nuevoComentario.save();

    // Devolverlo al frontend
    res.json({
      message: "✔ Comentario guardado correctamente",
      comentario: nuevoComentario,
    });

  } catch (error) {
    res.status(500).json({ error: "Error al guardar el comentario" });
  }
});
      /*app.post("/comments", ...): define la ruta POST.
      El frontend manda aquí los datos del formulario por fetch con método POST.

      const { nombre, mensaje } = req.body;: extrae esos campos del cuerpo de la petición.

      Validación:*/



//  -------> INICIAR EL SERVIDOR 

// Escuchar y levantar el servidor en el puerto 4000
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend escuchando en http://localhost:${PORT}`);
});

      /*app.listen(PORT, ...): inicia el servidor y lo pone a escuchar en el puerto 4000.

      La función de callback imprime en consola que el servidor está corriendo. */