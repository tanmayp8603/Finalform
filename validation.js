document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Clear previous error messages
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    let isValid = true;

    // Validate email
    const email = document.getElementById('email').value;
    if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate name
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    }

    // Validate surname
    const surname = document.getElementById('surname').value;
    if (surname.trim() === '') {
        document.getElementById('surnameError').textContent = 'Surname is required.';
        isValid = false;
    }

    // Validate password
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
        isValid = false;
    }

    // Validate mobile
    const mobile = document.getElementById('mobile').value;
    if (!validateMobile(mobile)) {
        document.getElementById('mobileError').textContent = 'Please enter a valid mobile number.';
        isValid = false;
    }

    // Validate gender
    const gender = document.getElementById('gender').value;
    if (gender.trim() === '') {
        document.getElementById('genderError').textContent = 'Gender is required.';
        isValid = false;
    }

    // Validate city
    const city = document.getElementById('city').value;
    if (city.trim() === '') {
        document.getElementById('cityError').textContent = 'City is required.';
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

function validateEmail(email) {
    // Basic email validation regex
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

function validateMobile(mobile) {
    // Basic mobile number validation (10 digits)
    const re = /^\d{10}$/;
    return re.test(mobile);
}

