/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function() {
    const email = document.querySelector("#email");
    const submitBtn = document.querySelector("button");
    const message = document.querySelector(".message");

    const updateMessage = (isValid, email) => {
        const messageText = isValid
            ? `Thank you! Your email address ${email} has been added to our mailing list!`
            : "Please enter a valid email address";

        message.textContent = messageText;
        message.className = isValid ? "email-valid" : "email-invalid";
    };

    const validateEmail = (email) => /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email);

    submitBtn.addEventListener("click", (event) => {
        event.preventDefault();
        const address = email.value;
        const isValid = validateEmail(address);
        updateMessage(isValid, address);
        email.value = "";
    });
});