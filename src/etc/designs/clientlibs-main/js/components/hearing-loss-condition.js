$(document).ready(function(){$(window).resize(function(){

       if ($(window).width() <= 650) {  

           $('.tab-content-column').hide();
	
	$('.tab-panel-content-tabs-data1').find('.tab-title').find('a').click(function(){
		$(this).parent().parent().hide();	
	//	$('.tab-content-column').show();
	 var split_content = $(this).attr('href');
	 $(split_content).show();
	
		});
	$('.show-navigation').click(function(){
		$(this).parent().parent().parent().hide();
		$('.tab-panel-content-tabs-data1').find('.tabs').show();
		//$('.tab-content-column').hide();
		
		});	

       }     

});
	
	//$('.footer-part').clone().nextTo('.phonak-imag-colm-section');
	
	})