// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    is_admin: Boolean,
    date: { type: Date, default: Date.now }
});

// create the model for users and expose it to our app
module.exports = mongoose.model( 'User', userSchema );
