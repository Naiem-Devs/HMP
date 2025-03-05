(function($) {
  "use strict";
  
 // menu 
 $('.siteBar-btn').click( function (event){ 
    event.preventDefault()
    $(this).toggleClass('active');   
    $('.mobile-menu').toggleClass('siteBar');   
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
