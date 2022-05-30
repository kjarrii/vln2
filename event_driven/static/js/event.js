var element = document.getElementById('event-map')
var lat = element.getAttribute('lat')
var lon = element.getAttribute('lon')

let map;
let currentMapMarker;
function initMap() {
  map = new google.maps.Map(document.getElementById("event-map"), {
    center: {lat: parseFloat(lat), lng: parseFloat(lon)},
    zoom: 15,
  });
  const marker = new google.maps.Marker({
    position: {lat: parseFloat(lat), lng: parseFloat(lon)},
    map: map,
  });
}

window.initMap = initMap;