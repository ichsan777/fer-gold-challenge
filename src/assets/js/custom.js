// Carousel Testimonial Custom Partial
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
