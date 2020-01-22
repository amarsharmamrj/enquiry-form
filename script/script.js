/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// Geolocation

function initMap() {
    // The location of Uluru
    var uluru = {
        lat: 28.499746955081076,
        lng: 77.48328521847725
    };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 10,
            center: uluru
        });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}