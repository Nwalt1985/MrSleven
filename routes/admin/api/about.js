const About = require('../../../models/about');

module.exports.updateAboutHeader = function(req, res) {
    try {
        About.updateMany({ _id : req.body.id },{ $set: {   
                                                     header: req.body.header, 
                                                     headerUrl: req.body.url
                                                    }
        })
        .exec(function (err, result) {
            if (!err) res.status(200).json({ 'success': 'Header Updated' });
        });
    } catch(err) {
        console.error(err);
    } 
}