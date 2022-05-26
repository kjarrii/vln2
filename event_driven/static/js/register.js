/* Makes the register button not work unless the terms and conditions checkbox is checked: */

let registerButton = document.getElementById("register-button");
let termsCheckBox = document.getElementById("terms-checkbox");

registerButton.disabled = true;

termsCheckBox.addEventListener("click", function () {
    if (registerButton.disabled === true) {
        registerButton.disabled = false;
        registerButton.classList.add("hover")
    }
    else {
        registerButton.disabled = true;
        registerButton.classList.remove("hover")
    }
});
