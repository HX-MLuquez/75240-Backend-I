const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

require("dotenv").config();
const logger = require("morgan");

const MONGO_URI = process.env.MONGO_URI;

const routes = require("./routes/index");

const app = express();

//* CONNECT APP con DB-ATLAS mediante MONGOOSE
// MONGO_URI_modelo=mongodb+srv://mauuuricio:1234@cluster0.mongodb.net/meme
// mongodb+srv://mauuuricio:1234@cluster101.iw1d3lh.mongodb.net/escuela?retryWrites=true&w=majority&appName=Cluster101
//! *** *** ***
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.error(err));

//* MIDDELWARES
app.use(logger("dev"));
app.use(express.json()); // <- {}
app.use(express.urlencoded({ extended: true })); // FORM <- {}

// Configurar la carpeta 'public' para servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Configurar la carpeta 'files' para servir archivos estáticos
app.use("/files", express.static(path.join(__dirname, "files")));

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

module.exports = app;
