

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
        var opt = notFav[i].charAt(0).toUpperCase() + notFav[i].slice(1);;
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        drp.appendChild(el);
}}

not_fav()
