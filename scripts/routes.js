// JavaScript Document

pageSwitchCounter = 0;

// Set up routes
crossroads.addRoute('', function() {
	redirect();
});

crossroads.addRoute('{id}', function (id) {
	
	// If this is the first time the user is loading a page, display the loading screen
	if (pageSwitchCounter === 0) {

		// Populate the page with all previews
		populate(id);
		loadPage(id);
		pageSwitchCounter++;

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