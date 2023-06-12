var express = require('express');
const StudentModel = require('../models/StudentModel');
var router = express.Router();

router.get('/', async (req, res) => {
  //lấy dữ liệu từ collection Student
  var students = await StudentModel.find({});
  //trả về format JSON
  res.send(students);
})

module.exports = router;


