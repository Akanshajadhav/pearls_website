
// Load cart items and grand total on the payment page
function loadCartSummary() {
    const cartSummaryBody = document.getElementById("cart-summary-body");
    const grandTotalElement = document.getElementById("grand-total");

    // Retrieve cart data from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartSummaryBody.innerHTML = "";

    let grandTotal = 0;

    if (cart.length === 0) {
        cartSummaryBody.innerHTML = `<tr><td colspan="4">Your cart is empty.</td></tr>`;
        return;
    }

    // Populate the cart summary table
    cart.forEach((item) => {
        const itemPrice = parseFloat(item.price.replace(/₹|,/g, ''));
        const totalPrice = itemPrice * (item.quantity || 1); // Assuming quantity is 1 if not specified

        grandTotal += totalPrice;

        const row = `
            <tr>
                <td>${item.title}</td>
                <td>${item.quantity || 1}</td>
                <td>₹${itemPrice.toFixed(2)}</td>
                <td>₹${totalPrice.toFixed(2)}</td>
            </tr>
        `;
        cartSummaryBody.innerHTML += row;
    });

    // Display the grand total
    grandTotalElement.textContent = `₹${grandTotal.toFixed(2)}`;
    document.getElementById("totalPaid").textContent = grandTotal.toFixed(2);
}

// Initialize cart summary on page load
loadCartSummary();

// JavaScript for Payment Processing
document.getElementById("payNowButton").addEventListener("click", function () {
    const paymentMethods = document.getElementsByName("payment");
    let selectedMethod = null;
    for (const method of paymentMethods) {
        if (method.checked) {
            selectedMethod = method.value;
            break;
        }
    }

    if (selectedMethod) {
        // Display receipt section
        document.getElementById("selectedPaymentMethod").textContent = selectedMethod;
        document.getElementById("receiptSection").style.display = "block";

        // Simulate payment processing
        alert(`Payment successful using ${selectedMethod}`);
    } else {
        alert("Please select a payment method.");
    }
});
