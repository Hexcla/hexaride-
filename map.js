let map;
let startMarker, endMarker;

function initMap() {
    // Initialize the map with a center point
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 20.5937, lng: 78.9629 }, // Centered at India
        zoom: 5
    });

    // Set starting location
    document.getElementById('startBtn').addEventListener('click', function() {
        map.addListener('click', function(event) {
            if (startMarker) startMarker.setMap(null); // Remove previous marker
            startMarker = new google.maps.Marker({
                position: event.latLng,
                map: map,
                title: 'Start Location'
            });
            map.setCenter(event.latLng);
        });
    });

    // Set ending location
    document.getElementById('endBtn').addEventListener('click', function() {
        map.addListener('click', function(event) {
            if (endMarker) endMarker.setMap(null); // Remove previous marker
            endMarker = new google.maps.Marker({
                position: event.latLng,
                map: map,
                title: 'End Location'
            });
            map.setCenter(event.latLng);
        });
    });
}
