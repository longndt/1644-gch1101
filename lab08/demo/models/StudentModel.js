const mongoose = require('mongoose');
const StudentSchema = mongoose.Schema(
   {
      full_name: String,
      birth_year: Number,
      email: String,
      grade: Number,
      gender: String,
      image: String
   }
);
const StudentModel = mongoose.model("STUDENT", StudentSchema, "student");
module.exports = StudentModel;