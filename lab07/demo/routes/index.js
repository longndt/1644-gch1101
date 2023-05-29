var express = require('express');
const BookModel = require('../models/BookModel');
var router = express.Router();

router.get('/', async (req, res) => {
  //select * from book
  var books = await BookModel.find({});
  res.send(books);
}) 


module.exports = router;
