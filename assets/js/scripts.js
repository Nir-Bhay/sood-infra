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
        imgUrl: "assets/images/homepage/DON’T WAIT TO BUY REAL ESTATE BUY REAL ESTATE AND WAIT (1).webp",
        description: "A contemporary commercial complex currently under development, providing cutting-edge office spaces and business facilities. Shri Naveen Chambers is tailored for progressive businesses seeking both convenience and innovation."
    },
    {
        title: "Anuradha Walk Street - Proposed Plan",  // Modified title
        imgUrl: "/assets/images/homepage/Anuradha walk street by sood infra chhindwara.webp",
        description: "A dynamic commercial development characterized by its pedestrian-centric design, featuring retail establishments and dining venues. Anuradha Walk Street offers a distinctive urban experience that harmoniously combines leisure and business prospects."
    },
    {
        title: "Lavanya Greens Residency - Proposed Plan",  // Modified title
        imgUrl: "/assets/images/homepage/Lavanya Greens Residency by soodinfra form chhindwara.webp",
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
        title: "Housing Project 1",
        imgUrl: "/assets/images/Project Gallery/ovs12d3ewxygrhlmlr9p.webp",
        description: "A modern residential building offering comfortable living spaces with essential amenities. This project is designed to provide residents with a harmonious blend of convenience and quality."
    },

    {
        title: "Housing Project 2",
        imgUrl: "/assets/images/Project Gallery/sood-infra-luxury-flats-chhindwara.webp",
        description: "A sustainable community with stylish homes, green spaces, and energy-efficient features. This project emphasizes eco-friendly construction, integrating renewable energy solutions and efficient water management systems."
    }

];


const renderProjects = (projects, containerId) => {
    const gallery = document.getElementById(containerId);
    projects.forEach(project => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';

        portfolioItem.innerHTML = `
    <div class="portfolio-image">
        <img src="${project.imgUrl}" alt="${project.title}  loading="lazy">
        <a href="/pages/projects.html" class="read-more">Read More</a>
    </div>
    <div class="portfolio-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
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
