// backend/index.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

// Middlewares
app.use(cors());
app.use(express.json());

// "Base de datos" temporal en memoria
let comentarios = [];

// GET /comments → devolver comentarios guardados
app.get("/comments", (req, res) => {
  res.json(comentarios);
});

// POST /comments → recibir y guardar un comentario
app.post("/comments", (req, res) => {
  const { nombre, mensaje } = req.body;

  if (!nombre || !mensaje) {
    return res.status(400).json({ error: "Falta nombre o mensaje" });
  }

  const nuevo = {
    id: Date.now(),
    nombre,
    mensaje,
  };

  comentarios.unshift(nuevo); // metemos el nuevo al inicio
  res.json({ message: "Guardado", comentario: nuevo });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
