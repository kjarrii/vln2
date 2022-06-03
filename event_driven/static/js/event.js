sessionStorage.clear()
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

const slider = document.querySelector('.event-img-container');
let mouseDown = false;
let startX, scrollLeft;

let startDragging = function (e) {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};
let stopDragging = function (event) {
  mouseDown = false;
};

slider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!mouseDown) { return; }
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;
});

// Add the event listeners
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);
