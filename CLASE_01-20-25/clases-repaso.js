// Repaso de clases

// Crear una clase Actividad que reciba los siguientes parámetros:
// nombre
// nivel
// duracion

// La clase debe contar con un método que devuelva la duración en minutos de la actividad.

class Actividad {
  constructor(nombre, nivel, duracion) {
    this.nombre = nombre;
    this.nivel = nivel;
    this.duracion = duracion;
  }

  duracionEnMinutos() {
    return this.duracion * 60;
  }
}
