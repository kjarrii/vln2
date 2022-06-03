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

if (delVal === 'electronic_ticket'){
     deltxt = 'electronically';
}

else { deltxt = 'via postal services';
}

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






sessionStorage.clear() // Þetta á að vera í endan til að hreinsa all bókinarferlið út, á ekki að vera hægt að fara til baka