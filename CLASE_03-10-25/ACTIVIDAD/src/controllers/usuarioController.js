const UsuarioManager = require("../managers/usuarioManager");

const usuarioManager = new UsuarioManager();

//! *** *** ***

class UsuarioController {
  createUser = async (req, res) => {
    try {
      const data = req.body;
      const { nombre, apellido, dni } = data;
      if (!nombre || !apellido || !dni) {
        res
          .status(400)
          .json({ success: false, message: "Datos de usuario incompletos" });
        return;
      }
      const usuario = await usuarioManager.createUser(data);
      if (!usuario) {
        res.status(400).json({ success: false, message: "Usuario no creado" });
        return;
      }
      // console.log("::::::::::::::::::", usuario)
      res.status(200).json({ success: true, usuario });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  getAllUsers = async (req, res) => {
    try {
      const usuarios = await usuarioManager.getAllUsers();
      res.status(200).json({ success: true, usuarios });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  //* /api/usuarios/:id
  getUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const usuario = await usuarioManager.getUserById(id);
      if (!usuario) {
        res.status(404).json({ message: "Usuario no encontrado" });
      } else {
        res.status(200).json(usuario);
      }
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
      const { id } = req.params;
      const data = req.body;
      // validar
      const usuario = await usuarioManager.updateUserById(id, data);
      // validar
      res.status(200).json(usuario);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  deleteUserById = async (req, res) => {
    try {
      const {id} = req.params 
      const result = await usuarioManager.deleteUserById(id)
      // if(!result){}
      res.status(200).json(result)
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
}

module.exports = UsuarioController;
