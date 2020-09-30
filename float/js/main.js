/*----------------- SLIDER ----------------- */

$(document).ready(function() {
	$('.slider').slick({
		infinite: true,
		slidesToShow: 4 ,
		slidesToScroll: 1,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		variableWidth: true,
		responsive: [
		{
			breakpoint: 1199,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});
});

/*----------------- ScroLLMagic ----------------- */

$(function () {
	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onLeave',
			duration: "0%"
		}
	});
	var slides = document.querySelectorAll("section.panel");	
	for (var i=0; i<slides.length; i++) {
		new ScrollMagic.Scene({
			triggerElement: slides[i]
		})
		.setPin(slides[i], {pushFollowers: false})
		//.addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	}
});

/*$(function () { // wait for document ready
	// build tween

	var controller = new ScrollMagic.Controller({vertical: true}) ;

	var tween = new TimelineMax ()
		.add([
			TweenMax.to("#parallaxContainer .layer1", 1, {top: "-20%", ease: Linear.easeNone})
		]);

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#parallaxContainer", duration: 2000, offset: 450})
					.setTween(tween)
					.setPin("#parallaxContainer")
					//.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
});
*/

/*----------------- mousemove TITLE ----------------- */

(function($){
	var card = $(".container");
	card.on('mousemove', function (e) {
		var x = e.clientX - $(this).offset().left + $(window).scrollLeft();
		var y = e.clientY - $(this).offset().top + $(window).scrollTop();

		var rY = map(x, 0, $(this).width(), 15, -15);
		var rX = map(y, 0, $(this).height(), 15, -15);

		$(this).children(".title_block").css("transform", "rotateY(" + rY + "deg)" + " " + "rotateX(" + -rX + "deg)");
	});

	card.on('mouseenter', function () {
		$(this).children(".title_block").css({
			transition: "all " + 0.05 + "s" + " linear",
		});
	});

	card.on('mouseleave', function () {
		$(this).children(".title_block").css({
			transition: "all " + 0.2 + "s" + " linear",
		});

		$(this).children(".title_block").css("transform", "rotateY(" + 0 + "deg)" + " " + "rotateX(" + 0 + "deg)");
	});

	function map(x, in_min, in_max, out_min, out_max)
	{
		return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
	}
})(jQuery);



/*----------------- PRELOADER ----------------- */

document.body.onload = function() {

	
}

/* ----- PRELOADER percent ----- */

var
images = document.images,
images_total_count = images.length,
images_loaded_count	= 0,
perc_display = document.getElementById('load_perc'),
preloader = document.getElementById('page-preloader');

for( var i = 0; i < images_total_count; i++ )
{
	image_clone = new Image();
	image_clone.onload = image_loaded;
	image_clone.onerror = image_loaded;
	image_clone.src = images[i].src;
}

function image_loaded() {
	images_loaded_count++;
	perc_display.innerHTML = (( (100 / images_total_count) * images_loaded_count ) << 0) + '%';
	if ( images_loaded_count >= images_total_count ) 
	{
		setTimeout(function() {
			if( !preloader.classList.contains('done') )
			{
				preloader.classList.add('done');
			}
		}, 1500);		
	}	
};

/* ----- PRELOADER images ----- */

var imgs = [
'img/preloader/star.png',
'img/preloader/headphone.png',
'img/preloader/camera.png',
],

i = 0,

pre_img = document.getElementById('load_img');

function sort(i) {
	if (i == 3) {
		i=0;
	};
	img = imgs[i];
	console.log(i);		
	pre_img.setAttribute('src', img);
	setTimeout(function(){
		sort(i + 1);
	}, 250);
};

/*sort(i);*/



