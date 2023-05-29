var express = require('express');
const BookModel = require('../models/BookModel');
var router = express.Router();

router.get('/', async (req, res) => {
  //SQL : select * from book
  var books = await BookModel.find({});
  //res.send(books);
  //render ra view
  res.render('book_list', {books : books})
}) 

router.get('/drop', async (req, res) => {
  //SQL : delete * from book
  await BookModel.deleteMany()
    .then(() => { console.log("Delete all books succeed !")})
    .catch((err) => { console.error("Delete books failed !")});
  //redirect theo url
  res.redirect('/');
})

router.get('/delete/:id', async (req, res) => {
  //lấy id từ request url
  var id = req.params.id;
  //tìm book trên DB có id tương ứng
  var book = BookModel.findById(id);
  //xóa book tìm thấy
    //SQL : delete * from book where id = 'id'
  await BookModel.deleteOne(book)
    .then(() => { console.log("Delete book succeed !") })
    .catch((err) => { console.error("Delete book failed !") });
  //await BookModel.findByIdAndDelete(id);
  res.redirect('/');
})

router.get('/detail/:id', async (req, res) => {
   var book = await BookModel.findById(req.params.id);
  res.render('book_detail', { book: book });
})

router.get('/add/', async (req, res) => {

})

router.get('/edit/:id', async (req, res) => {
  
})


module.exports = router;
