require('dotenv').config();

const express  		    = require('express');
const createError 	  = require('http-errors');
const port    		    = process.env.PORT || 3000;
const path            = require('path');
const bodyParser      = require('body-parser');
const mongoose        = require('mongoose');


/* 
Connect to Mongo Atlas
*/
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

/* 
Require our custom routes
*/
const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const adminRouter = require('./routes/admin');
const contactRouter = require('./routes/contact');

const app = express();

global.year = new Date().getFullYear();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded( { extended: true } )); // get information from html forms
app.use(bodyParser.json()); // get information from html forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CONNECT TO ANGULAR FRONTEND
app.use(express.static(path.join(__dirname, 'frontend/mrSleven/dist')));

/*
Public routes
*/
app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/admin', adminRouter);
app.use('/contact', contactRouter);

// // Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/mrSleven/dist/index.html'));
});


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
