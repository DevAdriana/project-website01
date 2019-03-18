//SLICK
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
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//NAVBAR
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.height = "50px";
    document.getElementById("brand-logo").style.height = "40px";
  } else {
    document.getElementById("navbar").style.height = "100px";
    document.getElementById("brand-logo").style.height = "80px";
  }
}
