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

module.exports.updateAboutImage = function(req, res) {
    try {
        About.updateOne({ _id : req.body.id },{ $set: { images: req.body.images }})
            .exec(function (err, result) {
                if (!err) res.status(200).json({ 'success': 'Image Updated' });
            });
    } catch(err) {
        console.error(err);
    } 
}

module.exports.updateAboutSignature = function(req, res) {
    try {
        About.updateOne({ _id : req.body.id },{ $set: { signature: req.body.signature }})
            .exec(function (err, result) {
                if (!err) res.status(200).json({ 'success': 'Signature Updated' });
            });
    } catch(err) {
        console.error(err);
    } 
}

module.exports.updateAboutContent = function(req, res) {
    try {
        About.updateOne({ _id : req.body.id },{ $set: { content: req.body.content }})
            .exec(function (err, result) {
                if (!err) res.status(200).json({ 'success': 'About text updated' });
            });
    } catch(err) {
        console.error(err);
    } 
}