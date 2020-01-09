// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var aboutSchema = mongoose.Schema({
    header: String,
    headerUrl: String,
    content: String,
    bottomContent: String,
    images: Array,
    signature: Object,
    date: { type: Date, default: Date.now },
});

// create the model for users and expose it to our app
module.exports = mongoose.model( 'About', aboutSchema );
