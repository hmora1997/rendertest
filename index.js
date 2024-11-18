const express = require("express");
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.get("/", (req, res) => {
  res.send("Hello, Render!");
});

app.get("/api", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});

app.post("/api/data", (req, res) => {
  const { name, age } = req.body;
  res.json({ message: `Hello, ${name}! You are ${age} years old.` });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
