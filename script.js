document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Stop form submission

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    let successMessage = document.querySelector(".success-message");

    let errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach(el => el.textContent = ""); // Clear old errors
    successMessage.textContent = ""; // Clear old success message

    let valid = true;

    // Name validation
    if (name.value.trim() === "") {
        errorElements[0].textContent = "Name is required.";
        valid = false;
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
        errorElements[1].textContent = "Email is required.";
        valid = false;
    } else if (!emailPattern.test(email.value)) {
        errorElements[1].textContent = "Please enter a valid email.";
        valid = false;
    }

    // Message validation
    if (message.value.trim() === "") {
        errorElements[2].textContent = "Message cannot be empty.";
        valid = false;
    }

    // Show success message if all valid
    if (valid) {
        successMessage.textContent = "✅ Form submitted successfully!";
        name.value = "";
        email.value = "";
        message.value = "";
    }
});
