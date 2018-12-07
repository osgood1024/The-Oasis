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

  // all rooms that match our event become our filterRooms
  allRooms = ar[arIndex.indexOf(text.toLowerCase())];
  allIndexes = indexes[arIndex.indexOf(text.toLowerCase())];

  // Get rooms that match filters, and their indexes
  var filterRooms = JSON.parse(localStorage.getItem('filterRooms'));
  var filterIndexes = JSON.parse(localStorage.getItem('filterIndexes'));

  //if no room match indexes
  if(filterRooms == null){

    // all rooms that match our event become our filterRooms
    filterRooms = allRooms;
    filterIndexes = allIndexes;

  }

  // Arrays to change filters
  var locString = [];
  var locArray = [];

  // Get locations that match filters
  for(var i = 0; i < allRooms.length; i++ ){
    var roomLocation = allRooms[i]['location'].replace(" ","").toLowerCase();

    // populate locations of rooms for filters
    if(locArray.indexOf(roomLocation) == -1){
      locString.push(allRooms[i]['location']);
      locArray.push(roomLocation);
    }

  }

  var filters = JSON.parse(localStorage.getItem('filters'));

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

  // if the size of our filter rooms is not zero
  if(filterRooms.length != 0){
    var source   = $("#results-template").html();
    var template = Handlebars.compile(source);
    var parentDiv = $("#first-row");

    for (var i = 0; i < 4; i++) {
      if( i < filterRooms.length){
        var curData = filterRooms[i];
        var curHtml = template(curData);
        parentDiv.append(curHtml);
      }
    }
    var parentDiv = $("#second-row");

    for (var i = 4; i < filterRooms.length; i++) {
      var curData = filterRooms[i];
      var curHtml = template(curData);
      parentDiv.append(curHtml);
    }

  } else {

    // all rooms that match our event become our filterRooms
    filterRooms = allRooms;
    filterIndexes = allIndexes;

    // get template stuff
    var source   = $("#results-template").html();
    var template = Handlebars.compile(source);
    var parentDiv = $('#noResults');

    for (var i = 0; i < filterRooms.length; i++) {
      var curData = filterRooms[i];
      var curHtml = template(curData);
      parentDiv.append(curHtml);
    }

    document.getElementById('first-row').style.display = 'none';
    document.getElementById('second-row').style.display = 'none';
    document.getElementById('noResults').style.display = 'inline-block';
  }

  localStorage.setItem('choices',JSON.stringify(filterRooms));
  localStorage.setItem('choiceIndexes',JSON.stringify(filterIndexes));
});

function search(){
  var loc = document.getElementById('location').innerHTML;
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
  if(max === "" ){
    max = "1000";
  }

  var filters = [
    {'location':loc, 'date':date, 'hours':hours, 'guest':guest, 'minCost':min, 'maxCost':max}
  ];

  localStorage.setItem('filters', JSON.stringify(filters));

  // Changing a header
  var text = localStorage.getItem('event');

  //small change for text
  if(text === "Corporate"){
    text = "corporate event";
  }

  // get list of all rooms and indexes
  var ar = JSON.parse(localStorage.getItem('availableRooms'));
  var arIndex = JSON.parse(localStorage.getItem('arIndex'));
  var indexes = JSON.parse(localStorage.getItem('indexes'));

  // all rooms that match our event become our filterRooms
  filterRooms = ar[arIndex.indexOf(text.toLowerCase())];
  filterIndexes = indexes[arIndex.indexOf(text.toLowerCase())];

  // figure out results
  var results =[];
  var resultsIndex =[];

  // Get locations that match filters
  for(var i = 0; i < filterRooms.length; i++ ){

    // change locations to lowercase, delete spaces
    var roomLocation = filterRooms[i]['location'].replace(/\s/g,'').toLowerCase();
    var filterLocation = filters[0]['location'].replace(/\s/g,'').toLowerCase();

    // see if room location and filter location match
    if(roomLocation === filterLocation){
      var max = parseInt(filters[0]['maxCost'].replace(/\,/g,''));
      var roomCost = parseInt(filterRooms[i]['price'].replace(/\,/g,''));

      var capacity = parseInt(filters[0]['guest']);
      if( roomCost <= max){
        if(capacity <= parseInt(filterRooms[i]['capacity'])){
          results.push(filterRooms[i]);
          resultsIndex.push(filterRooms[i]['id']);
        }

      }
    }
  }

  localStorage.setItem('filterRooms',JSON.stringify(results));
  localStorage.setItem('filterIndexes',JSON.stringify(resultsIndex));

  window.location.href='./search.html';
}

var chosenLocation;

// Drop down menu function
function dropdown(){
  document.getElementById("options").classList.toggle("show");
}

function chosen(id){
  chosenLocation = id.replace("-"," ");
  document.getElementById('location').innerHTML = id.replace("-"," ");
  document.getElementById("options").classList.toggle("show");
}

function clearFilters(){
  console.log('hello');
  localStorage.setItem('filters',null);
  localStorage.setItem('filterRooms',null);
  window.location.href='./search.html';
}
