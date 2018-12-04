$(document).ready(function() {

  // Changing a header
  var text = localStorage.getItem('event');

  //small change for text
  if(text === "Corporate"){
    text = "corporate event";
  }


  // edit header text
  var header = document.getElementById('book');
  header.innerHTML = "Book these spaces for your " + text.toLowerCase() + "!";

  // get list of all rooms and indexes
  var ar = JSON.parse(localStorage.getItem('availableRooms'));
  var arIndex = JSON.parse(localStorage.getItem('arIndex'));
  var indexes = JSON.parse(localStorage.getItem('indexes'));

  // get list of rooms that match our event
  var filterRooms = ar[arIndex.indexOf(text.toLowerCase())];
  var filterIndexes = indexes[arIndex.indexOf(text.toLowerCase())];

  // set them into local storage
  localStorage.setItem('filterRooms',JSON.stringify(filterRooms));
  localStorage.setItem('filterIndexes',JSON.stringify(filterIndexes));


  var results =[];

  // Arrays to change filters
  var locString = [];
  var locArray = [];

  // get filters
  var filters = JSON.parse(localStorage.getItem('filters'));
  if(filters == null){
    filters = [];
  }
  // Get locations that match filters
  for(var i = 0; i < filterRooms.length; i++ ){

    // change locations to lowercase, delete spaces
    var roomLocation = filterRooms[i]['location'].replace(/\s/g,'').toLowerCase();
    var filterLocation = filters[0]['location'].replace(/\s/g,'').toLowerCase();

    // populate locations of rooms for filters
    if(locArray.indexOf(roomLocation) == -1){
      locString.push(filterRooms[i]['location']);
      locArray.push(roomLocation);
    }

    // see if room location and filter location match
    if(roomLocation === filterLocation){
      var max = parseInt(filters[0]['maxCost'].replace(/\,/g,''));
      var roomCost = parseInt(filterRooms[i]['price'].replace(/\,/g,''));

      var capacity = parseInt(filters[0]['guest']);
      if( roomCost <= max){
        if(capacity <= parseInt(filterRooms[i]['capacity']))
        results.push(availableRooms[i]);
      }
    }
  }

  // updating fliters
  if(filters != null){
    var names = ['location','date', 'hours', 'guest', 'maxCost', 'minCost'];
    for(var i = 0; i <names.length; i++){
      document.getElementById(names[i]).value = filters[0][names[i]];
      document.getElementById(names[i]).placeholder = "";

    }
    document.getElementById('location').innerHTML =  filters[0]['location'];
    chosenLocation =  filters[0]['location'];
  }

  // compile the template
  var source   = $("#option-script").html();
  var template = Handlebars.compile(source);

  // Append location options
  var parentDiv = $("#options");
  for (var i = 0; i < locString.length; i++) {
    var string = locString[i];
    var add = {'id':string.replace(" ", "-"), 'location':string};
    var curHtml = template(add);
    parentDiv.append(curHtml);
  }

  if(results.length != 0){
    var source   = $("#results-template").html();
    var template = Handlebars.compile(source);
    var parentDiv = $("#first-row");

    for (var i = 0; i < 4; i++) {
      if( i < results.length){
        var curData = results[i];
        var curHtml = template(curData);
        parentDiv.append(curHtml);
      }
    }
    var parentDiv = $("#second-row");

    for (var i = 4; i < results.length; i++) {
      var curData = results[i];
      var curHtml = template(curData);
      parentDiv.append(curHtml);
    }

  } else {
    var source   = $("#results-template").html();
    var template = Handlebars.compile(source);
    var parentDiv = $('#noResults');
    var trendingRooms = JSON.parse(localStorage.getItem('filterRooms'));

    if(trendingRooms == null ){
      trendingRooms = [];
    }
    //var indexes = ['bridge','alcatraz','pier','pc'];
    for (var i = 0; i < trendingRooms.length; i++) {
      var curData = trendingRooms[i];
      var curHtml = template(curData);
      parentDiv.append(curHtml);
    }

    document.getElementById('first-row').style.display = 'none';
    document.getElementById('second-row').style.display = 'none';
    if(filters != null){
      document.getElementById('noResults').style.display = 'inline-block';

    }
  }
});

function search(){
  var loc = chosenLocation;
  var date = $('#date').val();
  var hours =$('#hours').val();
  var guest = $('#guest').val();
  var min = $('#minCost').val();
  var max = $('#maxCost').val();


  /* add a default values */
  if(date === ""){
    date = "2020-04-30";
  }
  if(hours === ""){
    hours = "1";
  }
  if(guest === ""){
    guest = "1";
  }
  if(min === ""){
    min = "0";
  }

  var filters = [
    {'location':loc, 'date':date, 'hours':hours, 'guest':guest, 'minCost':min, 'maxCost':max}
  ];

  localStorage.setItem('filters', JSON.stringify(filters));

  window.location.href='./search.html';
}

var chosenLocation;

// Drop down menu function
function dropdown(){
  console.log('toggling');
  document.getElementById("options").classList.toggle("show");
}

function chosen(id){
  chosenLocation = id.replace("-"," ");
  document.getElementById('location').innerHTML = id.replace("-"," ");
  document.getElementById("options").classList.toggle("show");
}
