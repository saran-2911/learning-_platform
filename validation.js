document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', (event) => {
        // Prevent the form from submitting by default
        event.preventDefault();

        let messages = [];

        // Name validation
        if (nameInput.value.trim() === '') {
            messages.push('Name is required.');
        }

        // Email validation
        if (emailInput.value.trim() === '') {
            messages.push('Email is required.');
        } else if (!/^\S+@\S+\.\S+$/.test(emailInput.value)) {
            messages.push('Email is not valid.');
        }

        // Password validation
        if (passwordInput.value.length < 8) {
            messages.push('Password must be at least 8 characters long.');
        }

        if (messages.length > 0) {
            errorMessage.innerText = messages.join(' ');
        } else {
            errorMessage.innerText = '';
            alert('Registration successful!');
            form.submit(); // Or handle with AJAX
        }
    });
});