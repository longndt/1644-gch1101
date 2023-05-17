var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { fgw : 'Greenwich'});
});

//render new page
//url : /greenwich
//page : fgw.hbs (views)
router.get('/greenwich', (req, res) => {
  res.render('fgw');
})

router.get('/hanoi', (req, res) => {
  res.render('hanoi', { hn : 'Hanoi', vn: 'Vietnam'});
})

router.get('/vietnam', (req, res) => {
  var country = 'Vietnam';
  var capital = 'Hanoi';
  var population = '90 billions';
  var location = 'South East Asia';
  var sports = 'Football';
  var image = 'https://img.freepik.com/premium-vector/vietnam-map-landmarks-with-people-traditional-clothing_281368-239.jpg?w=2000';
  res.render('vietnam', { ten_nuoc : country, thu_do : capital,
    dan_so : population, vi_tri : location, hinh_anh : image,
    mon_the_thao_yeu_thich : sports
    });
})

module.exports = router;
