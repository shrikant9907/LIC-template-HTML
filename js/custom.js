 
jQuery(document).ready(function(){

    jQuery('.home_carousel').slick({
      centerMode: true,
      centerPadding: '0',
      slidesToShow: 1,
      prevArrow: '<div class="slick-prev"><i class="fas fa-angle-left"></i></div>',
      nextArrow: '<div class="slick-next"><i class="fas fa-angle-right"></i></div>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0', 
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 1
          }
        }
      ]
  });
});

 
// Scroll Effect Header
jQuery(window).scroll(function() {    
    var scroll = jQuery(window).scrollTop();

    if (scroll >= 300) {
        jQuery("body").addClass("scrolled");
    } else {
        jQuery("body").removeClass("scrolled");
    }
}); 


 