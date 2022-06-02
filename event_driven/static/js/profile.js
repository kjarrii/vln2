let element = document.getElementById('favorite_categories');
let favElements = document.getElementById('fav_cat_elements');
let now_fav = element.getAttribute('nowFav');
const fav = now_fav.split(",");
let all_fav = element.getAttribute('allFav');
const all = all_fav.split(",");
let f = new Set(fav);
let notFav = all.filter( x => !f.has(x) );

function pop_fav() {
        for (let i = 0; i < fav.length; i++) {
            let di = document.createElement('div');
            di.innerHTML = '<div class="fav-cat">'+ fav[i] +'<a class="del-fav-btn" del-date="'+i +'">X</a></div>';
            di.setAttribute('id', i.toString());
            di.setAttribute('onclick', 'deletecat(this.id)');
            favElements.appendChild(di)
        }

    not_fav();
  }

function deletecat(eleid) {
    let de = document.getElementById(eleid);
    fav.splice(eleid,1);
    favElements.innerHTML = '';
    pop_fav();


}

function not_fav() {
    f = new Set(fav);
    notFav = all.filter( x => !f.has(x) );
    let drp = document.getElementById('fav-dropdwn');
    drp.innerHTML = '';

    let elo = document.createElement("option");
        elo.textContent = 'Add category';
        drp.appendChild(elo);

    for(var i = 0; i < notFav.length; i++) {
        var opt = notFav[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = i.toString();
        //el.setAttribute('id', i.toString());
        drp.setAttribute('onchange', 'addcat(this.value)');
        drp.appendChild(el);

}}

function addcat(addid){
    fav.push(notFav[addid]);
    favElements.innerHTML = '';
    pop_fav();
}

pop_fav()