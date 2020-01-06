const User = require('../../../models/user');
/* Profile */
module.exports.profile = function( req, res ) {
    try {
        // If no user ID exists in the JWT return a 401
        if (!req.payload._id) {
            res.status(401).json({
                message: 'UnauthorizedError: private profile'
            });

        } else {
            // Otherwise continue
            User.findOne({ email: req.payload.email }, { _id: 0, hash: 0, salt: 0 })
                .exec(function (err, user) {
                    res.status(200).json(user);
                });
        }

    } catch (err) {
        console.error(err);
    }
}

/* Get admin Users */
module.exports.getUsers = function(req, res) {
    try {
        User.find({}, { hash: 0, salt: 0 }).exec(function (err, users) {
            res.status(200).json(users);
        });
    } catch (err) {
        console.error(err);
    }
}

/* Update admin user password */
module.exports.updatePassword = function( req, res ) {
    try {
        const user = new User();
        user.setPassword(req.body.newPassword);

        User.updateOne({ _id: req.body.id }, { $set: { hash: user.hash, salt: user.salt } })
            .exec(function (err, result) {
                if (!err) res.status(200).json({ 'success': 'password updated' });
            });
    } catch (err) {
        console.log(err)
    }
}

/* Delete admin user */
module.exports.deleteUser = function ( req, res ) {
    try {
        if (req.body.id) {
            User.deleteOne({ "_id": req.body.id }).exec(function (err, result) {
                if (!result) {
                    res.status(404).json({ 'error': 'No user found' })
                } else {
                    res.status(200).json({ 'Success': 'user deleted' });
                }
            });
        } else {
            res.status(400).json({ 'error': 'Bad request' })
        }
    } catch (err) {
        console.error(err);
    }
}