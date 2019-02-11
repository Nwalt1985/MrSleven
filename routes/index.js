const express 	= require('express');
const router 	= express.Router();
const Service	 = require('../service/CRUD_service');


/* GET home page. */
router.get('/', function(req, res, next) {

	/**
 	* Get live pages
 	*/
	Service.getPageControlData('gallery')
		.then( result => {
			global.is_gallery_page_live = result.is_live;
		});

  	res.render( 'homepage', { 
  		title 				: 'Tawny Illustration',
  		date 				: global.year,
		html_class 			: 'homepage',
		is_logged_in 		: req.isAuthenticated(),
		
	 });
	 
});

module.exports = router;
