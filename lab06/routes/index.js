var express = require('express');
const StudentModel = require('../models/StudentModel');
const SubjectModel = require('../models/SubjectModel');
var router = express.Router();

router.get("/student", async (req, res) => {
   //SQL: SELECT * FROM STUDENT
   const students = await StudentModel.find()
   //console.log(students);
   //res.send(students);
   res.render("student", { students: students})
})

router.get("/student/drop", async (req, res) => {
    await StudentModel.deleteMany()
    .then(() => {console.log ("Delete all student succeed !")})
    .catch((err) => {{ console.error ("Delete failed !")}});
    res.redirect('/student')
})

router.get("/student/delete/:id", async(req, res) => {
    //SQL: DELETE FROM STUDENT WHERE ID = 'id'
    await StudentModel.findByIdAndDelete(req.params.id)
    .then(() => { console.log("Delete student succeed !") })
    .catch((err) => { { console.error("Delete failed !") } });
    res.redirect('/student')
})


router.get("/subject", async (req, res) => {
    const subjects = await SubjectModel.find()
    res.send(subjects)
})

module.exports = router;
