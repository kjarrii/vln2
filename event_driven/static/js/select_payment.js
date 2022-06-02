ticket_element = document.getElementById('id_tickets');name_element = document.getElementById('id_name');email_element = document.getElementById('id_email');phone_element = document.getElementById('id_phone');full_name_element = document.getElementById('id_full_name');street_element = document.getElementById('id_street');no_element = document.getElementById('id_no');city_element = document.getElementById('id_city');zip_element = document.getElementById('id_zip');country_element = document.getElementById('id_country');event_element = document.getElementById('id_eventid');user_element = document.getElementById('id_userid');delivery_element = document.getElementById('id_delivery_method');submit_button = document.getElementById('submit_button');
ticket_amount_element = document.getElementById('id_tickets_amount')
let name_on_card_element = document.getElementById('name_on_card_input');
let card_number_element = document.getElementById('card_number_input');
let expiration_date_element = document.getElementById('expiration_date_input');
let cvc_element = document.getElementById('cvc_input');
function go_back () {
    window.location.href = 'select_delivery'
}

function verify_input(total_tickets) {
    if (name_on_card_element.value !== '' && card_number_element.value !== '' && expiration_date_element.value !== '' && cvc_element.value !== ''){
        return true
    }
    else {
        return false
    }
}

function update_ticket_amount() {
    let curr = sessionStorage.getItem('tickets').split(",")
    let prev = sessionStorage.getItem('event_tickets_amount').split(",")
    let value_list = []
    let return_str = ""
    for (i in prev) {
        temp1 = curr[i].split(":")
        temp2 = prev[i].split(":")
        let new_value = parseInt(temp1[1]) + parseInt(temp2[1])
        value_list.push(temp1[0]+":"+ new_value)
    }
    for (i in value_list) {
        return_str = return_str + "," + value_list[i]
    }
    return_str = return_str.substring(1)
    return return_str

}

function go_forward (){
    ticket_element.value = sessionStorage.getItem('tickets');name_element.value = sessionStorage.getItem('name');email_element.value = sessionStorage.getItem('email');phone_element.value = sessionStorage.getItem('phone');full_name_element.value = sessionStorage.getItem('full_name');street_element.value = sessionStorage.getItem('street');no_element.value = sessionStorage.getItem('no');city_element.value = sessionStorage.getItem('city');zip_element.value = sessionStorage.getItem('zip');country_element.value = sessionStorage.getItem('country');event_element.value = sessionStorage.getItem('eventid');delivery_element.value = sessionStorage.getItem('delivery_method');user_element.value = JSON.parse(document.getElementById('user_id').textContent);
    ticket_amount_element.value = update_ticket_amount()
    console.log(update_ticket_amount())
    if (verify_input()) {

        submit_button.click()
    }
}

//load ticket stuff
let org_amount = sessionStorage.getItem('tickets').split(',')
let org_prices = sessionStorage.getItem('event_prices').split(',')
let type = []; let amount = []; let prices = []
for (i in org_amount) {
    let amount_list = org_amount[i].split(':');let price_list = org_prices[i].split(':')
    if (parseInt(amount_list[1]) > 0){type.push(amount_list[0]); amount.push(amount_list[1]); prices.push(price_list[1])}
}
console.log(type);
console.log(amount);
console.log(prices);

for (let i in type) {
    let tagType = document.createElement("p");
    let textType = document.createTextNode(type[i]);
    tagType.appendChild(textType);
    let elementType = document.getElementById("ticket_type");
    elementType.appendChild(tagType);
}

for (i in type) {
    let tag1price = document.createElement("p");
    let text1price = document.createTextNode(prices[i].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ISK");
    tag1price.appendChild(text1price);
    let elementPrice = document.getElementById("ticket_price");
    elementPrice.appendChild(tag1price);
}

for (i in type) {
    let tagAmount = document.createElement("p");
    let textAmount = document.createTextNode(amount[i]);
    tagAmount.appendChild(textAmount);
    let elementAmount = document.getElementById("ticket_amount");
    elementAmount.appendChild(tagAmount);
}
let africaTotal = [];
for (i in type) {
    let tagtotal = document.createElement("p");

    let tot = (parseInt(prices[i])*parseInt(amount[i]));
    let texttot = document.createTextNode(tot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ISK");
    tagtotal.appendChild(texttot);
    let elementtot = document.getElementById("total");
    elementtot.appendChild(tagtotal);
    africaTotal.push(tot);

}
let totprice = africaTotal.reduce((partialSum, a) => partialSum + a, 0);

let cont = document.getElementById('myndogshit');
let tagImg = document.createElement('img');
let img_src = sessionStorage.getItem('event_image').split(",")
tagImg.setAttribute('src', img_src[0]);
tagImg.setAttribute('alt', "Photo of event");
let tittag = document.createElement('h4');
tittag.textContent = sessionStorage.getItem('event_name');
let resttag = document.createElement('p');
resttag.innerHTML = sessionStorage.getItem('event_start')+"<br>" + sessionStorage.getItem('event_address');
cont.appendChild(tagImg);
cont.appendChild(tittag);
cont.appendChild(resttag);

let totp = document.getElementById("totprice");
    totp.textContent = totprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ISK";


