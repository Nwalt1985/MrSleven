const About = require('../../../models/about');

module.exports.updateAboutHeader = function(req, res) {
    try {
        About.updateOne({ header : req.body.current },{ $set: { header: req.body.header}})
            .exec(function (err, result) {
                if (!err) res.status(200).json({ 'success': 'Header Updated' });
        });
    } catch(err) {
        console.error(err);
    }
}