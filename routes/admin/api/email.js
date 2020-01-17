const Email = require('../../../models/adminEmail');

module.exports.getEmailAddress = function (req, res) {
    try {
        Email.find({}, {_id: 0}).exec(function (err, result) {
            if (!err) res.status(200).json(result);
        });
    } catch (err) {
        if (err) res.status(400).json({ 'error': err.message });
    }
}
