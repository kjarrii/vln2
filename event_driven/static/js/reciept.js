let asdf = sessionStorage.getItem('eventid')

let titElem = document.getElementById("ev-tit");
let locElem = document.getElementById("ev-loc");
let totElem = document.getElementById("ev-tot");
let delElem = document.getElementById("ev-del");
let titVal = sessionStorage.getItem('event_name');
let locVal = sessionStorage.getItem('event_address');
let totVal = sessionStorage.getItem('total_price');
let delVal = sessionStorage.getItem('delivery_method');
let deltxt = '';
let sentby = document.getElementById('sentby')
let del_det = document.getElementById('del_det')

if (delVal === 'electronic_ticket'){
     deltxt = 'electronically';
}

else { deltxt = 'via postal services';
}

if (delVal === 'electronic_ticket'){
     del_det.innerHTML = "halló";
}

else { deltxt = 'via postal services';
}

let textdel = document.createTextNode(deltxt + ' to:');
sentby.appendChild(textdel);



let tittag = document.createElement('p');
    let texttit = document.createTextNode(titVal);
    tittag.appendChild(texttit);
    titElem.appendChild(tittag);

let loctag = document.createElement('p');
    let texloc = document.createTextNode(locVal);
    loctag.appendChild(texloc);
    locElem.appendChild(loctag);

let tottag = document.createElement('p');
    let textot = document.createTextNode(totVal);
    tottag.appendChild(textot);
    totElem.appendChild(tottag);

let deltag = document.createElement('p');
    let texdel = document.createTextNode('Sent ' + deltxt);
    deltag.appendChild(texdel);
    delElem.appendChild(deltag);

let org_amount = sessionStorage.getItem('tickets').split(',')
let org_prices = sessionStorage.getItem('event_prices').split(',')
let type = []; let amount = []; let prices = []
for (i in org_amount) {
    let amount_list = org_amount[i].split(':');let price_list = org_prices[i].split(':')
    if (parseInt(amount_list[1]) > 0){type.push(amount_list[0]); amount.push(amount_list[1]); prices.push(price_list[1])}
}


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

for (i in type) {
    var tag3 = document.createElement("p");
    var totalCalculated = document.createTextNode('');
    tag3.appendChild(totalCalculated);
    var element4 = document.getElementById("total");
    element4.appendChild(tag3);
}

for (i in type) {
    let tot = (parseInt(prices[i])*parseInt(amount[i]));
    let texttot = document.createTextNode(tot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ISK");
    tagtotal.appendChild(texttot);
    let elementtot = document.getElementById("total");
    elementtot.appendChild(tagtotal);
}



sessionStorage.clear() // Þetta á að vera í endan til að hreinsa all bókinarferlið út, á ekki að vera hægt að fara til baka