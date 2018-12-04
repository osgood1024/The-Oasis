localStorage.setItem('rIndex', Math.floor(Math.random() * 8));
/* Hardcoded first activities */
var firstActivities = [
  {'caption': 'Party', 'actImage':'./images/party.jpg'},
  {'caption': 'Wedding', 'actImage':'./images/wedding.jpg'},
  {'caption': 'Corporate Event', 'actImage':'./images/corp.jpg'},
  {'caption': 'Meeting', 'actImage':'./images/meeting.jpg'}
];

var secondActivities = [
  {'caption': 'Concert', 'actImage':'./images/concert.jpg'},
  {'caption': 'Photoshoot', 'actImage':'./images/photoshoot.jpg'},
  {'caption': 'Reunion', 'actImage':'./images/reunion.jpg'},
  {'caption': 'Workshop', 'actImage':'./images/workshop.jpg'}
];

// Weird function that makes the screen stop scrolling to the center
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

/* This function waits until document is ready*/
$(document).ready(function() {

  // compile the template
  var source   = $("#activities-template").html();
  var template = Handlebars.compile(source);

  var parentDiv = $("#first-row");
  for (var i = 0; i < firstActivities.length; i++) {
    var curData = firstActivities[i];
    var curHtml = template(curData);
    parentDiv.append(curHtml);
  }

  var parentDiv = $("#second-row");
  for (var i = 0; i < secondActivities.length; i++) {
    var curData = secondActivities[i];
    var curHtml = template(curData);
    parentDiv.append(curHtml);
  }

  localStorage.setItem('filterRooms',null);
});


// set up filtering function
function filter(id){
  localStorage.setItem('event',id);
  window.location.href="./search.html";
}
