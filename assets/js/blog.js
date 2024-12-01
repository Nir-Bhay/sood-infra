// Add modal for gallery images
const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach(item => {
    item.addEventListener("click", () => {
        const modal = document.createElement("div");
        modal.className = "modal";
        modal.innerHTML = `
      <div class="modal-content">
        <img src="${item.src}" alt="${item.alt}">
        <span class="close">&times;</span>
      </div>
    `;
        document.body.appendChild(modal);

        const closeModal = modal.querySelector(".close");
        closeModal.addEventListener("click", () => modal.remove());
    });
});

// Smooth scrolling for navigation
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Add a gradient background animation
const header = document.querySelector('#header');
// let colors = [
//     ['#2575fc'],
//     ['#ff7a18', '#ff3c00'],
//     ['#43cea2', '#185a9d']
// ];

let step = 0;
const changeGradient = () => {
    const [start, end] = colors[step % colors.length];
    header.style.background = `linear-gradient(135deg, ${start}, ${end})`;
    step++;
};
setInterval(changeGradient, 5000);



// Scroll reveal animation for blog cards

const filterButtons = document.querySelectorAll(".filter-btn");
const blogCards = document.querySelectorAll(".blog-card");

// Filtering Functionality
filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");

        blogCards.forEach((card) => {
            if (filter === "all" || card.getAttribute("data-category") === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
    });
});

