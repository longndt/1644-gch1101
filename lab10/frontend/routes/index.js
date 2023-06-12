var express = require('express');
const StudentModel = require('../models/StudentModel');
var router = express.Router();

router.get('/', async (req, res) => {
  //lấy dữ liệu từ collection Student
  var students = await StudentModel.find({});
  //trả về format JSON
  res.send(students);
})

router.get('/:id', async (req, res) => {
  var id = req.params.id;
  var student = await StudentModel.findById(id);
  res.send(student);
})

module.exports = router;


