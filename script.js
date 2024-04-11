document.addEventListener("DOMContentLoaded", function () {
    // Selecting the form and relevant input fields
    const form = document.querySelector(".form-main-div");
    const passwordInput = form.querySelector("#password");
    const confirmPasswordInput = form.querySelector("#confirmPassword");
    const error = form.querySelector("#error");

    // Function to check if passwords match and update error message
    function validatePasswords() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (password !== "" && confirmPassword !== "" && password !== confirmPassword) {
            error.textContent = "* Passwords do not match";
        } else {
            error.textContent = "";
        }
    }

    // Adding event listeners to password fields for input events
    form.addEventListener("input", validatePasswords);
});
