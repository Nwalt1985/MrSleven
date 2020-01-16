const express 	= require('express');
const router 	= express.Router();
const Visits = require('../../models/visits');


/* Log user visit. */
router.get("/visit", function(req, res) {

    const visit = new Visits();

    if( req.headers['x-forwarded-for'] ) {
      visit.user_ip = req.headers['x-forwarded-for'];
    } else {
      visit.user_ip = req.connection.remoteAddress;
    }

    visit.user_agent = req.headers['user-agent'];

    visit.save();

});

module.exports = router;
