require('dotenv').config();

// load the things we need
const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

// define the schema for our user model
const userSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    hash: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    created: { type: Date, default: Date.now }
});

/* 
    Set the user password :
    Encrypt the given password with a random salt
*/
userSchema.methods.setPassword = function ( password ) {
    // Create the salt
    this.salt = crypto.randomBytes(16).toString('hex');
    // Create hash of password + salt
    this.hash = crypto.pbkdf2Sync( password, this.salt, 1000, 64, 'sha512' ).toString( 'hex' );
}

/* 
    Check user password : 
    encrypt the salt and the password to see if the output matches the stored hash 
*/
userSchema.methods.validatePassword = function ( password ) {
    const hash = crypto.pbkdf2Sync( password, this.salt, 1000, 64, 'sha512' ).toString( 'hex' );
    return this.hash === hash;
}

/* 
    Generate a JSON Web token :
    Create an expiry date to be included in token
    Secret key stored in .env 
*/
userSchema.methods.generateJwt = function () {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign(
      {
        _id: this._id,
        email: this.email,
        username: this.username,
        exp: parseInt(expiry.getTime() / 1000)
      },
      process.env.JWT_SECRET
    );
}


// create the model for users and expose it to our app
module.exports = mongoose.model( 'User', userSchema );
