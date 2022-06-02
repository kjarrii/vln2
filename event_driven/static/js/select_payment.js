ticket_element = document.getElementById('id_tickets');name_element = document.getElementById('id_name');email_element = document.getElementById('id_email');phone_element = document.getElementById('id_phone');full_name_element = document.getElementById('id_full_name');street_element = document.getElementById('id_street');no_element = document.getElementById('id_no');city_element = document.getElementById('id_city');zip_element = document.getElementById('id_zip');country_element = document.getElementById('id_country');event_element = document.getElementById('id_eventid');user_element = document.getElementById('id_userid');delivery_element = document.getElementById('id_delivery_method');submit_button = document.getElementById('submit_button');

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

function load_ticket_stuff () {
    let org_amount = sessionStorage.getItem('tickets').split(',')
    let org_prices = sessionStorage.getItem('event_prices').split(',')
    let type = []
    let amount = []
    let prices = []
    for (i in org_amount) {
        let amount_list = org_amount[i].split(':')
        let price_list = org_prices[i].split(':')
        type.push(amount_list[0])
        amount.push(amount_list[1])
        prices.push(price_list[1])
    }
    console.log(type)
    console.log(amount)
    console.log(prices)
}

function go_forward (){
    ticket_element.value = sessionStorage.getItem('tickets');name_element.value = sessionStorage.getItem('name');email_element.value = sessionStorage.getItem('email');phone_element.value = sessionStorage.getItem('phone');full_name_element.value = sessionStorage.getItem('full_name');street_element.value = sessionStorage.getItem('street');no_element.value = sessionStorage.getItem('no');city_element.value = sessionStorage.getItem('city');zip_element.value = sessionStorage.getItem('zip');country_element.value = sessionStorage.getItem('country');event_element.value = sessionStorage.getItem('eventid');delivery_element.value = sessionStorage.getItem('delivery_method');user_element.value = JSON.parse(document.getElementById('user_id').textContent);
    if (verify_input()) {

        submit_button.click()
    }
}
load_ticket_stuff()