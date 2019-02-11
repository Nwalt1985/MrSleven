import AJAX  from './ajax.js';

$( document ).ready( function () {

	$( ".alert" ).fadeIn( 300 ).delay( 4000 ).fadeOut( 400 );

	/**
	 * TOGGLE PAGE LIVE AJAX CALL
	 */
	$('#togglePageLive').change( async function() {

		var value = $( this ).prop( 'checked' );

		await AJAX.togglePageLive( 'gallery', value )

		if( value ) {

			setTimeout(() => {
				alert('Gallery is now enabled.')
			}, 1000);

		} else {
			setTimeout(() => {
				alert('Gallery is now disabled.')
			}, 1000);
		}
	
	});

	/** 
	 * DELETE IMAGE FILE
	 */
	$('.delete-image-form').submit( async function ( event ) {

		try {
			event.preventDefault();
	
			var value = $('#deleteImage').find( ':selected' ).val();
	
			await AJAX.deleteImageFile( value )
				
			await window.location.reload();

			setTimeout(() => {

				alert('Image successfully deleted'); 
				
			}, 2000);

		} catch ( error ) {

			alert( 'There was an error deleting the image.' )
		}

	})

});