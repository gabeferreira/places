// Javascript document

// Determine number of places

var placeCount = locations.length;
var placeCountString = placeCount.toString();

var placeCountContainer = document.getElementById('placeCount');
placeCountContainer.innerHTML = placeCountString;

// Determine total number of photos

var photoCounter = 0;

for (var placeArrayCount = 0; placeArrayCount < locations.length; placeArrayCount++) {
	
	// Get length of each array, then use it in the loop
	
	var contentLengthCounter = locations[placeArrayCount].content.length;

	for (var photoTest = 0; photoTest < contentLengthCounter; photoTest++) {
		
		if (locations[placeArrayCount].content[photoTest].type === 'image') {
			photoCounter++;
		}

	}

}

var photoCountContainer = document.getElementById('photoCount');
photoCountContainer.innerHTML = photoCounter.toString();