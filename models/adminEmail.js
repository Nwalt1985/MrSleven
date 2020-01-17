// load the things we need
const mongoose = require('mongoose');

// define the schema for our user model
const EmailSchema = mongoose.Schema({
    delivery_email: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Email', EmailSchema);
