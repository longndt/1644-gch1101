var express = require('express');
var router = express.Router();


//1. render ra form input
router.get('/', (req, res) => {
  res.render('input');
})

//2. lấy dữ liệu từ form input
router.post('/output', (req, res) => {
  var student = req.body;

  // var name = req.body.ten;
  // var age = req.body.tuoi;
  // var email = req.body.email;
  // var dob = req.body.ngaysinh;

  //A. in ra console log
  //console.log(req.body);
  //B. in ra web với res.send
  //res.send(req.body);
  //C. render ra trang output kèm dữ liệu từ form
  res.render('output', { student : student });
  //res.render('output', { name : name, age : age, email: email, dob : dob});
})

module.exports = router;
