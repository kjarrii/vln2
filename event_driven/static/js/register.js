/* Makes the register button not work unless the terms and conditions checkbox is checked: */

let registerButton = document.getElementById("register-button");
let termsCheckBox = document.getElementById("terms-checkbox");
let nameInputBox = document.getElementById('name-input-box');
let emailInputBox = document.getElementById('email-input-box');
let pwInputBox = document.getElementById('pw-input-box');
let pw2InputBox = document.getElementById('pw2-input-box');
let registerButtonReal = document.getElementById('register-button-real');
let nameErrorBox = document.getElementById('name-error-box');
let registerErrorBox = document.getElementById('register-error-box')

registerButton.disabled = true;

termsCheckBox.addEventListener("click", function () {
    if (registerButton.disabled === true) {
        registerButton.disabled = false;
        registerButton.classList.add("hover");
    }
    else {
        registerButton.disabled = true;
        registerButton.classList.remove("hover");
    }
});

function verifyClick() {
    nameErrorBox.classList.add('hidden-box')
    if (registerErrorBox) {
        registerErrorBox.classList.add('hidden-box')
    }

    let notMissing = whatIsMissing()
    if (notMissing === true) {
        registerButtonReal.click()
    }
    else {
        nameErrorBox.classList.remove('hidden-box')
    }
}


function whatIsMissing() {
    let notMissing = true;

    let regRequirements = document.createElement('ul')
    nameErrorBox.replaceChildren()
    nameErrorBox.appendChild(regRequirements)

    if (nameInputBox.value === '') {
        let nameError = document.createElement('li')
        nameError.classList.add('list-item')
        nameError.textContent = 'Name must be filled out'
        regRequirements.appendChild(nameError)
        notMissing = false;
    }
    if (emailInputBox.value === '') {
        let emailError = document.createElement('li')
        emailError.classList.add('list-item')
        emailError.textContent = 'Email must be filled out'
        regRequirements.appendChild(emailError)
        notMissing = false;
    }
    if (pwInputBox.value === '') {
        let pwError = document.createElement('li')
        pwError.classList.add('list-item')
        pwError.textContent = 'Password must be filled out'
        regRequirements.appendChild(pwError)
        notMissing = false;
    }
    if (pw2InputBox.value === '') {
        let pw2Error = document.createElement('li')
        pw2Error.classList.add('list-item')
        pw2Error.textContent = 'Password again must be filled out'
        regRequirements.appendChild(pw2Error)
        notMissing = false;
    }

    return notMissing;
}













