function initMap() {
  const myLatLng = { lat: -25.363, lng: 131.044 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    label: {
      text: "$300k",
      color: "#0a0a0a",
      fontSize: "30px",
      fontWeight: "bold"
    },
  });
  Marker.showInfoWindow();
}

window.initMap = initMap;