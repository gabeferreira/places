// Javascript document

var flagPath = 'assets/img/flags/'
var flagArray = [
	'austria.svg',
	'bavaria.svg',
	'bovec.svg',
	'budapest.svg',
	'buenos_aires.svg',
	'chile.svg',
	'croatia.svg',
	'england.svg',
	'germany.svg',
	'ljubljana.svg',
	'mar_del_plata.svg',
	'prague.svg',
	'sao_paulo.svg',
	'uruguay.svg',
	'usa.svg',
	'zagreb.svg',
]

for (var flagPreloader = 0; flagPreloader < flagArray.length; flagPreloader++) {
	
	var loadedFlag = new Image();
	loadedFlag.src = flagPath + flagArray[flagPreloader];

	var loadedMobileFlag = new Image();
	loadedMobileFlag.src = flagPath + 'rotated/' + flagArray[flagPreloader];

}