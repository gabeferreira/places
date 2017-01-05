// Javascript document

var flagPath = 'assets/img/flags/'
var flagArray = [
	'andalusia',
	'austria',
	'aveiro',
	'azores',
	'bavaria',
	'bovec',
	'budapest',
	'buenos_aires',
	'chile',
	'coimbra',
	'croatia',
	'cuba',
	'england',
	'germany',
	'jamaica',
	'lisbon',
	'ljubljana',
	'madeira',
	'madrid',
	'mar_del_plata',
	'portugal',
	'prague',
	'sao_paulo',
	'seville',
	'spain',
	'uruguay',
	'usa',
	'zagreb',
]

for (var flagPreloader = 0; flagPreloader < flagArray.length; flagPreloader++) {
	
	var loadedFlag = new Image();
	loadedFlag.src = flagPath + flagArray[flagPreloader] + '.svg';

	var loadedMobileFlag = new Image();
	loadedMobileFlag.src = flagPath + 'rotated/' + flagArray[flagPreloader] + '.svg';

}