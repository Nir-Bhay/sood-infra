



document.getElementById('search-bar').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    document.querySelectorAll('.faq-item').forEach(item => {
        const question = item.querySelector('.faq-question').textContent.toLowerCase();
        item.style.display = question.includes(query) ? 'block' : 'none';
    });
});

document.getElementById('expand-all').addEventListener('click', () => {
    document.querySelectorAll('.faq-answer').forEach(answer => {
        answer.classList.add('active');
    });
});

document.getElementById('collapse-all').addEventListener('click', () => {
    document.querySelectorAll('.faq-answer').forEach(answer => {
        answer.classList.remove('active');
    });
});
document.querySelectorAll('.feedback-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Thank you for your feedback!');
    });
});









// FAQ Expand/Collapse Functionality
document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        answer.classList.toggle('active');
    });
});

// Feedback Form Validation and Submission
const form = document.getElementById('feedback-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Validate form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && subject && message) {
        // Show success message
        formMessage.textContent = "Thank you for your feedback!";
        formMessage.style.color = "green";
        form.reset();
    } else {
        // Show error message
        formMessage.textContent = "Please fill out all fields.";
        formMessage.style.color = "red";
    }
});



// Smooth Scroll Animation on Page Load
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
    });
});

