// Initial
sessionStorage.clear();
let path_h2 = document.getElementById('path_url')
let path_text2 = path_h2.textContent
let temp12 = path_text2.split('/')
let url_eventid = temp12[2]
sessionStorage.setItem("eventid", url_eventid);
//////////////

