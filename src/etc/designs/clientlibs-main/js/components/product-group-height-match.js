/*
*
* Product height setting related javascript
*
 */

;(function( $ ) {
    $.fn.productWithLeftImageheightMatch = function( options ) {
		
		
		var $t = $(this);
        if(!$t.length ) {
            return false;
        }
		
        var $t = $(this),
            maxHeight = 0,
            defaults = {
                itemSelector: '', //class of child container
                heightSelector: ['.product-with-left-image'] //class or element of container to match heights
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