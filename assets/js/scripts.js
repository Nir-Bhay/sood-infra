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
        imgUrl: "/assets/images/blog/20240703_110250.jpg",
        description: "A modern residential project completed with a focus on aesthetics and functionality. This project features spacious interiors, eco-friendly materials, and a design that harmonizes with the natural environment."
    },
    {
        title: "Commercial Office Bu/ilding",
        imgUrl: "assets/images/blog/Brown And Orange Modern Home Building Services Instagram Post (1).png",
        description: "High-tech commercial spaces with sustainable architecture, offering state-of-the-art facilities. Designed to foster productivity and collaboration among businesses, this building incorporates green technologies."
    },
    {
        title: "Green Energy Housing",
        imgUrl: "/assets/images/Residential Project.jpeg",
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
        title: " Shri Naveen Chambers",
        imgUrl: "/assets/images/projects/Sood Infra , construction , Soodinfra office.webp",
        description: "Located on the Nagpur-Chhindwara Highway, ensuring high visibility and easy accessibility."
    },
    {
        title: "Commercial Office Building",
        imgUrl: "/assets/images/SingPost Centre to turn into Singapore's first retail mall to offer online shopping.jpeg",
        description: "High-tech commercial spaces with sustainable architecture, offering state-of-the-art facilities. Designed to foster productivity and collaboration among businesses, this building incorporates green technologies."
    },
    {
        title: "Green Energy Housing",
        imgUrl: "/assets/images/Residential Project.jpeg",
        description: "Eco-friendly housing utilizing solar energy and sustainable materials. This community aims to minimize environmental impact while providing comfortable living spaces."
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
        title: "Completed Residential Project",
        imgUrl: "/assets/images/Residential Project.jpeg",
        description: "A modern residential project completed with a focus on aesthetics and functionality. This project features spacious interiors, eco-friendly materials, and a design that harmonizes with the natural environment."
    },
    {
        title: "Commercial Office Building",
        imgUrl: "/assets/images/SingPost Centre to turn into Singapore's first retail mall to offer online shopping.jpeg",
        description: "High-tech commercial spaces with sustainable architecture, offering state-of-the-art facilities. Designed to foster productivity and collaboration among businesses, this building incorporates green technologies."
    },
    {
        title: "Green Energy Housing",
        imgUrl: "/assets/images/Residential Project.jpeg",
        description: "Eco-friendly housing utilizing solar energy and sustainable materials. This community aims to minimize environmental impact while providing comfortable living spaces."
    }
    ,
    {
        title: "Completed Residential Project",
        imgUrl: "/assets/images/Residential Project.jpeg",
        description: "A modern residential project completed with a focus on aesthetics and functionality. This project features spacious interiors, eco-friendly materials, and a design that harmonizes with the natural environment."
    },
    {
        title: "Commercial Office Building",
        imgUrl: "/assets/images/SingPost Centre to turn into Singapore's first retail mall to offer online shopping.jpeg",
        description: "High-tech commercial spaces with sustainable architecture, offering state-of-the-art facilities. Designed to foster productivity and collaboration among businesses, this building incorporates green technologies."
    },
    {
        title: "Green Energy Housing",
        imgUrl: "/assets/images/Residential Project.jpeg",
        description: "Eco-friendly housing utilizing solar energy and sustainable materials. This community aims to minimize environmental impact while providing comfortable living spaces."
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




