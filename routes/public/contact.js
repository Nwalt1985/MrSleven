require('dotenv').config();

const express = require('express');
const router = express.Router();
const Email = require('../../models/adminEmail');
const EmailLog = require('../../models/contact');

/* GET home page. */
router.post("/send", function (req, res) {

    const user_ip = req.headers['x-forwarded-for'];
    
    // Get delivery email from DB
    Email.find({}, { _id: 0 }).exec(function (err, result) {
        
        const send_to = result[ 0 ].delivery_email;
        const sender_name = req.body.name;
        const sender_email = req.body.sender;
        const message_subject = req.body.subject;
        const message_content = req.body.message;
    
        if( sender_name !== '' && sender_email !== '' && message_content !== '' ) {
    
            const helper = require('sendgrid').mail;
            const from_email = new helper.Email(sender_email);
            const to_email = new helper.Email(send_to);
            const subject = message_subject;
            const content = new helper.Content('text/plain', message_content);
            const mail = new helper.Mail(from_email, subject, to_email, content);
    
            var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
    
            var request = sg.emptyRequest({
                method: 'POST',
                path: '/v3/mail/send',
                body: mail.toJSON(),
            });
            
            sg.API(request, function (error, response) {

                /* log email details in DB */
                const logEmail = new EmailLog();

                logEmail.email_to = send_to;
                logEmail.email_from = sender_email;
                logEmail.sender_name = sender_name;
                logEmail.subject = message_subject;
                logEmail.from_ip = user_ip;

                logEmail.save();

            });
    
            res.json({'success':'E-mail sent'});
        }
    })
    
});

module.exports = router;
