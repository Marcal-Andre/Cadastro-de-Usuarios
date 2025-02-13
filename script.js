function validateStep1() {
    let valid = true;
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');

    if (!firstName.value) {
        showError(firstName, 'First Name is required');
        valid = false;
    } else {
        clearError(firstName);
    }

    if (!lastName.value) {
        showError(lastName, 'Last Name is required');
        valid = false;
    } else {
        clearError(lastName);
    }

    if (!email.value || !validateEmail(email.value)) {
        showError(email, 'Valid Email is required');
        valid = false;
    } else {
        clearError(email);
    }

    return valid;
}

function validateStep2() {
    let valid = true;
    const address = document.getElementById('address');
    const city = document.getElementById('city');
    const state = document.getElementById('state');

    if (!address.value) {
        showError(address, 'Address is required');
        valid = false;
    } else {
        clearError(address);
    }

    if (!city.value) {
        showError(city, 'City is required');
        valid = false;
    } else {
        clearError(city);
    }

    if (!state.value) {
        showError(state, 'State is required');
        valid = false;
    } else {
        clearError(state);
    }

    return valid;
}

function validateStep3() {
    let valid = true;
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    if (!username.value) {
        showError(username, 'Username is required');
        valid = false;
    } else {
        clearError(username);
    }

    if (!password.value) {
        showError(password, 'Password is required');
        valid = false;
    } else {
        clearError(password);
    }

    return valid;
}

function showError(input, message) {
    let error = input.nextElementSibling;
    if (!error || !error.classList.contains('error')) {
        error = document.createElement('div');
        error.classList.add('error');
        input.parentNode.insertBefore(error, input.nextSibling);
    }
    error.textContent = message;
}

function clearError(input) {
    let error = input.nextElementSibling;
    if (error && error.classList.contains('error')) {
        error.remove();
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function nextStep(step) {
    let valid = false;
    if (step === 2) {
        valid = validateStep1();
    } else if (step === 3) {
        valid = validateStep2();
    }

    if (valid || step === 1) {
        document.getElementById('step' + (step - 1)).style.display = 'none';
        document.getElementById('step' + step).style.display = 'block';
    }
}

document.getElementById('formStep3').addEventListener('submit', function(event) {
    if (!validateStep3()) {
        event.preventDefault();
    }
});