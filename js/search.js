$(document).ready(function() {

  // Changing a header
  var text = localStorage.getItem('event');
  //small change for text
  if(text === "Corporate"){
    text = "corporate event";
  }
  var header = document.getElementById('book');
  header.innerHTML = "Book these spaces for your " + text.toLowerCase() + "!"

  // Get locations that match filters
  var results =[];
  var filters = JSON.parse(localStorage.getItem('filters'));
  var availableRooms = JSON.parse(localStorage.getItem('filterRooms'));

  for(var i = 0; i < availableRooms.length; i++ ){

    // change locations to lowercase, delete spaces
    var roomLocation = availableRooms[i]['location'].replace(/\s/g,'').toLowerCase();
    var filterLocation = filters[0]['location'].replace(/\s/g,'').toLowerCase();

    // see if they match
    if(roomLocation === filterLocation){
      var max = parseInt(filters[0]['maxCost'].replace(/\,/g,''));
      var roomCost = parseInt(availableRooms[i]['price'].replace(/\,/g,''));
      if( roomCost <= max){
        results.push(availableRooms[i]);
      }
    }
  }

  // updating fliters
  var myFilters = JSON.parse(localStorage.getItem('filters'));
  if(myFilters != null){
    var names = ['location','date', 'hours', 'guest', 'maxCost', 'minCost'];
    for(var i = 0; i <names.length; i++){
      document.getElementById(names[i]).value = myFilters[0][names[i]];
      document.getElementById(names[i]).placeholder = "";

    }
    document.getElementById('location').innerHTML =  myFilters[0]['location'];
    chosenLocation =  myFilters[0]['location'];
  }
  console.log(results);

  var locString = [];
  var locationArray = [];

  // compile the template
  var source   = $("#option-script").html();
  var template = Handlebars.compile(source);

  var availableRooms = JSON.parse(localStorage.getItem('filterRooms'));
  var parentDiv = $("#options");
  console.log('availableRooms: ' + availableRooms.length);
  for (var i = 0; i < availableRooms.length; i++) {
    var string = availableRooms[i]['location'];
    if(locString.indexOf(string) == -1){
      var add = {'id':string.replace(" ", "-"), 'location':string};
      locString.push(string);
      locationArray.push(add);
      var curHtml = template(add);
      parentDiv.append(curHtml);
    }
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

    //var indexes = ['bridge','alcatraz','pier','pc'];
    for (var i = 0; i < trendingRooms.length; i++) {
      var curData = trendingRooms[i];
      var curHtml = template(curData);
      parentDiv.append(curHtml);
    }

    document.getElementById('first-row').style.display = 'none';
    document.getElementById('second-row').style.display = 'none';
    document.getElementById('noResults').style.display = 'inline-block';
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
