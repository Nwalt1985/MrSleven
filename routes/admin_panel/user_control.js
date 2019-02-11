const express 		= require('express');
const router 		= express.Router();
const passport 		= require('passport');

const Service = require('../../service/CRUD_service');
const User = require('../../models/user');

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

router.get('/', isLoggedIn, function(req, res, next) {
	
	var arr_users = [];	
	
	User.find({}, function ( err, res ) {

		for( let index in res ) {
	 		arr_users.push( res[ index ].local.username );

		}
	})
	.then( function () {
	 	res.render('admin_panel/usercontrol', { 
	 		title				: 'User Control'
	 		,date 				: global.year
	 		,html_class 		: 'user-control'
	 		,create_error 		: Service.error_message
	 		,create_success		: Service.success_message
	 		,delete_error 		: Service.delete_message
	 		,delete_success 	: Service.delete_success_message
	 		,update_error 		: Service.update_pass_error
	 		,update_success  	: Service.update_success
	 		,user_list 			: arr_users
			,delete_message 	: req.flash( 'deleteUserMessage' )
			,user 				: user_name
		});

	});
});



router.post( '/', function( req, res, next ) {

	/*
		If the form submitted has the input name of userNameCreate we know this is the create a new user form.
		We check the form validation.
	*/

	if ( req.body.userNameCreate ) {

		let newUserName = req.body.userNameCreate;
		let newUserPass = req.body.userPassCreate;
		let userPassCheck = req.body.userPassCheckCreate;

		Service.createNewUser( newUserName, newUserPass, userPassCheck );
		
		res.redirect(req.get('referer'));

		next();
	}

	if( req.body.userNameDelete ) {

		let usernameDelete = req.body.userNameDelete;

		Service.deleteUser( usernameDelete );

		res.redirect(req.get('referer'));

		next();
	}

	if( req.body.userChangePass ) {
		let username = req.body.userChangePass;
		let password = req.body.newUserPass;
		let checkPass = req.body.confirmNewUserPass;

		Service.changeUserPassword( username, password, checkPass );

		res.redirect(req.get('referer'));

		next();
	}

});


module.exports = router;