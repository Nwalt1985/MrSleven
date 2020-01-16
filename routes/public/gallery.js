const express = require("express");
const router = express.Router();
const cloudinary = require('cloudinary');

router.get("/images", (req, res, next) => {

  /* Get gallery images  */
  try {
    
    cloudinary.v2.api.resources_by_tag('gallery', { context: true, direction: 'asc' }, (err, result) => {
      res.json(result.resources);
    });
    
  } catch (error) {
    console.error(error);
  }
      
});

module.exports = router;