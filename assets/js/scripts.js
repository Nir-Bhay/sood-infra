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
        title: "Anuradha Walk Street",
        imgUrl: "/assets/images/projects/anuradha_walk_street.jpg",
        description: "A vibrant commercial project with pedestrian-friendly design, retail shops, and dining outlets. Anuradha Walk Street creates a unique urban experience with a blend of leisure and business opportunities."
    },
    {
        title: "Shri Omkaar Towers",
        imgUrl: "/assets/images/projects/shri_omkaar_towers.jpg",
        description: "An iconic high-rise residential and commercial project with stunning architecture, premium facilities, and panoramic city views. Shri Omkaar Towers exemplify modern living and business spaces."
    },
    {
        title: "Lavanya Greens Plaza",
        imgUrl: "/assets/images/projects/lavanya_greens_plaza.jpg",
        description: "A mixed-use development featuring retail outlets, entertainment zones, and green spaces. Lavanya Greens Plaza provides a vibrant atmosphere for work and leisure."
    }
];

const ongoingProjects = [
    {
        title: "Shri Naveen Chambers",
        imgUrl: "/assets/images/projects/Sood Infra , construction , Soodinfra office.webp",
        description: "Located on the Nagpur-Chhindwara Highway, Shri Naveen Chambers is a landmark commercial property with excellent connectivity and strategic placement for maximum business visibility."
    },
    {
        title: "Shri Naveen Towers",
        imgUrl: "/assets/images/projects/shri_naveen_towers.jpg",
        description: "An ongoing premium commercial tower offering state-of-the-art office spaces and business amenities. Shri Naveen Towers is designed for modern enterprises looking for convenience and innovation."
    },

   
    {
        title: "Shri Omkaar Residency",
        imgUrl: "/assets/images/projects/shri_omkaar_residency.jpg",
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




