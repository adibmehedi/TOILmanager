const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose= require('mongoose');
const dotenv=require('dotenv').config();
//const indexRouter = require('./routes/index');
//const usersRouter = require('./routes/users');
const toilRouter= require('./routes/toils');
//const organizationRouter = require('./routes/organizations');
const config=require('./config');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
app.use('/toil', toilRouter);
//app.use('/org', toilRouter);

function __initializeMongo(){
  console.log("Mongo initializing starts");
  mongoose.connect(config.db, { reconnectTries: 0});
  mongoose.connection.on('error',function(err){
    console.log('Mongo Connection Error',{err:err});
  });
}

__initializeMongo();

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
