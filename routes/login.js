const express 	= require('express');
const router 	= express.Router();
const passport 	= require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('login', { 
  		title 			: 'User Login',
  		user 			: '',
  		date 			: global.year,
  		html_class  	: 'login',
		message 		: req.flash( 'loginMessage' ),
		is_logged_in 	: false

 	});
});

// process the login form
router.post('/', passport.authenticate('local-login', {
    successRedirect : '/userpanel', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

module.exports = router;