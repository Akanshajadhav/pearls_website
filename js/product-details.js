// Fetch the product ID from the URL
function getProductIDFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('product');
}

// Fetch the selected product data from the server
async function fetchProductDetails(productID) {
    try {
        const response = await fetch(`http://192.168.29.32:5000/pearl_detail/${productID}`, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const product = await response.json();
        displayProductDetails(product);
    } catch (error) {
        console.error('Error fetching product details:', error);
    }
}

// Display the product details in the DOM
function displayProductDetails(product) {
    document.getElementById('product-image').src = `http://192.168.29.32:5000/uploads/${product.image}`;
    document.getElementById('product-image').alt = product.name;
    document.getElementById('product-title').textContent = product.name;
    document.getElementById('product-origin').textContent = `Origin: ${product.origin}`;
    document.getElementById('product-carat').textContent = `Carat: ${product.carat}`;
    document.getElementById('product-percarat').textContent = `Price per Carat: ₹${product.per_carat_price}`;
    document.getElementById('product-price').textContent = `Total Price: ₹${product.price}`;
}

// Post the product details to the server
async function postProductDetails(productID) {
    try {
        const formData = new FormData();
        formData.append("name", document.getElementById("product-title").value);
        formData.append("origin", document.getElementById("product-origin").value);
        formData.append("carat", document.getElementById("product-carat").value);
        formData.append("per_carat_price", document.getElementById("product-percarat").value);
        formData.append("total_price", document.getElementById("product-price").value);

        const imageInput = document.getElementById("product-image-upload");

        // Check if the user has selected a file
        if (imageInput && imageInput.files.length > 0) {
            formData.append("image", imageInput.files[0]);
        } else {
            // Handle the case where no image is selected
            console.error("No image file selected.");
            return; // Stop the execution if no file is selected
        }

        const response = await fetch(`http://192.168.29.32:5000/pearl/${productID}/detail`, {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        if (data.id) {
            fetchProductDetails(data.id); // Fetch the detailed information using detail ID
        } else {
            console.error("Detail ID not returned by the server.");
        }
    } catch (error) {
        console.error("Error posting product details:", error);
    }
}

// Initialize the page
function initProductDetailPage() {
    const productID = getProductIDFromURL();
    if (productID) {
        postProductDetails(productID); // First post the product details
    } else {
        console.error("No product ID found in the URL.");
    }
}

// Call the initialization function when the page loads
window.onload = initProductDetailPage;


       