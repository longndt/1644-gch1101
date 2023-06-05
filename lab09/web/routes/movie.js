var express = require ('express');
const MovieModel = require('../models/MovieModel');
var router = express.Router();

router.get('/', async (req, res) => {
   var movie_list = await MovieModel.find({})
   res.render('movie/index', { movies : movie_list })
})

router.get('/delete/:id', async(req, res) => {
   await MovieModel.findByIdAndDelete(req.params.id)
   .then(() => { console.log ('Delete movie succeed !')});
   res.redirect('/movie');
})




module.exports = router;