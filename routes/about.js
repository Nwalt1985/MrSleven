const express = require("express");
const router = express.Router();
const path = require("path");
const mongoAbout = require('../models/about');


/* GET about page from angular routes. */
router.get("/content", (req, res, next) => {

  /* Get Content  */
  try {
    
    mongoAbout.find({},{_id:0, header:1, content:1}, (err, result) => {
      res.json(result);
    })
    
    
  } catch (error) {
    console.error(error);
  }
      
});

module.exports = router;
