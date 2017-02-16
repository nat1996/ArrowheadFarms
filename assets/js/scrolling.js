
  $(window).scroll(function(){
    var wScroll = $(window).scrollTop();
    //console.log(wScroll);
    var aWScroll = 40 - wScroll/10;
    $('.logo').css('background-position', '10px ' + aWScroll + 'vh');


    if(wScroll < $(window).height()){
      var pos = $('.gridR').css('padding-left');
      var movpos = 50 + wScroll/10;
      if(movpos < 50){
        $('.gridR').css('padding-left', movpos + 'vw');
      }

    }

    $('.gridR').each( function(i){

      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window >= bottom_of_object ){

          $(this).animate({'opacity':'1'},600);

      }
    });

    $('.gridL').each( function(i){

      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window >= bottom_of_object ){

          $(this).animate({'opacity':'1'},600);

      }
    });



  });


  function cycleBackgrounds() {
	var index = 0;

	$imageEls = $('.toggle-image'); // Get the images to be cycled.

	setInterval(function () {

    $('.contain').attr("background-image","url(https://github.com/nat1996/blank_website_template/blob/master/assets/img/ElizabethCitySunDowntown.jpg?raw=true)");


		// // Get the next index.  If at end, restart to the beginning.
		// index = index + 1 < $imageEls.length ? index + 1 : 0;
		// // Show the next image.
		// $imageEls.eq(index).addClass('show');
		// // Hide the previous image.
		// $imageEls.eq(index - 1).removeClass('show');

	}, 10000);

  setInterval(function () {

    $('.contain').attr("background-image","url(https://github.com/nat1996/blank_website_template/blob/master/assets/img/ElizabethCitySunDowntown.jpg?raw=true)");

  }, 10000);
  setInterval(function () {

    $('.contain').attr("background-image","url(https://github.com/nat1996/blank_website_template/blob/master/assets/img/ElizabethCitySunDowntown.jpg?raw=true)");

  }, 10000);
};

// Document Ready.
$(function () {
	cycleBackgrounds();
});
