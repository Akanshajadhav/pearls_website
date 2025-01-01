// JavaScript functionality for Horizontal Image Gallery


// =====================
// 2. Product Slider Setup
// =====================


const productSlider = document.querySelector('.product-slider');
const prevProductButton = document.querySelector('.prev-product');
const nextProductButton = document.querySelector('.next-product');

let currentSlide = 0;
const totalProductSlides = 9; // Limit to 9 slides
const slideWidth = document.querySelector('.product').offsetWidth + 20; // Including gap

// Update the product slider position
function updateSliderPosition() {
    productSlider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Go to the next product slide
function nextProductSlide() {
    if (currentSlide < totalProductSlides - 1) {  // Stop at the 9th slide
        currentSlide++;
        updateSliderPosition();
    }
}

// Go to the previous product slide
function prevProductSlide() {
    if (currentSlide > 0) {  // Stop at the first slide
        currentSlide--;
        updateSliderPosition();
    }
}

// Add event listeners to navigation buttons
nextProductButton.addEventListener('click', nextProductSlide);
prevProductButton.addEventListener('click', prevProductSlide);

// Automatic sliding for product slider every 5 seconds
setInterval(() => {
    if (currentSlide < totalProductSlides - 1) {  // Stop at the 9th slide
        nextProductSlide();
    }
}, 5000);



// ======================
// Countdown Timer Setup
// ======================

function updateTimer() {
    var endTime = new Date("Dec 31, 2024 23:59:59").getTime(); // Set the target date and time
    var now = new Date().getTime();
    var timeLeft = endTime - now;

    // Calculate days, hours, minutes, seconds
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update the HTML content
    document.getElementById("days").textContent = days < 10 ? "0" + days : days;
    document.getElementById("hours").textContent = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;

    // If the countdown ends
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
    }
}

// Update the timer every second
var timerInterval = setInterval(updateTimer, 1000);


// =====================
// 4. Main Slider Setup
// =====================

let currentIndex = 0;
const totalMainSlides = document.querySelectorAll('.slide').length;

// Function to show the current slide
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= totalMainSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalMainSlides - 1;
    } else {
        currentIndex = index;
    }

    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Function to move to the next slide
function nextSlide() {
    showSlide(currentIndex + 1);
}

// Function to move to the previous slide
function prevSlide() {
    showSlide(currentIndex - 1);
}

// Initialize the main slider
showSlide(currentIndex);

// Automatic sliding every 3 seconds (3000 milliseconds)
setInterval(() => {
    nextSlide();
}, 3000);


////////////////
//Product Slider
///////////////



document.querySelector('.next-product').addEventListener('click', () => {
    productSlider.scrollBy({ left: 300, behavior: 'smooth' });
});

document.querySelector('.prev-product').addEventListener('click', () => {
    productSlider.scrollBy({ left: -300, behavior: 'smooth' });
});

// Redirect Function
const dummyCredentials = {
    email: "user@example.com",
    password: "password123"
  };

  // Function to handle login
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to reload the page

    // Get input values
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Debugging: Log the entered values to check if they are correct
    console.log("Entered Email: ", email);
    console.log("Entered Password: ", password);

    // Check if the entered credentials match the dummy credentials
    if (email === dummyCredentials.email && password === dummyCredentials.password) {
      // Debugging: Log a message to confirm login success
      console.log("Login successful. Redirecting to order.html.");
      // Redirect to order page
      window.location.href = "order.html"; // This should redirect you to order.html
    } else {
      // Debugging: Log an error message if credentials are incorrect
      console.log("Invalid credentials.");
      alert("Invalid credentials, please try again.");
    }
  });

  function showRegister() {
    // Function to switch to register page (if needed)
    alert("Redirecting to the Register page...");
  }


  function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        // Show a toast when the product is already in the cart
        showToast('Product is already in the cart!');
    } else {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();

        // Show a toast when the product is successfully added to the cart
        showToast('Product added to the cart!');
    }
}

// Function to show the toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.innerText = message;

    // Show the toast
    toast.classList.add('show');

    // Hide the toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}


        // Function to proceed to checkout
        function proceedToCheckout(product) {
            localStorage.setItem('checkout', JSON.stringify([product]));
            window.location.href = 'checkout.html';
        }

        // Function to show the success modal
        function showSuccessModal() {
            const modal = document.getElementById('success-modal');
            modal.classList.add('show-modal');
        }

        // Function to close the modal
        function closeModal() {
            const modal = document.getElementById('success-modal');
            modal.classList.remove('show-modal');
        }

        // Function to update the cart count
        function updateCartCount() {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const cartIcon = document.getElementById('cart-icon');
            if (cartIcon) {
                cartIcon.setAttribute('data-count', cart.length);
            }
        }

        // Initialize the product details and cart count
        const productId = getProductId();
        if (productId) {
            displayProductDetails(productId);
        } else {
            alert("No product selected");
        }

        // Update the cart count on page load
        updateCartCount();
        


    async function fetchPearls() {
        try {
            // Fetch data from the API
            const response = await fetch('http://192.168.29.32:5000/pearls', {
                method: 'GET',
            });
    
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
    
            const pearls = await response.json();
    
            // Populate products
            displayProducts(pearls);
        } catch (error) {
            console.error('Error fetching pearls:', error);
        }
    }
    
    function displayProducts(products) {
        const productContainer = document.getElementById('carat-sorted-products');
        productContainer.innerHTML = ''; // Clear existing products
    
        products.forEach((pearl) => {
            const productElement = document.createElement('div');
            productElement.classList.add('product-item');
            productElement.setAttribute('data-carat', pearl.carat);
    
            // Construct the image URL dynamically
            const imageUrl = "http://192.168.29.32:5000" + pearl.image; // Construct the full image URL
    
            productElement.innerHTML = `
                <a href="product-detail.html?product=${pearl.carat}">
                    <!-- Use the dynamically constructed imageUrl -->
                    <img src="${imageUrl}" alt="${pearl.name}" class="product-image" onerror="this.src='images/placeholder.jpg'">
                    <h3 class="product-title">${pearl.name}</h3>
                    <p class="product-origin">Origin: ${pearl.origin}</p>
                    <p class="product-carat">Carat: ${pearl.carat}</p>
                </a>
            `;
    
            productContainer.appendChild(productElement);3
        });
    }
    
    function sortByCarat() {
        const caratDropdown = document.getElementById('carat-dropdown');
        const selectedValue = caratDropdown.value;
    
        const allProducts = document.querySelectorAll('.product-item');
    
        allProducts.forEach((product) => {
            const productCarat = parseFloat(product.getAttribute('data-carat'));
    
            if (selectedValue === 'all') {
                product.style.display = 'block';
            } else {
                const rangeStart = parseFloat(selectedValue);
                const rangeEnd = rangeStart + 4.9;
    
                if (productCarat >= rangeStart && productCarat <= rangeEnd) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            }
        });
    }
    
    // Fetch pearls when the page loads
    fetchPearls();
    
    
    
            // Store the original product list
            var originalProducts = [];
    
            // Function to load initial products (keep this function to reset the list)
            function loadInitialProducts() {
                var productItems = document.querySelectorAll('#carat-sorted-products .product-item');
                originalProducts = Array.from(productItems);  // Convert NodeList to Array
            }
    
            // Function to sort products by carat range
            function sortByCarat() {
                var selectedCarat = document.getElementById('carat-dropdown').value;
                var productContainer = document.getElementById('carat-sorted-products');
    
                // Clear existing products before updating
                productContainer.innerHTML = '';
    
                // If "All" is selected, show all products
                if (selectedCarat === 'all') {
                    originalProducts.forEach(function (product) {
                        productContainer.appendChild(product);  // Append all products
                    });
                } else {
                    // Define carat range based on the selected value
                    var caratRangeStart = 0;
                    var caratRangeEnd = 0;
    
                    if (selectedCarat === '1') {
                        caratRangeStart = 1.0;
                        caratRangeEnd = 5.0;
    
                    } else if (selectedCarat === '5') {
                        caratRangeStart = 5.1;
                        caratRangeEnd = 6.0;
                    } else if (selectedCarat === '6') {
                        caratRangeStart = 6.1;
                        caratRangeEnd = 7.0;
                    } else if (selectedCarat === '7') {
                        caratRangeStart = 7.1;
                        caratRangeEnd = 8.0;
                    } else if (selectedCarat === '8') {
                        caratRangeStart = 8.1;
                        caratRangeEnd = 9.0;
                    }
    
                    // Filter products based on the selected carat range
                    var filteredProducts = originalProducts.filter(function (product) {
                        var caratValue = parseFloat(product.getAttribute('data-carat'));
                        return caratValue >= caratRangeStart && caratValue <= caratRangeEnd;
                    });
    
                    // Append filtered products to the container
                    if (filteredProducts.length > 0) {
                        filteredProducts.forEach(function (product) {
                            productContainer.appendChild(product);
                        });
                    } else {
                        // Display a message if no products are found in the selected range
                        var message = document.createElement('p');
                        message.textContent = 'No products available in this carat range.';
                        productContainer.appendChild(message);
                    }
                }
            }
    
            // Function to reset products (initial display)
            function resetProducts() {
                var productContainer = document.getElementById('carat-sorted-products');
                productContainer.innerHTML = '';  // Clear the container
    
                originalProducts.forEach(function (product) {
                    productContainer.appendChild(product);  // Append all products back
                });
            }
    
            // Initial page load
            window.onload = function () {
                loadInitialProducts();  // Save the original list of products
                resetProducts();  // Load the products in their initial state
            };
          
            document.addEventListener("DOMContentLoaded", function () {
                // ======================
                // Countdown Timer Setup
                // ======================
    
                function updateTimer() {
                    var endTime = new Date("2024-12-31T23:59:59").getTime(); // Set the target date and time
                    var now = new Date().getTime();
                    var timeLeft = endTime - now;
    
                    console.log(timeLeft); // Check if this prints the remaining time in milliseconds
    
                    // Calculate days, hours, minutes, seconds
                    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
                    // Update the HTML content
                    document.getElementById("days").textContent = days < 10 ? "0" + days : days;
                    document.getElementById("hours").textContent = hours < 10 ? "0" + hours : hours;
                    document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
                    document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;
    
                    // If the countdown ends
                    if (timeLeft <= 0) {
                        clearInterval(timerInterval);
                        document.getElementById("days").textContent = "00";
                        document.getElementById("hours").textContent = "00";
                        document.getElementById("minutes").textContent = "00";
                        document.getElementById("seconds").textContent = "00";
                    }
                }
    
                // Update the timer every second
                var timerInterval = setInterval(updateTimer, 1000);
            });
     
    
    
