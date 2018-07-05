$(document).ready(function() {
		
		/* Show Menu on Click */ 
	$('.fa-bars').click(function() {
		if ($(window).width() > 650){
			$('.menu').css('left', '0px');
			$('body').css('margin-left', '280px');
			$(this).css('opacity', '0');
		}
		else {
			$('.menu').css('left', '0px');
			$(this).css('opacity', '0');
		}

		document.querySelector('style').innerHTML = "@media screen and (min-width: 990px) {.text {width: 34%;}}";

		$('.name-title').css('margin-top', '0px');

	});

		/* Hide Menu on Arrow Click */
	$('.fa-arrow-left').click(function() {
		if ($(window).width() > 650){
			$('.menu').css('left', '-280px');
			$('body').css('margin-left', '0px');
			$('.fa-bars').css('opacity', '1');
		}
		else {
			$('.menu').css('left', '-280px');
			$('.fa-bars').css('opacity', '1');
		}

		document.querySelector('style').innerHTML = '';

		$('.name-title').css('margin-top', '55px');

	});
});