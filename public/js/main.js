$(document).ready(initPage);
function initPage(){
	ImgTobg();
	mobileMenu();
	pageScrollTop();
	header_fixed_class();
	anchor();
	appear();
	typedJs();
	jQuery(window).scroll(function(){
		appear();
	});
}

function typedJs() {
	$('.typed').each(function() {
		var textEl = $(this).find('.typed-js').attr('data-text'),
			_this = $(this),
			_thisEl = $(this).find('.typed-js');
		if ( $(this).is(':in-viewport') && !$(this).hasClass('start')) {
			_this.addClass('start');
			_thisEl.typed({
				strings: [textEl],
				typeSpeed: -1000,
				startDelay: 0,
				preStringTyped: function() {
					$('.visual .typed-cursor').css('display', 'inline-block');
				},
				callback: function() {
					_thisEl.parent().addClass('done');
				}
			});
			/*setTimeout(function() {
			}, 0)*/
		}
	});
}

function ImgTobg() {
	$('.img-to-bg').each(function() {
		if ($(this).find('img').length) {
			$(this).css('background-image', 'url(' + $(this).find('> img').attr('src') + ')');
		}
	});
}

function mobileMenu(){
	$('<span class="open-menu"><span></span><span></span><span></span><span></span></span>').appendTo('.header-page > .container > .header-page__wrap > .header-page__holder');
	$('<span class="fader"/>').appendTo('.header-page > .container > .header-page__wrap > .header-page__holder');
	$('html').on('click', '.open-menu', function() {
		$('body').toggleClass('menu-opened');
		return false;
	});
	$('.fader').on('click touchmove', function(event) {
		$('body').removeClass('menu-opened');
	});
}

function appear(){
	$('.appear').each(function() {
		if ( $(this).is(':in-viewport') && !$(this).hasClass('animated')) {
			$(this).addClass('animated');
		}
	});
}

function pageScrollTop() {
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.btn-page-up').fadeIn();
		} else {
			$('.btn-page-up').fadeOut();
		}
	});
	$('.btn-page-up').click(function(e){
		var offsetTop = $('body').offset().top;
		$('html, body').stop().animate({ 
			scrollTop: offsetTop
		}, 500);
		e.preventDefault();
	});
}

function anchor(){
	$(".anchor, .visual__btn-down").click(function(e){
		var href = $(this).attr("href");
		offsetTop = href === "#" ? 0 : $(href).offset().top - $('.header-page').outerHeight();
		// for modal popup
		$('body').removeClass('menu-opened');
		$("html, body").stop().animate({
			scrollTop: offsetTop
		}, 800);
		e.preventDefault();
	});
};

if($('#particles-js').length){
	particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":320.6824121731046}},"color":{"value":"#9b9b9b"},"shape":{"type":"circle","stroke":{"width":0,"color":"#9b9b9b"},"polygon":{"nb_sides":4},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5852454022159158,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":0,"size_min":4.87246327380807,"sync":true}},"line_linked":{"enable":true,"distance":112.2388442605866,"color":"#9b9b9b","opacity":0.4008530152163807,"width":1},"move":{"enable":true,"speed":2,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"bubble"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
}



/*function mapInitialize(map_) {
	var latlng = new google.maps.LatLng(34.052428, -118.243687);
	var myOptions = {
	center: latlng,
	zoom: 10,
	//zoomControl: true,
	//scaleControl: true,
	disableDefaultUI: true,
	//scrollwheel: true,
	//mapTypeControl: false,
	//streetViewControl: false,
	//rotateControl: false,
	//disableDoubleClickZoom: true,
	};
	var map = new google.maps.Map(document.getElementById(map_), myOptions);
	var stylesBW = [
	{
		"featureType": "administrative",
		"elementType": "all",
		"stylers": [
			{
				"saturation": "-100"
			}
		]
	},
	{
		"featureType": "administrative.province",
		"elementType": "all",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "landscape",
		"elementType": "all",
		"stylers": [
			{
				"saturation": -100
			},
			{
				"lightness": 65
			},
			{
				"visibility": "on"
			}
		]
	},
	{
		"featureType": "poi",
		"elementType": "all",
		"stylers": [
			{
				"saturation": -100
			},
			{
				"lightness": "50"
			},
			{
				"visibility": "simplified"
			}
		]
	},
	{
		"featureType": "road",
		"elementType": "all",
		"stylers": [
			{
				"saturation": "-100"
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "all",
		"stylers": [
			{
				"visibility": "simplified"
			}
		]
	},
	{
		"featureType": "road.arterial",
		"elementType": "all",
		"stylers": [
			{
				"lightness": "30"
			}
		]
	},
	{
		"featureType": "road.local",
		"elementType": "all",
		"stylers": [
			{
				"lightness": "40"
			}
		]
	},
	{
		"featureType": "transit",
		"elementType": "all",
		"stylers": [
			{
				"saturation": -100
			},
			{
				"visibility": "simplified"
			}
		]
	},
	{
		"featureType": "water",
		"elementType": "geometry",
		"stylers": [
			{
				"hue": "#ffff00"
			},
			{
				"lightness": -25
			},
			{
				"saturation": -97
			}
		]
	},
	{
		"featureType": "water",
		"elementType": "labels",
		"stylers": [
			{
				"lightness": -25
			},
			{
				"saturation": -100
			}
		]
	}
	];
	map.setOptions({styles: stylesBW});
	function addMarker(feature) {
	var marker = new google.maps.Marker({
		position: feature.position,
		icon: '../images/ico-marker.svg',
		map: map
	});
	}
	var features = [
	{
		position: new google.maps.LatLng(34.018896, -118.229962)
	},
	];

	for (var i = 0, feature; feature = features[i]; i++) {
	addMarker(feature);
	}
}
$('#map').each(function(){
	var map_ = $(this).attr('id');
	mapInitialize(map_);
});*/


function header_fixed_class(){
	var header = $('.header-page');
	var wrapper = $('.wrapper');
	var heightEl  = 0;
	$(window).scrollTop() > heightEl ? header.addClass('modify') : header.removeClass('modify');
	$(window).scrollTop() > heightEl ? wrapper.addClass('header_fixed') : wrapper.removeClass('header_fixed');
	$(window).scroll(function(event){
		//event.stopImmediatePropagation();
		$(window).scrollTop() > heightEl ? header.addClass('modify') : header.removeClass('modify');
		$(window).scrollTop() > heightEl ? wrapper.addClass('header_fixed') : wrapper.removeClass('header_fixed');
	});
}