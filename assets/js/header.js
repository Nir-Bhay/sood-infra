
document.addEventListener('DOMContentLoaded', () => {
  
    const preloader = document.querySelector('.preloader');

  

    // Simulate loading with preloader
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            preloader.classList.add('active');
            setTimeout(() => {
                preloader.classList.remove('active');
                window.location.href = e.target.href;
            }, 1000); // Adjust delay as needed
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
        });
    });
});


// // // JavaScript code to show the scroll-to-top button and handle the smooth scroll

const backToTopButton = document.getElementById('back-to-top');

const toggleBackToTopButton = () => {
    backToTopButton.style.display = window.pageYOffset > 300 ? 'block' : 'none';
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// // Event listeners
// window.addEventListener('scroll', toggleBackToTopButton);
// backToTopButton.addEventListener('click', scrollToTop);
