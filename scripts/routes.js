// JavaScript Document

pageSwitchCounter = 0;

// Set up routes
crossroads.addRoute('', function() {
	redirect();
});

crossroads.addRoute('{id}', function (id) {
	
	// If this is the first time the user is loading a page, display the loading screen
	if (pageSwitchCounter === 0) {

		setTimeout(function(){

			populate(id);
			loadPage(id);
			pageSwitchCounter++;

		}, 3500); // This 3.5 second delay gives time for fonts and previews to load

	// If not, load the content directly
	} else {

		loadPage(id);
	
	}
	
});

// Setup hasher to listen for URL changes
function parseHash(newHash, oldHash){
	crossroads.parse(newHash);
}

hasher.initialized.add(parseHash);
hasher.changed.add(parseHash);
hasher.init();