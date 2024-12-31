



async function handleLogin(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get the values from the form
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
      // Send a POST request to the API
      const response = await fetch('http://192.168.29.32:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }) // Prepare the data payload
      });

      if (response.ok) {
        const result = await response.json();
        // Handle success (e.g., navigate to another page or display a success message)
        alert('Login successful!');
        console.log(result); // Debugging purpose
      } else {
        // Handle error responses
        const errorData = await response.json();
        alert(`Login failed: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      // Handle network errors or unexpected issues
      console.error('Error logging in:', error);
      alert('An error occurred. Please try again later.');
    }
  }

  function showRegister() {
    // Replace this with the code to display the registration form
    alert('Switch to Register form!');
  }

    function showLogin() {
      document.getElementById('register-form').style.display = 'none';
      document.getElementById('login-form').style.display = 'block';
    }

    document.getElementById('registerForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Collect form data
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const mobile = document.getElementById('register-mobile').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    // Create JSON payload
    const payload = {
      name: name,
      email: email,
      mobile: mobile,
      password: password,
      confirm_password: confirmPassword,
    };

    try {
      // Make POST request to the API
      const response = await fetch('http://192.168.29.32:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Handle the API response
      const data = await response.json();
      if (response.ok) {
        alert('Registration successful: ' + data.message);
      } else {
        alert('Registration failed: ' + data.message);
      }
    } catch (error) {
      alert('An error occurred: ' + error.message);
    }
  });

  function showLogin() {
    document.getElementById('register-form').style.display = 'none';
    // Logic to show the login form goes here
  }



  document.getElementById('login-form').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Create JSON payload
    const payload = {
      email: email,
      password: password
    };

    try {
      // Send POST request to the login API
      const response = await fetch('http://192.168.29.32:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Handle the response
      const data = await response.json();
      if (response.ok) {
        alert('Login successful: ' + data.message);
        // Redirect to dashboard or another page
        window.location.href = 'index.html'; // Update this to your desired page
      } else {
        alert('Login failed: ' + data.message);
      }
    } catch (error) {
      alert('An error occurred: ' + error.message);
    }
  });

  function showRegister() {
    // Logic to display the registration form
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
  }
