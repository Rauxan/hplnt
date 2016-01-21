/*
*
* Product Carousel height setting and carousel initialization setting related javascript
*
 */

;(function( $ ) {
    $.fn.productCarouselheightMatch = function( options ) {
		
		
		var $t = $(this);
        if(!$t.length ) {
            return false;
        }
		
        var $t = $(this),
            maxHeight = 0,
            defaults = {
                itemSelector: '.product-with-top-image', //class of child container
                heightSelector: ['.product-image', '.product-text'] //class or element of container to match heights
            },
            settings = $.extend( {}, defaults, options);

        for (var i = 0; i <= settings.heightSelector.length; i++) {
            var feature_titles = settings.itemSelector
                + ' '
                + settings.heightSelector[i];
            $t.find(feature_titles).each(function(idx) {
                    var featThis = $(this);
                    featThis.css('height', '');
                    maxHeight = maxHeight >= featThis.outerHeight() ? maxHeight : featThis.outerHeight();
                }
            ).height(maxHeight);
            maxHeight = 0;
        }

        return this;
    }
})(jQuery);




$(document).ready(function() {
	// Carousel
	$('.products-carousel-group').slick({
		slidesToShow: 1,
		dots: true,
		infinite: false,
		responsive: [{
			breakpoint: 2500,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: false,
				dots: false,
				arrows: true
			}
		}, {
			breakpoint: 769,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				dots: false,
				arrows: true
			}
		}, {
			breakpoint: 650,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				dots: false,
				arrows: true
			}
		}, {
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
				arrows: true
			}
		}],
		autoplay: false,
		autoplaySpeed: 2000
	});	
});