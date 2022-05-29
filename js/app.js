$(function(){

  setTimeout(function(){ anim.stop() }, 2000);
  setTimeout(function(){ $('#lottie').hide() }, 2000);

  var $mq = $('#railway1')
    .bind('finished', function () {
      $('#slider').slick('slickNext')
    })
    .marquee({
      duration: 14000,
      startVisible: false,
      duplicated: false,
      delayBeforeStart: 0
    })

  var $mq2 = $('#railway2')
    .marquee({
      duration: 14000,
      startVisible: false,
      duplicated: false,
      delayBeforeStart: 0,
      direction : 'right'
    })

  // burger
  $("#burder").on("click",function(event){
    event.preventDefault();
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $("#menu").toggleClass("active");
      setTimeout(function(){
        $("#heater-btn").toggleClass("active")
        $("#logo").toggleClass("active")
        $("#menu-container").fadeIn(500)
      }, 500);
    } else {
      $("#menu-container").fadeOut(500)
      setTimeout(function(){ 
        $("#menu").toggleClass("active")
        $("#heater-btn").toggleClass("active")
        $("#logo").toggleClass("active") 
      }, 500);
    }
  });

  //fullpage
  
  function pageStart() {
    $('#pagepiling').pagepiling({
      navigation: false,
      onLeave: function(index, nextIndex, direction){
        if (index == 1 || index == 3) {
          $('#line').addClass("line-amin")
          $("#slider-more-btn").attr("href", $('.slick-current').data("link"))
          showNewMarquee()
        } else {
          $('#line').removeClass("line-amin")
        }
      }
    });
  }


  //railway
  $mq.marquee('pause');
  $mq2.marquee('pause');
  //slider
  $('#slider').slick({
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    vertical: true,
    verticalSwiping: true,
    adaptiveHeight: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: false
	});

  var maxHeight = -1;
  $('.slider-item').each(function() {
    if ($(this).height()  > maxHeight) {
      maxHeight = $(this).height();
    }
  });
  $('.slider-item').each(function() {
    if ($(this).height() < maxHeight) {
      $(this).css('margin', Math.ceil((maxHeight-$(this).height())/2) + 'px 0');
    }
  });

    if ($(window).width() <= '750') {
      $('#line').addClass("line-amin")
      $("#slider-more-btn").attr("href", $('.slick-current').data("link"))
      showNewMarquee()
    } else {
      pageStart()
    }


  
  $('#slider').on('afterChange', () => {
    let y = $('#slider').slick('slickCurrentSlide')
    $('#slide-prew').text(twoDigits(y + 1))
    $('#line').addClass("line-amin")
    $("#slider-more-btn").attr("href", $('.slick-current').data("link"))
    showNewMarquee()
  });
  $('#slider').on('beforeChange', () => {
    $('#line').removeClass("line-amin")
    $mq.addClass("opasityClass");
    $mq2.addClass("opasityClass");
  });

  $('#slide-prew').text(twoDigits($('#slider').slick('slickCurrentSlide') + 1))
  let x = $('#slider').slick('getSlick')
  $('#slide-next').text(twoDigits(x.slideCount))

  function twoDigits(num) {
    return ('0' + num).slice(-2);
  }

  function showNewMarquee() {
    $mq.removeClass("opasityClass")
    $mq2.removeClass("opasityClass")
    $mq
      //.marquee('destroy')
      .text($('.slick-current').data("name"))
      .marquee({
        duration: 10000,
        startVisible: false,
        duplicated: true,
        delayBeforeStart: 0,
        gap: '300px'
      })
    $mq2
      .html($('.slick-current').data("name"))
      .marquee({
        duration: 10000,
        startVisible: false,
        duplicated: true,
        delayBeforeStart: 0,
        gap: '300px',
        direction : 'right'
      })
  }

  $("#videos").on("click",function(event){
    event.preventDefault();
    openFullscreen()
  });
  $("#videos").on("mouseover",function(event){
    event.preventDefault();
    $("#intro-img").addClass('img-active')
  });
  $("#videos").on("mouseout",function(event){
    event.preventDefault();
    $("#intro-img").removeClass('img-active')
  });



function openFullscreen() {
  var elem = document.getElementById("fs_section_video");
  elem.currentTime = 0
  elem.play()
  console.log(elem)
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

});