// models/student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  telephone: String,
  age: Number,
  gender: String,
  address: String,
  //! Relación con Course (1 a muchos) - Lo mejor es que cada course sea un objeto con su propio id
  courses: [{
    course: {type: mongoose.Schema.Types.ObjectId, ref: 'Course'}
  }]

});

const Student = mongoose.model('Student', studentSchema);

//TODO_ CON POPULATE MIDDELWARE
// Middleware "pre" para realizar el populate automáticamente antes de una operación find
// studentSchema.pre('find', function() {
//     this.populate('courses.course'); // Realiza el populate automáticamente en el campo `courses.course`
// });
// studentSchema.pre('findOne', function() { //* findById es solo un atajo de findOne
//     this.populate('courses.course'); // Realiza el populate automáticamente en el campo `courses.course`
// });
// studentSchema.pre('findById', function() { 
//     this.populate('courses.course'); 
// });


//* --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- 
//* --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- 

module.exports = Student;

//TODO___ Referencias para relación de 1 a 1
/*
const studentSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  telephone: String,
  age: Number
});

const courseSchema = new mongoose.Schema({
  name: String,
  description: String,
  duration: Number,
  // Relación con Student (1 a 1)
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' }
});

*/

//TODO___ Referencias para relación de muchos a muchos
/*
const studentSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  telephone: String,
  age: Number
});

const courseSchema = new mongoose.Schema({
  name: String,
  description: String,
  duration: Number,
  // Relación con Student (1 a muchos) nos brinda una solución a la relación muchos a muchos
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
});


// Tabla intermedia

const studentCourseSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' }
});

*/

// El uso de una tabla intermedia nos permite tener una relación muchos, es más eficiente, más escalable y más fácil de mantener.
// Pero también es más complejo de implementar y de entender, como el crear las consultas para obtener los datos de la relación.


/*
const user = {}
user.save()

user.courses [{_id:1, course: 1234}, {_id:1, course: 1222}]

{
  first_name: "Lucas",
  last_name: "Lopez",
  email: "...",
  telephone: 1234,
  age: 123,
  courses: [{_id:1, course: 1234}, ]
}




*/

