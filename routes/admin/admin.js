require('dotenv').config();

const express = require('express');
const router = express.Router();

/* Require API end points */
const ctrlLogin = require('../../passport/loginControl');
const ctrlCreate = require('../../passport/createControl');
const adminUserApi = require('./api/users');
const adminAboutApi = require('./api/about');
const adminHomeApi = require('./api/home');
const adminEmailApi = require('./api/email');

/* JWT token to prevent CSRF attacks */
const jwt = require('express-jwt');
const auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload'
});

/* PASSPORT */
// Authorize user login
router.post('/auth/login', ctrlLogin.login, (req, res, next) => { });

// Protected routes
router.get('/auth/profile', auth, (req, res, next) => { adminUserApi.profile(req, res) });

/* ADMIN HOME CONTROL */
router.get('/auth/get-user-visit', auth, ( req, res, next ) => { adminHomeApi.getUserVisits( req, res )});

/* ADMIN USER CONTROL */
// Register new user
router.post('/auth/register', auth, (req, res, next) => { ctrlCreate.register( req, res )});

// Gat all admin users
router.get('/auth/get-users', auth, (req, res, next) => { adminUserApi.getUsers(req, res) })

// Update User Password
router.post('/auth/update-pass', auth, (req, res, next ) => { adminUserApi.updatePassword(req, res) })

// Delete admin user
router.post('/auth/delete', auth, ( req, res, next ) => { adminUserApi.deleteUser( req, res )})


/* ABOUT PAGE CONTROL */
// About Header
router.post('/auth/update-about-header', auth, (req, res, next) => { adminAboutApi.updateAboutHeader(req, res) });

// About Images
router.post('/auth/update-about-image', auth, (req, res, next) => { adminAboutApi.updateAboutImage(req, res) });

// About Signature
router.post('/auth/update-about-signature', auth, (req, res, next) => { adminAboutApi.updateAboutSignature(req, res) });

// About Signature
router.post('/auth/update-about-content', auth, (req, res, next) => { adminAboutApi.updateAboutContent(req, res) });


/* ADMIN CONTACT CONTROL */
router.get('/auth/get-email-address', auth, ( req, res, next ) => { adminEmailApi.getEmailAddress( req, res )});

router.post('/auth/update-delivery-email', auth, ( req, res, next ) => { adminEmailApi.updateEmailAddress( req, res )});


module.exports = router;
