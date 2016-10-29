// Javascript Document

function attachClickHandler(marker) {

	google.maps.event.addListener(marker, 'click', function() {
		window.location.href = marker.url;
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
		streetViewControl: false,
		minZoom: 2,
		styles: [
			{
				"featureType": "administrative.country",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"saturation": -100
					},
					{
						"lightness": -100
					},
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "administrative.country",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#323232"
					},
					{
						"visibility": "on"
					},
					{
						"weight": 0.5
					}
				]
			},
			{
				"featureType": "administrative.locality",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#b4b4b4"
					},
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "administrative.province",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#b4b4b4"
					},
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "landscape.man_made",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#f0f0f0"
					}
				]
			},
			{
				"featureType": "landscape.natural",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "labels.text",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"visibility": "off"
					},
					{
						"weight": 0.5
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#c8c8c8"
					},
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road.arterial",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#dcdcdc"
					}
				]
			},
			{
				"featureType": "road.highway.controlled_access",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road.highway.controlled_access",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road.local",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#b4dcff"
					},
					{
						"visibility": "on"
					}
				]
			}
		]
	});

	// Loop through each item in the locations array
	// Grab the coordinates and add a marker on the map as we go
	for (var mapMarker = 0; mapMarker < locations.length; mapMarker++) {
		
		var markerLocation = locations[mapMarker].coordinates;

		var randomColorSorter = Math.floor(Math.random() * randomColors.length);
		var randomMarkerColor = randomColors[randomColorSorter];

		var marker = new google.maps.Marker({
			position: markerLocation,
			icon: {
				path: google.maps.SymbolPath.CIRCLE,
				scale: 10,
				fillColor: randomMarkerColor,
				fillOpacity: 1,
				strokeWeight: 0
			},
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