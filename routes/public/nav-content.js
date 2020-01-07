require('dotenv').config();

const cloudinary = require('cloudinary');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get("/content", function (req, res) {
    try {

        cloudinary.v2.api.resources_by_tag('nav-link', { context : true, direction : 'asc' },( err, result ) => {
            res.json(result.resources)
        });

    } catch ( err ) {
        console.error(err);
    }
});

module.exports = router;
