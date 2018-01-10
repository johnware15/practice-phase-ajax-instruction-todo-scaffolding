const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const routes = require('./routes');

const ROOT_DIR = path.resolve(__dirname, '../');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(`${ROOT_DIR}/public`));

app.use(routes);

app.use((req, res) => {
  res.status(404).render('common/not_found');
});

app.use((err, req, res) => {
  res.status(404).render('common/error', { error: err });
});

module.exports = app;
