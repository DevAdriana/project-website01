$(".autoplay").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  centerMode: true,
  centerPadding: 0,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});
