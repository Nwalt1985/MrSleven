const Email = require('../../../models/adminEmail');

module.exports.getEmailAddress = function (req, res) {
    try {
        Email.find({}).exec(function (err, result) {
            if (!err) res.status(200).json(result);
        });
    } catch (err) {
        if (err) res.status(400).json({ 'error': err.message });
    }
}

module.exports.updateEmailAddress = function (req, res) {
    try {
        Email.updateOne({ _id: req.body.id }, { $set : { delivery_email : req.body.delivery_email }}).exec(function (err, result) {
            if (!err) res.status(200).json(result);
        });
    } catch (err) {
        if (err) res.status(400).json({ 'error': err.message });
    }
}
