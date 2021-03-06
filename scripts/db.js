// Javascript Document
var locations = [
	{
		url:'ocho-rios',
		title:'Ocho Rios',
		date:'03.01.2017',
		coordinates: {
			lat: 18.4007225,
			lng: -77.0999729
		},
		flag:'jamaica',
		content: [
			{
				type:'image',
				size:'fullScreen',
				path:'ocho-rios-3x2-001-full.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'ocho-rios-3x2-002.jpg'
			},
			{
				type:'caption',
				text:'Route Taxis'
			},
			{
				type:'text',
				text:'We chose to travel from town to town in the semi-regulated route taxis, which cost us 1/5 to 1/10 of the standard cab fare. ' +
					'The van seen above, our ride to Negril, was packed with 21 people, most wondering what two tourists were doing there.'
			},
			{
				type:'image',
				size:'portrait',
				path:'ocho-rios-3x4-001.jpg'
			},
			{
				type:'caption',
				text:'Moving Around'
			},
			{
				type:'text',
				text:'Like the goats above, my cousin and I spent much of our time in Ocho Rios walking to our destinations, ' +
					'which turned out to be a good way of seeing parts of the city tourists rarely get to. ' +
					'Using our feet as transportation made us realize, very quickly, that the ' +
					'the US$500/night resorts that dot Ocho Rios are not congruent with the reality of the town.' 
			},
			{
				type:'image',
				size:'landscape',
				path:'ocho-rios-3x2-003.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'ocho-rios-3x2-004.jpg'
			},
			{
				type:'caption',
				text:'An Empty Beach'
			},
			{
				type:'text',
				text:'An unmarked trail that started on the shoulder of a side road lead us to the first truly deserted beach ' +
					'I’ve ever been to, a place with as many great sights as grotesque spiders.'
			},
			{
				type:'image',
				size:'landscape',
				path:'ocho-rios-3x2-005.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'ocho-rios-3x2-006.jpg'
			}
		]
	},
	{
		url:'montego-bay',
		title:'Montego Bay',
		date:'31.12.2016',
		coordinates: {
			lat: 18.4869485,
			lng: -77.9232562
		},
		flag:'jamaica',
		content: [
			{
				type:'image',
				size:'fullScreen',
				path:'montego-bay-3x2-001-full.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'montego-bay-3x2-002.jpg'
			},
			{
				type:'image',
				size:'portrait',
				path:'montego-bay-3x4-001.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'montego-bay-3x2-003.jpg'
			},
		]
	},
	{
		url:'negril',
		title:'Negril',
		date:'28.12.2016',
		coordinates: {
			lat: 18.2692149,
			lng: -78.357183
		},
		flag:'jamaica',
		content: [
			{
				type:'image',
				size:'fullScreen',
				path:'negril-3x2-001-full.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'negril-3x2-002.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'negril-3x2-003.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'negril-3x2-004.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'negril-3x2-005.jpg'
			},
			{
				type:'image',
				size:'portrait',
				path:'negril-3x4-001.jpg'
			}
		]
	},
	{
		url:'vedado-havana',
		title:'Vedado, Havana',
		date:'20.12.2016',
		coordinates: {
			lat: 23.1167964,
			lng: -82.390785
		},
		flag:'cuba',
		content: [
			{
				type:'image',
				size:'fullScreen',
				path:'vedado-havana-3x2-001-full.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'vedado-havana-3x2-002.jpg',
				// favorite:true
			},
			{
				type:'image',
				size:'landscape',
				path:'vedado-havana-3x2-003.jpg'
			},
			{
				type:'image',
				size:'portrait',
				path:'vedado-havana-3x4-001.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'vedado-havana-3x2-004.jpg'
			},
			{
				type:'image',
				size:'portrait',
				path:'vedado-havana-3x4-002.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'vedado-havana-3x2-005.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'vedado-havana-3x2-006.jpg'
			}
		]
	},
	{
		url:'old-havana',
		title:'Old Havana',
		date:'20.12.2016',
		coordinates: {
			lat: 23.1295238,
			lng: -82.3730015
		},
		flag:'cuba',
		content: [
			{
				type:'image',
				size:'fullScreen',
				path:'old-havana-3x2-001-full.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'old-havana-3x2-002.jpg'
			},
			{
				type:'image',
				size:'portrait',
				path:'old-havana-3x4-001.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'old-havana-3x2-003.jpg'
			},
			{
				type:'image',
				size:'portrait',
				path:'old-havana-3x4-002.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'old-havana-3x2-004.jpg',
				// favorite:true
			},
			{
				type:'image',
				size:'portrait',
				path:'old-havana-3x4-003.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'old-havana-3x2-006.jpg'
			}
		]
	},
	{
		url:'seville',
		title:'Seville',
		date:'16.12.2016',
		coordinates: {
			lat: 37.37535,
			lng: -6.02527
		},
		flag:'spain',
		content: [
			{
				type:'image',
				size:'fullScreen',
				path:'seville-3x2-001-full.jpg',
				// favorite:true,
				// favoritePath:'seville-3x2-001.jpg'
			},
			{
				type:'caption',
				text:'Flamenco &amp; Co.'
			},
			{
				type:'text',
				text:'I never took the time to document the experiences I liked the most about Seville: its music scene, the restaurants, bars, and the people. ' +
					'In leaving them off this collection, I feel as though I am ignoring the real beauty of the place. The image above and those below are as close as I am going to get.'
			},
			{
				type:'image',
				size:'landscape',
				path:'seville-3x2-002.jpg'
			},
			{
				type:'image',
				size:'portrait',
				path:'seville-3x4-001.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'seville-3x2-003.jpg'
			},
		]
	},
	{
		url:'pueblos-blancos',
		title:'Pueblos Blancos',
		date:'14.12.2016',
		coordinates: {
			lat: 36.871005,
			lng: -5.267243
		},
		flag:'andalusia',
		content: [
			{
				type:'image',
				size:'fullScreen',
				path:'pueblos-blancos-3x2-001-full.jpg'
			},
			{
				type:'caption',
				text:'From Ronda to Seville'
			},
			{
				type:'text',
				text:'The Pueblos Blancos are a series of small towns spread across the Andalusia region of Spain. We made a brief stop at a few of them in our roadtrip from Ronda to Seville: ' +
					'Setenil de las Bodegas, Zahara de la Sierra, Arcos de la Frontera, and Jeréz de la Frontera.'
			},
			{
				type:'image',
				size:'landscape',
				path:'pueblos-blancos-3x2-002.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'pueblos-blancos-3x2-003.jpg',
				// favorite:true
			},
			{
				type:'image',
				size:'portrait',
				path:'pueblos-blancos-3x4-001.jpg'
			},
		]
	},
	{
		url:'malaga',
		title:'Malaga',
		date:'11.12.2016',
		coordinates: {
			lat: 36.7647495,
			lng: -4.5646173
		},
		flag:'malaga',
		content: [
			{
				type:'image',
				size:'fullScreen',
				path:'malaga-3x2-001-full.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'malaga-3x2-002.jpg'
			},
			{
				type:'image',
				size:'portrait',
				path:'malaga-3x4-001.jpg',
				// favorite:true
			},
			{
				type:'image',
				size:'landscape',
				path:'malaga-3x2-003.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'malaga-3x2-004.jpg'
			},
		]
	},
	{
		url:'granada',
		title:'Granada',
		date:'08.12.2016',
		coordinates: {
			lat: 37.1809411,
			lng: -3.6263771
		},
		flag:'andalusia',
		content: [
			{
				type:'image',
				size:'fullScreen',
				path:'granada-3x2-001-full.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'granada-3x2-002.jpg',
				// favorite:true
			},
			{
				type:'image',
				size:'portrait',
				path:'granada-3x4-001.jpg'
			},
			{
				type:'image',
				size:'portrait',
				path:'granada-3x4-002.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'granada-3x2-003.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'granada-3x2-005.jpg'
			},
		]
	},
	{
		url:'madrid',
		title:'Madrid',
		date:'05.12.2016',
		coordinates: {
			lat: 40.4378693,
			lng: -3.8199644
		},
		flag:'madrid',
		content: [
			{
				type:'image',
				size:'fullScreen',
				path:'madrid-3x2-001-full.jpg'
			},
			{
				type:'caption',
				text:'Back in Madrid'
			},
			{
				type:'text',
				text:'This was my second visit to Spain’s capital, and, even after 8 years, the conclusion I’ve reached is the same: ' +
					'I wouldn’t think twice about living here. I photographed very little of what I saw, opting instead to enjoy my time in a permanent state of déjà vu.'
			},
			{
				type:'image',
				size:'portrait',
				path:'madrid-3x4-001.jpg',
				// favorite:true
			},
			{
				type:'image',
				size:'landscape',
				path:'madrid-3x2-002.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'madrid-3x2-003.jpg'
			},
			{
				type:'image',
				size:'portrait',
				path:'madrid-3x4-002.jpg',
			},
		]
	},
	{
		url:'coimbra',
		title:'Coimbra',
		date:'29.11.2016',
		coordinates: {
			lat: 40.2256459,
			lng: -8.5927185
		},
		flag:'coimbra',
		content: [
			{
				type:'image',
				size:'fullScreen',
				path:'coimbra-3x2-001-alt-full.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'coimbra-3x2-002.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'coimbra-3x2-003.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'coimbra-3x2-004.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'coimbra-3x2-005.jpg',
				// favorite:true
			},
		]
	},
	{
		url:'aveiro',
		title:'Aveiro',
		date:'26.11.2016',
		coordinates: {
			lat: 40.627514,
			lng: -8.7799841
		},
		flag:'aveiro',
		content: [
			{
				type:'image',
				size:'fullScreen',
				path:'aveiro-3x2-001-full.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'aveiro-3x2-002.jpg',
				// favorite:true
			},
			{
				type:'image',
				size:'landscape',
				path:'aveiro-3x2-003.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'aveiro-3x2-004.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'aveiro-3x2-005.jpg'
			},
		]
	},
	{
		url:'porto',
		title:'Porto',
		date:'21.11.2016',
		coordinates: {
			lat: 41.1629766,
			lng: -8.692065
		},
		flag:'portugal',
		content: [
			{
				type:'image',
				size:'fullScreen',
				path:'porto-3x2-001-full.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'porto-3x2-002.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'porto-3x2-003.jpg'
			},
			{
				type:'caption',
				text:'Braga'
			},
			{
				type:'text',
				text:'The next two photos were taken in Braga, a city close to Porto. Braga was one of the destinations in a short roadtrip ' +
					'that also included Ponte de Lima and Viana do Castelo.'
			},
			{
				type:'image',
				size:'landscape',
				path:'porto-3x2-004.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'porto-3x2-005.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'porto-3x2-006.jpg',
				// favorite:true
			}
		]
	},
	{
		url:'sao-miguel',
		title:'São Miguel',
		date:'15.11.2016',
		coordinates: {
			lat: 37.8072936,
			lng: -25.7758506
		},
		flag:'azores',
		content: [
			{
				type:'image',
				size:'fullScreen',
				path:'sao-miguel-3x2-001-full.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'sao-miguel-3x2-002.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'sao-miguel-3x2-003.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'sao-miguel-3x2-004.jpg'
			},
			{
				type:'image',
				size:'portrait',
				path:'sao-miguel-3x4-001.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'sao-miguel-3x2-005.jpg',
				// favorite:true
			},
		]
	},
	{
		url:'madeira',
		title:'Madeira',
		date:'09.11.2016',
		coordinates: {
			lat: 32.6519356,
			lng: -16.9100971
		},
		flag:'madeira',
		content: [
			{
				type:'image',
				size:'fullScreen',
				path:'madeira-3x2-001-full.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'madeira-3x2-002.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'madeira-3x2-003.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'madeira-3x2-004.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'madeira-3x2-005.jpg',
				// favorite:true
			},
			{
				type:'caption',
				text:'Freitas &amp; Araújo'
			},
			{
				type:'text',
				text:'Madeira Island is a special place for me, as it used to be the home of my maternal grandparents before ' +
					'they decided to move to Brazil. Finding the house where they lived the early years of their lives ' + 
					'(José and Ana were neighbors prior to getting married) proved to be a challenge: ' +
					'none of my relatives knew the address, though I had the name of a fellow villager who could help.'
			},
			{
				type:'text',
				text:'Fortunately, I was able to connect with a 4th-degree cousin whose bar was located just 100 meters from the hostel in which ' +
					'I stayed (I didn’t know about her or the bar prior to booking my accommodation). I owe  the fact that I could locate my roots ' +
					'on the island to to Beatriz, João, and their family’s amazing hospitality and willingness to help.'
			}
		]
	},
	{
		url:'lisbon',
		title:'Lisbon',
		date:'31.10.2016',
		coordinates: {
			lat: 38.7101379,
			lng: -9.1381656
		},
		flag:'lisbon',
		content: [
			{
				type:'image',
				size:'fullScreen',
				path:'lisbon-3x2-001-full.jpg'
			},
			{
				type:'image',
				size:'portrait',
				path:'lisbon-3x4-001.jpg',
				// favorite:true
			},
			{
				type:'image',
				size:'landscape',
				path:'lisbon-3x2-002.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'lisbon-3x2-003.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'lisbon-3x2-004.jpg'
			},
			{
				type:'image',
				size:'landscape',
				path:'lisbon-3x2-005.jpg'
			},
		]
	},
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
				path:'london-3x2-001.jpg',
				// favorite:true
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
				path:'berlin-3x2-003.jpg',
				// favorite:true
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
				path:'prague-3x2-001-full.jpg',
				// favorite:true,
				// favoritePath:'prague-3x2-001.jpg'
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
				path:'vienna-3x2-002.jpg',
				// favorite:true
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
			},
			{
				type:'caption',
				text:'Bier und Brot'
			},
			{
				type:'text',
				text:'My time in Vienna wouldn’t have been the same had I not met a former German professor of mine, Harald Friedl. ' +
					'I’d had the chance to work with Harald on a few projects before, and it was a real pleasure to hear about the city ' +
					'from a local with interesting perspectives. On my last morning there, I was treated to a great breakfast: I ate bread ' +
					'from some of the world’s most prestigious bakers and learned about the unconventional ways with which they approach ' +
					'their craft. Danke schön, Harald!'
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
				path:'budapest-3x4-001.jpg',
				// favorite:true
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
				path:'split-3x2-004.jpg',
				// favorite:true
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
				path:'zagreb-3x2-001-full.jpg',
				// favorite:true,
				// favoritePath:'zagreb-3x2-001.jpg'
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
				path:'bovec-3x4-001.jpg',
				// favorite:true
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
				path:'ljubljana-3x2-006.jpg',
				// favorite:true
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
				path:'saalfelden-3x2-001-full.jpg',
				// favorite:true,
				// favoritePath:'saalfelden-3x2-001.jpg'
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
				path:'salzburg-3x2-003.jpg',
				// favorite:true
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
				path:'munich-3x2-005.jpg',
				// favorite:true
			}
		]
	},
	// {
	// 	url:'san-francisco',
	// 	title:'San Francisco',
	// 	date:'22.04.2016',
	// 	coordinates: {
	// 		lat: 37.757815,
	// 		lng: -122.5076402
	// 	},
	// 	flag:'usa',
	// 	content:[
	// 		{
	// 			type:'image',
	// 			size:'fullScreen',
	// 			path:'san-francisco-3x2-001-full.jpg'
	// 		},
	// 		// {
	// 		// 	type:'image',
	// 		// 	size:'landscape',
	// 		// 	path:'san-francisco-3x2-002.jpg'
	// 		// },
	// 		// {
	// 		// 	type:'image',
	// 		// 	size:'portrait',
	// 		// 	path:'san-francisco-3x4-001.jpg'
	// 		// },
	// 		// {
	// 		// 	type:'image',
	// 		// 	size:'landscape',
	// 		// 	path:'san-francisco-3x2-003.jpg'
	// 		// },
	// 		{
	// 			type:'caption',
	// 			text:'Hi Again'
	// 		},
	// 		{
	// 			type:'text',
	// 			text:'It’s always a joy to visit San Francisco, my favorite city in the USA.'
	// 		},
	// 		{
	// 			type:'image',
	// 			size:'landscape',
	// 			path:'san-francisco-3x2-004.jpg',
	// 			// favorite:true
	// 		}
	// 	]
	// },
	// {
	// 	url:'cajon-del-maipo',
	// 	title:'Cajón del Maipo',
	// 	date:'13.01.2016',
	// 	coordinates: {
	// 		lat: -33.8614073,
	// 		lng: -69.9777909
	// 	},
	// 	flag:'chile',
	// 	content:[
	// 		{
	// 			type:'image',
	// 			size:'fullScreen',
	// 			path:'cajon-del-maipo-3x2-001-full.jpg'
	// 		},
	// 		{
	// 			type:'image',
	// 			size:'landscape',
	// 			path:'cajon-del-maipo-3x2-002.jpg',
	// 			// favorite:true
	// 		},
	// 		{
	// 			type:'caption',
	// 			text:'Baños Colina'
	// 		},
	// 		{
	// 			type:'text',
	// 			text:'Driving through Cajón del Maipo trying to find Baños Colina was a memorable experience in itself, and though it was not easy to get to these volcano-heated springs ' +
	// 					'on a 1.0 liter engine rental car, it was the best possible way to end an amazing journey through South America.'
	// 		}
	// 	]
	// },
	// {
	// 	url:'pucon',
	// 	title:'Pucón',
	// 	date:'08.01.2016',
	// 	coordinates: {
	// 		lat: -39.2803931,
	// 		lng: -71.9766899
	// 	},
	// 	flag:'chile',
	// 	content:[
	// 		{
	// 			type:'image',
	// 			size:'fullScreen',
	// 			path:'pucon-3x2-001-full.jpg',
	// 			// favorite:true,
	// 			// favoritePath:'pucon-3x2-001-full.jpg'
	// 		},
	// 		{
	// 			type:'image',
	// 			size:'landscape',
	// 			path:'pucon-3x2-002.jpg'
	// 		},
	// 		// {
	// 		// 	type:'caption',
	// 		// 	text:'A Dutch Beginning'
	// 		// },
	// 		// {
	// 		// 	type:'text',
	// 		// 	text:'Pucón was the city I enjoyed most in our trip to South America. More importantly, it helped shape the way I’d approach future travels: ' +
	// 		// 		'visiting Pucón wasn’t in our plans, but a Dutch student in Buenos Aires was convincing enough to make us make it a destination. We never exchanged phone numbers, ' +
	// 		// 		'but I’ve always wanted to send him a thank you note.'
	// 		// },
	// 		{
	// 			type:'image',
	// 			size:'landscape',
	// 			path:'pucon-3x2-003.jpg'
	// 		},
	// 		{
	// 			type:'image',
	// 			size:'landscape',
	// 			path:'pucon-3x2-004.jpg'
	// 		}
	// 	]
	// },
	// {
	// 	url:'mar-del-plata',
	// 	title:'Mar del Plata',
	// 	date:'02.01.2015',
	// 	coordinates: {
	// 		lat: -37.9332167,
	// 		lng: -57.7822829
	// 	},
	// 	flag:'mar_del_plata',
	// 	content:[
	// 		{
	// 			type:'image',
	// 			size:'fullScreen',
	// 			path:'mar-del-plata-3x2-001-full.jpg',
	// 			// favorite:true,
	// 			// favoritePath:'mar-del-plata-3x2-001.jpg'
	// 		},
	// 		{
	// 			type:'caption',
	// 			text:'Mar del Plata'
	// 		},
	// 		{
	// 			type:'text',
	// 			text:'Our time in the city was enjoyable, but what stood out the most was how well we were received by our Argentinian hosts. ' +
	// 					'I have very few photos of Mar del Plata, but I’ll never forget the trip we took to a drive-in beach, the family dinner, ' + 
	// 					'the good conversations, and the fact that I didn’t miss the bus to Mendoza because of them. ' +
	// 					'We were also told “seeing our large backpacks inspired them to travel again.” It’d be great to find out that they actually did.'
	// 		},
	// 	]
	// },
	// {
	// 	url:'buenos-aires',
	// 	title:'Buenos Aires',
	// 	date:'28.12.2015',
	// 	coordinates: {
	// 		lat: -34.6155729,
	// 		lng: -58.5033605
	// 	},
	// 	flag:'buenos_aires',
	// 	content: [
	// 		{
	// 			type:'image',
	// 			size:'fullScreen',
	// 			path:'buenos-aires-3x2-004-full.jpg'
	// 		},
	// 		{
	// 			type:'image',
	// 			size:'landscape',
	// 			path:'buenos-aires-3x2-002.jpg'
	// 		},
	// 		{
	// 			type:'image',
	// 			size:'landscape',
	// 			path:'buenos-aires-3x2-003.jpg'
	// 		},
	// 		// {
	// 		// 	// type:'image',
	// 		// 	// size:'landscape',
	// 		// 	// path:'buenos-aires-3x2-001.jpg',
	// 		// 	// favorite:true
	// 		// }
	// 	]
	// },
	// {
	// 	url:'punta-del-este',
	// 	title:'Punta del Este',
	// 	date:'24.12.2015',
	// 	coordinates: {
	// 		lat: -34.9424383,
	// 		lng: -54.9468935
	// 	},
	// 	flag:'uruguay',
	// 	content: [
	// 		{
	// 			type:'image',
	// 			size:'fullScreen',
	// 			path:'punta-del-este-3x2-001-full.jpg'
	// 		},
	// 		{
	// 			type:'image',
	// 			size:'landscape',
	// 			path:'punta-del-este-3x2-002.jpg'
	// 		},
	// 		{
	// 			type:'image',
	// 			size:'landscape',
	// 			path:'punta-del-este-3x2-003.jpg',
	// 			// favorite:true
	// 		}
	// 	]
	// },
	// {
	// 	url:'montevideo',
	// 	title:'Montevideo',
	// 	date:'21.12.2015',
	// 	coordinates: {
	// 		lat: -34.8195806,
	// 		lng: -56.3702907
	// 	},
	// 	flag:'uruguay',
	// 	content:[
	// 		{
	// 			type:'image',
	// 			size:'fullScreen',
	// 			path:'montevideo-3x2-001-full.jpg',
	// 			// favorite:true,
	// 			// favoritePath:'montevideo-3x2-001.jpg'
	// 		},
	// 		{
	// 			type:'image',
	// 			size:'landscape',
	// 			path:'montevideo-3x2-002.jpg',
	// 		}
	// 	]
	// },
	// {
	// 	url:'sao-paulo',
	// 	title:'São Paulo',
	// 	date:'14.12.2015',
	// 	coordinates: {
	// 		lat: -23.6815315,
	// 		lng: -46.8754919
	// 	},
	// 	flag:'sao_paulo',
	// 	content:[
	// 		{
	// 			type:'image',
	// 			size:'fullScreen',
	// 			path:'sao-paulo-3x2-001-full.jpg',
	// 			// favorite:true,
	// 			// favoritePath:'sao-paulo-3x2-001.jpg'
	// 		},
	// 		{
	// 			type:'image',
	// 			size:'landscape',
	// 			path:'sao-paulo-3x2-002.jpg'
	// 		},
	// 		{
	// 			type:'image',
	// 			size:'landscape',
	// 			path:'sao-paulo-3x2-003.jpg'
	// 		},
	// 		{
	// 			type:'caption',
	// 			text:'Two Cities'
	// 		},
	// 		{
	// 			type:'text',
	// 			text:'I grew up and lived most of my life in São Paulo, a city whose duality has intrigued me more and more over the years. ' +
	// 				'My perspective of the Terra da Garoa might differ from most foreigners who visit Brazil’s financial center: ' +
	// 				'a city of extremes, São Paulo is a concrete jungle surrounded by beautiful nature, a financial center flooded with art, and a wealthy metropolis ' +
	// 				'tainted with misery. Despite being gone for so long, this city still smells and feels like home to me.'
	// 		},
	// 		{
	// 			type:'image',
	// 			size:'landscape',
	// 			path:'sao-paulo-3x2-004.jpg'
	// 		},
	// 		{
	// 			type:'image',
	// 			size:'portrait',
	// 			path:'sao-paulo-3x4-001.jpg'
	// 		}
	// 	]
	// },
	// {
	// 	url:'big-sur',
	// 	title:'Big Sur',
	// 	date:'22.05.2015',
	// 	coordinates: {
	// 		lat: 36.2466623,
	// 		lng: -121.8562847
	// 	},
	// 	flag:'usa',
	// 	content: [
	// 		{
	// 			type:'image',
	// 			size:'fullScreen',
	// 			path:'big-sur-3x2-001-full.jpg',
	// 			// favorite:true,
	// 			// favoritePath:'big-sur-3x2-001.jpg'
	// 		},
	// 		{
	// 			type:'caption',
	// 			text:'University'
	// 		},
	// 		{
	// 			type:'text',
	// 			text:'Camping in Big Sur was the first trip I made after graduating college, so I deemed it’d be appropriate to use it as a starting point for this site. This occasion also happens to mark the longest I’ve stayed completely disconnected from society, a very fond memory of mine.'
	// 		}
	// 	]
	// }
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