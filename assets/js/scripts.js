// // Select the menu toggle button and navigation menu
// const menuToggle = document.querySelector('.menu-toggle');
// const navMenu = document.querySelector('.nav-menu');

// // Add click event listener to the toggle button
// menuToggle.addEventListener('click', () => {
//     navMenu.classList.toggle('active'); // Toggle the active class on the navigation menu
// });

// Toggle the mobile menu
// Toggle the mobile menu
// Toggle the mobile menu
// Toggle the mobile menu


const pastProjects = [
    {
        title: "Shri Naveen Chambers",
        imgUrl: "/assets/images/homepage/Sood Infra , construction , Soodinfra office.webp",
        description: "A contemporary commercial complex currently under development, providing cutting-edge office spaces and business facilities. Shri Naveen Chambers is tailored for progressive businesses seeking both convenience and innovation."
    },
    {
        title: "Anuradha Walk Street",
        imgUrl: "/assets/images/homepage/Sood Infra , construction , Soodinfra office.webp",
        description: "A dynamic commercial development characterized by its pedestrian-centric design, featuring retail establishments and dining venues. Anuradha Walk Street offers a distinctive urban experience that harmoniously combines leisure and business prospects."
    },
    {
        title: "Lavanya Greens Residency",
        imgUrl: "/assets/images/homepage/Sood Infra , construction , Soodinfra office.webp",
        description: "A residential development crafted with a focus on luxury and sustainability. Lavanya Greens Residency offers contemporary residences, beautifully landscaped gardens, and state-of-the-art energy-efficient systems."
    }
];


const ongoingProjects = [
    {
        title: "Shri Naveen Chambers",
        imgUrl: "/assets/images/homepage/Sood Infra , construction , Soodinfra office.webp",
        description: "Located on the Nagpur-Chhindwara Highway, Shri Naveen Chambers is a landmark commercial property with excellent connectivity and strategic placement for maximum business visibility."
    },
    {
        title: "Shri Naveen Towers",
        imgUrl: "/assets/images/homepage/Sood Infra , construction , Soodinfra office.webp",
        description: "An ongoing premium commercial tower offering state-of-the-art office spaces and business amenities. Shri Naveen Towers is designed for modern enterprises looking for convenience and innovation."
    },


    {
        title: "Shri Omkaar Residency",
        imgUrl: "/assets/images/homepage/Sood Infra , construction , Soodinfra office.webp",
        description: "A residential community designed with luxury and sustainability in mind. Shri Omkaar Residency features modern homes, landscaped gardens, and advanced energy-saving systems."
    }

];



const renderProjects = (projects, containerId) => {
    const gallery = document.getElementById(containerId);
    projects.forEach(project => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.innerHTML = `
                <div class="portfolio-image">
                    <img src="${project.imgUrl}" alt="${project.title}">
                </div>
                <div class="portfolio-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="read-more">Read More</div>
                </div>
            `;
        gallery.appendChild(portfolioItem);
    });
};

renderProjects(pastProjects, 'past-projects-gallery');
renderProjects(ongoingProjects, 'ongoing-projects-gallery');
// renderProjects(futureProjects, 'future-projects-gallery');


document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll(".scroll-animate");

    const elementInView = (el, offset = 0) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) - offset
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("visible");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 100)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener("scroll", handleScrollAnimation);
});


// Scroll Animation Function
document.addEventListener('DOMContentLoaded', () => {
    const scrollElements = document.querySelectorAll('.scroll-hidden');

    const scrollObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scroll-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1, // Trigger animation when 10% of the element is visible
        }
    );

    scrollElements.forEach((el) => scrollObserver.observe(el));
});
