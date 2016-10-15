// Javascript document

function loadPage(id) {

	var body = document.body;
	var currentLocationObject = locations.filter(function(locationSearch) {
		return locationSearch.url == id;
	})[0];
	var flagPath = 'assets/img/flags/';

	if ( id === 'nothome' ) {

		body.style.overflow = 'auto';

		var stageLeaving = document.getElementById('stage');

		if ( stageLeaving != null ) {
			stageLeaving.className = 'leave';
		}

	} else {

		body.style.overflow = 'hidden';

		var transitionElement = document.getElementById('transitionElement');

		// Clear the HTML of the transition element and move it back down
		transitionElement.innerHTML = '';

		// Create the flag
		var flag = document.createElement('img');
		flag.src = flagPath + currentLocationObject.flag + '.svg';

		transitionElement.appendChild(flag);
		transitionElement.className = 'show';

		// Wait a little, then move the flag up
		setTimeout(function(){
			transitionElement.className = 'up';
			setTimeout(function(){
				transitionElement.className = '';
			}, 500);
		}, 2000);
		
		// Delete the stage, if it exists
		var oldStage = document.getElementById('stage');

		if ( oldStage != null ) {
			oldStage.parentNode.removeChild(oldStage);
		}

		// Create the stage and append to body
		var stage = document.createElement('div');
		stage.id = 'stage';

		body.appendChild(stage);

		// Wait the .4 seconds that it take the flag to move up, then make the stage visible
		setTimeout(function(){
			stage.className = 'active';
		}, 450)

		// Add a close button
		var closeLocation = document.createElement('div');
		closeLocation.id = 'closeLocation';
		closeLocation.onclick = function() {
			window.location.href = '#/nothome';
		}

		var closeLocationImg = document.createElement('img');
		closeLocationImg.src = 'assets/img/ui/close.svg';

		closeLocation.appendChild(closeLocationImg);
		stage.appendChild(closeLocation);

		// Create a home for the content
		var locationContent = document.createElement('div');
		locationContent.id = 'locationContent';
		stage.appendChild(locationContent);

		// Add a title and date to the project
		var locationTitle = document.createElement('div');
		locationTitle.id = 'locationTitle';
		locationTitle.innerHTML = currentLocationObject.title;
		locationContent.appendChild(locationTitle);

		var locationDate = document.createElement('div');
		locationDate.id = 'locationDate';
		locationDate.innerHTML = currentLocationObject.date;
		stage.appendChild(locationDate);

		// Loop through the content array
		var contentArray = currentLocationObject.content;
		var imageDirectory = 'assets/img/locations/' + currentLocationObject.url + '/';

		for (contentElements = 0; contentElements < contentArray.length; contentElements++) {

			if (contentArray[contentElements].type === 'image') {

				var contentImage = document.createElement('img');
				contentImage.src = imageDirectory + contentArray[contentElements].path;

				if (contentArray[contentElements].size === 'full') {
					contentImage.className = 'fullSize';
				} else {
					contentImage.className = 'halfSize';
				}

				locationContent.appendChild(contentImage);

			} else if (contentArray[contentElements].type === 'caption') {

				var captionParagraph = document.createElement('p');
				captionParagraph.className = 'captionParagraph';

				var captionSpan = document.createElement('span');
				captionSpan.innerHTML = contentArray[contentElements].text;

				captionParagraph.appendChild(captionSpan);
				locationContent.appendChild(captionParagraph);

			} else {

				var contentParagraph = document.createElement('p');
				contentParagraph.innerHTML = contentArray[contentElements].text;
				contentParagraph.className = 'contentParagraph';

				locationContent.appendChild(contentParagraph);

			}

		}

	}
	
}