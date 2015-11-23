//Note: line height is set to match navigation_height and navigation_min_height respectivly
navigation_height = 600
navigation_min_height = 50


$(window).scroll(function() {

  if (($('body').scrollTop() >= -40) && ($('body').scrollTop() <= (navigation_height - navigation_min_height))) {
    //controls elements dimentions on scroll
    var s = $('body').scrollTop();
    console.log(s);
    $('#navigation').stop().animate({
      height: navigation_height - s,
    }, 10);
    $('#navigation #bs-example-navbar-collapse-1 > form > div').stop().animate({
      height: navigation_height - s,
      lineHeight: navigation_height - s,
    }, 10);
    $('#navigation #bs-example-navbar-collapse-1 > form > div > span').stop().animate({
      height: navigation_height - s,
      lineHeight: navigation_height - s,
    }, 10);
    $('#navigation #bs-example-navbar-collapse-1 > form > div > input').stop().animate({
      height: navigation_min_height - s / 30,
    }, 10);
    $('.navbar').css('box-shadow', 'none');
		$('.inside-nav').css('background-color', 'rgba(0,151,167, '+s/550+')');
		$('.navbar').css('background-image', 'url(https://static.pexels.com/photos/7355/startup-photos.jpg)');

    //Elements under navigation bar fix
    //Laggy? Remove this code. The over flow is has a pretty cool effect anyway.
    /*$('#nextElementFix').stop().animate({
			paddingTop:navigation_height-s,
    },10);
		console.log(s);*/
  } else if (($('body').scrollTop() >= -40) && ($('body').scrollTop() >= (navigation_height - navigation_min_height))) {
    //hold animation on fast scroll
    var s = $('body').scrollTop();
    $('#navigation').stop().animate({
      height: navigation_min_height
    }, 15);
    $('#navigation #bs-example-navbar-collapse-1 > form > div').stop().animate({
      height: navigation_min_height,
      lineHeight: navigation_min_height,
    }, 15);
    $('#navigation #bs-example-navbar-collapse-1 > form > div > span').stop().animate({
      height: navigation_min_height,
      lineHeight: navigation_min_height,
    }, 15);
    $('#navigation #bs-example-navbar-collapse-1 > form > div > input').stop().animate({
      height: 28,
    }, 10);
    $('.navbar').css('box-shadow', '0 1px 5px rgba(0,0,0,0.3)');
		$('.navbar').css('background-image', 'none');
		$('.navbar').css('background-color', 'rgba(0,151,167) !important');



    /*$('#nextElementFix').stop().animate({
    	paddingTop:navigation_min_height-s
    },15);*/
  }
});
