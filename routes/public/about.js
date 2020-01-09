const express = require("express");
const router = express.Router();
const About = require('../../models/about');


/* GET about page from angular routes. */
router.get("/content", (req, res, next) => {

  /* Get Content  */
  try {
    
    About.find({}, (err, result) => {
      res.json(result);
    })
    
    
  } catch (error) {
    console.error(error);
  }
      
});

module.exports = router;
