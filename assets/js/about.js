// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

    const revealOnScroll = function () {
        for (let i = 0; i < scrollRevealElements.length; i++) {
            const element = scrollRevealElements[i];
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight * 0.75) {
                element.classList.add('revealed');
            }
        }
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check on page load
});



