const express = require("express");
const router = express.Router();
const path = require("path");

/* GET about page from angular routes. */
router.get("/*", (req, res) => {

  

  res.sendFile(path.join(__dirname, "../frontend/mrSleven/dist/index.html"));
});



module.exports = router;
