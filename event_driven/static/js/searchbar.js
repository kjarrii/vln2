let searchbar_btn = document.getElementById('search-button')
let searchbar_inp = document.getElementById('searchbar-input')
let path_h4 = document.getElementById('path_url')
let path_text = path_h4.textContent

searchbar_btn.addEventListener('click', function (){
    if (path_text.includes('search')) {
        window.location.href = searchbar_inp.value
    }
    else {
        window.location.href = 'search/'+ searchbar_inp.value
    }
});

searchbar_inp.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        if (path_text.includes('search')) {
            window.location.href = searchbar_inp.value
        }
        else {
            window.location.href = 'search/'+ searchbar_inp.value
        }

    }
})