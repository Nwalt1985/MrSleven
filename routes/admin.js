require('dotenv').config();

const express = require('express');
const router = express.Router();
const ctrlLogin = require('../passport/loginControl');
const ctrlCreate = require('../passport/createControl');
const User = require('../models/user');


const jwt = require('express-jwt');

const auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload'
});

/* Authorize user login */
router.post("/auth/login", ctrlLogin.login, (req, res, next) => { });

/* Register new user */
router.post("/auth/register", ctrlCreate.register, (req, res, next) => { });

/* Protected routes */
router.get( '/auth/profile', auth, (req, res, next) => {

  // If no user ID exists in the JWT return a 401
  if (!req.payload._id) {
    res.status(401).json({
      message: "UnauthorizedError: private profile"
    });

  } else {
    // Otherwise continue
    User.findOne({email: req.payload.email},{ _id:0, hash:0, salt:0}).exec(function(err, user) {
      res.status(200).json(user);
    });
  }
  
});

/* Gat all admin users */
router.get('/auth/get-users', auth, ( req, res, next ) => {
  User.find({}, { hash: 0, salt: 0 }).exec(function (err, users) {
    res.status(200).json(users);
  });
})

/* Delete admin user */
router.post('/auth/delete', auth, ( req, res, next ) => {
  try {
    if( req.body.id ) {
      User.deleteOne({ "_id" : req.body.id }).exec(function (err, result) {
        if( !result ) {
          res.status(404).json({ 'error': 'No user found' })
        } else {
          res.status(200).json({'Success':'user deleted'});
        }
      });
    } else {
      res.status(400).json({'error':'Bad request'})
    }
  } catch (err) {
    console.error( err );
  }
})


module.exports = router;
