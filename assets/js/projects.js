// Project Filtering with Smooth Transitions
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.project-categories button');
    const projectCards = document.querySelectorAll('.project-card');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button styling
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter projects
            const filter = button.getAttribute('data-filter');
            projectCards.forEach(card => {
                if (filter === 'all' || card.classList.contains(filter)) {
                    card.style.display = 'block';
                    card.classList.add('fadeIn'); // Add animation class
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});


