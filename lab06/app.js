var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//1. khai báo thư viện mongoose để connect đến database server
var mongoose = require ('mongoose');

//2. khai báo đường dẫn URI đến database server (local hoặc cloud)
//Note: cần khai báo rõ tên của database cần sử dụng trong URI
var local = "mongodb://localhost:27017/gch1101";
var cloud = "mongodb+srv://longndt:LZOJXV8cjLHFfYsQ@cluster0.gobiulx.mongodb.net/demo";

//3. connect đến database server
mongoose.connect(local)
.then(() => { console.log ("Connect to DB succeed !")})
//.catch((err) => { console.error(err)});
.catch ((err) => { console.error("Connect to DB failed !") });


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(5000);

module.exports = app;
