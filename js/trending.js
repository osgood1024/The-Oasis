$(document).ready(function() {

  var availableRooms = JSON.parse(localStorage.getItem('availableRooms'));
  var indexes = JSON.parse(localStorage.getItem('indexes'));

  var rIndex = parseInt(localStorage.getItem('rIndex'));
  localStorage.setItem('filterRooms',JSON.stringify(availableRooms[rIndex]));;
  localStorage.setItem('filterIndexes',JSON.stringify(indexes[rIndex]));

  var source   = $("#favorites-template").html();
  var template = Handlebars.compile(source);
  var parentDiv = $("#first-row");
  for (var i = 0; i < availableRooms[rIndex].length; i++) {
    var curData = availableRooms[rIndex][i];
    var curHtml = template(curData);
    parentDiv.append(curHtml);
  }

  if( localStorage.getItem('user') != null ){
    if( favorites != null){
      for( var i = 0; i <favorites.length; i=i+1){
        var id = favorites[i]["id"];
        if(document.getElementById(id) != null){
          document.getElementById(id+"Fav").innerHTML = "Remove from Favorite";
        }
      }
    }
  }

});
