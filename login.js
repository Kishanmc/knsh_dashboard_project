document.querySelector('.login-box form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission
  
    // Collect login form data
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;
  
    // Prepare data to be sent
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
  
    // Display loading spinner (if you have one)
    const loginButton = document.querySelector('.login-btn');
    loginButton.textContent = 'Logging in...';
  
    try {
      // Send data to login.php
      const response = await fetch('login.php', {
        method: 'POST',
        body: formData
      });
  
      const result = await response.json();
      loginButton.textContent = 'Login'; // Reset button text
  
      if (result.success) {
        alert('Login successful! Redirecting...');
        window.location.href = 'dashboard.html'; // Redirect to dashboard or desired page
      } else {
        alert('Login failed: ' + result.message);
      }
    } catch (error) {
      loginButton.textContent = 'Login';
      alert('An error occurred. Please try again.');
    }
  });
  