// ===================== IMPORTACIÓN DE MÓDULOS =====================

// Express: Framework para crear el servidor y manejar rutas HTTP
const express = require("express");

// CORS: Permite que tu frontend pueda comunicarse con tu backend sin bloqueo
const cors = require("cors");

// Mongoose: Librería para conectar y trabajar con MongoDB Atlas
const mongoose = require("mongoose");

const mysql = require("mysql2");



// ===================== CONFIGURACIÓN INICIAL =====================

// Crear la aplicación de Express
const app = express();

// Puerto donde correrá el backend (http://localhost:4000)
const PORT = 4000;

// ===================== CONEXIÓN MYSQL =====================

const mysqlConnection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3307,
  user: "root",
  password: "Mysql123*",
  database: "productos_web"
});

mysqlConnection.connect((err) => {

  if (err) {
    console.error("❌ Error MySQL:", err);
    return;
  }

  console.log("✔ Conectado a MySQL");

});



// ===================== MIDDLEWARES =====================

// Habilitar CORS para permitir conexión desde la página web
app.use(cors());

// Permitir que Express reciba datos en formato JSON
app.use(express.json());



// ===================== CONEXIÓN A MONGODB ATLAS =====================

// Cadena de conexión a tu base de datos en la nube
// IMPORTANTE: reemplazar la contraseña justo después de ARTURO1:
const MONGODB_URI = "mongodb+srv://ARTURO1:ARTURO15@clusterdatademy.guouo9h.mongodb.net/?appName=ClusterDatademy";

// Intentar conectar a MongoDB Atlas
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("✔ Conectado a MongoDB Atlas"))
  .catch((err) => console.error("❌ Error al conectar a MongoDB:", err));



// ===================== DEFINICIÓN DEL ESQUEMA =====================

// Este esquema define cómo lucirá un comentario dentro de la base de datos
const commentSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },   // Nombre del usuario (obligatorio)
    mensaje: { type: String, required: true }   // Comentario (obligatorio)
  },
  {
    timestamps: true // Agrega automáticamente createdAt y updatedAt
  }
);

// Crear el modelo basado en el esquema → esto crea la colección "comments"
const Comment = mongoose.model("Comment", commentSchema);



// ===================== RUTA GET: Obtener comentarios =====================

// Cuando el frontend pida GET /comments, devolvemos todos los comentarios
app.get("/comments", async (req, res) => {
  try {
    // Buscar todos los comentarios y ordenarlos del más nuevo al más viejo
    const comentarios = await Comment.find().sort({ createdAt: -1 });

    res.json(comentarios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener comentarios" });
  }
});



// ===================== RUTA POST: Guardar un comentario =====================

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


// ===================== RUTA PRODUCTOS MYSQL =====================

app.get("/productos", (req, res) => {

  mysqlConnection.query(
    "SELECT * FROM productos",
    (err, results) => {

      if (err) {

        return res.status(500).json({
          error: "Error al obtener productos"
        });

      }

      res.json(results);

    }
  );

});

// ===================== RUTA PRODUCTO POR ID =====================

app.get("/productos/:id", (req, res) => {

  const id = req.params.id;

  mysqlConnection.query(
    "SELECT * FROM productos WHERE id = ?",
    [id],
    (err, results) => {

      if (err) {

        return res.status(500).json({
          error: "Error al obtener producto"
        });

      }

      if (results.length === 0) {

        return res.status(404).json({
          error: "Producto no encontrado"
        });

      }

      res.json(results[0]);

    }
  );

});
// ===================== INICIAR EL SERVIDOR =====================

// Escuchar y levantar el servidor en el puerto 4000
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend escuchando en http://localhost:${PORT}`);
});
