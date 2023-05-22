var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('contact');
});

router.post('/message', (req, res) => {
  //var data = req.body;
  // var firstname = data.firstname;
  // var lastname = data.lastname;
  // var email = data.email;
  // var phone = data.phone;
  // var message = data.message;
  res.render('message', { form: req.body });
})

module.exports = router;
