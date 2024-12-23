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








