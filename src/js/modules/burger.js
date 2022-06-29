import $ from 'jquery';

$(document).ready(function() {
	$('.mobile-burger').click(function(event) {
		$('.header__content,.header__burger').toggleClass('active');
		$('body').toggleClass('lock');
	});
})