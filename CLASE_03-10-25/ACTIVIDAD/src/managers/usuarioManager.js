const Usuario = require("../models/usuario");
const mongoose = require("mongoose");

//! *** *** ***

class UsuarioManager {
  //* CREAR USUARIO
  async createUser(data) {
    try {
      if (!data) throw new Error("Datos de usuario no proporcionados");
      const usuario = new Usuario(data);
      //const usuario = await Usuario.create(data)
      return await usuario.save();
    } catch (error) {
      console.error("Error creando usuario:", error);
      throw new Error("Error al crear usuario");
    }
  }

  //* OBTENER TODOS LOS USUARIOS
  async getAllUsers() {
    try {
      //* Proyecciones 
      const usuarios = await Usuario.find({}, "nombre apellido edad dni curso nota")
      return usuarios
    } catch (error) {
      console.error(`Error al buscar lista de usuarios: ${error}`);
      throw new Error("Error al obtener usuarios");
    }
  }

  //* OBTENER USUARIO POR ID
  async getUserById(id) {
    try {
      if (!id) throw new Error("ID de usuario no proporcionado");
      const usuario = await Usuario.findById(id)
      if(!usuario){
        return {}
      }
      return usuario
    } catch (error) {
      console.error("Error obteniendo usuario:", error);
      return null;
    }
  }

  //* OBTENER USUARIO POR DNI
  async getUserByDni(dni) {
    try {
    } catch (error) {
      console.error("Error obteniendo usuario:", error);
      return null;
    }
  }

  //* ACTUALIZAR USUARIO POR ID

  async updateUserById(id, data) {
    try {
      if (!id) throw new Error("ID de usuario no proporcionado");
      if (!data) throw new Error("Datos de usuario no proporcionados");
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error("ID de usuario no válido");
      }
      const usuario = await this.getUserById(id)

      // if(Object.keys(usuario).length === 0){

      // }
      return await Usuario.findByIdAndUpdate(id, data, { new: true })
      // { new: true } para devolver el documento actualizado
    } catch (error) {
      console.error("Error actualizando usuario:", error);
      throw new Error("Error al actualizar usuario");
    }
  }

  //* ELIMINAR USUARIO POR ID
  async deleteUserById(id) {
    try {
      // Validar
      const deleteUsuario = await Usuario.findByIdAndDelete(id)
      console.log("----->", deleteUsuario)
      // Validar
      return deleteUsuario

    } catch (error) {
      console.error("Error eliminando usuario:", error.message);
      return { success: false, message: error.message };
    }
  }
}

module.exports = UsuarioManager;


