const express = require("express");
const passport = require('passport');
const User = require('../models/user');

module.exports.register = function(req, res) {

  /* CREATE USER */
  const user = new User();

  user.email = req.body.email;
  user.username = req.body.username;
  
  password = req.body.password;

  user.setPassword(password);

  user.save(( err ) => {
    let token;
    token = user.generateJwt();
    res.status(200);
    res.json({
      'success':'user created',
      'jwt_token': token
    });
  })

};
