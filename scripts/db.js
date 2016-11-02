// Javascript Document
var locations = [
	{
		url:'london',
		title:'London',
		date:'15.10.2016',
		coordinates: {
			lat: 51.5143837,
			lng: -0.1429347
		},
		flag:'england',
		content: [
			{
				type:'image',
				size:'fullScreen',
				path:'london-3x2-002-full.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'london-3x2-001.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'london-3x2-003.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'london-3x2-004.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'london-3x2-005.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'london-3x2-006.jpg'
			}
		]
	},
	{
		url:'berlin',
		title:'Berlin',
		date:'28.09.2016',
		coordinates: {
			lat: 52.5076274,
			lng: 13.1452775
		},
		flag:'germany',
		content: [
			{
				type:'image',
				size:'fullScreen',
				path:'berlin-3x2-001-full.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'berlin-3x2-002.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'berlin-3x2-003.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'berlin-3x2-004.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'berlin-3x2-005.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'berlin-3x2-006.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'berlin-3x2-007.jpg'
			},
		]
	},
	{
		url:'prague',
		title:'Prague',
		date:'23.09.2016',
		coordinates: {
			lat: 50.0598053,
			lng: 14.3251972
		},
		flag:'prague',
		content:[
			{
				type:'image',
				size:'fullScreen',
				path:'prague-3x2-001-full.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'prague-3x2-002.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'prague-3x2-003.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'prague-3x2-004.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'prague-3x2-005.jpg'
			}
		]
	},
	{
		url:'vienna',
		title:'Vienna',
		date:'18.09.2016',
		coordinates: {
			lat: 48.2208282,
			lng: 16.2396329
		},
		flag:'austria',
		content: [
			{
				type:'image',
				size:'fullScreen',
				path:'vienna-3x2-001-full.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'vienna-3x2-002.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'vienna-3x2-003.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'vienna-3x2-004.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'vienna-3x2-005.jpg'
			}
		]
	},
	{
		url:'budapest',
		title:'Budapest',
		date:'13.09.2016',
		coordinates: {
			lat: 47.4813598,
			lng: 18.9898759
		},
		flag:'budapest',
		content:[
			{
				type:'image',
				size:'fullScreen',
				path:'budapest-3x2-001-full.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'budapest-3x2-002.jpg'
			},
			{
				type:'image',
				size:'portrait',
				path:'budapest-3x4-001.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'budapest-3x2-003.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'budapest-3x2-004.jpg'
			}
		]
	},
	{
		url:'split',
		title:'Split',
		date:'08.09.2016',
		coordinates: {
			lat: 43.5149083,
			lng: 16.4139781
		},
		flag:'croatia',
		content:[
			{
				type:'image',
				size:'fullScreen',
				path:'split-3x2-001-full.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'split-3x2-002.jpg'
			},
			{
				type:'image',
				size:'portrait',
				path:'split-3x4-001.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'split-3x2-003.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'split-3x2-004.jpg'
			}
		]
	},
	{
		url:'zagreb',
		title:'Zagreb',
		date:'04.09.2016',
		coordinates: {
			lat: 45.8403491,
			lng: 15.8239041
		},
		flag:'zagreb',
		content:[
			{
				type:'image',
				size:'fullScreen',
				path:'zagreb-3x2-001-full.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'zagreb-3x2-002.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'zagreb-3x2-003.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'zagreb-3x2-004.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'zagreb-3x2-005.jpg'
			}
		]
	},
	{
		url:'bovec',
		title:'Bovec',
		date:'01.09.2016',
		flag:'bovec',
		coordinates: {
			lat: 46.3427891,
			lng: 13.5064602
		},
		content: [
			{
				type:'image',
				size:'fullScreen',
				path:'bovec-3x2-001-full.jpg'
			},
			{
				type:'caption',
				text:'Soca Valley'
			},
			{
				type:'text',
				text:'Bovec, one of the cities in the Soca Valley, was selected as a travel destination completely at random. ' + 
						'Whether by luck or destiny, it turned out to be as beautiful as it is small. Given its population of 1,600 (during high-season), ' +
						'it wasn’t a surprise to find out that the hostel’s receptionist was also the bar’s hostess, working 16 hours a day to take advantage of the flow of turists.'
			},
			{
				type:'image',
				size:'landscape',
				path:'bovec-3x2-002.jpg'
			},
			{
				type:'image',
				size:'portrait',
				path:'bovec-3x4-001.jpg'
			},
			{
				type:'caption',
				text:'Soca River'
			},
			{
				type:'text',
				text:'At 3°C, the Soca River was almost unswimmable for someone accustomed to warmer waters. ' +
						'Still, it was amazing to jump in after a long, frustrating hike to a waterfall that turned out to be completely dry. ' +
						'The night before we left town marked the official end of the season, which was celebrated with a party at the margins of the Soca. ' +
						'I estimate about 50% of the city was there, the only addressless event I’ve ever attended. “Just walk to the river and follow the noise.”'
			},
			{
				type:'image',
				size:'landscape',
				path:'bovec-3x2-003.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'bovec-3x2-004.jpg'
			}
		]
	},
	{
		url:'ljubljana',
		title:'Ljubljana',
		date:'28.08.2016',
		coordinates: {
			lat: 46.0662313,
			lng: 14.4618875
		},
		flag:'ljubljana',
		content:[
			{
				type:'image',
				size:'fullScreen',
				path:'ljubljana-3x2-001-full.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'ljubljana-3x2-002.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'ljubljana-3x2-003.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'ljubljana-3x2-004.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'ljubljana-3x2-005.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'ljubljana-3x2-006.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'ljubljana-3x2-007.jpg'
			}
		]
	},
	{
		url:'saalfelden',
		title:'Saalfelden',
		date:'26.08.2016',
		coordinates: {
			lat: 47.4382296,
			lng: 12.7718184
		},
		flag:'austria',
		content:[
			{
				type:'image',
				size:'fullScreen',
				path:'saalfelden-3x2-001-full.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'saalfelden-3x2-002.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'saalfelden-3x2-003.jpg'
			}
		]
	},
	{
		url:'salzburg',
		title:'Salzburg',
		date:'22.08.2016',
		coordinates: {
			lat: 47.8029038,
			lng: 12.9862185
		},
		flag:'austria',
		content:[
			{
				type:'image',
				size:'fullScreen',
				path:'salzburg-3x2-001-full.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'salzburg-3x2-002.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'salzburg-3x2-003.jpg'
			},
			{
				type:'caption',
				text:'Hallein'
			},
			{
				type:'text',
				text:'The bike path connecting Salzburg to the city of Hallein follows the Salzach river while offering 20km of peacefulness and tourist-free viewpoints such as the one in the photo above.'
			},
			{
				type:'image',
				size:'landscape',
				path:'salzburg-3x2-004.jpg'
			},
			{
				type:'caption',
				text:'Kehlsteinhaus'
			},
			{
				type:'text',
				text:'Above: the view from “Eagle’s Nest,” Hitler’s infamous tea house. It isn’t in Salzburg, but it was close enough for a day trip.'
			},
			{
				type:'image',
				size:'landscape',
				path:'salzburg-3x2-005.jpg'
			}
		]
	},
	{
		url:'munich',
		title:'Munich',
		date:'14.08.2016',
		coordinates: {
			lat: 48.1390082,
			lng: 11.5588342
		},
		flag:'bavaria',
		content:[
			{
				type:'image',
				size:'fullScreen',
				path:'munich-3x2-001-full.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'munich-3x2-002.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'munich-3x2-003.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'munich-3x2-004.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'munich-3x2-005.jpg'
			}
		]
	},
	{
		url:'san-francisco',
		title:'San Francisco',
		date:'22.04.2016',
		coordinates: {
			lat: 37.757815,
			lng: -122.5076402
		},
		flag:'usa',
		content:[
			{
				type:'image',
				size:'fullScreen',
				path:'san-francisco-3x2-001-full.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'san-francisco-3x2-002.jpg'
			},
			{
				type:'image',
				size:'portrait',
				path:'san-francisco-3x4-001.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'san-francisco-3x2-003.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'san-francisco-3x2-004.jpg'
			}
		]
	},
	{
		url:'cajon-del-maipo',
		title:'Cajón del Maipo',
		date:'13.01.2016',
		coordinates: {
			lat: -33.8614073,
			lng: -69.9777909
		},
		flag:'chile',
		content:[
			{
				type:'image',
				size:'fullScreen',
				path:'cajon-del-maipo-3x2-001-full.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'cajon-del-maipo-3x2-002.jpg'
			},
			{
				type:'caption',
				text:'Baños Colina'
			},
			{
				type:'text',
				text:'Driving through Cajón del Maipo trying to find Baños Colina was a memorable experience in itself, and though it was not easy to get to these volcano-heated springs ' +
						'on a 1.0 liter engine rental car, it was the best possible way to end an amazing journey through South America.'
			}
		]
	},
	{
		url:'pucon',
		title:'Pucón',
		date:'08.01.2016',
		coordinates: {
			lat: -39.2803931,
			lng: -71.9766899
		},
		flag:'chile',
		content:[
			{
				type:'image',
				size:'fullScreen',
				path:'pucon-3x2-001-full.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'pucon-3x2-002.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'pucon-3x2-003.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'pucon-3x2-004.jpg'
			}
		]
	},
	{
		url:'mar-del-plata',
		title:'Mar del Plata',
		date:'02.01.2015',
		coordinates: {
			lat: -37.9332167,
			lng: -57.7822829
		},
		flag:'mar_del_plata',
		content:[
			{
				type:'image',
				size:'fullScreen',
				path:'mar-del-plata-3x2-001-full.jpg'
			},
			{
				type:'caption',
				text:'Mar del Plata'
			},
			{
				type:'text',
				text:'Our time in the city was enjoyable, but what stood out the most was how well we were received by our Argentinian hosts. ' +
						'I have very few photos of Mar del Plata, but I’ll never forget the trip we took to a drive-in beach, the family dinner, ' + 
						'the good conversations, and the fact that I didn’t miss the bus to Mendoza because of them. ' +
						'We were also told “seeing our large backpacks inspired them to travel again.” It’d be great to find out that they actually did.'
			},
		]
	},
	{
		url:'buenos-aires',
		title:'Buenos Aires',
		date:'28.12.2015',
		coordinates: {
			lat: -34.6155729,
			lng: -58.5033605
		},
		flag:'buenos_aires',
		content: [
			{
				type:'image',
				size:'fullScreen',
				path:'buenos-aires-3x2-004-full.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'buenos-aires-3x2-002.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'buenos-aires-3x2-003.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'buenos-aires-3x2-001.jpg'
			}
		]
	},
	{
		url:'punta-del-este',
		title:'Punta del Este',
		date:'24.12.2015',
		coordinates: {
			lat: -34.9424383,
			lng: -54.9468935
		},
		flag:'uruguay',
		content: [
			{
				type:'image',
				size:'fullScreen',
				path:'punta-del-este-3x2-001-full.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'punta-del-este-3x2-002.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'punta-del-este-3x2-003.jpg'
			}
		]
	},
	{
		url:'montevideo',
		title:'Montevideo',
		date:'21.12.2015',
		coordinates: {
			lat: -34.8195806,
			lng: -56.3702907
		},
		flag:'uruguay',
		content:[
			{
				type:'image',
				size:'fullScreen',
				path:'montevideo-3x2-001-full.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'montevideo-3x2-002.jpg'
			}
		]
	},
	{
		url:'sao-paulo',
		title:'São Paulo',
		date:'14.12.2015',
		coordinates: {
			lat: -23.6815315,
			lng: -46.8754919
		},
		flag:'sao_paulo',
		content:[
			{
				type:'image',
				size:'fullScreen',
				path:'sao-paulo-3x2-001-full.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'sao-paulo-3x2-002.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'sao-paulo-3x2-003.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'sao-paulo-3x2-004.jpg'
			},
			{
				type:'image',
				size:'portrait',
				path:'sao-paulo-3x4-001.jpg'
			}
		]
	},
	{
		url:'big-sur',
		title:'Big Sur',
		date:'22.05.2015',
		coordinates: {
			lat: 36.2466623,
			lng: -121.8562847
		},
		flag:'usa',
		content: [
			{
				type:'image',
				size:'fullScreen',
				path:'big-sur-3x2-001-full.jpg'
			},
			{
				type:'caption',
				text:'University'
			},
			{
				type:'text',
				text:'Camping in Big Sur was the first trip I made after graduating college, so I deemed it’d be appropriate to use it as a starting point for this site. This occasion also happens to mark the longest I’ve stayed completely disconnected from society, a very fond memory of mine.'
			}
		]
	}
	/*
	{
		url:'about',
		title:'About',
		date:'More Info',
		flag:'about',
		content: [
			{
				type:'caption',
				text:'Lorem Ipsum'
			},
			{
				type:'text',
				text:'Lorem Ipsum.'
			}
		]
	}
	/*
	{
		url:'placeURL',
		title:'Name of City',
		coordinates: {
			lat: 48.1390082,
			lng: 11.5588342
		},
		id:'001',
		date:'January 1, 2001',
		content: [
			{
				type:'image',
				path:'imageFile.jpg'
			},
			{
				type:'image',
				path:'imageFile.jpg'
			}
		]
	},
	*/
]