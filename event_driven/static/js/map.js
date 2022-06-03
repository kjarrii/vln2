let event_ids_element = document.getElementById('event_ids').textContent.split('°')
let event_names_element = document.getElementById('event_names').textContent.split('°')
let event_lats_element = document.getElementById('event_lats').textContent.split('°')
let event_longs_element = document.getElementById('event_longs').textContent.split('°')

let markers = []

function populate_markers () {
    for (i in event_longs_element) {
        markers.push({"title": event_names_element[i], "lat": event_lats_element[i], "lng": event_longs_element[i], "eventid": event_ids_element[i]})
    }
    markers.pop()
}
populate_markers()
    window.onload = function () {
        LoadMap();
    }
    function LoadMap() {
        var mapOptions = {
            center: new google.maps.LatLng(markers[0].lat, markers[0].lng),
            zoom: 3,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
        //Create and open InfoWindow.
        var infoWindow = new google.maps.InfoWindow();
 
        for (var i = 0; i < markers.length; i++) {
            var data = markers[i];
            var myLatlng = new google.maps.LatLng(data.lat, data.lng);
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                eventid: data.eventid,
                label: {
                  text: data.title,
                  color: "#0a0a0a",
                  fontSize: "15px",
                  fontWeight: "bold"
                },
                title: data.title
            });
 
            //Attach click event to the marker.
            (function (marker, data) {
                google.maps.event.addListener(marker, "click", function (e) {
                    //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.
                      window.location.href = 'event/' + marker.eventid.toString()

                });
            })(marker, data);
        }
    }