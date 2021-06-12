$(document).ready(function(){

  // $('.navigation__btn').on('click', function(){
  //   $('.navigation__list').slideToggle();
  // });

  $('.home__wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  });

  $('.people__box').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false
  });

})

