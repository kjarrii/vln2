let eventid = sessionStorage.getItem('eventid')
let postal_service_box = document.getElementById('postal_service_div')
let radioButtons = document.querySelectorAll('input[name="ticket_type"]');
let name_element = document.getElementById('name_input');
let email_element = document.getElementById('email_input');
let phone_element = document.getElementById('phone_input');
let full_name_element = document.getElementById('full_name_input')
let street_element = document.getElementById('street_input')
let city_element = document.getElementById('city_input')
let no_element = document.getElementById('no_input')
let zip_element = document.getElementById('zip_input')
let country_element = document.getElementById('country_input')

function go_back () {
    window.location.href = eventid
}


function handleRadioClick() {
    if (document.getElementById('select_electronic_ticket').checked) {
        postal_service_box.style.display = 'none';
    }
    else {
        postal_service_box.style.display = 'block';
    }
}
radioButtons.forEach(radio => {
    radio.addEventListener('click', handleRadioClick)
})

function go_forward() {
    if (document.getElementById('select_electronic_ticket').checked) {
        if (email_element.value !== '' && name_element.value !== '' && phone_element.value !== '') {
            sessionStorage.setItem('name', name_element.value)
            sessionStorage.setItem('email', email_element.value)
            sessionStorage.setItem('phone', phone_element.value)
            sessionStorage.setItem('delivery_method', 'electronic_ticket')
            sessionStorage.setItem('full_name', '')
            sessionStorage.setItem('street', '')
            sessionStorage.setItem('city', '')
            sessionStorage.setItem('no', '')
            sessionStorage.setItem('zip', '')
            sessionStorage.setItem('country', '')
            window.location.href = 'select_payment'
        }
    }
    else if(document.getElementById('select_postal_service').checked) {
        if (email_element.value !== '' && name_element.value !== '' && phone_element.value !== '' && full_name_element.value !== '' && street_element.value !== '' && city_element.value !== '' && no_element.value !== '' && zip_element.value !== '' && country_element.value !== ''){
            sessionStorage.setItem('name', name_element.value)
            sessionStorage.setItem('email', email_element.value)
            sessionStorage.setItem('phone', phone_element.value)
            sessionStorage.setItem('delivery_method', 'postal_service')
            sessionStorage.setItem('full_name', full_name_element.value)
            sessionStorage.setItem('street', street_element.value)
            sessionStorage.setItem('city', city_element.value)
            sessionStorage.setItem('no', no_element.value)
            sessionStorage.setItem('zip', zip_element.value)
            sessionStorage.setItem('country', country_element.value)
            window.location.href = 'select_payment'
        }
    }
    else {
        console.log("Ekki búið að velja box")
    }
}