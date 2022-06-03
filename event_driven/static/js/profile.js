let element = document.getElementById('favorite_categories');
let favElements = document.getElementById('fav_cat_elements');
let now_fav = element.getAttribute('nowFav');
const fav = now_fav.split(",");
let all_fav = element.getAttribute('allFav');
const all = all_fav.split(",");
let f = new Set(fav);
let notFav = all.filter( x => !f.has(x) );
let submit_fav_element = document.getElementById('category_form_div');
let submit_but_element = document.getElementById('submit_button');
let submit_name_element = document.getElementById('first_name_div');
let name_element = document.getElementById('username-box-input');

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function pop_fav() {
        for (let i = 0; i < fav.length; i++) {
            if (fav[i] !== "") {
                let di = document.createElement('div');
                di.innerHTML = '<div class="fav-cat">'+ capitalizeFirstLetter(fav[i]) +'<a class="del-fav-btn" del-date="'+i +'">X</a></div>';
                di.setAttribute('id', i.toString());
                di.setAttribute('onclick', 'deletecat(this.id)');
                favElements.appendChild(di)
            }
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

function send_data() {
    let return_categories = ""
    for (var i = 0; i < favElements.children.length; i++) {
        return_categories = return_categories + "," + favElements.children[i].innerText.trim().slice(0, -1).toLowerCase()
    }
    submit_fav_element.children[0].value = return_categories.substring(1)
    if (name_element.value === "") {
        console.log("yes")
    }
    else {
        submit_name_element.children[0].value = name_element.value
    }
    submit_but_element.click()
}
pop_fav()