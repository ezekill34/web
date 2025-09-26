const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

const app = express();
app.use(cors());
app.use(express.json());

// Base de datos SQLite
const db = new sqlite3.Database("./db.sqlite");

// Inicializar tabla de usuarios
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
  )
`);

// Ruta de prueba
app.get("/api", (req, res) => {
  res.json({ message: "API del PetShop funcionando 🚀" });
});

// Login
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  db.get(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, row) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!row) return res.status(401).json({ error: "Credenciales inválidas" });
      res.json({ success: true, user: row });
    }
  );
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Backend corriendo en http://localhost:${PORT}/api`);
});
