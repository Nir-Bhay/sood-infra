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
        title: "Completed Residential Project",
        imgUrl: "images/Residential Project.jpeg",
        description: "A modern residential project completed with a focus on aesthetics and functionality. This project features spacious interiors, eco-friendly materials, and a design that harmonizes with the natural environment."
    },
    {
        title: "Commercial Office Building",
        imgUrl: "images/Commercial Project.jpeg",
        description: "High-tech commercial spaces with sustainable architecture, offering state-of-the-art facilities. Designed to foster productivity and collaboration among businesses, this building incorporates green technologies."
    },
    {
        title: "Green Energy Housing",
        imgUrl: "images/Residential Project.jpeg",
        description: "Eco-friendly housing utilizing solar energy and sustainable materials. This community aims to minimize environmental impact while providing comfortable living spaces."
    }
    // ,
    // {
    //     title: "Urban Revival Apartments",
    //     imgUrl: "images/Commercial Project.jpeg",
    //     description: "An apartment complex reviving urban living with modern amenities. The design focuses on community engagement and access to local resources."
    // },
    // {
    //     title: "Luxury Villas Project",
    //     imgUrl: "images/Residential Project.jpeg",
    //     description: "High-end villas designed with luxury and comfort in mind. Each villa features private gardens, advanced home automation, and luxurious finishes to create an opulent living experience."
    // },
    // {
    //     title: "Historical Building Restoration",
    //     imgUrl: "images/Commercial Project.jpeg",
    //     description: "Restoration of a historical building with a modern touch. This project emphasizes preserving the architectural heritage while integrating modern functionalities."
    // }
];

const ongoingProjects = [
    {
        title: "Mixed-Use Development",
        imgUrl: "images/Mixed-Use Development.jpeg",
        description: "A versatile mixed-use project in an urban area, combining residential, commercial, and recreational spaces to promote a vibrant community."
    },
    {
        title: "Luxury Apartment Complex",
        imgUrl: "images/Luxury Apartment Complex.jpeg",
        description: "Exclusive apartments with state-of-the-art amenities, designed for urban living at its finest, including fitness centers, pools, and community lounges."
    },
    {
        title: "Seaside Resort Development",
        imgUrl: "images/Mixed-Use Development.jpeg",
        description: "A resort development by the seaside with eco-friendly designs, offering stunning ocean views and an immersive natural experience."
    }
    // ,
    // {
    //     title: "Tech Hub Offices",
    //     imgUrl: "images/Commercial Project.jpeg",
    //     description: "High-tech office spaces aimed at innovation and collaboration, equipped with the latest technology to support creative work environments."
    // },
    // {
    //     title: "Retail & Residential Hybrid",
    //     imgUrl: "images/Mixed-Use Development.jpeg",
    //     description: "A mixed-use building with retail spaces and residential apartments, fostering a convenient lifestyle that promotes local shopping."
    // },
    // {
    //     title: "Downtown Plaza Expansion",
    //     imgUrl: "images/Luxury Apartment Complex.jpeg",
    //     description: "Expanding an urban plaza with additional amenities and green space, enhancing the city's public gathering areas and improving community life."
    // }
];

const futureProjects = [
    {
        title: "Urban Park Design",
        imgUrl: "images/Urban Park Design.jpeg",
        description: "An eco-friendly park design with community-focused areas, aimed at enhancing green space in urban settings and promoting outdoor activities."
    },
    {
        title: "Upcoming Commercial Retail Space",
        imgUrl: "images/Luxury Apartment Complex.jpeg",
        description: "Prime retail spaces with modern facilities designed to attract leading brands and provide a hub for local commerce."
    },
    {
        title: "High-Rise Business Center",
        imgUrl: "images/Mixed-Use Development.jpeg",
        description: "A high-rise business center catering to corporate needs, featuring flexible office spaces and amenities to support various business operations."
    }
    ,
    {
        title: "Smart City Infrastructure",
        imgUrl: "images/Commercial Project.jpeg",
        description: "Advanced infrastructure for a smart city project, integrating technology to improve urban management and enhance the quality of life for residents."
    },
    {
        title: "Sustainable Farm Complex",
        imgUrl: "images/Urban Park Design.jpeg",
        description: "An agricultural complex designed for sustainability and community use, promoting local food production and environmental education."
    },
    {
        title: "Waterfront Recreation Area",
        imgUrl: "images/Luxury Apartment Complex.jpeg",
        description: "A waterfront area designed for recreation and environmental education, providing access to nature and promoting community engagement."
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
renderProjects(futureProjects, 'future-projects-gallery');