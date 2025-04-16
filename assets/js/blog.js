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


const images = document.querySelectorAll('.gallery-item img'); // Target images inside the gallery items
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const closeModal = document.getElementById('closeModal');

// Add event listener to each image
images.forEach((image) => {
    image.addEventListener('click', function () {
        modal.style.display = 'flex'; // Show modal
        modalImg.src = this.src; // Set the clicked image as modal image
    });
});

// Close modal on 'X' button click
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal on clicking outside of the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

