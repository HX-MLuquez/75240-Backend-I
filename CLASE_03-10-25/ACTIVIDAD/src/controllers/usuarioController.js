const UsuarioManager = require("../managers/usuarioManager");

const usuarioManager = new UsuarioManager();

//! *** *** ***

class UsuarioController {
  createUser = async (req, res) => {
    try {
     
      
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  getAllUsers = async (req, res) => {
    try {
     
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  getUserById = async (req, res) => {
    try {
     
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  getUserByDni = async (req, res) => {
    try {
      
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  updateUserById = async (req, res) => {
    try {
      
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  deleteUserById = async (req, res) => {
    try {
      
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
}

module.exports = UsuarioController;
