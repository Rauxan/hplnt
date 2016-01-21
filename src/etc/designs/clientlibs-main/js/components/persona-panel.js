/*
 *
 * Persona Panel related javascript -	Home Page
 *
 */


  var clickedExpandedLaunchContainer;
  var clickedExpandedLaunchContainerOpened = '';
;(function( $ ) {
    $.fn.personaPanelTabs = function( options ) {
		var $t = $(this);
        if(!$t.length ) {
            return false;
        }
		
		
		//cloning home page persona panels from mobile version to desktop version data - start
		//cloning persona panel1
		var panel1HTML = $(".mobile-persona-panel-descriptions.panel1-container").html();
		$(".tablet-desktop-persona-panel-descriptions.panel1-container").html(panel1HTML);
		//cloning persona panel2
		var panel2HTML = $(".mobile-persona-panel-descriptions.panel2-container").html();
		$(".tablet-desktop-persona-panel-descriptions.panel2-container").html(panel2HTML);
		//cloning persona panel3
		var panel3HTML = $(".mobile-persona-panel-descriptions.panel3-container").html();
		$(".tablet-desktop-persona-panel-descriptions.panel3-container").html(panel3HTML);


		//expand panels
		$(".persona-panels-expanded-launch-container").click(function(){
			//Get clicked '.persona-panels-expanded-launch-container' 'data-expanded-container' attribute value
			clickedExpandedLaunchContainer = $(this).attr("data-expanded-container");
			//alert(clickedExpandedLaunchContainer);
			
			//set clicked launch container plus icon to minus icon and set all other icons to plus icon
			$(".persona-panels-expanded-launch-container .panels .fa").removeClass("fa-minus-square");
			$(".persona-panels-expanded-launch-container .panels .fa").addClass("fa-plus-square");
			$(this).find(".fa").removeClass("fa-plus-square");
			$(this).find(".fa").addClass("fa-minus-square");
			
			//alert(clickedExpandedLaunchContainerOpened);
			//alert(clickedExpandedLaunchContainer);
			
			if(clickedExpandedLaunchContainerOpened == clickedExpandedLaunchContainer)
			{
				//hide all the expanded panels in mobile and desktop screens and set variable 'clickedExpandedLaunchContainer' to empty to represent that all expanded panels are closed
				$(".mobile-persona-panel-descriptions").hide();
				$(".tablet-desktop-persona-panel-descriptions").hide();
				clickedExpandedLaunchContainer = '';
				clickedExpandedLaunchContainerOpened = '';
				
				//set clicked launch container plus icon to minus icon and set all other icons to plus icon
				$(".persona-panels-expanded-launch-container .panels .fa").removeClass("fa-minus-square");
				$(".persona-panels-expanded-launch-container .panels .fa").addClass("fa-plus-square");
			}
			else
			{
				//if desktop versions use this functionality else use else condition
				if (window.matchMedia("(min-width: 651px)").matches) {
				  /* the viewport is at least 651 pixels wide */
				  //Tablet and Desktop screens//At default on click hide all the panels in mobile and desktop screens
				  $(".mobile-persona-panel-descriptions").hide();
				  $(".tablet-desktop-persona-panel-descriptions").hide();
				  $(".tablet-desktop-persona-panel-descriptions."+clickedExpandedLaunchContainer).show();
				} else {
				  /* the viewport is less than 651 pixels wide */
				  //Mobile screens//At default on click hide all the panels in mobile and desktop screens
				  $(".mobile-persona-panel-descriptions").hide();
				  $(".tablet-desktop-persona-panel-descriptions").hide();
				  $(".mobile-persona-panel-descriptions."+clickedExpandedLaunchContainer).show();
				}
				clickedExpandedLaunchContainerOpened = clickedExpandedLaunchContainer;
			}
		});
		//close expanded persona panels
		$(".close-expanded-panels").click(function(){
			//hide all the expanded panels in mobile and desktop screens and set variable 'clickedExpandedLaunchContainer' to empty to represent that all expanded panels are closed
			$(".mobile-persona-panel-descriptions").hide();
			$(".tablet-desktop-persona-panel-descriptions").hide();
			clickedExpandedLaunchContainer = '';
			clickedExpandedLaunchContainerOpened = '';
			
			//set clicked launch container plus icon to minus icon and set all other icons to plus icon
			$(".persona-panels-expanded-launch-container .panels .fa").removeClass("fa-minus-square");
			$(".persona-panels-expanded-launch-container .panels .fa").addClass("fa-plus-square");
		});
		
		
		
		
		//cloning home page persona panels from mobile version to desktop version data - end
	
		return this;
    }
	
})(jQuery);



	//To hide or open based on mobile/Tablet/Desktop screens
	function personaPanelWindowResize(){
		//Tablet and Desktop screens
		//At default on click hide all the panels in mobile and desktop screens
		$(".mobile-persona-panel-descriptions").hide();
		$(".tablet-desktop-persona-panel-descriptions").hide();
		//alert(clickedExpandedLaunchContainer);
		if(clickedExpandedLaunchContainer != '')
		{
			//if desktop versions use this functionality else use else condition
			if (window.matchMedia("(min-width: 651px)").matches) {
			  /* the viewport is at least 651 pixels wide */
			  //Tablet and Desktop screens//At default on click hide all the panels in mobile and desktop screens
			  $(".mobile-persona-panel-descriptions").hide();
			  $(".tablet-desktop-persona-panel-descriptions").hide();
			  $(".tablet-desktop-persona-panel-descriptions."+clickedExpandedLaunchContainer).show();
			} else {
			  /* the viewport is less than 651 pixels wide */
			  //Mobile screens//At default on click hide all the panels in mobile and desktop screens
			  $(".mobile-persona-panel-descriptions").hide();
			  $(".tablet-desktop-persona-panel-descriptions").hide();
			  $(".mobile-persona-panel-descriptions."+clickedExpandedLaunchContainer).show();
			}
		}
	}

	
	$(document).ready(function(){
		$(".testimonal-panel-data .intro-column-mobile").clone().insertAfter(".testimonal-panel-data .tabs-container").addClass("intro-column-tablet-desktop");
	});
