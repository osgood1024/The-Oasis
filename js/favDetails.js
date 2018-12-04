
var favorites = JSON.parse(localStorage.getItem('favorites'));

$(document).ready(function() {
  var favorites = JSON.parse(localStorage.getItem('favorites'));

  if( localStorage.getItem('user') != null){
    if( favorites != null){
      console.log('Changing innerHTML');

      for( var i = 0; i <favorites.length; i=i+1){
        var id = favorites[i]["id"]+"Fav";
        if(document.getElementById(id) != null){
          console.log('Changing innerHTML');
          document.getElementById(id).innerHTML = "Remove from Favorite";
        }
      }
    }
  }

});



function addtoFavorite(name){

  /* Ask user to log in */
  if(localStorage.getItem("user") == null){
    window.alert("Please log in before adding items to favorites");
    return false;
  }

  // Looking for the space...
  var name = name.replace("Fav","");
  var space = availableRooms[indexes.indexOf(name)];

  // Get the list of favorites and the index of those favorites for fast searching
  var favIndex = JSON.parse(localStorage.getItem('favIndex'));

  /* If location already added, then remove it from favorites and vice versa */
  if( document.getElementById(name+"Fav").innerHTML === "Favorite")
  {

    /* Create a new array if favorites does not exist, otherwise add it to array */
    if(favorites != null){
      favorites.push(space);
      favIndex.push(space['id']);
    }
    else {
      favorites = [space];
      favIndex = [space['id']];
    }

    document.getElementById(name+"Fav").innerHTML = "Remove from Favorite";
    localStorage.setItem('favorites',JSON.stringify(favorites));
    localStorage.setItem('favIndex',JSON.stringify(favIndex));
  } else{
    console.log('favorite');

    var fIndex = favIndex.indexOf(space['id']);
    favorites.splice(fIndex,1);
    if(favorites.length == 0){
      favorites = null;
    }
    favIndex.splice(fIndex,1);
    localStorage.setItem('favorites',JSON.stringify(favorites));
    localStorage.setItem('favIndex',JSON.stringify(favIndex));

    document.getElementById(name+"Fav").innerHTML = "Favorite";

  }
}
