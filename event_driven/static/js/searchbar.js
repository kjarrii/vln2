let searchbar_btn = document.getElementById('search-button')
let searchbar_inp = document.getElementById('searchbar-input')
let path_h4 = document.getElementById('path_url')
let path_text = path_h4.textContent

searchbar_btn.addEventListener('click', function (){
    if (path_text.includes('search')) {
        window.location.href = searchbar_inp.value +'/any' + '/any'
    }
    else {
        window.location.href = 'search/'+ searchbar_inp.value + '/any' + '/any'
    }
});

searchbar_inp.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        if (path_text.includes('search')) {
            window.location.href = searchbar_inp.value +'/any' + '/any'
        }
        else {
            window.location.href = 'search/'+ searchbar_inp.value +'/any' + '/any'
        }

    }
});

function applyFilter() {
    let category = document.getElementById('filter-by-box')
    let method = document.getElementById('sort-by-box')
    console.log(category)
    console.log(method)
}