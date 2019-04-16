window.setInterval(function () {
	var randomBgColor = '#' + ('000000' +
		Math.floor(Math.random() * 16777215).toString(16)).slice(-6);
	$('body').css({
		'background-color': randomBgColor,
	});
}, 2000);

(function($) {
'use strict';

// initialize Masonry after all images have been loaded
$('#container').imagesLoaded( function() {
	$('.grid').masonry({
		fitWidth: true,
		itemSelector: '.grid-item',
		gutter: '.gutter-sizer',
		transitionDuration: '0.9s',
		stagger: 30,
	});
})
}) (jQuery)

/*
var myLazyLoad = new LazyLoad({
	elements_selector: ".lazy"
});
*/

/*
old code
$(document).ready(function () {
	"use strict";
	var $grid = $('.grid').masonry({
		fitWidth: true,
		itemSelector: '.grid-item',
		gutter: '.gutter-sizer',
		transitionDuration: '0.9s',
		stagger: 30,
	});
	$('.grid').imagesLoaded(function () {
		$grid.masonry({
		});
	});
});
*/
