

      // Handle form submission
      document.getElementById('signupForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const contactNumber = document.getElementById('contactNumber').value;
        const location = document.getElementById('location').value;
        const userType = document.getElementById('userType').value;
        const termsAccepted = document.getElementById('termsCheckbox').checked;

        const errorMessage = document.getElementById('signupError');
        const successMessage = document.getElementById('signupSuccess');
        const loadingSpinner = document.getElementById('loadingSpinner');

        if (fullName && email && contactNumber && location && userType && termsAccepted) {
          errorMessage.classList.add('hidden');
          loadingSpinner.classList.remove('hidden');

          // Simulate a delay for demonstration
          setTimeout(() => {
            loadingSpinner.classList.add('hidden');
            successMessage.classList.remove('hidden');
            
            // Redirect to the dashboard based on user type after 2 seconds
            setTimeout(() => {
              if (userType === 'ideaPresenter') {
                window.location.href = 'idea_presenter_dashboard.html';
              } else if (userType === 'funder') {
                window.location.href = 'funder_dashboard.html';
              }
            }, 2000);
          }, 1500);
        } else {
          errorMessage.classList.remove('hidden');
        }
      });

      // Toggle conditional fields based on user type
      document.getElementById('userType').addEventListener('change', function () {
        const userType = this.value;
        const funderDetails = document.getElementById('funderDetails');
        const ideaPresenterDetails = document.getElementById('ideaPresenterDetails');

        if (userType === 'funder') {
          funderDetails.classList.remove('hidden');
          ideaPresenterDetails.classList.add('hidden');
        } else if (userType === 'ideaPresenter') {
          funderDetails.classList.add('hidden');
          ideaPresenterDetails.classList.remove('hidden');
        }
      });
    
      // Signup form submission
document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch('http://localhost/fundraising/signup.php', {
      method: 'POST',
      body: formData
  })
  .then(response => response.json())
  .then(data => {
      if (data.status === 'success') {
          alert('User registered successfully!');
          window.location.href = 'login.html'; // Redirect to login after successful registration
      } else {
          alert(data.message);
      }
  });
});

  