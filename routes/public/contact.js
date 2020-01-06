require('dotenv').config();

const express = require('express');
const router = express.Router();


/* GET home page. */
router.post("/send", function (req, res) {

    const send_to = process.env.RECEIVE_EMAIL; 
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
            console.log(response.statusCode);
            console.log(response.body);
            console.log(response.headers);
        });

        res.json({'success':'E-mail sent'});
    }

});

module.exports = router;
