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