// backend/index.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 4000;

// Middlewares
app.use(cors());
app.use(express.json());

// 🔗 Pega aquí tu cadena de conexión de MongoDB Atlas
const MONGODB_URI = "mongodb+srv://ARTURO1:ARTURO15@clusterdatademy.guouo9h.mongodb.net/?appName=ClusterDatademy";

// Conexión a MongoDB
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("✅ Conectado a MongoDB Atlas"))
  .catch((err) => console.error("❌ Error al conectar a MongoDB:", err));

// Esquema y modelo de comentario
const commentSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    mensaje: { type: String, required: true },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

// GET /comments → obtener comentarios desde la BD
app.get("/comments", async (req, res) => {
  try {
    const comentarios = await Comment.find().sort({ createdAt: -1 });
    res.json(comentarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener comentarios" });
  }
});

// POST /comments → guardar comentario en la BD
app.post("/comments", async (req, res) => {
  try {
    const { nombre, mensaje } = req.body;

    if (!nombre || !mensaje) {
      return res.status(400).json({ error: "Falta nombre o mensaje" });
    }

    const nuevo = await Comment.create({ nombre, mensaje });

    res.json({ message: "Guardado", comentario: nuevo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al guardar comentario" });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
