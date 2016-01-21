/*
 *
 * Slider tabs related javascript
 *
 */

var sliderTabsSelectBoxExecuted = 0;
;(function( $ ) {
    $.fn.sliderTabs = function( options ) {
		var $t = $(this);
        if(!$t.length ) {
            return false;
        }
		
		this.each( function() {
			var totalTabs = $t.find('ul li').length;
			//alert(totalTabs);
			var eachTabWidth = 100 / totalTabs; //(Getting width percentage for each tab)
			//alert(eachTabWidth);
			$t.find('ul').css("width","100%");	//setting ul to full width
			$t.find('ul li').css("width",eachTabWidth+"%");	//setting ul li equal width
            //$(this).text("Hello, World!");
			$t.find('.active-tab-slider').css("width",eachTabWidth+"%");	//setting active slider width based on each tab width
			$t.find('ul li').click(function(){
				var clickedTabElementIndex = $(this).index();
				//alert(clickedTabElementIndex);
				var clickedTabElementIndexNaturalNumber = clickedTabElementIndex + 1;
				//alert(clickedTabElementIndexNaturalNumber);
				$t.find('.active-tab-slider').css("left", clickedTabElementIndex * eachTabWidth+"%");	//set left position of the slider
				
				//set selectbox option based on list anchor click
				//$t.next(".slider-tabs-container-select-box option").eq(clickedTabElementIndex).prop('selected', true);
				//alert(clickedTabElementIndex);
				//$t.next(".slider-tabs-container-select-box").selectedIndex = "1";
				//document.getElementById("mySelect").selectedIndex = "1";
				
				
				//$t.next(".slider-tabs-container-select-box").prop("selectedIndex",clickedTabElementIndex);
				$t.next(".slider-tabs-container-select-box-container").find(".slider-tabs-container-select-box").prop("selectedIndex",clickedTabElementIndex);
				
				//Getting and setting selected value to '.selected-tab-text' box
				var selectedText = $t.next(".slider-tabs-container-select-box-container").find(".slider-tabs-container-select-box").find('option:selected').text();
				$t.next(".slider-tabs-container-select-box-container").find(".selected-tab-text").text(selectedText);
				
				//$('.slider-tabs-container-select-box').ddslick('select', {index: clickedTabElementIndex });
				//$('.slider-tabs-container-select-box').ddslick('select', {index: 1 });
			});
			
			
			if(sliderTabsSelectBoxExecuted == 0)
			{
				//Remove select box if already exists
				$t.next(".slider-tabs-container-select-box-container").remove();
				$t.next(".slider-tabs-container-select-box").remove();
				$t.after('<div class="slider-tabs-container-select-box-container"></div>');
				$t.next(".slider-tabs-container-select-box-container").append('<span class="selected-tab-text">Overview</span>');
				$t.next(".slider-tabs-container-select-box-container").append('<i class="fa fa-sort-desc"></i>');
				$t.next(".slider-tabs-container-select-box-container").append('<select class="slider-tabs-container-select-box"></select>');
				
				
				//$t.after('<select class="slider-tabs-container-select-box"></select>');
				//Append all the list values of li in select box
				$t.find('ul li a').each( function() {
					var currentListAnchorText = $(this).text();
					var currentListAnchorTextHref = $(this).attr("href");
					$t.next(".slider-tabs-container-select-box-container").find(".slider-tabs-container-select-box").append("<option value='"+currentListAnchorTextHref+"'>"+currentListAnchorText+"</option>");
				});
				
				//Getting selected default value and setting selected value to '.selected-tab-text' box
				var selectedText = $t.next(".slider-tabs-container-select-box-container").find(".slider-tabs-container-select-box").find('option:selected').text();
				$t.next(".slider-tabs-container-select-box-container").find(".selected-tab-text").text(selectedText);
			}
			
			
			sliderTabsSelectBoxExecuted = 1;
			
        });
		
	
		return this;
    }
	
	
	
})(jQuery);


$(document).ready(function() {
	//set 
	/*$(".slider-tabs-container-select-box").change(function(){});*/
	$(document).on('change', '.slider-tabs-container-select-box', function() {
		var selectedTabIndex = $(".slider-tabs-container-select-box option:selected").index();
		//alert(selectedTabIndex);
		//setting tab slider position with click() function - clicking programatically
		$(this).closest(".slider-tabs-container-select-box-container").prev(".slider-tabs-container").find('ul li a').eq(selectedTabIndex).click();
		
		//Getting and setting selected value to '.selected-tab-text' box
		var selectedText = $(this).find('option:selected').text();
		$(this).closest(".slider-tabs-container-select-box-container").find(".selected-tab-text").text(selectedText);
	});
});

