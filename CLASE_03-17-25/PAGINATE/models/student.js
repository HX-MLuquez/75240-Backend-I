// models/student.js
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const studentSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  grade: Number,
  group: String,
});

//! Plugin para paginar - A implementar
// -->
studentSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Student', studentSchema);

/*
studentSchema.paginate()
*/
