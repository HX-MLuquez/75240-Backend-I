// server.js
const mongoose = require("mongoose");
const Student = require("./models/student");
const Course = require("./models/course");
const dotenv = require("dotenv");

// Reemplaza <username>, <password>, y <cluster-url> con tu información de conexión a MongoDB Atlas
dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

async function main() {
  // Conectar a la base de datos
  await mongoose.connect(MONGO_URI);
  console.log("Conectado a MongoDB Atlas");

  //! Crear un estudiante en la base de datos
  async function createStudent() {
    const newStudent = new Student({
      first_name: "John",
      last_name: "Doe",
      email: "johndoe@example.com",
      telephone: "123-456-7890",
      age: 20,
      gender: "Male",
      address: "123 Main St",
      courses: [], // Inicialmente vacío
    });

    await newStudent.save();
    console.log("Estudiante creado:", newStudent);
  }

  //! Crear un curso en la base de datos
  async function createCourse() {
    const newCourse = new Course({
      title: "Introduction to JavaScript",
      description: "A beginner course on JavaScript programming",
      duration: 10, // duración en semanas o días, según se prefiera
    });

    await newCourse.save();
    console.log("Curso creado:", newCourse);
    return newCourse._id; // Retorna el ID del curso para agregarlo al estudiante
  }

  //! Agregar el ID del curso al arreglo de cursos del estudiante
  async function addCourseToStudent(studentId, courseId) {
    const student = await Student.findById(studentId);
    student.courses.push({ course: courseId }); // Añadir el ID del curso al array `courses`
    await student.save();
    console.log("Curso agregado al estudiante:", student);
  }

  //   // Obtener al estudiante sin populate
  //   async function getStudentWithoutPopulate(studentId) {
  //     const student = await Student.findById(studentId);
  //     console.log("Estudiante sin populate:", student);
  //   }

  //   // Obtener al estudiante con populate
  //   async function getStudentWithPopulate(studentId) {
  //     const student = await Student.findById(studentId).populate(
  //       "courses.course"
  //     );
  //     console.log("Estudiante con populate:", student);
  //   }

  //TODO_ OCULTAR ya tras haber sido levantado una vez
  // Ejecución del flujo principal
  //   await createStudent();
  //   const courseId = await createCourse();
  //   // Obtener el estudiante por email y agregarle el curso
  //   const student = await Student.findOne({ email: 'johndoe@example.com' });
  //   await addCourseToStudent(student._id, courseId);
  //! --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
  //* --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

  // Obtener el estudiante sin y con populate

  //   await getStudentWithoutPopulate(student_search._id);
  //   await getStudentWithPopulate(student_search._id);

  const studentId = await Student.findOne({ email: "johndoe@example.com" });

  //* Obtener al estudiante sin populate
  const studentNotPopulate = await Student.findById(studentId);
  console.log("Estudiante sin populate:", JSON.stringify(studentNotPopulate));

  //* Obtener al estudiante con populate
  //! IMPLEMETAR EN EL SCHEMA DE STUDENT LA RELACIÓN CON COURSE
  const studentConPopulate = await Student.findById(studentId).populate(
    "courses.course"
  );
  //* Con el populate se obtiene el objeto completo del curso
  console.log("Estudiante con populate:", JSON.stringify(studentConPopulate));

  studentNotPopulate.courses.map((c) => {
    console.log(`course sin populate: ${JSON.stringify(c)}`);
  });
  studentConPopulate.courses.map((c) => {
    console.log(`course con populate: ${JSON.stringify(c)}`);
  });
  // Cerrar la conexión cuando terminen las operaciones
  await mongoose.connection.close();
}

main().catch((err) => console.error(err));

/*

*/
