$(document).ready(function() {
	$(".faq__block-text").hide().prev().click(function() {
		$(this).parents(".faq__content-block-item").find(".faq__block-text").not(this).slideUp().prev().removeClass("active");
		$(this).next().not(":visible").slideDown().prev().addClass("active");
	});
}); 

