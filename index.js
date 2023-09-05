const formSubmitEl = document.getElementById("form-submit");
const emailEl = document.getElementById("email");
const errorEl = document.getElementById("error-state");
const successEl = document.getElementById("success-message");
const mainContent = document.querySelector(".main-content");
const userEmail = document.getElementById("email-address");

formSubmitEl.addEventListener("click", event => {
    
    if(!emailEl.validity.valid) {
        event.preventDefault();
        emailEl.classList.add("error", "error-input");
        errorEl.style.display = "block";
    }
    else {
        emailEl.classList.remove("error", "error-input");
        errorEl.style.display = "none";
        mainContent.innerHTML = "";
        userEmail.innerHTML = emailEl.value;
        successEl.style.display = "block";

    }
});