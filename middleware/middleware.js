const path = require("path");

const validarUsuario = (usuarios) => {
  return (req, res, next) => {
    const usuario = req.params.usuario;
    if (usuarios.includes(usuario)) {
      next();
    } else {
      res.sendFile(path.join(__dirname, "../assets/img/who.jpg"));
    }
  };
};

module.exports = { validarUsuario };
