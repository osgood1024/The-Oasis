/* Defines all buttons or event listeners */


/* Prepares the document by changing all favorite into 'remove from favorite' */
$(document).ready(function() {
  // gets favorite
  var favorites = JSON.parse(localStorage.getItem('favorites'));

  // If the user is logged in
  if( localStorage.getItem('user') != null){

    // If we have favorites, set the location button to 'remove from favorite'
    if( favorites != null){

      for( var i = 0; i <favorites.length; i=i+1){
        var id = favorites[i]["id"]+"Fav";
        if(document.getElementById(id) != null){
          document.getElementById(id).innerHTML = "Remove from Favorite";
        }
      }
    }
  }

});


/* Adds location to favorite */
function addtoFavorite(name){
  console.log(name);
  // get all possible rooms
  var availableRooms = JSON.parse(localStorage.getItem('choices'));
  var indexes = JSON.parse(localStorage.getItem('choiceIndexes'));

  // get list of favorites
  var favorites = JSON.parse(localStorage.getItem('favorites'));
  var favIndex = JSON.parse(localStorage.getItem('favIndex'));

  /* Ask user to log in */
  if(localStorage.getItem("user") == null){
    window.alert("Please log in before adding items to favorites");
    return false;
  }

  // Looking for the space...
  var n = name.replace("Fav","");
  console.log(n);
  var space = availableRooms[indexes.indexOf(n)];
  console.log(space);
  /* If location already added, then remove it from favorites and vice versa */
  if( document.getElementById(name).innerHTML === "Favorite")
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

    document.getElementById(name).innerHTML = "Remove from Favorite";
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

    document.getElementById(name).innerHTML = "Favorite";

  }
}


/* Function that will lead to details page */
function getDetails(id){
  // Get array of rooms and indexes
  var allRooms = JSON.parse(localStorage.getItem('choices'));
  var index = JSON.parse(localStorage.getItem('choiceIndexes'));

  /* Get the room */
  var loc = allRooms[index.indexOf(id)];

  /* Set detail location */
  localStorage.setItem('detailLocation',JSON.stringify(loc));
  localStorage.setItem('prev',document.URL);
  window.location.href='./details.html';
}

// Get button
var favs = document.getElementById('favorites');
if(favs != null){
  favs.onclick = function(){
    if(localStorage.getItem("user") != null){
      window.location='./myFavorites.html';
      return false;
    } else{
      window.alert("Please log in before going to favorites!")
    }
  }
}


// Create empty array for user
var user;

// get elements from log in
var logEmail = document.getElementById('logEmail');
var logPassword = document.getElementById('logPassword');
var btnLogIn = document.getElementById('btnLogIn');

// Add login event
if(btnLogIn != null){
  btnLogIn.addEventListener('click', e=>{
    console.log('logging in');
    var email = logEmail.value;
    var pass = logPassword.value;

    user = {'email':email, 'favorites':null, 'listedSpaces':null};
    localStorage.setItem('user',JSON.stringify(user));
    document.getElementById('login').style.display='none';

    stateChanged();
  });
}


// Get elements from sign up
var signEmail = document.getElementById('signEmail');
var signPassword = document.getElementById('signPassword');
var btnSignUp = document.getElementById('btnSignUp');

// Add sign up event
if(btnSignUp != null ){
  btnSignUp.addEventListener('click', e=>{
    console.log('signing up');
    var email = signEmail.value;
    var pass = signPassword.value;

    // Log in
    user = {'email':email, 'favorites':null, 'listedSpaces':null};
    localStorage.setItem('user',JSON.stringify(user));
    document.getElementById('signup').style.display='none';

    stateChanged();
  });
}


var btnLogOut = document.getElementById('btnLogOut');

if(btnLogOut != null ){
  btnLogOut.addEventListener('click', e=>{
    localStorage.removeItem('user');
    stateChanged();
  });
}


// Get profile button
var proLink = document.getElementById('profile');

// Detects changing in log in
function stateChanged(){

  if(localStorage.getItem('user') != null){

    /* Change displays */
    loginbtn.style.display='none';
    signupbtn.style.display='none';
    btnLogOut.style.display='inline-block';
    proLink.style.display='inline';

  } else{
    /* Change displays */
    loginbtn.style.display='inline-block';
    signupbtn.style.display='inline-block';
    btnLogOut.style.display='none';
    proLink.style.display='none';

  }
}

var loginbtn;
var signupbtn;
var btnLogOut;
/* Checks to make sure if user is logged in */
$(document).ready(function() {
  loginbtn = document.getElementById('loginbtn');
  signupbtn = document.getElementById('signupbtn');
  btnLogOut = document.getElementById('btnLogOut');
  if(localStorage.getItem('user') != null){

    /* Change displays */
    loginbtn.style.display='none';
    signupbtn.style.display='none';
    btnLogOut.style.display='inline-block';
    proLink.style.display='inline';


  } else{

    /* Change displays */
    loginbtn.style.display='inline-block';
    signupbtn.style.display='inline-block';
    btnLogOut.style.display='none';
    proLink.style.display='none';


  }

});


/* Close modal if clicking outside of it*/
window.onclick = function(event) {
    var modal = document.getElementById("login");
    if (event.target == modal) {
      modal.style.display = "none";
    }
    var modal1 = document.getElementById("signup");
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
}
