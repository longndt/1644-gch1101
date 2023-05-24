const mongoose = require("mongoose");

var SubjectSchema = new mongoose.Schema({
   name: String,
   code : Number
})

var SubjectModel = mongoose.model('subject', SubjectSchema, 'subject');
module.exports = SubjectModel;