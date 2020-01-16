require('dotenv').config();

// load the things we need
const mongoose = require('mongoose');

// define the schema for our user model
const visitSchema = mongoose.Schema({
    created: { type: Date, default: Date.now },
    user_ip: String,
    user_agent: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Visits', visitSchema);
