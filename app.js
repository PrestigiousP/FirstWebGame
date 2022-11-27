var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

loadJsFiles()

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

module.exports = app;

function loadJsFiles(){
  app.get('/public/javascripts/GameObject.js',function(req,res){
    res.sendFile(path.join(__dirname + '/public/javascripts/GameObject.js')); 
  });
  
  app.get('/public/javascripts/Player.js',function(req,res){
    res.sendFile(path.join(__dirname + '/public/javascripts/Player.js')); 
  });
  
  app.get('/public/javascripts/InputHandler.js',function(req,res){
    res.sendFile(path.join(__dirname + '/public/javascripts/InputHandler.js')); 
  });
  
  app.get('/public/javascripts/Setup.js',function(req,res){
    res.sendFile(path.join(__dirname + '/public/javascripts/Setup.js')); 
  });
  
  app.get('/public/javascripts/BasicEnemy.js',function(req,res){
    res.sendFile(path.join(__dirname + '/public/javascripts/BasicEnemy.js')); 
  });
}