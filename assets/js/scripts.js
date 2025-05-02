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

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Initialize the first slide
slides[currentSlide].classList.add('active');
setInterval(showNextSlide, 4000); // Change every 4s


const pastProjects = [
    {
        title: "Shri Naveen Chambers",
        motto: "निष्ठा धृति: सत्यम्",
        imgUrl: "assets/images/homepage/DON’T WAIT TO BUY REAL ESTATE BUY REAL ESTATE AND WAIT (1).webp",
        description: "A contemporary commercial complex offering cutting-edge office spaces and business facilities. Designed for progressive businesses, it blends convenience with innovative infrastructure for modern enterprises." // 28 words
    },
    {
        title: "Anuradha Walk Street - Proposed Plan",
        motto: "नभ स्पर्श दीप्तम्",
        imgUrl: "/assets/images/homepage/Anuradha walk street by sood infra chhindwara.webp",
        description: "A pedestrian-focused commercial hub with retail outlets and dining options. Anuradha Walk Street merges leisure and business opportunities, creating a vibrant urban ecosystem for visitors and entrepreneurs." // 27 words
    },
    {
        title: "Lavanya Greens Residency - Proposed Plan",
        motto: "सहिता कार्यसाधिका",
        imgUrl: "/assets/images/homepage/Untitled design (1).webp",
        description: "A luxury residential project emphasizing sustainability. Featuring modern homes, landscaped gardens, and energy-efficient systems, it redefines eco-conscious upscale living for discerning homeowners." // 27 words
    }
];

const ongoingProjects = [
    {
        title: "Shri Naveen Chambers",
        imgUrl: "/assets/images/homepage/Sood Infra , construction , Soodinfra office.webp",
        description: "SStrategically positioned on Nagpur-Chhindwara Highway, this landmark commercial property offers premium office spaces with unmatched connectivity, prime visibility, and scalability for business growth." // 28 words
    },
    {
        title: "Housing Project 1",
        imgUrl: "/assets/images/Project Gallery/Untitled design.webp",
        description: "Ongoing premium development at Vardhman Florence Park featuring cutting-edge smart home technology, elegant minimalist designs, ustainable materials, and advanced energy-efficient systems for modern green living." // 29 words
    },
    {
        title: "Housing Project 2",
        imgUrl: "/assets/images/Project Gallery/sood-infra-luxury-flats-chhindwara.webp",
        description: "Progressing contemporary development in Khabari offering spacious open-plan living areas, stylish modular kitchens, ventilation systems, and space-optimized smart designs for sophisticated urban lifestyles." // 29 words
    }
   
];


const renderProjects = (projects, containerId) => {
    const gallery = document.getElementById(containerId);
    projects.forEach(project => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';

        portfolioItem.innerHTML = `
    <div class="portfolio-image">
        <img src="${project.imgUrl}" alt="${project.title}" loading="lazy">
        <a href="/pages/projects.html" class="read-more">Read More</a>
    </div>
    <div class="portfolio-content">
        <h3>${project.title}</h3>
        ${project.motto ? `<span class="motto">${project.motto}</span>` : ''}
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
