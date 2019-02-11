/**
* Require jquery so we can use AJAX calls
*/
import $ from 'jquery';

async function callApi( data ) {
    
    data.returnFormat = 'json'
    
    try {
        await $.ajax({
            url         : 'https://my-cms-private.herokuapp.com/usergallery'
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