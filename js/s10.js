
  // Wait until the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function () {
    const myCarousel = document.querySelector('#carouselExampleCaptions');
    const carousel = new bootstrap.Carousel(myCarousel, {
      interval: false, // disable built-in auto sliding
      ride: false
    });

    // Custom auto-slide every 2 seconds
    setInterval(() => {
      carousel.next();
    }, 3000);
  });