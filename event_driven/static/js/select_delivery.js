let eventid = sessionStorage.getItem('eventid');
let postal_service_box = document.getElementById('postal_service_div');
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
let database_name_element = document.getElementById('name_field')
let database_email_element = document.getElementById('email_field')
let error_element = document.getElementById('err');

full_name_element.value = database_name_element.innerText
if (sessionStorage.getItem('name') !== null) {
    name_element.value = sessionStorage.getItem('name')
}
else {
    name_element.value = database_name_element.innerText
}
if (sessionStorage.getItem('email') !== null) {
    email_element.value = sessionStorage.getItem('email')
}
else {
    email_element.value = database_email_element.innerText
}
if (sessionStorage.getItem('phone') !== null) {
    phone_element.value = sessionStorage.getItem('phone')
}
if (sessionStorage.getItem('delivery_method') !== null) {
    if (sessionStorage.getItem('delivery_method') === 'electronic_ticket') {
        document.getElementById('select_electronic_ticket').click()
    }
    else {
        document.getElementById('select_postal_service').click()
        postal_service_box.style.display = 'block';
        if (sessionStorage.getItem('full_name') !== null) {
            full_name_element.value = sessionStorage.getItem('full_name')
        }
        if (sessionStorage.getItem('street') !== null) {
            street_element.value = sessionStorage.getItem('street')
        }
        if (sessionStorage.getItem('city') !== null) {
            city_element.value = sessionStorage.getItem('city')
        }
        if (sessionStorage.getItem('no') !== null) {
            no_element.value = sessionStorage.getItem('no')
        }
        if (sessionStorage.getItem('zip') !== null) {
            zip_element.value = sessionStorage.getItem('zip')
        }
        if (sessionStorage.getItem('country') !== null) {
            country_element.value = sessionStorage.getItem('country')
        }
    }
}



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

function error_check() {
    error_element.style.display = "block";
    error_element.innerHTML = '';
    let nei = true;

    if (name_element.value === '') {
            let tagName = document.createElement("li");
            tagName.innerHTML = "Please ticket holder's name";
            error_element.appendChild(tagName);
            nei = false;
        }
        if (email_element.value === '') {
            let tagName = document.createElement("li");
            tagName.innerHTML = "Please enter ticket holder's email";
            error_element.appendChild(tagName);
            nei = false;
        }
        if (phone_element.value === '') {
            let tagName = document.createElement("li");
            tagName.innerHTML = "Please enter ticket holder's phone number";
            error_element.appendChild(tagName);
            nei = false;
        }

    if (document.getElementById('select_postal_service').checked) {
        if (full_name_element.value === '') {
            let tagName = document.createElement("li");
            tagName.innerHTML = "Please enter recipient's full name";
            error_element.appendChild(tagName);
            nei = false;
        }
        if (street_element.value === '') {
            let tagName = document.createElement("li");
            tagName.innerHTML = "Please enter recipient's street";
            error_element.appendChild(tagName);
            nei = false;
        }
        if (city_element.value === '') {
            let tagName = document.createElement("li");
            tagName.innerHTML = "Please enter recipient's city";
            error_element.appendChild(tagName);
            nei = false;
        }
        if (no_element.value === '') {
            let tagName = document.createElement("li");
            tagName.innerHTML = "Please enter recipient's house number";
            error_element.appendChild(tagName);
            nei = false;
        }
        if (zip_element.value === '') {
            let tagName = document.createElement("li");
            tagName.innerHTML = "Please enter recipient's zip code";
            error_element.appendChild(tagName);
            nei = false;
        }

    }
    if (nei) {
        error_element.style.display = "none";
    }
    return nei;
}


function go_forward() {
    if (error_check()) {
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
        } else if (document.getElementById('select_postal_service').checked) {
            if (email_element.value !== '' && name_element.value !== '' && phone_element.value !== '' && full_name_element.value !== '' && street_element.value !== '' && city_element.value !== '' && no_element.value !== '' && zip_element.value !== '' && country_element.value !== '') {
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
        } else {
            console.log("Ekki búið að velja box")
        }
    }
}