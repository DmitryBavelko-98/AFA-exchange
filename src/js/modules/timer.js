import $ from 'jquery';

$(document).ready(function() {
	$('.intro__btn').click(function(event) {
		$('.intro__timer').addClass('active');
        setTimeout(() => $('.intro__timer').removeClass('active'), 11000);
	});
})