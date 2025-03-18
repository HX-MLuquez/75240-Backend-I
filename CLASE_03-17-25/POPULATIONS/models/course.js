// models/course.js
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  duration: Number,
  prof: {type: mongoose.Schema.Types.ObjectId, ref: 'Prof'}

});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;

/*

{
_id: 1234
title: "Matemática",
description: "es muy linda",
duration: 48
}
{
_id: 1222
title: "Lengua",
description: "es muy linda",
duration: 44
}




*/