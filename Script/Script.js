$(document).ready(function(){
	/*Pwede ma change ang name sa function*/
	setBindings();
});

function setBindings() {
		$("nav a").click(function(e){
			e.preventDefault();
			var sectionID = e.currentTarget.id + "Page";
			
			$("html, body").animate({
				scrollTop: $("#" + sectionID).offset().top
			}, 1000)
		})
}


$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);