var express = require('express');
var router = express.Router();

var user_name = '';

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

	if (process.env.NODE_ENV !== 'development') {
		// if user is authenticated in the session, carry on 
		if (req.isAuthenticated()) {

			user_name = req.user.local.username

			return next();
		}
		// if they aren't redirect them to the home page
		res.redirect('/login');

	} else {

		user_name = 'user';

		return next();
	}

}

/* GET users listing. */
router.get('/', isLoggedIn, function(req, res, next) {

	res.render('admin_panel/user_panel', { 
		
		title 		    : 'User Panel Home'
		,date 		    : global.year
		,html_class 	: 'userpanel_home'
		,user 			: user_name
		
	});
	

});	



module.exports = router;
