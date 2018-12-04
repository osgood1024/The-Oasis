var favorites = JSON.parse(localStorage.getItem('favorites'));
var favIndex = JSON.parse(localStorage.getItem('favIndex'));

function addtoFavorite(name){
  console.log(name);
  var id = name.replace('Fav','');
  if(localStorage.getItem("user") == null){
    window.alert("Please log in before adding items to favorites");
    return false;
  }
  var index = favIndex.indexOf(id);
  var space = favorites[index];

  if( document.getElementById(name).innerHTML === "Favorite")
  {

    if(favorites != null){
      favorites.push(space);
      favIndex.push(space['id']);
    }
    else {
      favorites = [space];
      favIndex = [space['id']];
    }

    document.getElementById(name).innerHTML = "Remove from Favorite";
    localStorage.setItem('favorites',JSON.stringify(favorites));
    localStorage.setItem('favIndex',JSON.stringify(favIndex));
  } else{

    var fIndex = favIndex.indexOf(space['id']);
    favorites.splice(fIndex,1);
    if(favorites.length == 0){
      favorites = null;
    }
    favIndex.splice(fIndex,1);
    localStorage.setItem('favorites',JSON.stringify(favorites));
    localStorage.setItem('favIndex',JSON.stringify(favIndex));
    document.getElementById(name).innerHTML = "Favorite";
  }
}

$(document).ready(function() {

  // compile the template
  console.log("working");
  var source   = $("#favorites-template").html();
  var template = Handlebars.compile(source);
  var parentDiv = $("#first-row");
  if( favorites!= null ){
    if(favorites.length < 5){
      for (var i = 0; i < favorites.length; i++) {
        var curData = favorites[i];
        var curHtml = template(curData);
        parentDiv.append(curHtml);
      }
    }
  } else{
    document.getElementById("NoFavs").style.display="inline";
  }

  if(localStorage.getItem('user') != null){
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

function loggedIn(){
  localStorage.setItem("user", "loggedIn");
}
function loggedOut(){
  localStorage.removeItem("user");
  window.location.href='#';

}
if(localStorage.getItem("user") !== null){
  //document.getElementById('loginbtn').style.display='none';
  //document.getElementById('signupbtn').style.display='none';
  document.getElementById('logoutbtn').style.display='inline-block';
}

var index_details = [];
if(favorites != null){
  for(i = 0; i < favorites.length; i++ ){
    index_details.push(favorites[i]['id']);
  }
}
/* Function that will lead to details page */
function getDetails(id){
  var index = index_details.indexOf(id);
  var loc = favorites[index];

  localStorage.setItem('detailLocation',JSON.stringify(loc));
  localStorage.setItem('prev','./myFavorites.html');
  window.location.href='./details.html';
}
