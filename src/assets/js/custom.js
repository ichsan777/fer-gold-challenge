// slick slider
// $(".carousel-testicard").slick({
//   centerMode: true,
//   centerPadding: "60px",
//   slidesToShow: 1,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: "40px",
//         slidesToShow: 1,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: "40px",
//         slidesToShow: 1,
//       },
//     },
//   ],
// });

// coba bikin carousel
// var carouselWidth = $(".carousel-testicard")[0].scrollWidth;
// var cardWidth = $(".carousel-testicard .col-lg-8").width();

// var scrollPosition = 0;
// $("carousel-testicard").animate({ scrollLeft: cardWidth }, 600);
// $(".test-next").on("click", function () {
//   if (scrollPosition < carouselWidth - cardWidth * 1) {
//     console.log("next");
//     scrollPosition = scrollPosition + cardWidth;
//     $(".carousel-testicard").animate({ scrollLeft: scrollPosition }, 600);
//   }
// });
// $(".test-prev").on("click", function () {
//   if (scrollPosition > 0) {
//     console.log("prev");
//     scrollPosition = scrollPosition - cardWidth;
//     $(".carousel-testicard").animate({ scrollLeft: scrollPosition }, 600);
//   }
// });

const mediaQueryDesktop = window.matchMedia("(min-width: 769px)");
if (mediaQueryDesktop.matches) {
  var myCarousel = document.querySelector("#myCarousel");
  var carousel = new bootstrap.Carousel(myCarousel, { interval: 6000, wrap: true });
  var slides = document.querySelectorAll("#testimonial .carousel .carousel-item");

  slides.forEach((el) => {
    // number of slides per carousel-item
    const minPerSlide = slides.length;
    let next = el.nextElementSibling;
    for (var i = 1; i < minPerSlide; i++) {
      if (!next) {
        // wrap carousel by using first child
        next = slides[0];
      }
      let cloneChild = next.cloneNode(true);
      el.appendChild(cloneChild.children[0]);
      next = next.nextElementSibling;
    }
  });
}
