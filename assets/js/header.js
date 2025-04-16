document.body.classList.add('loading'); // disable scroll early

window.addEventListener("load", function () {
    const preloader = document.querySelector(".preloader");
    document.body.classList.remove('loading'); // enable scroll again

    // Hide immediately with a short fade (optional)
    preloader.style.transition = "opacity 0.3s ease";
    preloader.style.opacity = "0";

    setTimeout(() => {
        preloader.style.display = "none";
    }, 300); // Matches the fade time
});



document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent interference from other scripts
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menubar = document.querySelector('.menubar');

    // Toggle Menubar
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active');
        menubar.classList.toggle('active');
    });

    // Close menubar when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !menubar.contains(e.target)) {
            hamburger.classList.remove('hamburger-active');
            menubar.classList.remove('active');
        }
    });

    // Toggle Submenu in Menubar (click event for mobile)
    const submenuToggles = document.querySelectorAll('[data-toggle="submenu"]');
    submenuToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent navigation
            const parent = toggle.parentElement;
            const submenu = parent.querySelector('.submenu');
            if (submenu) {
                submenu.classList.toggle('active');
                const icon = toggle.querySelector('.dropdown-icon');
                if (icon) {
                    icon.classList.toggle('rotated');
                }
            }

            // Close the menubar when clicking on a submenu
            hamburger.classList.remove('hamburger-active');
            menubar.classList.remove('active');
        });
    });
});

// JavaScript code to show the scroll-to-top button and handle the smooth scroll

const toggleBackToTopButton = () => {
    backToTopButton.style.display = window.pageYOffset > 300 ? 'block' : 'none';
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Back to Top Button
const backToTopButton = document.querySelector('#back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

if (backToTopButton) {
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
