$(function(){


	var introH = $("#intro").innerHeight(),
		header = $("#header"),
		scrollOffset = $(window).scrollTop();

	checkScroll(scrollOffset);

	//fixedHeader
	$(window).on("scroll", function(){

		scrollOffset = $(this).scrollTop();
		checkScroll(scrollOffset);

	});

	function checkScroll(scrollOffset) {
		
		if (scrollOffset >= introH) {
			header.addClass("intro--fixed");
		} else{
			header.removeClass("intro--fixed");
		}
	}


	//smooth scroll

	$("[data-scroll]").on("click", function(event){
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top;

		$("#nav a").removeClass("active");
		$this.addClass("active");

		$("html, body").animate({
			scrollTop: blockOffset
		}, 500);

	});

	//menu Nav

	$("#nav_toggle").on("click",function(event){
		event.preventDefault();

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");

	});


	//accordion

	$("[data-collapse]").on("click", function(event){
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('collapse');

		$this.toggleClass("wedo_it_info--active");
		//$(blockId).slideToggle();


	});

})