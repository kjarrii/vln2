let dropdown = document.getElementById('dropdown-visibility')

function displayDropdown() {
    if (dropdown.classList.contains('invisible')) {
        dropdown.classList.remove('invisible')
    }
    else {
        dropdown.classList.add('invisible')
    }
}

document.addEventListener('click', function(event) {
    console.log(event)
    if (!dropdown.classList.contains('invisible') && (event.path[0].className !== 'navbar-option') && event.path[0].className !== 'profile-image-small') {
        dropdown.classList.add('invisible')
    }
})
