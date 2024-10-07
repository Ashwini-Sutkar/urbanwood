//toggle btn for form
document.querySelector(".toggle-btn").addEventListener("click", function() {
    const detailsSection = document.querySelector(".product-details-section");
    const toggleBtn = document.querySelector(".toggle-btn");

    // Toggle the display of the product details section
    if (detailsSection.style.display === "none" || detailsSection.style.display === "") {
        detailsSection.style.display = "block";
        toggleBtn.textContent = "-";
    } else {
        detailsSection.style.display = "none";
        toggleBtn.textContent = "+";
    }
});



document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', function () {
        const content = this.nextElementSibling;
        content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
    });
});

// customers sileds review
// JavaScript code for the image carousel functionality
const mainImage = document.getElementById('main-image');
const thumbnails = document.querySelectorAll('.thumbnail');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Variable to keep track of the current active image index
let currentIndex = 0;

// Function to update the main image and active thumbnail
function updateMainImage(index) {
    // Update the main image source
    mainImage.src = thumbnails[index].src;

    // Remove the 'active' class from all thumbnails
    thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));

    // Add the 'active' class to the clicked thumbnail
    thumbnails[index].classList.add('active');
}

// Add click event to each thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        currentIndex = index; // Update the current index
        updateMainImage(currentIndex);
    });
});

// Function to show the next image
function showNextImage() {
    currentIndex = (currentIndex + 1) % thumbnails.length; // Loop back to the first image
    updateMainImage(currentIndex);
}

// Function to show the previous image
function showPrevImage() {
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length; // Loop back to the last image
    updateMainImage(currentIndex);
}

// Add event listeners for next and previous buttons
nextBtn.addEventListener('click', showNextImage);
prevBtn.addEventListener('click', showPrevImage);




// add to cart

// Initialize cart quantity from local storage or set to 0
let cartQuantity = localStorage.getItem('cartQuantity') ? parseInt(localStorage.getItem('cartQuantity')) : 0;

// Get the required DOM elements
const quantitySelect = document.getElementById('quantity');
const addToCartButton = document.querySelector('.add-to-cart');
const cartBadge = document.querySelector('.badge_pp');

// Update the badge on page load
cartBadge.textContent = cartQuantity;

// Function to update the cart count and badge
function updateCartQuantity() {
    const selectedQuantity = parseInt(quantitySelect.value);
    cartQuantity += selectedQuantity;

    // Update cart badge
    cartBadge.textContent = cartQuantity;

    // Store the updated cart quantity in local storage
    localStorage.setItem('cartQuantity', cartQuantity);
}

// Event listener for "Add to Cart" button click
addToCartButton.addEventListener('click', () => {
    updateCartQuantity();
});


const sliderMessages = [
    "No Cost EMI Offers - Available With HDFC Bank",
    "Navratri Fiesta Sale is live: 60% + 5% extra off on hundreds of products",
    "Free Shipping on All Products Across India"
];

let curIndex = 0;
const sliderText = document.getElementById('slider-text');

function updateText() {
    sliderText.innerHTML = sliderMessages[curIndex];
    curIndex = (curIndex + 1) % sliderMessages.length;
}

// Change text every 6 seconds to match the animation
setInterval(updateText, 6000);
updateText();