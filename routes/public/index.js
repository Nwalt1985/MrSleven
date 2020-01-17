require('dotenv').config();

const express 	= require('express');
const router 	= express.Router();
const cloudinary = require('cloudinary');

const Visits = require('../../models/visits');

/* Log user visit. */
router.get('/visit', function(req, res) {

    try {
        // Only if site is in production do we want to log user visits
        if (process.env.NODE_ENV === 'production') {
            const visit = new Visits();
            
            // For Heroku we need to use x-forwarded-for to get user IP
            if( req.headers['x-forwarded-for'] ) {
                visit.user_ip = req.headers['x-forwarded-for'];
            } else {
                visit.user_ip = req.connection.remoteAddress;
            }
            
            // Log the user agent
            visit.user_agent = req.headers['user-agent'];
            
            visit.save();
            
            res.status(200).json({'msg':'Visit logged'});
        }
        
    } catch ( err ) {
        console.error( err );
    }

});

router.get('/logo', function( req, res ) {
    try {
        cloudinary.v2.api.resources_by_tag('logo', { context: true }, (err, result) => {
            res.status(200).json(result.resources);
        });
    } catch (err) {
        console.error( err );
    }
})

module.exports = router;
