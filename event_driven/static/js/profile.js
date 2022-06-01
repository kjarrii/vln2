let element = document.getElementById('favorite_categories');
let now_fav = element.getAttribute('nowFav');
const fav = now_fav.split(",");
let today = new Date();
let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
let time = today.getHours() + ':' + today.getMinutes();

function pop_fav() {
        for (let i = 0; i < fav.length; i++) {
            let di = document.createElement('div');
            di.innerHTML = '<div class="fav-cat" id="catfav">'+ fav[i] +'<a class="del-fav-btn" del-date="'+date + ' ' + time +'">X</a></div>';
            di.onclick = deleteItem;
            element.appendChild(di)
        }

        function deleteItem(e) {
            let ul = document.getElementById('catfav');
            ul.removeChild(di);

            let list = document.getElementById('favorite_categories');
            list.addEventListener('click', function(e) {
            let delDate = e.target.getAttribute('del-date');
            let index = fav.map((item) => item.date).indexOf(delDate);
            console.log(index);
            fav.splice(index, 1);
            console.log(fav)
    });
  }


  }

function not_fav() {
    let element = document.getElementById('favorite_categories');
    let now_fav = element.getAttribute('nowFav');
    let all_fav = element.getAttribute('allFav');
    const fav = now_fav.split(",");
    const all = all_fav.split(",");
    const f = new Set(fav);
    const notFav = all.filter( x => !f.has(x) );

    let drp = document.getElementById('fav-dropdwn');
    for(var i = 0; i < notFav.length; i++) {
        var opt = notFav[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        drp.appendChild(el);

}}

not_fav()
pop_fav()