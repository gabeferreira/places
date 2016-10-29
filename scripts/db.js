// Javascript Document
var locations = [
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
				size:'full',
				path:'berlin-3x2-003.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'berlin-3x2-002.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'berlin-3x2-001.jpg'
			},
			{
				type:'caption',
				text:'Eastside Gallery'
			},
			{
				type:'text',
				text:'In 30 minutes of washing the wall at Eastside Gallery with pressurized water, these people (who I assume were volunteers) were able to remove 1 square meter of political graffiti.'
			},
			{
				type:'image',
				size:'full',
				path:'berlin-3x2-005.jpg'
			},
			{
				type:'caption',
				text:'Monument for the Murdered Jews of Europe'
			},
			{
				type:'text',
				text:'Peter Eisenman managed to create a piece of incredible presence, but what struck me the most was a plaque installed on the ground near Humboldt University, the site of a major Nazi book burning. Roughly translated, the  “At a place where books are burned, people are eventually burned as well” (Heinrich Heine, 1820, referring to the Spanish Inquisition).'
			},
			{
				type:'image',
				size:'full',
				path:'berlin-3x2-006.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'berlin-3x2-004.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'berlin-3x2-007.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'berlin-3x2-008.jpg'
			},
			{
				type:'caption',
				text:'Brieselang'
			},
			{
				type:'text',
				text:'After a week of strong and constant rain, my Berliner companions were convinced mushrooms would be abundant in the nearby woods. Though we found nothing, I found Brieselang to be quite charming and the trip a much-needed break from metropolitan chaos. On our way back, we met a man who introduced us to his 27-year-old horse, then broke our hearts: “Pilze? Jetzt findet ihr hier keine Pilze. Vielleicht nächste Woche.”'
			},
			{
				type:'image',
				size:'full',
				path:'berlin-3x2-012.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'berlin-3x2-009.jpg'
			},
			{
				type:'caption',
				text:'Gesundbrunnen'
			},
			{
				type:'text',
				text:'Touring a massive World War II bunker was more interesting than I imagined. Unfortunately (or fortunately, depending on perspective) photos weren’t allowed, but above’s the path to the bunker’s entrance, in a side-door at a subway station.'
			},
			{
				type:'image',
				size:'full',
				path:'berlin-3x2-010.jpg'
			},
			{
				type:'caption',
				text:'Anarchists'
			},
			{
				type:'text',
				text:'The view from my window as hundreds of protesters stopped traffic and marched toward Alexanderplatz at the sound techno. Berliners aren’t happy with the rising housing and rent prices.'
			},
			{
				type:'image',
				size:'full',
				path:'berlin-3x2-011.jpg'
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
				size:'full',
				path:'prague-3x2-006.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'prague-3x2-003.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'prague-3x2-002.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'prague-3x2-004.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'prague-3x2-007.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'prague-3x2-005.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'prague-3x2-001.jpg'
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
				size:'full',
				path:'vienna-3x2-001.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'vienna-3x2-002.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'vienna-3x2-003.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'vienna-3x2-004.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'vienna-3x2-005.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'vienna-3x2-006.jpg'
			},
			{
				type:'image',
				size:'half',
				path:'vienna-3x4-001.jpg'
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
				size:'full',
				path:'budapest-3x2-001.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'budapest-3x2-002.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'budapest-3x2-003.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'budapest-3x2-004.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'budapest-3x2-005.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'budapest-3x2-006.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'budapest-3x2-007.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'budapest-3x2-008.jpg'
			},
			{
				type:'image',
				size:'half',
				path:'budapest-3x4-001.jpg'
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
				size:'full',
				path:'split-3x2-004.jpg'
			},
			{
				type:'image',
				size:'half',
				path:'split-3x4-001.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'split-3x2-006.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'split-3x2-005.jpg'
			},
			{
				type:'image',
				size:'half',
				path:'split-3x4-002.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'split-3x2-003.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'split-3x2-002.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'split-3x2-001.jpg'
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
				size:'full',
				path:'zagreb-3x2-004.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'zagreb-3x2-002.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'zagreb-3x2-003.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'zagreb-3x2-001.jpg'
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
				size:'full',
				path:'bovec-3x2-001.jpg'
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
				size:'full',
				path:'bovec-3x2-002.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'bovec-3x2-003.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'bovec-3x2-004.jpg'
			},
			{
				type:'caption',
				text:'Soca Valley'
			},
			{
				type:'text',
				text:'The most punk rock flower I have ever seen.'
			},
			{
				type:'image',
				size:'full',
				path:'bovec-3x2-005.jpg'
			},
			{
				type:'image',
				size:'half',
				path:'bovec-3x4-001.jpg'
			},
			{
				type:'caption',
				text:'Soca River'
			},
			{
				type:'text',
				text:'At 3°C, the Soca River was almost unswimmable for someone accustomed to the warmer waters. ' +
						'Still, it was amazing to jump in after a long, frustrating hike to a waterfall that turned out to be completely dry. ' +
						'The night before we left town marked the official end of the season, which was celebrated with a party at the margins of the Soca. ' +
						'I estimate about 50% of the city was there, the only event I’ve ever been to that had no address. “Just walk to the river and follow the noise.”'
			},
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
				size:'full',
				path:'ljubljana-3x2-001.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'ljubljana-3x2-002.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'ljubljana-3x2-003.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'ljubljana-3x2-004.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'ljubljana-3x2-005.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'ljubljana-3x2-006.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'ljubljana-3x2-007.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'ljubljana-3x2-008.jpg'
			},
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
				size:'full',
				path:'saalfelden-3x2-003.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'saalfelden-3x2-005.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'saalfelden-3x2-001.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'saalfelden-3x2-004.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'saalfelden-3x2-002.jpg'
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
				size:'full',
				path:'salzburg-3x2-001.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'salzburg-3x2-002.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'salzburg-3x2-003.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'salzburg-3x2-004.jpg'
			},
			{
				type:'image',
				size:'full',
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
				size:'full',
				path:'munich-3x2-001.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'munich-3x2-002.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'munich-3x2-003.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'munich-3x2-004.jpg'
			},
			{
				type:'image',
				size:'full',
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
				size:'full',
				path:'san-francisco-3x2-001.jpg'
			},
			{
				type:'image',
				size:'half',
				path:'san-francisco-3x4-001.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'san-francisco-3x2-002.jpg'
			},
		]
	},
	{
		url:'cajon-del-maipo',
		title:'Cajon del Maipo',
		date:'13.01.2016',
		coordinates: {
			lat: -33.8614073,
			lng: -69.9777909
		},
		flag:'chile',
		content:[
			{
				type:'image',
				size:'full',
				path:'cajon-del-maipo-3x2-003.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'cajon-del-maipo-3x2-001.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'cajon-del-maipo-3x2-002.jpg'
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
				size:'full',
				path:'pucon-3x2-001.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'pucon-3x2-002.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'pucon-3x2-003.jpg'
			},
			{
				type:'image',
				size:'full',
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
				size:'full',
				path:'mar-del-plata-3x2-001.jpg'
			},
			{
				type:'caption',
				text:'Hospitality'
			},
			{
				type:'text',
				text:'Our time in Mar del Plata was enjoyable, but what stood out the most was how well we were received by our Argentinian hosts. ' +
						'I have very few photos of the city, but I’ll never forget the trip we took to a drive-in beach, the family dinner, the good conversations, and the fact that I didn’t miss the bus to Mendoza because of them. ' +
						'We were also told “seeing our large backpacks inspired them to travel again.” It’d mean much to me if they actually did.'
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
				size:'full',
				path:'buenos-aires-3x2-001.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'buenos-aires-3x2-002.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'buenos-aires-3x2-003.jpg'
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
				size:'full',
				path:'punta-del-este-3x2-001.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'punta-del-este-3x2-002.jpg'
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
				size:'full',
				path:'montevideo-3x2-001.jpg'
			},
			{
				type:'image',
				size:'half',
				path:'montevideo-3x4-001.jpg'
			},
			{
				type:'image',
				size:'full',
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
				size:'full',
				path:'sao-paulo-3x2-001.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'sao-paulo-3x2-002.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'sao-paulo-3x2-003.jpg'
			},
			{
				type:'image',
				size:'half',
				path:'sao-paulo-3x4-001.jpg'
			},
			{
				type:'image',
				size:'full',
				path:'sao-paulo-3x2-004.jpg'
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
				size:'full',
				path:'big-sur-3x2-001.jpg'
			},
			{
				type:'caption',
				text:'University'
			},
			{
				type:'text',
				text:'Camping in Big Sur was the first trip I made after graduating college, so I deemed it’d be appropriate to use it as a starting point for this site. This occasion also happens to mark the longest I’ve stayed completely disconnected from society (save from my traveling companion): 6 days.'
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