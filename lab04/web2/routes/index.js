var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//1. render ra form input
router.get('/input', (req, res) => {
  res.render('input');
})

//2. lấy dữ liệu từ form input
router.post('/output', (req, res) => {
  //A. in ra console log
  console.log(req.body);
  //B. in ra web với res.send
  res.send(req.body);
})

module.exports = router;
