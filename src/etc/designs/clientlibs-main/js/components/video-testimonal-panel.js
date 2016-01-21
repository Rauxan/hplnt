/*
 *
 * video Testimonal Carousel related javascript -	Home Page
 *
 */

currentClickedTabIndex = 0;
;(function( $ ) {
    $.fn.videoTestimonalCarousel = function( options ) {
		var $t = $(this);
        if(!$t.length ) {
            return false;
        }
		
		//Video Testimonals Carousel Functionality - Start
	   $('.video-testimonal-carousel').slick({
		 slidesToShow: 1,
		 dots: true,
		 infinite: false,
		 responsive: [
		{
		  breakpoint: 3025,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			variableWidth: true,
			infinite: false,
			draggable: false,
			dots: false
		  }
		},
		{
		  breakpoint: 650,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: false,
			draggable: true,
			dots: true,
			autoplay: false
			  }
		}], autoplay: false,
		autoplaySpeed: 2000
	   });
	   
	   
	   
		//testimonalPanelActiveSlide();
		$(".testimonal-panel-tabs-data .tabs li").click(function(){
			var currentClickedTabIndex = $(this).index();
			//alert(currentClickedTabIndex);
			testimonalPanelActiveSlide(currentClickedTabIndex);
		});
		//setting testimonal Panel Active Slide to tabs in home page - end
	
		return this;
    }
	
})(jQuery);


		//setting testimonal Panel Active Slide to tabs in home page - start
		currentClickedTabIndex = 0;
		function testimonalPanelActiveSlide(currentClickedTabIndex){
			//alert(currentClickedTabIndex);
			/*
			var total_a_list = $(".testimonal-panel-tabs-data li a").length;
			//alert(total_a_list);
			$(".testimonal-panel-tabs-data li a").each(function(){
				//alert($(this).width())
			});
			*/
			var total_tab_list = $(".testimonal-panel-tabs-data .tabs li").length;
			//alert(total_tab_list);
			
			if(currentClickedTabIndex == 0){
				$(".active-tab-slider").css("left","0px");
			}
			/*else if(currentClickedTabIndex == (total_tab_list - 1)){
				$(".active-tab-slider").css("left","0px");
			}*/
			else
			{
				//alert(currentClickedTabIndex);
				previousTabsWidth = 0;
				//Getting previous Tabs width and calculating to variable 'previousTabsWidth'
				for(var i=0;i<currentClickedTabIndex;i++)
				{
					var tabElementWidth = $(".testimonal-panel-tabs-data .tabs li:eq("+i+")").width();
					previousTabsWidth = previousTabsWidth + tabElementWidth;
				}
				//alert(previousTabsWidth);
				$(".active-tab-slider").css("left",previousTabsWidth+"px");
			}
			//alert(currentClickedTabIndex);
			//$('.video-testimonal-carousel').slick({});
		}
		
		
