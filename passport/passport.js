require('dotenv').config();

var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var User = require('../models/user');

passport.use( new LocalStrategy({
    // Set email as the identifier 
    usernameField: 'email'
}, ( username, password, done ) => {
    
    // Find user in DB
    User.findOne({ email : username }, ( err, user ) => {
        
        if( err ) { 
            return done;
        }

        // If user is not found return
        if ( !user ) {
            return done( null, false, {
                message: 'User not found'
            });
        }

        // Return if password is wrong
        if( !user.validatePassword( password ) ) {
            return done( null, false, {
                message : 'Authentication Failed'
            });
        }

        // If user details are correct return user object
        return done(null, user);
    })
}));