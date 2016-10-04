!function(window, $) {
    window.validationCallbacks = {
    	errorPlacementCallback: function(error, element) {
    		error.addClass('help-block');
    
    		if (element.prop('type') === 'checkbox')
    			error.insertAfter(element.parent('label'));
    		else
    			error.insertAfter(element);
    	},
    	highlightCallback: function(element, errorClass, validClass) {
    		$(element).parents('.col-sm-5')
    			.addClass('has-error')
    			.removeClass('has-success');
    	},
    	unhighlightCallback: function(element, errorClass, validClass) {
    		$(element).parents('.col-sm-5')
    			.addClass('has-success')
    			.removeClass('has-error');
    	}
    };
}(window, window.jQuery);