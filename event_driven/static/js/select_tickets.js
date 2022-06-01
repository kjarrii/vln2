// Initial
sessionStorage.clear();
let path_h2 = document.getElementById('path_url'); let event_name = document.getElementById('event_name'); let event_address = document.getElementById('event_address'); let event_start = document.getElementById('event_start'); let event_max = document.getElementById('event_max'); let event_prices = document.getElementById('event_prices'); let event_end = document.getElementById('event_end'); let event_tickets_amount = document.getElementById('event_tickets_amount'); let event_desc = document.getElementById('event_desc'); let event_image = document.getElementById('event_image'); let event_lat = document.getElementById('event_lat'); let event_long = document.getElementById('event_long')
sessionStorage.setItem('event_name', event_name.textContent); sessionStorage.setItem('event_address', event_address.textContent); sessionStorage.setItem('event_start', event_start.textContent); sessionStorage.setItem('event_name', event_name.textContent); sessionStorage.setItem('event_max', event_max.textContent); sessionStorage.setItem('event_prices', event_prices.textContent); sessionStorage.setItem('event_end', event_end.textContent); sessionStorage.setItem('event_tickets_amount', event_tickets_amount.textContent); sessionStorage.setItem('event_desc', event_desc.textContent); sessionStorage.setItem('event_image', event_image.textContent); sessionStorage.setItem('event_lat', event_lat.textContent); sessionStorage.setItem('event_long', event_long.textContent)
let path_text2 = path_h2.textContent
let temp12 = path_text2.split('/')
let url_eventid = temp12[2]
sessionStorage.setItem("eventid", url_eventid);




////////////// Populate html

// ticket types
let types_of_tickest = sessionStorage.getItem('event_prices').split(',')
for (i in types_of_tickest) {
    split_ticket = types_of_tickest[i].split(':')
    var tag = document.createElement("p");
    var text = document.createTextNode(split_ticket[0]);
    tag.appendChild(text);
    var element = document.getElementById("ticket_type");
    element.appendChild(tag);
}

// price
for (i in types_of_tickest) {
    split_ticket2 = types_of_tickest[i].split(':')
    var tag2 = document.createElement("p");
    var text2 = document.createTextNode(split_ticket2[1] + " kr");
    tag2.appendChild(text2);
    var element2 = document.getElementById("ticket_price");
    element2.appendChild(tag2);
}

// amount of tickets
for (i in types_of_tickest) {
    var mi = document.createElement("input");
    mi.setAttribute('type', 'number');
    mi.setAttribute('value', '0');
    mi.setAttribute('max', '10');
    mi.setAttribute('min', '0');
    mi.style.margin = "3px 100px 3px 3px";
    var element3 = document.getElementById("ticket_amount");
    element3.appendChild(mi)
}


//// Exporting
function verify_input(total_tickets) {
    return true
}

function go_forward (){
    var total_tickets = []
    for (i in types_of_tickest) {
    split_ticket2 = types_of_tickest[i].split(':')
    let test = 3000
    total_tickets.push(split_ticket2[0].toString() + ":" + element3.children[i].value.toString())
    }
    if (verify_input(total_tickets)) {
        sessionStorage.setItem('tickets', total_tickets);
        console.log(sessionStorage.getItem('tickets'))
        window.location.href = 'select_delivery'
    }
}
