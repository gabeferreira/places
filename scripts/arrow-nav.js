// Bind right arrow to before location
document.onkeydown = function(e) {
	
	e = e || window.event;
	switch(e.which || e.keyCode) {
		case 37:
		console.log('left arrow pressed');
		break;

		case 39:
		console.log('right arrow pressed');
		break;

		case 27:
		console.log('escape key pressed');
		break;
	}
	
};