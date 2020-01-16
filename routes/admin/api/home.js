const Visits = require('../../../models/visits');

module.exports.getUserVisits = function (req, res) {
    try {
        Visits.find({}).exec(function (err, result) {
            if (!err) res.status(200).json( result );
        });
    } catch (err) {
        if( err ) res.status(400).json({'error' : err.message });
    }
}
