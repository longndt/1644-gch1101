var express = require('express');
const StudentModel = require('../models/StudentModel');
const SubjectModel = require('../models/SubjectModel');
var router = express.Router();

router.get("/student", async (req, res) => {
   //SQL: SELECT * FROM STUDENT
   const students = await StudentModel.find()
   //console.log(students);
   res.send(students);
})


router.get("/subject", async (req, res) => {
    const subjects = await SubjectModel.find()
    res.send(subjects)

})

module.exports = router;
