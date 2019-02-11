const express               = require( 'express' );
const router                = express.Router();
const fileUpload            = require('express-fileupload');
const fs                    = require( 'fs' );
const cloudinary            = require( 'cloudinary' );
const Service               = require( '../../service/CRUD_service' );

var user_name = '';
// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    if (process.env.NODE_ENV !== 'development') {
        // if user is authenticated in the session, carry on 
        if (req.isAuthenticated()) {

            user_name = req.user.local.username

            return next();
        }
        // if they aren't redirect them to the home page
        res.redirect('/login');

    } else {

        user_name = 'user';

        return next();
    }

}

router.use( fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}));

/**
 * Depending on our environment we fetch the images with the tags production/development
 */
async function getImagePublicId () {
    
    try {
        if ( process.env.NODE_ENV !== 'development' ) {

            // Array of stored images public name
            await cloudinary.v2.api.resources_by_tag( 'production', function (error, result) {
                
                if( error ) throw ( error );

                if( result ) {
                    for ( let image in result.resources ) {
                        arr_images.push( result.resources[image].public_id );
                    }
                } 
                
            });
        } else {
            // Array of stored images public name
            await cloudinary.v2.api.resources_by_tag('development', function (error, result) {
              
                if ( error ) throw ( error );

                if (result) {
                    for (let image in result.resources) {
                        arr_images.push(result.resources[image].public_id);
                    }
                } 
            });
        }
        
    } catch (error) {
        console.log( error );
    }
    
};


/* GET users listing. */
router.get('/', isLoggedIn, async function (req, res, next) {

    arr_images = [];

    getImagePublicId()

        .then(() => {

            // Get all image paths in secure_image and push to an array so it
            // can be rendered in a select dropdown.
            res.render('admin_panel/user_gallery', {
                
                title                : 'User Gallery Control'
                ,date                : global.year
                ,html_class          : 'userpanel_gallery'
                ,arr_images          : arr_images
                ,user                : user_name
                ,cloudinary_link     : process.env.CLOUDINARY_LINK
                ,is_live             : global.is_gallery_page_live

            });
        });

});
        
router.post( '/', async function ( req, res, next ) {
            
    var result = {};
    
    /* Show Gallery Live Toggle */
    
    if ( req.body.is_live === 'true') {
        
        await Service.updatePageLive( 'gallery', 1 )
        
        res.writeHead( 200, { "Content-type": "text/plain" } );

        result.status = 'Successfully Activated Page.';

        res.write( JSON.stringify( result ) );

        res.end();
        
    } else if (req.body.is_live === 'false' ) {
        
        await Service.updatePageLive( 'gallery', 0 )
        
        res.writeHead( 200, { "Content-type": "text/plain" } );
        
        result.status = 'Successfully De-Activated Page.';
        
        res.write( JSON.stringify( result ) );
        
        res.end();
        
    };

    /* UPLOAD IMAGE */
    if( req.body.uploadImage ) {

        if ( Object.keys( req.files ).length == 0 ) {
            return res.status( 400 ).send( 'No files were uploaded.' );
        };
        

        // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        let uploaded_file   = req.files.imageUpload;
        let file_name       = req.files.imageUpload.name;
        
        let str_filename = file_name.split(' ').join('_').toLowerCase();
        
        try {

            var image_tag = '';
            var image_folder = '';

            if ( process.env.NODE_ENV !== 'development') { 
                image_tag = 'production';
                image_folder = 'public';
            } else {
                image_tag = 'development';
                image_folder = 'dev';
            };

            // Use the mv() method to place the file in a tmp folder on your server
            uploaded_file.mv('tmp/' + str_filename , function ( err ) {
                
                if( !err ) {

                    cloudinary.v2.uploader.upload( 'tmp/' + str_filename, 
                        { 
                            folder      : image_folder 
                            ,public_id  : str_filename
                            , tags      : image_tag
                            
                        }, function( error, result ) {
                        
                        if ( result ) {

                            // once uploaded remove image from tmp folder
                            fs.unlink('tmp/' + str_filename, function ( error ) {
                               
                                if( error ) throw error;
                                
                            });                            

                            res.redirect('back')
                        
                        } else {
                            console.log( error );
                            return; 
                       
                        };
                    });
                };
                
            });

        } catch ( error ) {
            console.log ( error );
        };
   
    } 

    
    /* DELETE IMAGE */
    if ( req.body.delete_file_name ) {
        
        let delete_file = req.body.delete_file_name;
        
        file_to_delete = 'tmp/' + delete_file;
        
        try {
                
            // Delete file from cloud host then delete from our server
            cloudinary.v2.api.delete_resources([ delete_file ], function ( error, result ) {

                if( !error ) {
                     
                    result.status = 'Successfully deleted image.';
                    
                    res.send( JSON.stringify(result) );
                    
                } else {
                    
                    str_delete_error = 'Error deleting image.';
                    throw( 'Error deleting from cloud server : ', error );
                };

            });


        } catch ( error ) {
            console.log( error );
        };

    };
});

module.exports = router;
