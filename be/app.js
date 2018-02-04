const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const bluebird = require('bluebird');
const mongoose = require('mongoose');
const cors = require('cors');

const index = require('./routes/index');
const api = require('./routes/api.route');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({origin: true, credentials: true}));

app.use('/', index);
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  if (req.method === "OPTIONS") {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
  } else {
    res.header('Access-Control-Allow-Origin', '*');
  }

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


const mongoURL = 'mongodb://127.0.0.1:27017/split-bill';

mongoose.Promise = bluebird;
mongoose.connect(mongoURL)
  .then(() => {
    console.log(`Succesfully Connected to the Mongodb Database  at URL: ${mongoURL}`);
  })
  .catch(() => {
    console.log(`Error Connecting to the Mongodb Database at URL: ${mongoURL}`)
  });

module.exports = app;
