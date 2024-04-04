const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Perform form validation
  if (usernameInput.value.trim() === '') {
    alert('Please enter a username');
    return;
  }
  
  if (passwordInput.value.length < 6) {
    alert('Password must be at least 6 characters long');
    return;
  }
  
  // Submit form data to server
  // ...
});