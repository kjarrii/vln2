// Initial
sessionStorage.clear();
let path_h2 = document.getElementById('path_url'); let event_name = document.getElementById('event_name'); let event_address = document.getElementById('event_address'); let event_start = document.getElementById('event_start'); let event_max = document.getElementById('event_max'); let event_prices = document.getElementById('event_prices'); let event_end = document.getElementById('event_end'); let event_tickets_amount = document.getElementById('event_tickets_amount'); let event_desc = document.getElementById('event_desc'); let event_image = document.getElementById('event_image'); let event_lat = document.getElementById('event_lat'); let event_long = document.getElementById('event_long')
sessionStorage.setItem('event_name', event_name.textContent); sessionStorage.setItem('event_address', event_address.textContent); sessionStorage.setItem('event_start', event_start.textContent); sessionStorage.setItem('event_name', event_name.textContent); sessionStorage.setItem('event_max', event_max.textContent); sessionStorage.setItem('event_prices', event_prices.textContent); sessionStorage.setItem('event_end', event_end.textContent); sessionStorage.setItem('event_tickets_amount', event_tickets_amount.textContent); sessionStorage.setItem('event_desc', event_desc.textContent); sessionStorage.setItem('event_image', event_image.textContent); sessionStorage.setItem('event_lat', event_lat.textContent); sessionStorage.setItem('event_long', event_long.textContent)
let path_text2 = path_h2.textContent
let temp12 = path_text2.split('/')
let url_eventid = temp12[2]
sessionStorage.setItem("eventid", url_eventid);
//////////////
