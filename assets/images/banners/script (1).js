// scripts.js

// Toggle the mobile menu visibility on hamburger icon click
const hamburgerIcon = document.getElementById("hamburger-icon");
const navLinks = document.querySelector(".nav-links");

hamburgerIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburgerIcon.classList.toggle("active");
});
 // Initialize EmailJS with your user ID (Get it from EmailJS dashboard)
    emailjs.init("your_emailjs_user_id");

    // Event listener for form submission
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();  // Prevents the page from refreshing
        
        // Send the form data using EmailJS
        emailjs.sendForm("your_service_id", "your_template_id", this)
            .then(function(response) {
                console.log("Message sent successfully", response);
                alert("Thank you for contacting us! We will get back to you soon.");
            })
            .catch(function(error) {
                console.error("Error sending message", error);
                alert("Oops! Something went wrong. Please try again later.");
            });
    });
    
    
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;  // The answer div is next to the question button
            answer.style.display = (answer.style.display === "block") ? "none" : "block";  // Toggle answer visibility
        });
    });