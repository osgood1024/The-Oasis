/* The hardcoded rooms we have */
var partyRooms = [
  {'name':'Balboa Park', 'image':'balboa','price':'600', 'location':'La Jolla',
    'capacity':'500', 'description':'This place is great',  'id':'balboa', 'stars':'4', 'contemail':'jimhalbert@ucsd.edu', 'contnumber':'(925) 283-2783'},
  {'name': 'Marriott Beverly Hills', 'image': 'BH', 'price': '5,000',
   'description': 'The Marriott in Beverly Hills is perfect for any event! Stunning ballrooms and a convenient location for all of your guests!',
   'location': 'Los Angeles', 'capacity': '650', 'id': 'BH', 'stars': '5', 'contemail':'jimhalbert@ucsd.edu', 'contnumber':'(925) 283-2783'},
   {'name': 'Waterfront Park', 'image':'waterfront','price': '500',
   'description':'The venue provides spaces for various private or public events. The Waterfront Park features a large field, garden room, and play area.',
   'location': 'San Diego', 'capacity':'1000', 'id': 'waterfront', 'stars':'5', 'contemail':'jimhalbert@ucsd.edu', 'contnumber':'(925) 283-2783'},
   {'name':'Hyatt Regency ', 'image':'regency', 'price':'1,000','location':'La Jolla',
   'capacity':'600', 'description':'This place is great',  'id':'hyatt', 'stars':'3', 'contemail':'jimhalbert@ucsd.edu', 'contnumber':'(925) 283-2783'},
   {'name':'Observatory North Park', 'location': 'San Diego', 'description':
   'The venue includes a 40 x 24’ stage, full staged-size rehearsal room, production office with fully equipped projection booth, and parking lot is adjacent to the theatre.'
   ,'price':'700', 'image':'observatory',
   'capacity':'500', 'id':'observatory', 'stars':'5', 'contemail':'jimhalbert@ucsd.edu', 'contnumber':'(925) 283-2783'}
];

var partyIndex = ['balboa','BH','waterfront','hyatt','observatory'];

var weddingRooms = [
  {'name':'Cityscope Banquet Hall', 'image':'ballroom', 'price':'800', 'location':'San Diego',
    'capacity':'350', 'description':'This place is great',  'id':'ballroom', 'stars':'3', 'contemail':'jimhalbert@ucsd.edu', 'contnumber':'(925) 283-2783'},
  {'name': 'Marriott Gaslamp Quarter', 'price': '1,000',
    'location': 'San Diego', 'capacity':'700', 'id': 'gaslamp',
    'description':' Discover the best banquet halls and ballrooms with modern equipment and flexible layouts. Marriott San Diego offers a variety of options for festive private functions.',
    'image':'gaslamp', 'stars':'5', 'contemail':'jimhalbert@ucsd.edu', 'contnumber':'(925) 283-2783'},
  {'name':'Martin Johnson House','image': 'johnson', 'description':
  'A rustic oceanfront cottage located next to The Scripps in UCSD with beautiful oceanview' +
   'allows guests to hold events ranging from wedding receptions, corporate events, business meetings and etc.' +
    'The cottage also includes both indoor and outdoors seatings.' ,
     'price': '3000', 'location':'San Diego', 'capacity':'400', 'id':'scripps', 'stars':'4', 'contemail':'jimhalbert@ucsd.edu', 'contnumber':'(925) 283-2783'}
];

var weddingIndex = ['ballroom','gaslamp','scripps'];

var corporateRooms = [
  {'name': 'Marriott Beverly Hills', 'image': 'BH', 'price': '5,000',
   'description': 'The Marriott in Beverly Hills is perfect for any event! Stunning ballrooms and a convenient location for all of your guests!',
   'location': 'Los Angeles', 'capacity': '650', 'id': 'BH', 'stars': '5', 'contemail':'jimhalbert@ucsd.edu', 'contnumber':'(925) 283-2783'},
  {'name':'Hyatt Regency ', 'image':'regency', 'price':'1,000','location':'La Jolla',
   'capacity':'600', 'description':'This place is great',  'id':'hyatt', 'stars':'3', 'contemail':'jimhalbert@ucsd.edu', 'contnumber':'(925) 283-2783'},
  {'name': 'Luxe City Center Hotel', 'image': 'Luxe', 'price': '3,000',
  'description': 'Luxe City Center Hotel is conveniently located in the heart of Los Angeles and offers beautiful views of downtown LA. Not only can you guests enjoy the view, but also the pool, ballrooms, food, drinks, wifi, and much more.',
   'location': 'Los Angeles', 'capacity': '700', 'id': 'Luxe', 'stars': '4', 'contemail':'jimhalbert@ucsd.edu', 'contnumber':'(925) 283-2783'},
   {'name':'The Loft','image':'loft'
,'description':'The Loft is the university’s performance lounge with modern design. The Loft is available for private rental and students are eligible for a discount, for more information please contact jimhalbert@ucsd.edu' ,
'price': '500',
  'location':'San Diego', 'capacity':'200', 'id':'UCSD', 'stars':'3', 'contemail':'jimhalbert@ucsd.edu', 'contnumber':'(925) 283-2783'}
];

var corporateIndex = ['BH','hyatt','Luxe','UCSD'];

var concertRooms = [
  {'name':'Price Center', 'image':'pricecenter', 'price':'400', 'location':'La Jolla',
  'capacity':'780', 'description':'This place is great',  'id':'pc', 'stars':'3', 'contemail':'jimhalbert@ucsd.edu', 'contnumber':'(925) 283-2783'},
  {'name': 'Standard Hotel Rooftop', 'image': 'standard', 'price': '6,000',
  'description': 'Enjoy watching the city sunset on the Rooftop at the Standard Hotel in the heart of Los Angeles! Guests can relax on the roof then head inside to ballrooms with beautiful stages, tables, food, bars, and company!',
  'location': 'Los Angeles', 'capacity': '450', 'id': 'standard', 'stars': '5', 'contemail':'jimhalbert@ucsd.edu', 'contnumber':'(925) 283-2783'},
  {'name': 'Piazza della Famiglia','image':'piazza',
  'description':'Little Italy provide space for music, festival, farmers market, you name it. Enjoy beautiful scenery at Piazza della Famiglia, in the heart of Little Italy.',
  'price': '1,000', 'location': 'San Diego', 'capacity':'900', 'id':'piazza', 'stars':'4', 'contemail':'jimhalbert@ucsd.edu', 'contnumber':'(925) 283-2783'},
  {'name':'Staples Center','image':'staples','description':'A multipurpose arena located in downtown Los Angeles'+
 'allows guest to hold concert with large capacities.Please contact jimhalbert@ucsd.edu to' +
'schedule a tour or learn more about the arena.'
 , 'price': '250,000',
  'location': 'Los Angeles', 'capacity':'80000', 'id':'LA', 'stars':'5', 'contemail':'jimhalbert@ucsd.edu', 'contnumber':'(925) 283-2783'}
];

var concertIndex = ['pc', 'standard', 'piazza', 'LA'];

var meetingRooms = [
  {'name': 'Marriott Beverly Hills', 'image': 'BH', 'price': '5,000',
   'description': 'The Marriott in Beverly Hills is perfect for any event! Stunning ballrooms and a convenient location for all of your guests!',
   'location': 'Los Angeles', 'capacity': '650', 'id': 'BH', 'stars': '5', 'contemail':'jimhalbert@ucsd.edu', 'contnumber':'(925) 283-2783'},
  {'name':'Hyatt Regency ', 'image':'regency', 'price':'1,000','location':'La Jolla',
   'capacity':'600', 'description':'This place is great',  'id':'hyatt', 'stars':'3', 'contemail':'jimhalbert@ucsd.edu', 'contnumber':'(925) 283-2783'},
  {'name': 'Luxe City Center Hotel', 'image': 'Luxe', 'price': '3,000',
  'description': 'Luxe City Center Hotel is conveniently located in the heart of Los Angeles and offers beautiful views of downtown LA. Not only can you guests enjoy the view, but also the pool, ballrooms, food, drinks, wifi, and much more.',
   'location': 'Los Angeles', 'capacity': '700', 'id': 'Luxe', 'stars': '4', 'contemail':'jimhalbert@ucsd.edu', 'contnumber':'(925) 283-2783'},
   {'name':'Mission Valley Business Center','image': 'MS' ,'description': 'Premier Business Center provides private and virtual offices, high speed internet, meeting rooms and conference room, reception and secretarial services. Complimentary valet parking is available. Please contact jimhalbert@ucsd.edu to schedule a tour and learn more about the building.'
, 'price': '900',
  'location': 'San Diego', 'capacity':'30', 'id':'MS', 'stars':'5', 'contemail':'jimhalbert@ucsd.edu', 'contnumber':'(925) 283-2783'}
];

var meetingIndex = ['BH','hyatt','Luxe','MS'];

var photoshootRooms = [
  {'name':'Golden Gate Bridge', 'image':'GBridge', 'price':'2,000','location':'San Francisco',
      'capacity':'980', 'description':'This place is great',  'id':'bridge', 'stars':'4', 'contemail':'jimhalbert@ucsd.edu', 'contnumber':'(925) 283-2783'},
  {'name':'Alcatraz Island', 'image':'prison', 'price':'1,500','location':'San Francisco',
    'capacity':'768', 'description':'This place is great',  'id':'alcatraz', 'stars':'4', 'contemail':'jimhalbert@ucsd.edu', 'contnumber':'(925) 283-2783'},
  {'name':'Pier', 'image':'pier', 'price':'1,250','location':'San Francisco',
    'capacity':'1,000', 'description':'This place is great',  'id':'pier', 'stars':'4'},
  {'name':'Spotlight Studio','image':'studio' ,'description':'Spotlight Studio provides various types of photoshoot options including outdoor as well as indoor. Spotlight studio captures your moment in a stunning way with modern and advanced equipments. To schedule an appointment please contact Jim Halbert' , 'price': '200',
  'location': 'San Diego', 'capacity':'20', 'id':'studio', 'stars':'3', 'contemail':'jimhalbert@ucsd.edu', 'contnumber':'(925) 283-2783'}
];

var photoshootIndex = ['bridge','alcatraz','pier','studio'];

var reunionRooms = [
  {'name':'Hyatt Regency ', 'image':'regency', 'price':'1,000','location':'La Jolla',
  'capacity':'600', 'description':'This place is great',  'id':'hyatt', 'stars':'3', 'contemail':'jimhalbert@ucsd.edu', 'contnumber':'(925) 283-2783'},
  {'name': 'Standard Hotel Rooftop', 'image': 'standard', 'price': '6,000',
  'description': 'Enjoy watching the city sunset on the Rooftop at the Standard Hotel in the heart of Los Angeles! Guests can relax on the roof then head inside to ballrooms with beautiful stages, tables, food, bars, and company!',
  'location': 'Los Angeles', 'capacity': '450', 'id': 'standard', 'stars': '5', 'contemail':'jimhalbert@ucsd.edu', 'contnumber':'(925) 283-2783'},
  {'name':'Observatory North Park', 'location': 'San Diego', 'description':
  'The venue includes a 40 x 24’ stage, full staged-size rehearsal room, production office with fully equipped projection booth, and parking lot is adjacent to the theatre.'
  ,'price':'700', 'image':'observatory',
  'capacity':'500', 'id':'observatory', 'stars':'5', 'contemail':'jimhalbert@ucsd.edu', 'contnumber':'(925) 283-2783'},
  {'name':'Queen Bee’s Art and Cultural Center','image': 'queen' ,'description':'A multipurpose venue located in North Park, San Diego.' +
   ' The venue allow guests to host a varieties of events ranging from workshops, business meetings to wedding party.' +
  '  The interior of the main hall is decorated with beautiful wall arts and also features a main-stage with bamboo hardwood dance-floor. ' +
    'The venue also has a smaller studio at the back, which is perfect for smaller parties.' , 'price': '1000',
  'location':' San Diego' , 'capacity':'400', 'id':'bee', 'stars':'4', 'contemail':'jimhalbert@ucsd.edu', 'contnumber':'(925) 283-2783'}

];

var reunionIndex = ['hyatt','standard','observatory','bee'];

var workshopRooms = [
   {'name': 'Luxe City Center Hotel', 'image': 'Luxe', 'price': '3,000',
   'description': 'Luxe City Center Hotel is conveniently located in the heart of Los Angeles and offers beautiful views of downtown LA. Not only can you guests enjoy the view, but also the pool, ballrooms, food, drinks, wifi, and much more.',
    'location': 'Los Angeles', 'capacity': '700', 'id': 'Luxe', 'stars': '4', 'contemail':'jimhalbert@ucsd.edu', 'contnumber':'(925) 283-2783'},
  {'name': 'Liberty Station Center', 'image':'liberty',
  'description':' The main hall walls is covered with gorgeous wainscoting. Amenities of the main hall include guest Wifi, free parking, registration and check-in area, and projection devices are available for rent.',
  'price':'800', 'location': 'San Diego', 'capacity':'400', 'id': 'liberty', 'stars':'5', 'contemail':'jimhalbert@ucsd.edu', 'contnumber':'(925) 283-2783'},
  {'name':'The Loft','image':'loft'
,'description':'The Loft is the university’s performance lounge with modern design. The Loft is available for private rental and students are eligible for a discount, for more information please contact jimhalbert@ucsd.edu' , 'price': '500',
 'location': 'San Diego', 'capacity':'200', 'id':'UCSD', 'stars':'3', 'contemail':'jimhalbert@ucsd.edu', 'contnumber':'(925) 283-2783'},
 {'name':'Queen Bee’s Cultural Center','image': 'queen' ,'description':'A multipurpose venue located in North Park, San Diego.' +
  ' The venue allow guests to host a varieties of events ranging from workshops, business meetings to wedding party.' +
 '  The interior of the main hall is decorated with beautiful wall arts and also features a main-stage with bamboo hardwood dance-floor. ' +
   'The venue also has a smaller studio at the back, which is perfect for smaller parties.' , 'price': '1000',
 'location':' San Diego' , 'capacity':'400', 'id':'bee', 'stars':'4', 'contemail':'jimhalbert@ucsd.edu', 'contnumber':'(925) 283-2783'}
];

var workshopIndex = ['Luxe', 'liberty','UCSD','bee'];

// Put them in the bigger array
var availableRooms = [partyRooms,workshopRooms,reunionRooms,concertRooms, meetingRooms,
                    corporateRooms, weddingRooms, photoshootRooms];
var indexes = [partyIndex, workshopIndex, reunionIndex, concertIndex ,
                      meetingIndex, corporateIndex, weddingIndex, photoshootIndex];

var arIndex = ['party', 'workshop', 'reunion','concert', 'meeting', 'corporate event', 'wedding','photoshoot'];
/* Adding them to our local storage */
if(localStorage.getItem('availableRooms') == null){
  localStorage.setItem('availableRooms',JSON.stringify(availableRooms));
}

if(localStorage.getItem('indexes') == null){
  localStorage.setItem('indexes',JSON.stringify(indexes));
}

if(localStorage.getItem('arIndex') == null){
  localStorage.setItem('arIndex',JSON.stringify(arIndex));
}
