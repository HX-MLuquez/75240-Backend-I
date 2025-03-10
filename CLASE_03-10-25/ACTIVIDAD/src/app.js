const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

require("dotenv").config();
const logger = require("morgan");


const routes = require("./routes/index");


const app = express();

//* CONNECT APP con DB-ATLAS mediante MONGOOSE
// MONGO_URI_modelo=mongodb+srv://<username>:<password>@cluster0.mongodb.net/meme
//! *** *** ***



//* MIDDELWARES
app.use(logger("dev"));
app.use(express.json()); // <- {}
app.use(express.urlencoded({ extended: true })); // FORM <- {}

// Configurar la carpeta 'public' para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configurar la carpeta 'files' para servir archivos estáticos
app.use('/files', express.static(path.join(__dirname, 'files')));



app.use("/api", routes);

app.get("/",(req,res)=>{
  res.send("Hola mundo")
})


module.exports = app

