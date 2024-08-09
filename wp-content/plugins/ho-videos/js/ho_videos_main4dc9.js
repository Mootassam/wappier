// Get the modal


// Get the button that opens the modal
modal = jQuery('#hoVideoModal') ;

// Get the <span> element that closes the modal


// When the user clicks anywhere outside of the modal, close it
jQuery(document).ready(function() {
jQuery(function(){
    
    jQuery("body").on("click",'.ho-videos-image' , function () {
        // console.log('aaaaaa');
        load_posts(this.id);
    });

    // jQuery("body").on("click",'#23460' , function () {
    //     load_posts(this.id);
    // });

    // jQuery("body").on("click",'#23465' , function () {
    //     load_posts(this.id);
    // });

    jQuery("body").on("click",'.close' , function () {
        modal.hide();
        jQuery('#ho_modal_tlte').html('');
        jQuery('#ho_iframe').html('');
        jQuery('#ho_description').html('');
    });
})
})


function load_posts(post_id){
    var str = '&action=ho_video_load' + '&post_id=' + post_id ;
    jQuery.ajax({
        type: "POST",
        dataType: "html",
        url: `${window.origin}/wp-admin/admin-ajax.php`,
        data: str,
		beforeSend : function ( xhr ) {
			
		},
        success: function(data){
            data = JSON.parse(data);
            console.log(data.post_title);
            jQuery('#ho_modal_tlte').html(data.post_title);
            jQuery('#ho_iframe').html(data.post_iframe);
            jQuery('#ho_description').html(data.post_content);
            modal = jQuery('#hoVideoModal');
            modal.show();
        },
        error : function(jqXHR, textStatus, errorThrown) {
            $loader.html(jqXHR + " :: " + textStatus + " :: " + errorThrown);
        }

    });
    return false;
}

