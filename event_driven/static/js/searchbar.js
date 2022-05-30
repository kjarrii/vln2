let searchbar_btn = document.getElementById('search-button')
let searchbar_inp = document.getElementById('searchbar-input')


searchbar_btn.addEventListener('click', function (){
    window.location.href = 'search/'+ searchbar_inp.value
});

searchbar_inp.addEventListener('keypress', function(e) {
    console.log(e.key)
    if (e.key === 'Enter') {
        window.location.href = 'search/'+ searchbar_inp.value
    }
})