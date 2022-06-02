let searchbar_btn = document.getElementById('search-button')
let searchbar_inp = document.getElementById('searchbar-input')
let path_h4 = document.getElementById('path_url')
let path_text = path_h4.textContent

searchbar_btn.addEventListener('click', function (){
    if (path_text.includes('search')) {
        window.location.href = searchbar_inp.value.trim() + '=any=any'
    }
    else {
        window.location.href = 'search/'+ searchbar_inp.value.trim() + '=any=any'
    }
});

searchbar_inp.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        if (path_text.includes('search')) {
            window.location.href = searchbar_inp.value.trim() + '=any=any'
        }
        else {
            window.location.href = 'search/'+ searchbar_inp.value.trim() + '=any=any'
        }

    }
});

function applyFilter() {
    console.log(path_text)
    let temp1 = path_text.split('/')
    let temp2 = temp1[2].split('=')
    let search_word = temp2[0]
    let category = document.getElementById('filter-by-box')
    let method = document.getElementById('sort-by-box')
    let method_search_word = 'any'
    let category_search_word = 'any'
    if (category.value !== '') {
        category_search_word = category.value
    }
    if (method.value !== '') {
        method_search_word = method.value
    }
    console.log(search_word.trim())
    window.location.href = search_word.trim() + '=' + category_search_word + '=' + method_search_word

}