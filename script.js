const form = document.getElementById("form");
const dismissBtn = document.querySelector(".dismiss-btn");

const validateEmail = (email) => {
    if (!email) {
        return "Email is required";
    }
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!isValidEmail.test(email)) {
        return "Valid email required";
    }
    return "";
};

const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { email } = Object.fromEntries(formData);

    const errorMessage = validateEmail(email);

    if (errorMessage) {
        const emailErrorElement = document.querySelector(
            ".email-error-message"
        );
        emailErrorElement.innerText = errorMessage || "";
    } else {
        window.location.href = "success.html";
    }
};

if (form) {
    form.addEventListener("submit", handleSubmit);
}

if (dismissBtn) {
    dismissBtn.addEventListener("click", () => {
        window.location.href = "index.html";
    });
}
