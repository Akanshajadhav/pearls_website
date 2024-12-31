
// Set the exchange rate (e.g., 1 USD = 83 INR; you can update this value dynamically if needed)
const exchangeRate = 1;

// Modal and quantity management
const modal = document.getElementById("cartModal");
const closeModal = document.querySelector(".close");
const productButtons = document.querySelectorAll(".product-button");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const quantityElement = document.getElementById("quantity");
let quantity = 1;

productButtons.forEach(button => {
    button.addEventListener("click", () => {
        const imageSrc = button.getAttribute("data-image");
        const title = button.getAttribute("data-title");
        const priceInDollars = parseFloat(button.getAttribute("data-price"));

        const priceInRupees = (priceInDollars * exchangeRate).toFixed(2);

        modalImage.src = imageSrc;
        modalTitle.textContent = title;
        modalPrice.textContent = `₹${priceInRupees} x ${quantity} Carat = ₹${(priceInRupees * quantity).toFixed(2)}`;
        modal.style.display = "flex";
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Increase/Decrease Quantity
document.getElementById("increaseQuantity").addEventListener("click", () => {
    quantity++;
    updatePrice();
});

document.getElementById("decreaseQuantity").addEventListener("click", () => {
    if (quantity > 1) {
        quantity--;
        updatePrice();
    }
});

// Update the price display
function updatePrice() {
    const priceInRupees = parseFloat(modalPrice.textContent.split(" x")[0].substring(1));
    modalPrice.textContent = `₹${priceInRupees} x ${quantity} Carat =  ₹${(priceInRupees * quantity).toFixed(2)}`;
    quantityElement.textContent = quantity;
}


// Buy Button Logic
document.getElementById("buyButton").addEventListener("click", () => {
    // Retrieve product details
    const product = {
        image: modalImage.src,
        title: modalTitle.textContent,
        price: modalPrice.textContent.split(" x")[0].trim(),
        carat: quantity
    };

    // Get existing cart from localStorage or initialize a new array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the current product to the cart
    cart.push(product);

    // Save updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Alert user and navigate to the cart page
    alert("Product added to cart successfully!");
    window.location.href = "checkout.html";
});


