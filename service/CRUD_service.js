const User = require('../models/user');

module.exports = {

	error_message 			: '',
	success_message 		: '',
	delete_message 			: '',
	delete_success_message 	: '',
	update_pass_error 		: '',
	update_success 			: '',
	arr_users				: [],

	createNewUser : function ( username, password, passwordCheck ) {
	    var str_pass_1 = password;
	    var str_pass_2 = passwordCheck;


	    if( str_pass_1 !== str_pass_2 ) {
	        module.exports.error_message = 'Passwords do not match.';
	        return module.exports.error_message;
	    }

	    User.findOne({ 'local.username' : username }, function( err, user ) {
	        // if there are any errors, return the error
	        if ( err ) throw err;


	        // check to see if theres already a user with that username
	        if ( user ) {
	            module.exports.error_message = 'User Already Exists.';
	            return module.exports.error_message;
	        } else {

	            // if there is no user with that username
	            // create the user
	            var newUser = new User();

	            // set the user's local credentials
	            newUser.local.username = username;
	            newUser.local.password = newUser.generateHash( password );

	            // save the user
	            newUser.save( function( err ) {
	                if ( err ) {
	                	module.exports.error_message = 'Error Creating New User.';
	                	return module.exports.error_message;
	                } else {
	                	module.exports.success_message = 'Successfully Created New User.';
	                	return module.exports.success_message;
	            	}
	            });
	        }
	    });  
	},


	deleteUser : function ( username ) {

		let delete_success_message = '';

		User.findOne({ 'local.username' : username }, function( err, user ) {
		    // if there are any errors, return the error
		    if ( err ) throw err;

		    // check to see if theres already a user with that username
		    if ( user ) {

		    	User.deleteOne({ 'local.username' : username }, function ( err, res ){
		    		if ( res ) {
		    			module.exports.delete_success_message = 'Successfully deleted user';
		    			return module.exports.delete_success_message;
		    		}
		    	});
		    } else {
		        module.exports.error_message = 'User Already Exists.';
		        return module.exports.error_message;
		    }
		}); 
	}, 


	changeUserPassword : function ( username, password, passwordCheck ) {
	    
	    var str_pass_1 = password;
	    var str_pass_2 = passwordCheck;


	    if( str_pass_1 !== str_pass_2 ) {
	        module.exports.update_pass_error = 'Passwords do not match.';
	        return module.exports.update_pass_error;
	    }

	    User.findOne({ 'local.username' : username }, function( err, user ) {
	        // if there are any errors, return the error
	        if ( err ) throw err;


	        // check to see if theres already a user with that username
	        if ( !user ) {
	            module.exports.update_pass_error = 'User Does Not Exist.';
	            return module.exports.update_pass_error;
	        } else {
	        	//Generate new password hash
	            var updateUserPass = new User();

	            updateUserPass.local.password = updateUserPass.generateHash( password );

	          	User.updateOne({ 'local.username' : username }, { $set : { 'local.password' : updateUserPass.local.password }}, function ( err, res ) {
	          		if( err ) {
	          			module.exports.update_pass_error = err;
	          			return module.exports.update_pass_error;
	          		} else {
	          			module.exports.update_success = "Users password Successfully changed.";
	          			return module.exports.update_success;
	          		}
	          	});

	        }
	    });  
	},

	getPageControlData  : async function ( page_name ) {

		try {
			const str_qry = 'SELECT * FROM `heroku_87d7309d257ab1e`.`page_control` WHERE `page_name` LIKE ?;';

			let arr_params = [ page_name ];

			const [ result, fields ] = await global.connection.execute(str_qry, arr_params);

			if (!result) throw error;

			return result[ 0 ];

		} catch (error) {
			console.error(error);
		}
	},

	updatePageLive : async function ( page_name, is_live ) {
		try {
			const str_qry = 'UPDATE `heroku_87d7309d257ab1e`.`page_control` SET `is_live` = ? WHERE `page_name` LIKE ?;';

			let arr_params = [ is_live, page_name ]

			const [result, fields] = await global.connection.execute(str_qry, arr_params);

			if (!result) throw error;

			return result[0];

		} catch (error) {
			console.error(error);
		}
	}

};