var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const edge = require('edge.js')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
edge.registerViews(path.join(__dirname, './views'))

var app = express();


app.set('view engine', edge)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));






app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
