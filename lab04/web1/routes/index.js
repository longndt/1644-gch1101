var express = require('express');
var router = express.Router();

//url: homepage
router.get ('/', (req, res) => {
  //render ra file index.hbs (trong thư mục views)
  res.render("index");
})

router.get ('/cloud', (req, res) => {
  res.render("cloud");
})

router.get ('/seagames', (req, res) => {
  res.render("seagames");
})

module.exports = router;
