// Javascript document

var body = document.body;

var cursor = document.createElement('div');
cursor.id = 'cursor';

var randomColors = [
	'#a41ee2',
	'#4cdbdf',
	'#2b82d8',
	'#efdb35',
	'#ef141f',
	'#34d74a',
	'#0e2baa',
	'#ff64de',
	'#848484',
	'#ff9100'
]

function createPin() {

	var randomColorSorter = Math.floor(Math.random() * randomColors.length);
	var randomColor = randomColors[randomColorSorter];

	var pin = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	pin.setAttribute('viewBox','0 0 50 50');

	var svgNS = pin.namespaceURI;
	var dot = document.createElementNS(svgNS,'circle');
		dot.setAttribute('cx', 25);
		dot.setAttribute('cy', 25);
		dot.setAttribute('r', 22.5)
		dot.setAttribute('fill',randomColor);
		pin.appendChild(dot);

	cursor.appendChild(pin);
	body.insertBefore(cursor, body.firstChild);

}

// Move the cursor along with the mouse

var currentMousePos = { x: -1, y: -1 };

document.addEventListener('mousemove', function(event){

	var scrollTop = window.pageYOffset;

	var leftPosition = event.pageX + 'px';
	var topPosition = event.pageY - scrollTop + 'px';

	cursor.style.left = leftPosition;
	cursor.style.top = topPosition;

})

// Drop dots

function dropDot() {

	var dropLeft = event.pageX + 'px';
	var dropTop = event.pageY + 'px';

	var droppedDot = document.createElement('div');
	droppedDot.className = 'droppedDot';
	droppedDot.style.left = dropLeft;
	droppedDot.style.top = dropTop;
	droppedDot.innerHTML = cursor.innerHTML;

	var droppedDotContainer = document.getElementById('droppedDots');
	droppedDotContainer.appendChild(droppedDot);

	// Clear the current dot and change the color
	cursor.innerHTML = '';
	createPin();

}

// Call functions 
createPin();
body.addEventListener('click', dropDot);