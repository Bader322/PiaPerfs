const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const router = express.Router();
const indexRouter = require('./controllers/index');
const usersRouter = require('./controllers/users');
const postsRouter = require('./controllers/posts');
const app = express();
 
// view engine setup
app.set('style',path.join(__dirname, 'public/stylesheets'));
app.set('views', path.join(__dirname, 'views'));
const { config, engine } = require('express-edge');
app.use(engine);

app.use(express.static('public'))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts',postsRouter);
app.use('/show/:id',postsRouter);
app.use('/edit/:id',postsRouter);



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
