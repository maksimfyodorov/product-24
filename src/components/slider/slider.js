import '/node_modules/slick-carousel/slick/slick.css'
import '/node_modules/slick-carousel/slick/slick.min.js'

if (window.innerWidth <= 768) {
  $('.slider__mobile').slick({
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slide: '.slider__card'
  });
}

window.addEventListener('resize', function() {
  if (window.innerWidth <= 767) {
    $('.slider__mobile').slick({
      infinite: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slide: '.slider__card'
    });
  }
  else {
    $('.slider__mobile').slick('unslick');
  }
});
