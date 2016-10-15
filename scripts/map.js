// Javascript Document

console.log('map.js loaded');

function attachClickHandler(marker) {

	google.maps.event.addListener(marker, 'click', function() {
		var elem = $(marker.url);
		$('html, body').animate({
			scrollTop: elem.offset().top
		}, 300 );

		// When on mobile, make sure to switch back to post view
		$('body').removeClass('mobileMap');

	});
}

function initMap() {

	var mapCenter = {lat: 0, lng: 0}
	var bounds = new google.maps.LatLngBounds();

	// Initialize the map
	var map = new google.maps.Map(document.getElementById('map'), {
		center: mapCenter,
		scrollwheel: false,
		zoom: 2,
		mapTypeControl:false,
		streetViewControl: false
	});

	// Loop through each item in the locations array
	// Grab the coordinates and add a marker on the map as we go
	for (var mapMarker = 0; mapMarker < locations.length; mapMarker++) {
		
		var markerLocation = locations[mapMarker].coordinates;

		var marker = new google.maps.Marker({
			position: markerLocation,
			map: map,
			title: locations[mapMarker].title,
			url: '#' + locations[mapMarker].url
		});

		// Add the marker as a boundary
		bounds.extend(marker.getPosition());

		attachClickHandler(marker);
	}

	// Make sure all markers are visible
	map.fitBounds(bounds);
	map.setCenter.bound;

	// Get the center of the bounds
	var mapCenter = bounds.getCenter();

	google.maps.event.addListener(map, 'center_changed', function() {
		checkBounds(map);
	});

}

// If the map position is out of range, move it back
function checkBounds(map) {

	var latNorth = map.getBounds().getNorthEast().lat(); // Get northernmost point
	var latSouth = map.getBounds().getSouthWest().lat(); // Get southernmost point
	var newLat;

	// If everything is ok, do nothing
	if ( latNorth < 85 && latSouth > -85 ) {
		return;

	} else {

		// If showing grey is needed because the map is too zoomed out, then do it
		if ( latNorth > 85 && latSouth < -85 ) {
			return;

		// If we are too far north
		} else if ( latNorth > 85 ) {
			newLat = map.getCenter().lat() - ( latNorth - 85 );

		// If we are too far south
		} else if ( latNorth < 85 ) {
			newLat = map.getCenter().lat() - ( latSouth + 85 );				
		}

	}

	if( newLat ) {
		var newCenter = new google.maps.LatLng( newLat, map.getCenter().lng() );
		map.setCenter(newCenter);
	}

}