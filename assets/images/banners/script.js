// scripts.js

// Toggle the mobile menu visibility on hamburger icon click
const hamburgerIcon = document.getElementById("hamburger-icon");
const navLinks = document.querySelector(".nav-links");

hamburgerIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburgerIcon.classList.toggle("active");
});
