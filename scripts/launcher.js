// Javascript document

function redirect() {
	window.location.href = '#/nothome';
};

function populate() {
	
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
	}

};