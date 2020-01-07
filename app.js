require('dotenv').config();

const express  		    = require('express');
const createError 	  = require('http-errors');
const port    		    = process.env.PORT || 3000;
const path            = require('path');
const bodyParser      = require('body-parser');
const mongoose        = require('mongoose');
const passport        = require('passport');
const cloudinary      = require('cloudinary');

/* 
  Require Passport config
*/
require('./passport/passport');

/* 
Connect to Mongo Atlas
*/
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const connection = mongoose.connection;

// Cloudinary API config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

// Public Routes
const indexRouter = require('./routes/public/index');
const aboutRouter = require('./routes/public/about');
const contactRouter = require('./routes/public/contact');
const navContentRouter = require('./routes/public/nav-content');

// Admin routes
const adminRouter = require('./routes/admin/admin');

const app = express();

global.year = new Date().getFullYear();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded( { extended: true } )); // get information from html forms
app.use(bodyParser.json()); // get information from html forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use Passport middleware
app.use(passport.initialize());

// CONNECT TO ANGULAR FRONTEND
app.use(express.static(path.join(__dirname, 'frontend/mrSleven/dist')));

// Use Public Routes
app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/nav', navContentRouter);

// Use Admin Routes
app.use('/admin', adminRouter);

// Catch all other routes and return the index file
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
