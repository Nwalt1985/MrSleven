const express = require("express");
const router = express.Router();
const About = require('../../models/about');
const Visits = require('../../models/visits');

/* GET about page from angular routes. */
router.get("/content", (req, res, next) => {
  /* Get Content  */
  try {

    const visit = new Visits();

    visit.save();

    About.find({}, (err, result) => {
      res.json(result);
    });
    
  } catch (error) {
    console.error(error);
  };
      
});

module.exports = router;
