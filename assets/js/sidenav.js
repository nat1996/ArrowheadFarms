$(window).scroll(function(){

  $('.sidenav').each( function(i){

    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    /* If the object is completely visible in the window, fade it it */
    if( bottom_of_window >= bottom_of_object ){
        $(this).stop()
        $(this).animate({'opacity':'1'},600);
        //$(this).animate({"marginTop": ($(window).scrollTop()) + "px"}, "slow" );

    }

    else{
      $(this).stop()
      $(this).animate({'opacity':'0'},600);

    }
  });

});
