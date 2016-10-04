!function(window, $) {
	$.validator.setDefaults({
		submitHandler: function() {
			window.alert('Submitted!');
		}
	});

	$(function() {
		$('#signupForm').validate({
			rules: signupFormConfig.rules,
			messages: signupFormConfig.messages,
			errorElement: 'em',
			errorPlacement: validationCallbacks.errorPlacementCallback,
			highlight: validationCallbacks.highlightCallback,
			unhighlight: validationCallbacks.unhighlightCallback
		});
	});
}(window, window.jQuery);
