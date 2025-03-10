const express = require("express");
const router = express.Router();
const UsuarioController = require("../controllers/usuarioController");

const usuario = new UsuarioController();

//! *** *** ***


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
