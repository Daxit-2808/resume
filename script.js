window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const headerHeight = document.querySelector('header').offsetHeight;
    
    if (window.scrollY > headerHeight) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});
