function showToast(toastId, message) {
    const toastElement = document.getElementById(toastId);
    const toastBody = toastElement.querySelector('.toast-body');
    toastBody.textContent = message;
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
}

document.getElementById('username').addEventListener('input', function () {
    const usernameInput = this;
    const isValidUsername = usernameInput.value.trim() !== '';
    usernameInput.style.borderColor = isValidUsername ? 'green' : 'red';
    if (!isValidUsername) {
        showToast('toast-username', 'Username cannot be empty');
    }
});

document.getElementById('email').addEventListener('input', function () {
    const emailInput = this;
    const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput.value);
    emailInput.style.borderColor = isValidEmail ? 'green' : 'red';
    if (!isValidEmail) {
        showToast('toast-email', 'Invalid email format');
    }
});

document.getElementById('location').addEventListener('input', function () {
    const locationInput = this;
    const isValidLocation = locationInput.value.trim() !== '';
    locationInput.style.borderColor = isValidLocation ? 'green' : 'red';
    if (!isValidLocation) {
        showToast('toast-location', 'Location cannot be empty');
    }
});

document.getElementById('password').addEventListener('input', function () {
    const passwordInput = this;
    const isValidPassword = passwordInput.value.length >= 8;
    passwordInput.style.borderColor = isValidPassword ? 'green' : 'red';
    if (!isValidPassword) {
        showToast('toast-password', 'Password must be at least 8 characters');
    }
});

// Add the form submission event listener
document.querySelector('form').addEventListener('submit', function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Your form submission logic goes here
    // For now, let's just display an alert and reset the form
    alert('Form Submitted');
    this.reset(); // Reset the form
});