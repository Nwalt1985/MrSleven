// load the things we need
const mongoose = require('mongoose');

// define the schema for our user model
const ContactSchema = mongoose.Schema({
    created: { type: Date, default: Date.now },
    email_to: String,
    email_from: String,
    sender_name: String,
    subject: String,
    from_ip: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Contact', ContactSchema);
