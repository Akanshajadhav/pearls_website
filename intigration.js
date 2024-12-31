///////////////////
//product details// 
///////////////////

// Extract the product ID from the URL
const queryParams = new URLSearchParams(window.location.search);
const productId = queryParams.get('product'); // Example: "7.8"

async function fetchProductDetails(productId) {
    try {
        // Fetch product details from the API using the productId
        const response = await fetch(`http://192.168.29.32:5000/pearl/${productId}/detail`, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const product = await response.json();

        // Display product details on the page
        displayProductDetails(product);
    } catch (error) {
        console.error('Error fetching product details:', error);
    }
}

function displayProductDetails(product) {
    // Set the product image
    const imageUrl = `http://192.168.29.32:5000/uploads/${product.image}`;
    document.getElementById('product-image').src = imageUrl;

    // Populate product details
    document.getElementById('product-title').textContent = product.name || 'No title available';
    document.getElementById('product-origin').textContent = `Origin: ${product.origin || 'Unknown'}`;
    document.getElementById('product-weight').textContent = `Weight: ${product.weight || 'N/A'}`;
    document.getElementById('product-carat').textContent = `Carat: ${product.carat || 'N/A'}`;
    document.getElementById('product-percarat').textContent = `Per Carat Price: ₹${product.per_carat_price || 'N/A'}`;
    document.getElementById('product-price').textContent = `Total Price: ₹${product.total_price || 'N/A'}`;
}

// Fetch product details when the page loads
if (productId) {
    fetchProductDetails(productId);
} else {
    console.error('No product ID found in the URL.');
}
