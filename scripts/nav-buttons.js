function addNavButtons(stage, currentLocationObject) {

	// Next and Previous locations
	var objectPositionArray = locations.indexOf(currentLocationObject);
	var beforeLocation = objectPositionArray + 1;
	var afterLocation = objectPositionArray - 1;

	// Create Next Location
	if ( beforeLocation <= locations.length - 1 ) {
		
		var navLinkWrapper = document.createElement('div');
		navLinkWrapper.className = 'navLinkWrapper beforeWrapper';

		var before = document.createElement('a');
		before.className = 'navLink';
		before.href = '#/' + locations[beforeLocation].url;

		var beforeLabel = document.createElement('img');
		beforeLabel.className = 'beforeLabel';
		beforeLabel.src = 'assets/img/ui/dot.svg';

		var beforeTitle = document.createElement('span');
		beforeTitle.className = 'beforeTitle';
		beforeTitle.innerHTML = locations[beforeLocation].title;

		var beforePreview = document.createElement('img');
		beforePreview.className = 'beforePreview';
		beforePreview.src = 'assets/img/thumbnails/' + locations[beforeLocation].url + '.jpg';

		before.appendChild(beforeLabel);
		before.appendChild(beforeTitle);
		before.appendChild(beforePreview);

		navLinkWrapper.appendChild(before);
		stage.appendChild(navLinkWrapper);

	};

	// Create Previous Location
	if ( afterLocation >= 0 ) {

		var navLinkWrapper = document.createElement('div');
		navLinkWrapper.className = 'navLinkWrapper afterWrapper';

		var after = document.createElement('a');
		after.className = 'navLink';
		after.href = '#/' + locations[afterLocation].url;

		var afterLabel = document.createElement('img');
		afterLabel.className = 'afterLabel';
		afterLabel.src = 'assets/img/ui/dot.svg';

		var afterTitle = document.createElement('span');
		afterTitle.className = 'afterTitle';
		afterTitle.innerHTML = locations[afterLocation].title;

		var afterPreview = document.createElement('img');
		afterPreview.className = 'afterPreview';
		afterPreview.src = 'assets/img/thumbnails/' + locations[afterLocation].url + '.jpg';

		after.appendChild(afterPreview);
		after.appendChild(afterTitle);
		after.appendChild(afterLabel);

		navLinkWrapper.appendChild(after);
		stage.appendChild(navLinkWrapper);

	};

}