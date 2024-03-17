const express = require("express");
const router = express.Router();
const { validarUsuario } = require("../middleware/middleware.js");
const path = require("path");

const usuarios = [
  "Juan",
  "Jocelyn",
  "Astrid",
  "Maria",
  "Ignacia",
  "Javier",
  "Brian",
];

router.get("/usuarios", (req, res) => {
  res.json({ usuarios });
});

router.get("/juego/:usuario", validarUsuario(usuarios), (req, res) => {
  res.sendFile(path.join(__dirname, "../assets/img/conejito.jpg"));
});

router.get("/conejo/:n", (req, res) => {
  const n = parseInt(req.params.n);
  const numAleatorio = Math.floor(Math.random() * 4) + 1;
  if (n === numAleatorio) {
    res.sendFile(path.join(__dirname, "../assets/img/conejito.jpg"));
  } else {
    res.sendFile(path.join(__dirname, "../assets/img/voldemort.jpg"));
  }
});

router.get("/", (req, res) => {
  res.status(404).send("<center>Pagina Inicial Abracadabra</center>");
});

router.get("*", (req, res) => {
  res.status(404).send("<center>Esta página no existe...</center>");
});

module.exports = router;
