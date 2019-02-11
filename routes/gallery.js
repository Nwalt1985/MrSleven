const express       = require('express');
const router        = express.Router();
const cloudinary    = require('cloudinary');


var arr_img_url = [];

function getImages() {
    
    var promise = new Promise( ( resolve, reject ) => {
    
        if (process.env.NODE_ENV !== 'development') {
        
            // Array of stored images public name
            cloudinary.v2.api.resources_by_tag('production', function (error, result) {
        
                if (result) {
                    
                    for (let image in result.resources) {
                        arr_img_url.push( result.resources[image].url );
                    }
                    
                    resolve();
                } else {
                    reject( error );
                }
            });
        
        } else {
        
            // Array of stored images public name
            cloudinary.v2.api.resources_by_tag('development', function (error, result) {
        
                if (result) {
                    for (let image in result.resources) {
                        arr_img_url.push(result.resources[image].url);
                    }
                    resolve();
                } else {
                    reject( error );
                }
            });
        }

    });

    return promise;
}

/* GET home page. */
router.get('/', function (req, res, next) {

    try {
        arr_img_url = [];
        
        getImages()

            .then(() => {
                res.render('gallery', {
                    title           : 'Gallery',
                    date            : global.year,
                    html_class      : 'gallery',
                    image_path      : arr_img_url,
                    is_logged_in    : req.isAuthenticated()
            
                });

            })
        
        
    } catch( error ) {
        console.log( error );
    }
    

});

module.exports = router;
