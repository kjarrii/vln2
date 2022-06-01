console.log("selecting payment")
ticket_element = document.getElementById('id_tickets')
name_element = document.getElementById('id_name')
email_element = document.getElementById('id_email')
phone_element = document.getElementById('id_phone')
full_name_element = document.getElementById('id_full_name')
street_element = document.getElementById('id_street')
no_element = document.getElementById('id_no')
city_element = document.getElementById('id_city')
zip_element = document.getElementById('id_zip')
country_element = document.getElementById('id_country')
event_element = document.getElementById('id_eventid')
user_element = document.getElementById('id_userid')
submit_button = document.getElementById('submit_button')
console.log(ticket_element)

function go_back () {
    window.location.href = 'select_delivery'
}

function verify_input(total_tickets) {
    return true
}

function delete_this_function() {
    sessionStorage.setItem('tickets', 'ZoneA:1,ZoneB:0,ZoneC:0');
    sessionStorage.setItem('name', 'Kári G');
    sessionStorage.setItem('email', 'karigeorgs@gmail.com');
    sessionStorage.setItem('phone', '+6969696996');
    sessionStorage.setItem('full_name', 'Kári Georgsson');
    sessionStorage.setItem('street', 'Bakers');
    sessionStorage.setItem('no', '21');
    sessionStorage.setItem('city', 'London');
    sessionStorage.setItem('zip', '210');
    sessionStorage.setItem('country', 'England');
}
function go_forward (){
    delete_this_function()
    ticket_element.value = sessionStorage.getItem('tickets')
    name_element.value = sessionStorage.getItem('name')
    email_element.value = sessionStorage.getItem('email')
    phone_element.value = sessionStorage.getItem('phone')
    full_name_element.value = sessionStorage.getItem('full_name')
    street_element.value = sessionStorage.getItem('street')
    no_element.value = sessionStorage.getItem('no')
    city_element.value = sessionStorage.getItem('city')
    zip_element.value = sessionStorage.getItem('zip')
    country_element.value = sessionStorage.getItem('country')
    event_element.value = sessionStorage.getItem('eventid')
    user_element.value = JSON.parse(document.getElementById('user_id').textContent);

    if (verify_input()) {

        submit_button.click()
    }
}
