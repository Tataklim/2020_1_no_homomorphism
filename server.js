const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const nunjucks = require('nunjucks');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'njk');

app.use(favicon(path.join(__dirname, 'static', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'static')));
nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/login', (req, res) => {
    res.render('login');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

app.listen(3000);
