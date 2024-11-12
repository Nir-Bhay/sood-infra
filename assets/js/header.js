const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");
const nav = document.querySelector("nav");
const loadingBar = document.getElementById("loading-bar");

const toggleNav = () => {
    navbar.classList.toggle("active");
    mobileNav.classList.toggle("hamburger-active");
};

mobileNav.addEventListener("click", () => toggleNav());




// Add sticky class on scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
});

// Loading bar animation for navigation links
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        // Start loading animation
        loadingBar.style.width = "100%";

        setTimeout(() => {
            // Navigate to the link after a short delay
            window.location.href = e.target.href;

            // Reset loading bar after navigation
            loadingBar.style.width = "0";
        }, 400);
    });
});




// JavaScript code to show the scroll-to-top button and handle the smooth scroll
document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Show the button after the user scrolls down a bit
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {  // Adjust "100" as needed
            scrollToTopBtn.style.opacity = 1;
            scrollToTopBtn.style.visibility = "visible";
        } else {
            scrollToTopBtn.style.opacity = 0;
            scrollToTopBtn.style.visibility = "visible";
        }
    });

    // Smooth scroll to top when button is clicked
    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

