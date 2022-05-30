let searchbar_btn = document.getElementById('search-button')
let searchbar_inp = document.getElementById('searchbar-input')


searchbar_btn.addEventListener('click', function (){
    window.location.href = searchbar_inp.value
});

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