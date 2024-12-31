
function loadCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout-button');
    const emptyCartMessage = document.getElementById('empty-cart-message');

    // Retrieve cart data from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
        cartTotalElement.style.display = 'none';
        checkoutButton.style.display = 'none';
        return;
    }

    emptyCartMessage.style.display = 'none';
    cartTotalElement.style.display = 'block';
    checkoutButton.style.display = 'block';

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="cart-item-info">
                <h3>${item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>Carat: ${item.carat}</p>
            </div>
            <span class="cart-item-remove" data-index="${index}"><i class="fas fa-trash-alt"></i></span>
        `;

        cartItemsContainer.appendChild(cartItem);

        // Add item price to total price
        const itemPrice = parseFloat(item.price.replace('₹', '')) || 0;
        totalPrice += itemPrice;
    });

    // Display the total amount in ₹
    cartTotalElement.innerText = `Total: ₹${totalPrice}`;

    // Attach event listeners to remove buttons
    document.querySelectorAll('.cart-item-remove').forEach(removeButton => {
        removeButton.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            removeCartItem(index);
        });
    });
}

function removeCartItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); // Remove item from cart
    localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
    loadCartItems(); // Reload the cart
}

// Initialize cart items on page load
loadCartItems();
