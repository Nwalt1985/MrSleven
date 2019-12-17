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


/* Protected route */
router.get( '/auth/profile', auth, (req, res, next) => {

  // If no user ID exists in the JWT return a 401
  if (!req.payload._id) {
    res.status(401).json({
      message: "UnauthorizedError: private profile"
    });

  } else {
    // Otherwise continue
    User.findOne({email: req.payload.email},{ _id:0, hash:0, salt:0}).exec(function(err, user) {

      // console.log(user);
      res.status(200).json(user);
    });
  }
  
});

router.post("/auth/login", ctrlLogin.login, (req, res, next) => {});

router.post("/auth/register", ctrlCreate.register, (req, res, next) => {});


module.exports = router;
