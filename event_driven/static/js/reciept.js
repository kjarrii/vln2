let asdf = sessionStorage.getItem('eventid')

let titElem = document.getElementById("ev-tit");
let locElem = document.getElementById("ev-tit");
let totElem = document.getElementById("ev-tit");
let delElem = document.getElementById("ev-tit");
let titVal = sessionStorage.getItem('event_name');
let locVal = sessionStorage.getItem('');
let totVal = sessionStorage.getItem('');
let delVal = sessionStorage.getItem('');

console.log(titVal.value);

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
    let texdel = document.createTextNode(delVal);
    deltag.appendChild(texdel);
    delElem.appendChild(deltag);




sessionStorage.clear() // Þetta á að vera í endan til að hreinsa all bókinarferlið út, á ekki að vera hægt að fara til baka