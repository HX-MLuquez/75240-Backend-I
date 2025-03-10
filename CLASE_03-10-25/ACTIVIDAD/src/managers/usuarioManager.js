const Usuario = require("../models/usuario");
const mongoose = require("mongoose");

//! *** *** ***

class UsuarioManager {
  //* CREAR USUARIO
  async createUser(data) {
    try {
     
    } catch (error) {
      console.error("Error creando usuario:", error);
      throw new Error("Error al crear usuario");
    }
  }

  //* OBTENER TODOS LOS USUARIOS
  async getAllUsers() {
    try {
     
    } catch (error) {
      console.error(`Error al buscar lista de usuarios: ${error}`);
      throw new Error("Error al obtener usuarios");
    }
  }

  //* OBTENER USUARIO POR ID
  async getUserById(id) {
    try {
     
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
      
    } catch (error) {
      console.error("Error actualizando usuario:", error);
      throw new Error("Error al actualizar usuario");
    }
  }

  //* ELIMINAR USUARIO POR ID
  async deleteUserById(id) {
    try {
     
    } catch (error) {
      console.error("Error eliminando usuario:", error.message);
      return { success: false, message: error.message };
    }
  }
}

module.exports = UsuarioManager;
