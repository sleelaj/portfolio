// GSAP Animations
document.addEventListener('DOMContentLoaded', () => {
    AOS.init(); // Initialize AOS (Animate on Scroll)
});

var typed = new Typed('#animated-text', {
    strings: ["a Full Stack Java Developer", "a Software Engineer", "an Innovator"],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true,
});