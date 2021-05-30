var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');

var loginRouter = require('./routes/login');
var adminRouter = require('./routes/admin');
var designRouter = require('./routes/design');
var insertRouter = require('./routes/insert');
var userRouter = require('./routes/user');
var indexRouter = require('./routes/index');
var homeRouter = require('./routes/home');
var aboutRouter = require('./routes/about');
var contactRouter = require('./routes/contact');
var portfolioRouter = require('./routes/portfolio');
var portfoliopageRouter = require('./routes/portfolio-page');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html',ejs.__express);
app.set('view engine', 'html');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',loginRouter);
app.use('/',adminRouter);
app.use('/',designRouter);
app.use('/',insertRouter);
app.use('/',userRouter);
app.use('/', indexRouter);
app.use('/',homeRouter);
app.use('/', aboutRouter);
app.use('/', contactRouter);
app.use('/', portfolioRouter);
app.use('/', portfoliopageRouter);

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

module.exports = app;
