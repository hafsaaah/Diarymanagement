(function ($) {

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar.sticky-top');
    if (window.pageYOffset > 100) { // Adjust this value as needed
        navbar.style.top = '0';
    } else {
        navbar.style.top = '-100px';
    }
});
// Testimonials carousel
$(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: false,
    loop: true,
    dots: true,
    nav: true,
    navText : [
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>'
    ]
});

  
})(jQuery);
