const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");
const nav = document.querySelector("nav");
const loadingBar = document.getElementById("loading-bar");

const toggleNav = () => {
    navbar.classList.toggle("active");
    mobileNav.classList.toggle("hamburger-active");
};

mobileNav.addEventListener("click", () => toggleNav());





function toggleMenu() {
    document.getElementById('menubar').classList.toggle('active');
    document.body.classList.toggle('menu-open');
}

document.addEventListener('click', function (event) {
    const menubar = document.getElementById('menubar');
    if (!menubar.contains(event.target) && !event.target.closest('.hamburger')) {
        menubar.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});



// JavaScript for toggling menu and positioning submenu
document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function (event) {
            // Toggle display of submenu
            const submenu = dropdown.querySelector('.submenu');
            const isVisible = submenu.style.display === 'block';
            closeAllSubmenus(); // Close other submenus first

            if (!isVisible) {
                // Position submenu directly below the clicked item
                submenu.style.display = 'block';
                const rect = dropdown.getBoundingClientRect();
                submenu.style.top = `${rect.bottom}px`;
                submenu.style.left = `${rect.left}px`;
            }

            event.stopPropagation();
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function () {
        closeAllSubmenus();
    });

    function closeAllSubmenus() {
        const submenus = document.querySelectorAll('.submenu');
        submenus.forEach(submenu => submenu.style.display = 'none');
    }
});




// JavaScript code to show the scroll-to-top button and handle the smooth scroll

const backToTopButton = document.getElementById('back-to-top');

const toggleBackToTopButton = () => {
    backToTopButton.style.display = window.pageYOffset > 300 ? 'block' : 'none';
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Event listeners
window.addEventListener('scroll', toggleBackToTopButton);
backToTopButton.addEventListener('click', scrollToTop);