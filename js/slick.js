$(function (){

  $('.product-container').slick({
    dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 2,
  infinite: true,
  prevArrow: '<span class="priv_arrow"><i class="fas fa-chevron-circle-left"></i></span>',
    nextArrow: '<span class="next_arrow"><i class="fas fa-chevron-circle-right"></i></span>',
  responsive: [
    
    {
      breakpoint: 1424,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

   
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    
  });


    

});