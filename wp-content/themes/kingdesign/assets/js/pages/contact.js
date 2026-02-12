jQuery(document).ready(function(){
    jQuery(document).on('keyup', '.ctct-form-field input', function(e){
        if(jQuery(this).val() != '') {
            jQuery(this).closest('.ctct-form-field').addClass('text-entered');
        } else {
            jQuery(this).closest('.ctct-form-field').removeClass('text-entered');
        }
    });
});