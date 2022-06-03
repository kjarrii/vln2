// Initial
let path_h2 = document.getElementById('path_url'); let event_name = document.getElementById('event_name'); let event_address = document.getElementById('event_address'); let event_start = document.getElementById('event_start'); let event_max = document.getElementById('event_max'); let event_prices = document.getElementById('event_prices'); let event_end = document.getElementById('event_end'); let event_tickets_amount = document.getElementById('event_tickets_amount'); let event_desc = document.getElementById('event_desc'); let event_image = document.getElementById('event_image'); let event_lat = document.getElementById('event_lat'); let event_long = document.getElementById('event_long')
sessionStorage.setItem('event_name', event_name.textContent); sessionStorage.setItem('event_address', event_address.textContent); sessionStorage.setItem('event_start', event_start.textContent); sessionStorage.setItem('event_name', event_name.textContent); sessionStorage.setItem('event_max', event_max.textContent); sessionStorage.setItem('event_prices', event_prices.textContent); sessionStorage.setItem('event_end', event_end.textContent); sessionStorage.setItem('event_tickets_amount', event_tickets_amount.textContent); sessionStorage.setItem('event_desc', event_desc.textContent); sessionStorage.setItem('event_image', event_image.textContent); sessionStorage.setItem('event_lat', event_lat.textContent); sessionStorage.setItem('event_long', event_long.textContent)
let path_text2 = path_h2.textContent
let temp12 = path_text2.split('/')
let url_eventid = temp12[2]
sessionStorage.setItem("eventid", url_eventid);
let tott = '';



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
    var text2 = document.createTextNode(split_ticket2[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ISK");
    tag2.appendChild(text2);
    var element2 = document.getElementById("ticket_price");
    element2.appendChild(tag2);
}

// amount of tickets
for (i in types_of_tickest) {
    var mi = document.createElement("input");
    mi.setAttribute('type', 'number');
    console.log("asdf")
    console.log(sessionStorage.getItem('tickets'))
    if (sessionStorage.getItem('tickets') === null) {
        mi.setAttribute('value', '0');
    }
    else {
        let temp_tickets = sessionStorage.getItem('tickets').split(",")
        let value = temp_tickets[i].split(":")
        mi.setAttribute('value', value[1]);
    }
    mi.setAttribute('max', '10');
    mi.setAttribute('min', '0');
    mi.style.margin = "5px 100px 5px 0px";
    mi.onchange = total;
    var element3 = document.getElementById("ticket_amount");
    element3.appendChild(mi)
}

// sum of prices
for (i in types_of_tickest) {
    var tag3 = document.createElement("p");
    var totalCalculated = document.createTextNode('');
    tag3.appendChild(totalCalculated);
    var element4 = document.getElementById("total");
    element4.appendChild(tag3);
}
    var lin = document.createElement("hr");
    lin.setAttribute('class', 'totalLine');
    lin.style.display = "none";
    element4.appendChild(lin);


    let toto_by_africa = document.createTextNode('');
    element4.appendChild(toto_by_africa);

// To many error
let mError = document.getElementById('errr');
let mErrorMessage = document.createTextNode('You can only buy 10 total tickets for each event!');
mError.style.display = "none";
mError.appendChild(mErrorMessage);


// Total calculations
function total(){
    let nooftickets = element3.children;
    let amountArr = [];
    for (let i in types_of_tickest){
        amountArr.push(parseInt(nooftickets[i].value));
    }
    let priceArr = [];
    for (let i in types_of_tickest) {
        let tkt_price = types_of_tickest[i].split(':');
        priceArr.push(tkt_price[1]);
    }
    let totArr = [];
    for (let i in priceArr){
        totArr.push(parseInt(amountArr[i]) * parseInt(priceArr[i]));
    }

    for (let i in totArr) {
        element4.children[i].innerHTML = totArr[i].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' ISK';
    }
    lin.style.display = "block";

    let sum = totArr.reduce((partialSum, a) => partialSum + a, 0);
    toto_by_africa.nodeValue = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ISK";
    tott = toto_by_africa.nodeValue;

    let nosum = amountArr.reduce((partialSum, a) => partialSum + a, 0);

    console.log(nosum);
    if (nosum > 10) {
        mError.style.display = "block";
    }
    else {
        mError.style.display = "none";
    }

}

//// Exporting
function verify_input(total_tickets) {
    let total = 0
    for (i in total_tickets) {
        let temp = total_tickets[i].split(':')
        total = total + parseInt(temp[1])
    }
    if (total > 0 && total <= 10) {
        return true
    }
    else {
        return false
    }
}
function verify_remaining(tickets) {
    let org_amount = sessionStorage.getItem('event_tickets_amount').split(",")
    let org_max = sessionStorage.getItem('event_max').split(",")
    for (i in org_max) {
        let temp1 = org_amount[i].split(":")
        let temp2 = org_max[i].split(":")
        let temp3 = tickets[i].split(":")
        let tickets_remaining = parseInt(temp2[1]) - parseInt(temp1[1])
        if (parseInt(temp3[1]) > tickets_remaining) {
            console.log("Bannað! Það eru "+ tickets_remaining +" miðar eftir af týpu" + temp1[0])
            return false
        }

    }
    return true
}
function go_forward (){
    var total_tickets = []
    for (i in types_of_tickest) {
        split_ticket2 = types_of_tickest[i].split(':')
        if (element3.children[i].value !== '') {
            total_tickets.push(split_ticket2[0].toString() + ":" + element3.children[i].value.toString())
        }
        else {
            total_tickets.push(split_ticket2[0].toString() + ":" + '0')
        }
    }
    if (verify_input(total_tickets) && verify_remaining(total_tickets)) {
        sessionStorage.setItem('tickets', total_tickets);
        sessionStorage.setItem('total_price', tott);
        window.location.href = 'select_delivery'
    }
}
