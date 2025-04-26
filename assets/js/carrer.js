// Job filter functionality
document.getElementById("location-filter").addEventListener("change", filterJobs);
document.getElementById("type-filter").addEventListener("change", filterJobs);

function filterJobs() {
    const location = document.getElementById("location-filter").value;
    const type = document.getElementById("type-filter").value;
    const jobs = document.querySelectorAll(".job");

    jobs.forEach(job => {
        const jobLocation = job.querySelector("p:nth-of-type(1)").textContent.toLowerCase();
        const jobType = job.querySelector("p:nth-of-type(2)").textContent.toLowerCase();

        if (
            (location === "all" || jobLocation.includes(location)) &&
            (type === "all" || jobType.includes(type))
        ) {
            job.style.display = "block";
        } else {
            job.style.display = "none";
        }
    });
}

function validateApplyForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const position = document.getElementById('position').value.trim();
    const resume = document.getElementById('resume').files[0];
    const message = document.getElementById('message').value.trim();

    if (name.length < 2) {
        alert("Name must be at least 2 characters.");
        return false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (phone && !/^[0-9]{10,15}$/.test(phone)) {
        alert("Phone must be 10 to 15 digits.");
        return false;
    }

    if (position === "") {
        alert("Please select a position.");
        return false;
    }

    // if (!resume) {
    //     alert("Please upload your resume (PDF, DOC, DOCX).");
    //     return false;
    // } else {
    //     const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    //     if (!allowedTypes.includes(resume.type)) {
    //         alert("Resume must be PDF or Word document.");
    //         return false;
    //     }
    // }

    if (message.length < 20) {
        alert("Cover Letter must be at least 20 characters long.");
        return false;
    }

    // If everything is valid
    return true;
}





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