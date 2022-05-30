let dropdown = document.getElementById('dropdown-visibility')

function displayDropdown() {
    dropdown.classList.toggle('invisible')
}

/*document.addEventListener('click', function(event) {
    console.log(event)
    if ((event.path[0].className !== 'navbar-option') && event.path[0].className !== 'profile-image-small')) {
        dropdown.classList.toggle('invisible')
    }
})*/

