

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar.sticky-top');
    if (window.pageYOffset > 100) { // Adjust this value as needed
        navbar.style.top = '0';
    } else {
        navbar.style.top = '-100px';
    }
});
