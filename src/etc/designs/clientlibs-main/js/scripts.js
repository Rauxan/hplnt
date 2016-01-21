/*
 *
 * Main JS for document ready code, initializaers, etc.
 * Use a namespace if needed. Do not add global objects unnecessarily
 *
 */

$(document).ready(function() {
		
	$(document).foundation();
	
	// Carousel
    $('.carousel-container').slick({
        slidesToShow: 1,
        dots: true,
        infinite: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                dots: true,
				arrows: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
				arrows: true
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
				arrows: true
            }
        }],
        autoplay: false,
        autoplaySpeed: 2000
    });
	
	// Our Hearing Consultants Galley Script
	$('.consultants-gallery').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
      infinite: false,
	  draggable: false,
	  asNavFor: '.consultants-gallery-nav',
	  responsive: [{
            breakpoint: 1024,
            settings: {
            infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
            }
        }, {
            breakpoint: 600,
            settings: {
	  			draggable: true,
            }
        }, {
            breakpoint: 480,
            settings: {
	  			draggable: true,
            }
        }],
	});
	$('.consultants-gallery-nav').slick({
		slidesToShow: false,
		asNavFor: '.consultants-gallery',
		dots: false,
		arrows:false,
		centerMode: false,
		focusOnSelect: true
	});
    //Buyer's slider
    $('.promo-slider-wrap').slick({
        arrows: false,
        dots: true,
        //dotsClass: "dots"
    });
	
	
	$('.gallery-thumb').click(function(){
		if ($(window).width() < 670) {
			$('html,body').animate({ scrollTop: $('.consultants-gallery').offset().top - 80}, 500);
        }
	});
	
	// -------- End --------
	
	// Overview tab Elements reordering in mobile
	function appendHead(){
		$(".overview-tabs-content .content .tab-hdg").each(function(){
			$(this).prev(".overview-media").before("<h3 class='tab-hdg-mobile'>"+$(this).text()+"</h3>");
		});
	}
	appendHead();
	
    // Main Navigations Script
    $(".has-dropdwon > a").click(function() {
        $(this).parent().addClass('active');
        $(this).parent().find(".dropdown").show();
    });

    // Mega menu
    $(".megamenu > a").click(function() {
        if ($(window).width() > 769) {
            $(".dropdown-wrapper").offset({
                left: 0
            });
            $(".dropdown-wrapper").css("width", $(window).width());
        } else {
            $(".dropdown-wrapper").css("width", auto);
        }
    });


    $(".has-dropdwon").mouseleave(function() {
        $(this).removeClass('active');
        $(this).parent().find(".dropdown").hide();
    });
	
	// Mobile Menu	
	function mobileMenu() {
		var h = window.innerHeight-45;
		$('.mobile-nav .top-bar-section').css('height', h+'px');
	}
	window.onresize = function(event) {
		mobileMenu();
	}
	
	$(window).resize(function() {
    	$('.mobile-nav .top-bar-section').height($(window).height());
	});	
	$(window).trigger('resize');
	mobileMenu();
	
	$('.has-dropdown ul.dropdown ul.dropdown').css('overflow-y', 'scroll');
	
	
	// Sidebar Contact Navigation Starts here
	$("#call").click(function(){
		$(".contact-navigation-blocks").hide();
		$(".call-block").show();
	});
	$("#chat").click(function(){
		$(".contact-navigation-blocks").hide();
		$(".chat-block").show();
	});
	$("#send").click(function(){
		$(".contact-navigation-blocks").hide();
		$(".send-block").show();
	});
	
	$(".close").click(function(){
		$(".contact-navigation-blocks").hide();
	});
	// Sidebar Contact Navigation Ends here
	
	
	//Video Testimonals Carousel Functionality - Setting carousel to mobile screens and disabling to tablet/desktop screens
	$(".video-testimonal-carousel").videoTestimonalCarousel();
	//Persona Panel Section Homepage Functionality - cloning home page persona panels from mobile version to desktop version data
	$(".persona-panels-expanded-launch-container").personaPanelTabs();
	
	//Setting Video Carousel Functionality to all tabs content by showing at default and adding video testimonal slick functionality to hidden content also
	
	//show all tabs content
	/*
	$(".testimonal-panel .tabs-content .content").addClass("active");
	//hide second tabs content after slider carousel had applied.
	setTimeout(function(){
		$(".testimonal-panel .tabs-content .content:eq(1)").removeClass("active");
	},500);
	*/
	
	
	
	
	
	//slider tabs test
	$(".slider-tabs-container").sliderTabs();
	
	//Default click on active tabs to set slider to go to active tab
	$(".tabs .tab-title.active").click();
	
	
	//Hearing Aids Mobile back button functionality - start
	//Set back button and lists for only mobile screens of side text tabs
	$(".back-of-inner-text-tabs").click(function(){
		if (window.matchMedia("(max-width: 650px)").matches) {
			$(this).next(".list-of-inner-text-tabs").show();
			$(this).hide();
			$(".content-right-tab-panel").hide();
		}
	});
	$(".list-of-inner-text-tabs").click(function(){
		if (window.matchMedia("(max-width: 650px)").matches) {
			$(this).prev(".back-of-inner-text-tabs").show();
			$(this).hide();
			$(".content-right-tab-panel").show();
		}
	});
	//Hearing Aids Mobile back button functionality - end
	
	// Custom Select box Script
	$(".selectbox").each(function(){
		$(this).ddslick({
			showSelectedHTML: false  
		});
	});
	
	//overview tabs CTA boxes height match
	//$(".overview-cta-boxes").overviewTabCTABoxheightMatch();
	
	//product height match
	//$(".products-group").productWithLeftImageheightMatch();
	
	//product carousel height match
	//$(".products-carousel-group").productCarouselheightMatch();
	// Our Clinics page Results text clone for mobile
	
	$("#our-clinics .intro-column-tablet-desktop").clone().insertAfter("#our-clinics .location-map-container").addClass("intro-column-mobile");
	
	/* CTA box cloning to tablet version - start */
		if ($(".desktop-mobile-data-description" ).length) {
			$(".desktop-mobile-data-description").each(function(){
				//Create clone for Tablet screen CTA container with text and images
				$(this).after('<div class="columns tablet-data-description clearfix"><div class="tablet-data-description-heading clearfix"><img src="'+$(this).find('img').attr('src')+'" alt="'+$(this).find('img').attr('alt')+'"  /><h3>'+$(this).find('h3').text()+'</h3></div><p>'+$(this).find('p').text()+'</p><a href="#">'+$(this).find('a').text()+'</a></div>');
			});
		}
	/* CTA box cloning to tablet version - End */
	
	


    //height match for utilities component, only used on mobile break
    if (window.matchMedia("(max-width: 650px)").matches) {
        $(".utility-spotlights-container").heightMatch({
            itemSelector: '.utility-spotlight',
            heightSelector: ['.height-base']
        });
        $(window).on("orientationchange",function(){
            $(".utility-spotlights-container").heightMatch({
                itemSelector: '.utility-spotlight',
                heightSelector: ['.height-base']
            });
        });
    }


    //buyers section dropdown code
    $(".dropdown-container").click(function () {
        $(this).find('ul').slideToggle(200);
        $(this).find('h3').toggleClass("active");
    });
});

$(window).load(function(){
	// Overview Tabs to Slick Carousel in Mobile
	var $window = $(window)
    , $card = $('.overview-tabs-content')
    , toggleSlick;

	  toggleSlick = function () {
			if ($window.width() <= 650)
			{
				$('.overview-tabs-content').slick({
					slidesToShow: 1,
					dots: true,
					infinite: true,
					responsive: [{
						breakpoint: 650,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							arrows: true
						}
					}],
					autoplay: false,
					autoplaySpeed: 2000
				});	
		  }
	  }
	
	  //$window.resize(toggleSlick);
	  toggleSlick();
	  
	  
	//overview tabs CTA boxes height match
	$(".cta-boxes").overviewTabCTABoxheightMatch();
	
	//product height match
	$(".products-group").productWithLeftImageheightMatch();
	
	//product carousel height match
	$(".products-carousel-group").productCarouselheightMatch();
	
	
	if (window.matchMedia("(min-width: 651px)").matches) {
		//Meet us component height match
		$(".meet-us-component").heightMatch({
			itemSelector: '.meet-us-component-column',
			heightSelector: ['p']
		});
	}

	
	if (window.matchMedia("(min-width: 801px) and (max-width: 1031px)").matches) {
		//Persona Panels height match
		$(".persona-panel").heightMatch({
			itemSelector: '.persona-panels-expanded-launch-container',
			heightSelector: ['.panels']
		});
	}
	else{
		$(".persona-panel .persona-panels-expanded-launch-container .panels").css('height','auto');
	}

	
	//youtube video stop script (Resetting all videos and all playing iframes)
	$(".video-poster-image-container").click(function(){
		$(this).hide();
		$(this).next('.video-container').show();
	});
	/*
	$(".gallery-img, li").click(function(){
		$("iframe").each(function () { $(this).attr('src', $(this).attr('src')); });
		$("video").each(function () { this.pause() });
    });
	*/
	$(".gallery-img, .video-tabs-panel.vertical .tab-title").click(function(){
		$("iframe").each(function () { $(this).attr('src', $(this).attr('src')); });
		$("video").each(function () { this.pause() });
    });
	  
});



$(window).resize(function(){
	//cloning home page persona panels from mobile version to desktop version data - start
	//To hide or open based on mobile/Tablet/Desktop screens
	personaPanelWindowResize();
	//cloning home page persona panels from mobile version to desktop version data - end
	
	//overview tabs CTA boxes height match
	$(".cta-boxes").overviewTabCTABoxheightMatch();
	
	//product height match
	$(".products-group").productWithLeftImageheightMatch();

	
	if (window.matchMedia("(min-width: 651px)").matches) {
		//Meet us component height match
		$(".meet-us-component").heightMatch({
			itemSelector: '.meet-us-component-column',
			heightSelector: ['p']
		});
	}

	
	if (window.matchMedia("(min-width: 801px) and (max-width: 1031px)").matches) {
		//Persona Panels height match
		$(".persona-panel").heightMatch({
			itemSelector: '.persona-panels-expanded-launch-container',
			heightSelector: ['.panels']
		});
	}
	else{
		$(".persona-panel .persona-panels-expanded-launch-container .panels").css('height','auto');
	}
});

