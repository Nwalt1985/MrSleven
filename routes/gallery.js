const express = require("express");
const router = express.Router();
const path = require("path");
const mongoAbout = require('../models/about');


/* GET about page from angular routes. */
router.get("/images", (req, res, next) => {

  /* Get gallery images  */
  try {
    
    
  } catch (error) {
    console.error(error);
  }
      
});

module.exports = router;