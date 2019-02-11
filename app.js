const express  		   = require('express');
const createError 	 = require('http-errors');
const port    		   = process.env.PORT || 3000;
const mongoose 		   = require('mongoose');
const flash          = require('connect-flash');
const path           = require('path');
const logger         = require('morgan');
const morgan         = require('morgan');
const bodyParser     = require('body-parser');
const cloudinary     = require('cloudinary');
const Service        = require('./service/CRUD_service');
global.q             = require( "q" );

require('dotenv').config();


/*
User sessions and Auth
*/
const cookieParser   = require('cookie-parser');
const passport       = require('passport');
const session        = require('express-session');

/*
DB connection & Models
*/
const configDB  = require('./config/database.js');

/*
configuration 
*/
mongoose.connect(configDB.url, { useNewUrlParser: true} ); // connect to our database

// get the MYSQL client
const mysql = require('mysql2/promise');

(async function connectMysqlDatabase() {
  if (process.env.NODE_ENV === 'development') {
  
    global.connection = await mysql.createConnection({
      host        : process.env.LOCAL_MYSQL_HOST
      ,user       : process.env.LOCAL_MYSQL_USER
      ,database   : process.env.LOCAL_MYSQL_DB
      ,password   : process.env.LOCAL_MYSQL_PASS
    });
  
  } else {
  
    global.connection = await mysql.createConnection({
      host        : process.env.LIVE_MYSQL_HOST
      ,user       : process.env.LIVE_MYSQL_USER
      ,database   : process.env.LIVE_MYSQL_DB
      ,password  : process.env.LIVE_MYSQL_PASS
    });
  
  }
})().then(() => {
  /**
   * Get live pages
   */
  Service.getPageControlData('gallery')
    .then(result => {
      global.is_gallery_page_live = result.is_live;

  });
});


/* 
  Cloudinary Image Host Setup
*/
cloudinary.config({
  cloud_name  : process.env.CLOUDINARY_NAME,
  api_key     : process.env.CLOUDINARY_KEY,
  api_secret  : process.env.CLOUDINARY_SECRET
});


/*
	Require the route files
*/
const passportRouter 		  = require('./config/passport')(passport);
const homepageRouter 		  = require('./routes/index');
const loginRouter 			  = require('./routes/login');
const logoutRouter 			  = require('./routes/logout');
const galleryRouter 	    = require('./routes/gallery');


/* Admin panel routes */
const userPanelRouter 		    = require('./routes/admin_panel/user_panel');
const controlUserRouter     	= require('./routes/admin_panel/user_control');
const controlHomepageRouter 	= require('./routes/admin_panel/user_homepage');
const controlGalleryRouter 	  = require('./routes/admin_panel/user_gallery');
const controlBlogRouter 	    = require('./routes/admin_panel/user_blog');

const app = express();

global.year = new Date().getFullYear();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cookieParser('wohwofnqwonqwof9cew09cuq0ccwocjq0wcdq0cqj')); // read cookies (needed for auth)
app.use(bodyParser.urlencoded( { extended: true } )); // get information from html forms
app.use(bodyParser.json()); // get information from html forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public/dist')));

// required for passport
app.use(session({ 
  secret                : 'wohwofnqwonqwof9cew09cuq0ccwocjq0wcdq0cqj'
  ,resave               : true
  ,saveUninitialized    : true
  ,cookie : {
    expires : false
  }
})); // session secret

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


/*
  Public routes
*/
app.use('/', homepageRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/gallery', galleryRouter);


/** 
* Admin routes
*/
app.use('/userpanel', userPanelRouter);
app.use('/usercontrol', controlUserRouter);
app.use('/userhomepage', controlHomepageRouter);
app.use('/usergallery', controlGalleryRouter);
app.use('/userblog', controlBlogRouter);


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
