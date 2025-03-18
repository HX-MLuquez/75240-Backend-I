// npm install express mongoose mongoose-paginate-v2 express-handlebars dotenv
// server.js
const express = require("express");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");
const Student = require("./models/student");
const dotenv = require("dotenv");

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de Handlebars
app.engine(
  "hbs",
  exphbs.engine({
    extname: "hbs",
    defaultLayout: "main",
    runtimeOptions: {
      //* para acceder a datos obj. anidados
      allowProtoPropertiesByDefault: true,
    },
  })
);
app.set("view engine", "hbs");

//* Function para poblar datos
async function initializeStudents() {
  try {
    const count = await Student.countDocuments();
    if (count === 0) {
      console.log("No students found. Inserting sample data...");
      const students = [];
      for (let i = 1; i <= 100; i++) {
        students.push({
          first_name: `FirstName${i}`,
          last_name: `LastName${i}`,
          email: `student${i}@example.com`,
          gender: i % 2 === 0 ? "Male" : "Female",
          grade: Math.floor(Math.random() * 100) + 1,
          group: `Group${Math.ceil(i / 20)}`,
        });
      }
      await Student.insertMany(students);
      console.log("Sample students inserted");
    } else {
      console.log("Students already exist in the collection");
    }
  } catch (err) {
    console.error("Error initializing students:", err.message);
  }
}
// Conectar a MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    // Llamar a la función para inicializar datos si es necesario
    initializeStudents();
  })
  .catch((err) => console.error("MongoDB connection error:", err));

//* RUTA INICIO
app.get("/", (req, res) => {
  res.render("index");
});

//todo____ Ruta para obtener estudiantes con paginación mongoose-paginate-v2 ____odot
//* Modelo de un PAGINATE usando mongoose-paginate-v2
//* debemos en el schema inyectar el plugin mongoosePaginate
//* y esto nos proporciona el método estático paginate
app.get("/students", async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query; // Página actual y límite de resultados por página
    //! Mostrar el paso a paso de como Implementar el paginate con mongoose-paginate-v2
    //! Ir al Model student.js para ver el plugin mongoosePaginate
    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      sort: { grade: -1 },
    };

    const result = await Student.paginate({}, options);
    console.log("......::::", result);

    // console.log(result.docs);
    res.render("students", {
      students: result.docs,
      currentPage: result.page,
      totalPages: result.totalPages,
      hasPrevPage: result.hasPrevPage,
      hasNextPage: result.hasNextPage,
      prevPage: result.prevPage,
      nextPage: result.nextPage,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//todo____ Ruta para obtener estudiantes con paginación sin librería ____odot
//* Modelo de un PAGINATE sin usar ninguna librería
app.get("/students_paginate_natural", async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query; // Página actual y límite (por defecto) de resultados por página
    let pageInt = Math.max(parseInt(page) || 1, 1); // evita valores menores a 1
    let limitInt = parseInt(limit);
    let skip = (pageInt - 1) * limitInt;
    let gradeSort = { grade: -1 }; // Ordenar por calificación del mejor al peor

    const students = await Student.find({})
      .sort(gradeSort)
      .skip(skip)
      .limit(limitInt);
    const totalDocs = await Student.countDocuments();
    const totalPages = Math.ceil(totalDocs / limit);
    res.render("students_paginate_natural", {
      students,
      currentPage: pageInt,
      totalPages,
      hasPrevPage: pageInt > 1,
      hasNextPage: pageInt < totalPages,
      prevPage: pageInt - 1,
      nextPage: pageInt + 1,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
