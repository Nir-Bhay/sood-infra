// Scroll Animation Script
const scrollElements = document.querySelectorAll('[data-scroll], .usp-icon, .management-card');

// Function to check if an element is in the viewport
const isInViewport = (el, offset = 1.25) => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) / offset
    );
};

// Function to display an element with the animation class
const displayScrollElement = (element) => {
    element.classList.add('active');
};

// Function to hide an element (optional for resetting animation)
const hideScrollElement = (element) => {
    element.classList.remove('active');
};

// Main function to handle scroll animation
const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (isInViewport(el)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el); // Optional: Comment this out if animations should not reset.
        }
    });
};

// Event listener for scroll
window.addEventListener('scroll', handleScrollAnimation);

// Initial call to check elements on page load
handleScrollAnimation();
