var favorites = JSON.parse(localStorage.getItem('favorites'));
var favIndex = JSON.parse(localStorage.getItem('favIndex'));

$(document).ready(function() {
  localStorage.setItem('choices',JSON.stringify(favorites));
  localStorage.setItem('choiceIndexes',JSON.stringify(favIndex));

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

if(localStorage.getItem("user") !== null){
  //document.getElementById('loginbtn').style.display='none';
  //document.getElementById('signupbtn').style.display='none';
  document.getElementById('btnLogOut').style.display='inline-block';
}
