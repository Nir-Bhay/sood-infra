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