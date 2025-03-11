const express = require("express");
const router = express.Router();
const UsuarioController = require("../controllers/usuarioController");

const usuario = new UsuarioController();

//! *** *** ***
router.post("/", usuario.createUser) // http://localhost:3000/api/usuarios
router.get("/", usuario.getAllUsers) // http://localhost:3000/api/usuarios
router.get("/:id", usuario.getUserById) // http://localhost:3000/api/usuarios/1234
router.put("/:id", usuario.updateUserById) // http://localhost:3000/api/usuarios/1234 {body}
router.delete("/:id", usuario.deleteUserById) // http://localhost:3000/api/usuarios/1234 


module.exports = router;

/*
http://localhost:3000/api/usuarios

objeto usuario ejemplo:
{
  "nombre": "Juan",
  "apellido": "Perez",
  "edad": 30,
  "dni": "12345678",
  "curso": "Fullstack",
  "nota": 10
},
{
  "nombre": "Maria",
  "apellido": "Gomez",
  "edad": 25,
  "dni": "87654321",
  "curso": "Backend",
  "nota": 9
}

*/
