const express = require("express");
const app = express();
const router = require("./routes/router.js");
const port = 3000;

app.use(express.static("assets"));

app.use("/abracadabra", router);

app.listen(port, () =>
  console.log(`Servidor iniciado en el puerto http://localhost:${port}`)
);
