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
        title: "Luxury Residential Township",
        imgUrl: "/assets/images/blog/20240703_110250.jpg",
        description: "An expansive residential township featuring eco-friendly materials, modern design, and an emphasis on comfort. The project showcases sustainable living with lush green spaces and community amenities."
    },
    {
        title: "Corporate Tower Construction",
        imgUrl: "assets/images/blog/Brown And Orange Modern Home Building Services Instagram Post (1).png",
        description: "A state-of-the-art corporate building with energy-efficient designs and premium office spaces. Tailored for businesses seeking innovative, collaborative environments."
    },
    {
        title: "Eco-Conscious Housing Project",
        imgUrl: "/assets/images/Residential Project.jpeg",
        description: "Residential units that combine aesthetic appeal with sustainability. The project integrates renewable energy sources and green building practices for a modern yet eco-friendly lifestyle."
    }
];

const ongoingProjects = [
    {
        title: "Shri Naveen Chambers",
        imgUrl: "/assets/images/projects/Sood Infra , construction , Soodinfra office.webp",
        description: "Located on the Nagpur-Chhindwara Highway, Shri Naveen Chambers is a landmark commercial property with excellent connectivity and strategic placement for maximum business visibility."
    },
    {
        title: "Commercial Business Park",
        imgUrl: "/assets/images/SingPost Centre to turn into Singapore's first retail mall to offer online shopping.jpeg",
        description: "This ongoing project features cutting-edge commercial office spaces with a focus on sustainable development. The business park is designed to foster innovation and collaboration in a dynamic work environment."
    },
    {
        title: " Habitat Community",
        imgUrl: "/assets/images/Residential Project.jpeg",
        description: "A modern community project emphasizing green energy solutions, solar power integration, and sustainable living. This housing initiative offers a perfect blend of luxury and eco-consciousness."
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




