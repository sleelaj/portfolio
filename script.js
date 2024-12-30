// GSAP Animations
document.addEventListener('DOMContentLoaded', () => {
    AOS.init(); // Initialize AOS (Animate on Scroll)
});

// Typed.js for Animated Text
var typed = new Typed('#animated-text', {
    strings: ["a Full Stack Developer", "a Software Engineer", "an Innovator"],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true,
});