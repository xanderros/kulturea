$(document).ready(function () {

	svg4everybody();

	// Polyfill object-fit/object-position on <img>: IE, Edge, Safari
	objectFitImages();

	// Navigation mobile
	$(document).on('click', '.nav__btn', navToggle);

	function navToggle(e) {
		e.preventDefault();

		var $body = $('body');

		if ($body.hasClass('nav-opened')) {
			$body.removeClass('nav-opened');
		}
		else {
			$body.addClass('nav-opened');
		}
	}

	// Slider zurnal
	var $zurnalSlider = $('.slider_zurnal .slider__container');

	if ($zurnalSlider.length) {
		$zurnalSlider.slick({
			infinite: false,
			speed: 800,
			slidesToShow: 3,
			slidesToScroll: 3,
			arrows: true,
			dots: true,
			prevArrow: '<button type="button" class="slider__arrow slider__arrow_prev"><svg class="slider__icon" width="18" height="32"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-right"></use></svg></button>',
			nextArrow: '<button type="button" class="slider__arrow slider__arrow_next"><svg class="slider__icon" width="18" height="32"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-right"></use></svg></button>',
			responsive: [
				{
					breakpoint: 993,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 461,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						dots: false
					}
				}
			]
		});
	}

	// Slider pricelist
	var $pricelistSlider = $('.slider_pricelist .slider__container');

	if ($pricelistSlider.length) {

		var $pricelist = $pricelistSlider.closest('.pricelist');
		var $pricelistBtn = $pricelist.find('.pricelist__item');
		var pricelistActive = $pricelist.find('.pricelist__item_active').index();

		// change active item when change slide
		$pricelistSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {

			$pricelistBtn.removeClass('pricelist__item_active');
			$pricelistBtn.eq(nextSlide).addClass('pricelist__item_active');

		});

		// go to slide by clicking nav
		$(document).on('click', '.pricelist__link', function(e){
			e.preventDefault();
			slideIndex = $(this).closest('.pricelist__item').index();
			$pricelistSlider.slick('slickGoTo', slideIndex);
		});

		// init slider
		$pricelistSlider.slick({
			infinite: false,
			speed: 800,
			slidesToShow: 1,
			slidesToScroll: 1,
			initialSlide: pricelistActive,
			arrows: true,
			prevArrow: '<button type="button" class="slider__arrow slider__arrow_prev"><svg class="slider__icon" width="18" height="32"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-right"></use></svg></button>',
			nextArrow: '<button type="button" class="slider__arrow slider__arrow_next"><svg class="slider__icon" width="18" height="32"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-right"></use></svg></button>'
		});

	}

	// Sticky panel close
	$(document).on('click', '.promo__close', promoClose);
	function promoClose(e) {
		e.preventDefault();
		$(this).closest('.promo').fadeOut(500);
	}
	// Sticky panel close (alt)
	$(document).on('click', '.promo-sm__close', promoCloseAlt);
	function promoCloseAlt(e) {
		e.preventDefault();
		$(this).closest('.promo-sm').fadeOut(500);
	}

	// expand/collapse
	$(document).on('click', '.accordion__header', accordeon);

	if ($('.accordion').length) {
		$(this).find('.accordion__item_opened').find('.accordion__box').show();
	}

	function accordeon() {
		var $accordeonItem = $(this).closest('.accordion__item');
		var $accordeonBox = $accordeonItem.find('.accordion__box');

		if ($accordeonItem.hasClass('accordion__item_opened')) {
			$accordeonBox.slideUp(350);
			$accordeonItem.removeClass('accordion__item_opened');
		}
		else {
			$accordeonItem
					.addClass('accordion__item_opened')
					.siblings('.accordion__item_opened')
					.removeClass('accordion__item_opened')
					.find('.accordion__box').slideUp(350);
			$accordeonBox.slideDown(350);

		}
	}

	//// anchors

	// external link with anchor
	$(window).bind("load", function() {
		function goToByScroll(id) {
			$("html, body").animate({
				scrollTop: $("#" + id).offset().top - 50
			}, 800);
		}
		if ( window.location.hash != '' ) {
			goToByScroll(window.location.hash.substr(1));
		}
	});

	// anchor on this page start with "#"
	$('a[href^="#"]:not([href="#"])').on('click', function () {
		var $element = $(this);
		var dest = $element.attr('href');

		if (dest !== undefined && dest !== '' && $(dest).length) {
			var destIndent = $(dest).offset().top;

			$('html, body').animate({
				scrollTop: destIndent - 50
			}, 1000);
		}
	});

	// Make content tables responsive
	$('.content table').wrap("<div class='table-wrapper'></div>");
});