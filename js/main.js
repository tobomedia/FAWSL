Cufon.replace('nav ul li a, h1, h2, h3, h5, h6, th, .slider li p', { fontFamily: 'Plume Ad' });

$(function($) {
	
	jQuery.fn.sliderFunc = function(slider) {
		var visableLi = $(slider).find('li').not('.hidden');

		if ($(visableLi).next().length > 0) {
			$(visableLi).next().fadeIn(1000, function() {
				$(this).removeClass('hidden');
			});
		} else {
			$(slider).find('li').first().fadeIn(1000, function() {
				$(this).removeClass('hidden');
			});
		}
		$(visableLi).fadeOut(1000, function() {
			$(this).addClass('hidden');
		})
		setTimeout( function() { $.fn.sliderFunc(slider); } , 5000);
		return slider
	};

	$.fn.sliderFunc($('.slider'));



}(jQuery))