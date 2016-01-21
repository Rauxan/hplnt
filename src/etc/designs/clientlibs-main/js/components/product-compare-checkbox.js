/*
 *
 * product-compare-checkbox related javascript
 *
 */
 
 
 
$(document).ready(function() {
	function setProductCompareCheckboxChecked(){
		$('.product-compare-box input[type=checkbox]').each(function () {
			if(this.checked){
				$(this).closest(".product-compare-box").css('background-color','#d0cedc');
				$(this).closest(".product-compare-box").find('.fa').css('display','block');
			}
			else{
				$(this).closest(".product-compare-box").css('background-color','transparent');
				$(this).closest(".product-compare-box").find('.fa').css('display','none');
			}
		});
	}
	$(".compare-checkbox").click(function(){
		setProductCompareCheckboxChecked();
	});
	setProductCompareCheckboxChecked();
});