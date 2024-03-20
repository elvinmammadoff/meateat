/*********************************************************************************

	Version: 1.0

    Note: This is scripts js. All custom scripts here.

**********************************************************************************/

/*===============================================================================

    [ INDEX ]
	|
    |___ Sticky Header
    |___ Form Input Focus Materialize Effect
	|___ Burger Menu 
	|___ Pre-Loader
	|___ ScrollUp
	|___ Slick Slider
	|___
	|___
	|___
    |
	[END INDEX ]

================================================================================*/

(function ($) {
	'use strict';


    /* ==========================
       Sticky Header
    =============================*/
	
    function stickyHeader() {
        var scrollPos = $(this).scrollTop();
        if (scrollPos > 100) {
            $('.sticky-header').addClass('is-sticky');
        } else {
            $('.sticky-header').removeClass('is-sticky');
        }
    }
    $(window).on('scroll', stickyHeader);	

    $(document).ready(stickyHeader);
	
	
    /* ==========================
       Form Input Focus Materialize Effect
    =============================*/
	$('.Form__input').focus(function () {
		var $field = $(this).closest('.Form__group');
		$field.addClass('Form__group--focus');		
	}).blur(function () {
		var $field = $(this).closest('.Form__group');
		$field.removeClass('Form__group--focus');
		if (this.value) {
			$field.addClass('Form__group--focus');
		} else {
			$field.removeClass('Form__group--focus');
		}
	});	


    /* ==========================
       Burger Menu 
    =============================*/
    // open left menu clicking the left menu icon
    $('.burger-icon--left').on('click', function(event){
        event.preventDefault();
        toggleLeftNav(true);
        $("body").css({'overflow':'hidden'});
    });
    
    // open right menu clicking the right menu icon
    $('.burger-icon--right').on('click', function(event){
        event.preventDefault();
        toggleRightNav(true);
        $("body").css({'overflow':'hidden'});
	});
	
    $('.burger-icon').on('click', function(event){
        event.preventDefault();
        burgerIcon(true);
    });
    
    $('.cd-close-nav, .cd-overlay, .page-scroll').on('click', function(event){
        event.preventDefault();
        toggleLeftNav(false);
        toggleRightNav(false);
        burgerIcon(false);
        $("body").css({'overflow':'auto'});
	});
	
    function burgerIcon(bool) {
        $('.burger-icon').toggleClass('is-visible', bool);
    }

    function toggleLeftNav(bool) {
        $('.burger-menu--left, .cd-overlay').toggleClass('is-visible', bool);
    }

    function toggleRightNav(bool) {
        $('.burger-menu--right, .cd-overlay').toggleClass('is-visible', bool);
	}



        //======= Page Scrolling Start ========
    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function () {
        $(document).on('click', 'a.page-scroll', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top + (0)
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });
    //======= Page Scrolling End ========
	
	
    /* ==========================
       Pre-Loader
    =============================*/
    // will fade loading animation
    $("#object").delay(600).fadeOut(300);
    // will fade loading background                 
	$("#loading").delay(1000).fadeOut(500);	


    /* ==========================
       ScrollUp
    =============================*/
	$(document).on( 'scroll', function(){
		if ($(window).scrollTop() > 100) {
			$('.scroll-up').addClass('show');
		} else {
			$('.scroll-up').removeClass('show');
		}
	});

	$('.scroll-up').on('click', scrollToTop);
	 
	function scrollToTop() {
		var verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0,
		element = $('body'),
		offset = element.offset(),
		offsetTop = offset.top;
		$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
	}


    /* ==========================
       Slick Slider
    =============================*/
	$('.testimonial-slider').not('.slick-initialized').slick({
		draggable: true,
		arrows: false,
		dots: true,
		fade: true,
		autoplay: true,
		speed: 900,
		infinite: true,
		cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
		touchThreshold: 100
    })

    $('.testimonial-multiple').not('.slick-initialized').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        settings: {
          arrows: true,
          prevArrow: $('.prev'),
          nextArrow: $('.next'),          
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]        
    });    

    $('.testimonial-tag').not('.slick-initialized').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        settings: {
          arrows: true,
          prevArrow: $('.prev'),
          nextArrow: $('.next'),          
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]        
    });   
     
    //======= START Fancybox ========
    
    jQuery(document).ready(function($) {
        $('.fancybox')
            .fancybox({                     
            beforeShow: function () {
                if (this.title) {
                    // New line
                    this.title += '<br />';
                }
            },
            afterShow: function () {
            },  
            helpers: {
                title: {
                    type: 'inside'
                }, //<-- add a comma to separate the following option
                buttons: {} //<-- add this for buttons
            },
            closeBtn: true, // you will use the buttons now
            arrows: true
        });  
    });   
    
    //======= END Fancybox ========


    $('.slider-img').owlCarousel( {
            autoplay: 5000,
            stopOnHover: true,
            dots: false, 
            loop:true,
            margin:45,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:3,
                },
                1000:{
                    items:5,
                }
            }        
        }
    );    
 
    $('.slider-thumb').owlCarousel( {
            autoplay: false,
            stopOnHover: true,
            dots: false, 
            loop:false,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:3,
                },
                1000:{
                    items:5,
                }
            }        
        }
    );   

    $('.slider-one').owlCarousel( {
            autoplay: 5000,
            stopOnHover: true,
            dots: true, 
            loop:true,
            responsiveClass:true,
            nav: true,
            navText: ["<img src='img/icons/back.svg'>","<img src='img/icons/next.svg'>"],
            items: 1,       
        }
    );

    AOS.init({
        duration: 1200,
        startEvent: 'DOMContentLoaded',
        once: true,
    });    
	

})(jQuery);


