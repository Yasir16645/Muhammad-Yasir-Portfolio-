
// Select the menu button and navbar
const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');

// Toggle the navbar visibility on menu button click
menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

var typed = new Typed(".text", {
    strings: ["Web Developer", "SEO Technician", "Virtual Assistant"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

