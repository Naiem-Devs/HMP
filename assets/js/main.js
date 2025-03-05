(function($) {
  "use strict";
  
 // menu 
 $('.siteBar-btn').click( function (event){ 
    event.preventDefault()
    $(this).toggleClass('active');   
    $('.mobile-menu').toggleClass('siteBar');   
  }); 



 // menu 
 $('.History__text a').click( function (event){ 
    event.preventDefault()  
    $('.timeLine-PAGE').toggleClass('show');   
    $('.service-area').toggleClass('d-none');   
    $('.blog-area').toggleClass('d-none');   
    $('.fixed__nav').toggleClass('d-none');   
    $('.body-bg').toggleClass('d-none');   
  }); 
 $('.back-btn').click( function (event){ 
    event.preventDefault()  
    $('.timeLine-PAGE').toggleClass('show');   
    $('.service-area').toggleClass('d-none');   
    $('.blog-area').toggleClass('d-none');     
    $('.fixed__nav').toggleClass('d-none');   
    $('.body-bg').toggleClass('d-none');   
  }); 

  $(".History__text a ").click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 100);
    return false;

  });

  // page Animation
  AOS.init({
    mirror: true,
    duration: 1500,
    initClassName: 'aos-init',
    once: false,
  });

  // data-aos="fade-up" 
  // data-aos-delay="300" 

 
})(jQuery);
