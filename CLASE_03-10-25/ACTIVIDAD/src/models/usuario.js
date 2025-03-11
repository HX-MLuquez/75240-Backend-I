const mongoose = require("mongoose");


//* Definimos el Schema
const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
  },
  dni: {
    type: String,
    required: true,
    unique: true,
  },
  curso: {
    type: String,
    required: true,
  },
  nota: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Usuario", usuarioSchema)
//* module.exports = Usuario

/*

DB
COLECCIÓN - > CAJA
tiene varios documentos (un documento es una hoja)


estudiante
Schema -> definimos los datos (campos) y restricciones 


Usuario.deleteMany()
Usuario.deleteOne()
Usuario.find()
Usuario.findById()
Usuario.findByIdAndDelete()
Usuario.findByIdAndRemove()
Usuario.findByIdAndUpdate()
Usuario.findOne()
Usuario.findOneAndDelete()
Usuario.findOneAndReplace()
Usuario.findOneAndUpdate()
Usuario.replaceOne()
Usuario.updateMany()
Usuario.updateOne()
Usuario body {
 nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
  },
  dni: {
    type: String,
    required: true,
    unique: true,
  },
  curso: {
    type: String,
    required: true,
  },
  nota: {
    type: Number,
    required: true,
  },
  }
*/
