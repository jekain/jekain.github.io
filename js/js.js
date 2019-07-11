$(function(){

	$('.responsive').slick({
	  dots: true,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  responsive: [
	    {
	      breakpoint: 1100,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: false
	      }
	    },
	    {
	      breakpoint: 850,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        dots: false
	      }
	    },
	    {
	      breakpoint: 650,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        dots: false
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});

	
	//menu Nav

	$("#nav_toggle").on("click",function(event){
		event.preventDefault();

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");

	});
});

