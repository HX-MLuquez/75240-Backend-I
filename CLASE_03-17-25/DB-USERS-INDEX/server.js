require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");  
  
const app = express(); 

const port = process.env.PORT || 3000;
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uri = process.env.MONGO_URI;
// mongodb+srv://<db_username>:<db_password>@cluster101.iw1d3lh.mongodb.net/users-5000

mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const userSchema = new mongoose.Schema({
  first_name: String,
  //* Podemos indexar un campo de la siguiente manera:
  //   first_name: {
  //     type: String,
  //     index: true
  //   },
  last_name: String,
  email: String,
  phone: String,
  age: Number,
});
// Borrar todos los documentos de la colección no elimina los índices. Los índices permanecen en la colección
// hasta que los elimines explícitamente.

//* INDEXADO del campo first_name
//! Insertar index al schema userSchema en el campo first_name
// ---> 
userSchema.index({first_name: 1})

//* -> first_name (index) -> b-tree - Esta manera permite crear un índice compuesto
//* -> { first_name: 1, last_name: 1 } - Índice compuesto

const User = mongoose.model("User", userSchema);

app.get("/findAll", async (req, res) => {
  const result = await User.find().explain("executionStats");
  //* .explain("executionStats") nos permite ver las estadísticas de la consulta
  //* -> "executionTimeMillis": 1,
  res.json(result.executionStats);
});

//* Para probar con indexado y sin debemos de comentar
app.get("/findByFirstNameWithoutIndex", async (req, res) => {
  // Si buscamos a Meme donde de los 30.000 registros son 29.998 registros con first_name = "Meme"
  // Aplicar el index en ese caso es más lento que sin index debido al proceso de búsqueda en el árbol
  const result = await User.find({ first_name: "Xime" }).explain(
    "executionStats"
  );
  const usersXime = await User.find({ first_name: "Xime" });
  console.log("usersXime -> ", usersXime);
  //* -> "executionTimeMillis": 3,
  res.json(result.executionStats);
});

//* Para verificar que estamos indexando
app.get("/indexes", async (req, res) => {
  try {
    const indexes = await User.collection.getIndexes();
    res.json(indexes);
  } catch (error) {
    console.error("Error obteniendo los índices:", error);
    res.status(500).json({ error: "Error obteniendo los índices" });
  }
});

//* Otra forma de indexar un campo es con el método createIndex, pero este método se ejecuta una sola vez
//* y no se puede modificar el índice una vez creado. Por ello, es recomendable usar el index en el schema
// app.post("/createIndex", async (req, res) => {
//   try {
//     await User.collection.createIndex({ first_name: 1 }); // Índice B-Tree en first_name
//     res.send('Índice creado en el campo "first_name".');
//   } catch (error) {
//     res.status(500).send("Error al crear el índice: " + error.message);
//   }
// });


//* Code para insertar 30.000 registros de los cuales 2 tienen el campo first_name igual a "Xime"
app.post("/insertMany", async (req, res) => {
  const users = [];
  for (let i = 0; i < 30000; i++) {
    users.push({
      first_name: i % 15000 === 0 ? "Xime" : "Meme",
      last_name: "Doe",
      email: `meme_000${i}@gmail.com`,
      phone: `555-555-${i.toString().padStart(4, "0")}`,
      age: Number(i % 50 === 0 ? 30 : 25),
    });
  }
  await User.insertMany(users);
  res.send("Users inserted");
});

//! Recordar hacer correctos procesos de limpiado de index (usar /indexes para verificar)
//* DELETE ALL USERS
app.delete("/deleteAll", async (req, res) => {
  await User.deleteMany({});
  // Borrar todos los documentos de la colección no elimina los índices. 
  // Los índices permanecen en la colección hasta que los elimines explícitamente.
  // await User.collection.dropIndex("first_name_1");
  // // await User.collection.dropIndex("first_name_-1");
  res.send("Users deleted");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Test RouteAllUsers: http://localhost:${port}/findAll`);
  console.log(
    `Test RouteWithoutIndex: http://localhost:${port}/findByFirstNameWithoutIndex`
  );
  console.log(`Test RouteIndexes: http://localhost:${port}/indexes`);
});



