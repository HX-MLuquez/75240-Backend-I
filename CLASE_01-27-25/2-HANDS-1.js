//* HANDS 1
/*
¿Cómo lo hacemos? Se creará una clase “UsersManager” que permitirá guardar usuarios en un atributo estático. 
El usuario se recibirá con una contraseña en string plano, y se deberá guardar la contraseña hasheada con crypto. 
Utilizar el módulo nativo crypto.
El manager debe contar con los siguientes métodos:
El método “Crear usuario” debe recibir un objeto con los campos:
Nombre
Apellido
Nombre de usuario
Contraseña
El método debe guardar un usuario en un atributo estático llamado “Usuarios”, recordando que la 
contraseña debe estar hasheada por seguridad


El método “Mostrar Usuarios” imprimirá en consola todos los usuarios almacenados.
El método “Validar Usuario” recibirá el nombre de usuario que quiero validar, seguido de la contraseña,  
debe poder leer el json previamente generado con el arreglo de usuarios y hacer la comparación de contraseñas, 
Si coinciden el usuario y la contraseña, devolver un mensaje “Logueado”, caso contrario indicar error si el 
usuario no existe, o si la contraseña no coincide.


*/

// const path = require('path')
// const fs = require('fs')
const crypto = require("crypto");

//* nvm  -> v20.17.0    v18.17.0    v16.1.0

class UsersManager {
  static usuarios = [];
  static crearUsuario({ nombre, apellido, nombreUsuario, contrasenia }) {
    const hash = crypto.createHash("sha256");
    console.log("01 - ", hash);
    /*
    01 -  Hash {
      _options: undefined,
      [Symbol(kHandle)]: Hash {},
      [Symbol(kState)]: { [Symbol(kFinalized)]: false }
    }
    */
    hash.update(contrasenia)
    const passwordEncrypt = hash.digest("hex")
    console.log("02 - ", passwordEncrypt);
    const usuario = {
      nombre,
      apellido,
      nombreUsuario,
      contrasenia: passwordEncrypt,
    };
    UsersManager.usuarios.push(usuario);
    return "usuario bal bla blaaa"
  }
  static mostrarUsuarios() {
    console.log(UsersManager.usuarios);
  }
  static validarUsuario(nombreUsuario, contrasenia) {
    const usuario = UsersManager.usuarios.find((u)=>u.nombreUsuario === nombreUsuario)
    if(!usuario){
      console.log("usuario no encontrado")
      return 
    }
    const hash = crypto.createHash("sha256");
    hash.update(contrasenia)
    const encryptPassword = hash.digest("hex");
    if(encryptPassword === usuario.contrasenia){
      console.log("Si es igual")
    } else{
      console.log("contraseña incorrecta")
    }
  }
}


UsersManager.crearUsuario({
  nombre: "Juan",
  apellido: "Pérez",
  nombreUsuario: "juanperez",
  contrasenia: "password123",
})

UsersManager.validarUsuario("juanperez", "password123");
