var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
}) 

router.get('/football', (req, res) => {
  let manu = "Manchester United";
  let chelsea = "Chelsea";
  let arsenal = "Arsenal";
  let liverpool = "Liverpool";
  res.render('bongda', { manu : manu, chelsea: chelsea, arsenal : arsenal, liverpool : liverpool});
})

router.get('/interest', (req, res) => {
  var interest = ["movies", "music", "tourism", "games", "food"];
  res.render ('interest', { interest : interest });
})

module.exports = router;
