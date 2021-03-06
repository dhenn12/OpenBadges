// jshint esversion: 8
// jshint node: true
"use strict";

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const flash = require('express-flash');


const app = express();

//reads in configuration from a .env file
require('dotenv').config();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// set flash messages
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
app.use(flash());


app.use(express.static(path.join(__dirname, 'public')));
// make packages available for client using statics
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/popper', express.static(__dirname + '/node_modules/popper.js/dist'));
app.use("/leaflet", express.static(__dirname + "/node_modules/leaflet/dist"));


// setup routes
const usersRouter = require('./routes/users');
const indexRouter = require('./routes/index');
const contactRouter = require('./routes/contact');
const courseRouter = require('./routes/course');
const badgeRouter = require('./routes/badge');


app.use('/badge', badgeRouter);
app.use('/kontakt', contactRouter);
app.use('/kurse', courseRouter);
app.use('/nutzer', usersRouter);
app.use('/', indexRouter);


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
