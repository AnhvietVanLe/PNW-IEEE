// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

// Import CSS files
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

// Import JavaScript files
import 'bootstrap';
import 'jquery';
import 'owl.carousel';

document.addEventListener('DOMContentLoaded', () => {
  $('.owl-carousel').owlCarousel({
    items: 3,
    autoplay: true,
    autoplayTimeout: 3000,
    loop: true
  });
});
