
// Variables
const addToCartBtn = document.getElementById('addToCartBtn');
const cartPopup = document.getElementById('cartPopup');
const closePopup = document.getElementById('closePopup');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const quantityText = document.getElementById('quantity');
const totalPriceText = document.getElementById('totalPrice');
const priceText = document.getElementById('priceText');
const buyBtn = document.getElementById('buyBtn');

// Price of the product
const productPrice = 20;

// Show the popup
addToCartBtn.addEventListener('click', () => {
    cartPopup.style.display = 'block';
});

// Close the popup
closePopup.addEventListener('click', () => {
    cartPopup.style.display = 'none';
});

// Increase the quantity
increaseBtn.addEventListener('click', () => {
    let quantity = parseInt(quantityText.innerText);
    quantity++;
    quantityText.innerText = quantity;
    updateTotalPrice(quantity);
});

// Decrease the quantity
decreaseBtn.addEventListener('click', () => {
    let quantity = parseInt(quantityText.innerText);
    if (quantity > 1) {
        quantity--;
        quantityText.innerText = quantity;
        updateTotalPrice(quantity);
    }
});

// Update the total price
function updateTotalPrice(quantity) {
    const total = productPrice * quantity;
    totalPriceText.innerText = `Total: ₹${total}`;
}

// Handle the Buy Button (example)
buyBtn.addEventListener('click', () => {
    alert('Thank you for your purchase!');
    cartPopup.style.display = 'none'; // Close the popup
});
