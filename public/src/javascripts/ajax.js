/**
* Require jquery so we can use AJAX calls
*/
import $ from 'jquery';

// if( process.env.NODE_ENV !== 'development') {
//     console.log('in production mode');

//     var str_url = 'https://tawnyillustration.herokuapp.com/usergallery';
    
// } else {
//     console.log( 'in development mode');

//     var str_url = 'http://devserver:3000/usergallery';
// }

async function callApi( data ) {
    
    data.returnFormat = 'json'
    
    try {
        await $.ajax({
            url         : 'https://tawnyillustration.herokuapp.com/usergallery'
            ,method     : 'POST'
            ,data       : data
            ,dataType   : 'json'
        })
        .then( data => {
            
            if ( !data.success ) throw 'Error in POST'
            
            return data;
        }) 
        
    } catch ( error ) {
        console.error( error )
    }
};
        
export default {

    togglePageLive: function ( page_name, is_live ) {
        
        var skv_data = {
            page_name   : page_name,
            is_live     : is_live
            
        }
        
        return callApi(skv_data);
    },
    deleteImageFile : function ( file_name ) {
        
        var skv_data = {
            delete_file_name : file_name
        }

        return callApi( skv_data );
    }
};