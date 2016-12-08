// Javascript document

function redirect() {
	window.location.href = '#/nothome';
};

function populate(id) {

	// If the user is trying to land on the site using the map view, 
	// redirected them to the homepage
	if ( id === 'map') {
		redirect();
	};

	// Fade out the Loading message
	var loadingMessage = document.getElementById('loadingMessage');
	loadingMessage.style.opacity = 0;

	var locationsNav = document.getElementById('locations');

	for (var a = 0; a < locations.length; a++) {

		var locationsLink = document.createElement('a');
		locationsLink.href = '#/' + locations[a].url;
		locationsLink.id = locations[a].url;
		locationsLink.className = 'location';

		var locationThumbnail = document.createElement('img');
		locationThumbnail.src = 'assets/img/thumbnails/' + locations[a].url + '.jpg';

		var locationDate = document.createElement('span');
		locationDate.innerHTML = locations[a].date;
		locationDate.className = 'date';

		var accessories = document.createElement('span');
		accessories.className = 'accessories';
		accessories.appendChild(locationThumbnail);
		accessories.appendChild(locationDate);

		locationsLink.innerHTML = locations[a].title;
		locationsLink.appendChild(accessories);

		locationsNav.appendChild(locationsLink);

		// Randomize when the item gets faded in
		var randomAnimationDelay = Math.random() * 2500 + 'ms';

		// Get last item in array
		var placedLinks = document.getElementsByClassName('location');
		placedLinks[placedLinks.length - 1].style.animationDelay = randomAnimationDelay;

	}

	// Create map link
	var mapLink = document.createElement('a');
	mapLink.className = 'mapLink';
	mapLink.href = '#/map';
	mapLink.innerHTML = 'Map';

	locationsNav.appendChild(mapLink);

	// Fade in the footer
	var footer = document.getElementById('credits');
	setTimeout(function(){
		footer.style.opacity = 1;
	}, 500)

};