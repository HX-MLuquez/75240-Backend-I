Se creará una base de datos llamada “baseCRUD”.
 ✓ Se agregará una colección llamada “mascotas”
 ✓ Se agregarán 3 mascotas con las propiedades: 
nombre, especie, edad
 ✓ Se buscarán mascotas por su especie
 ✓ Contar el número de mascotas totales agregadas.

``javascript
use baseCRUD;

db.masctotas.insertOne({ nombre: 'boby', especie: 'Perro', edad: 3 });

db.mascotas.insertMany([
    { nombre: 'Fufu', especie: 'Perro', edad: 3 },
    { nombre: 'Mishi', especie: 'Gato', edad: 2 },
    { nombre: 'Fideo', especie: 'Gato', edad: 1 }
]);

db.mascotas.find();

db.mascotas.find({ especie: 'Perro' });

```