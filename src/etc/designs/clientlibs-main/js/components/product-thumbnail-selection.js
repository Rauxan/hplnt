/*
 *
 * product-thumbnail-selection.js -	brand product details pages
 *
 */

$(document).ready(function() {
	$(".product-thumb-image .thumb-image-container").click(function(){
		var mediaType = $(this).find('img').attr('data-media-type');
		var mediaLink = $(this).find('img').attr('data-media-link');
		//alert(mediaType);
		//alert(mediaLink);
		
		//$(".product-img-div").html('');
		if(mediaType == "image")
		{
			$(".product-img-div").html('');
			$(".product-img-div").html('<img src="'+mediaLink+'" />');
		}
		if(mediaType == "video")
		{
			$(".product-img-div").html('');
			$(".product-img-div").html('<iframe width="100%" height="283" src="'+mediaLink+'" frameborder="0" allowfullscreen></iframe>');
		}
	});
	
	
	//Some Default cloning in product detail page:
	$(".hearing-aids-by-brand-product-tab .footer-part").clone().insertAfter(".hearing-aids-by-brand-product-tab .product-imag-colm-section").addClass("footer-part-copy").removeClass("footer-part");
	$(".hearing-aids-by-brand-product-tab .price-test-div").clone().insertAfter(".hearing-aids-by-brand-product-tab .footer-part-copy").addClass("medium-6 price-test-div-copy").removeClass("medium-12 price-test-div");
	$(".hearing-aids-by-brand-product-tab .main-tab-navigator").clone().insertBefore(".hearing-aids-by-brand-product-tab .product-imag-colm-section").addClass("copy-of-the-navigator").removeClass("main-tab-navigator");
	
	$(".hearing-aids-by-brand-product-tab .footer-part").clone().insertBefore(".hearing-aids-by-brand-product-tab .buyers-guide-button").addClass("footer-part-copy-above-buyer-guide");
	$(".hearing-aids-by-brand-product-tab .price-test-div").clone().insertAfter(".hearing-aids-by-brand-product-tab .footer-part-copy-above-buyer-guide").addClass("price-test-div-copy-above-buyer-guide");
	
	/*if (window.matchMedia("(max-width: 650px)").matches) {
		$(".hearing-aids-by-brand-product-tab .footer-part").hide();
		$(".hearing-aids-by-brand-product-tab .price-test-div").hide();
	}*/
});