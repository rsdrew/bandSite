var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');
var musicRouter = require('./routes/music');
var showsRouter = require('./routes/shows');
var contactRouter = require('./routes/contact');
var ryanHaleyRouter = require('./routes/ryanHaley');
var joeySerraRouter = require('./routes/joeySerra');
var ryanDrewRouter = require('./routes/ryanDrew');
var cormacEganRouter = require('./routes/cormacEgan');
app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/music', musicRouter);
app.use('/shows', showsRouter);
app.use('/contact', contactRouter);
app.use('/ryanHaley', ryanHaleyRouter);
app.use('/joeySerra', joeySerraRouter);
app.use('/ryanDrew', ryanDrewRouter);
app.use('/cormacEgan', cormacEganRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
