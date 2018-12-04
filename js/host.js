// List the location
function list(){

  // Get list of availableRooms and indexes
  var availableRooms = JSON.parse(localStorage.getItem('availableRooms'));
  var indexes = JSON.parse(localStorage.getItem('indexes'));

  var arIndex = JSON.parse(localStorage.getItem('arIndex'));
  var listed = JSON.parse(localStorage.getItem('listed'));

  if(JSON.parse(localStorage.getItem('user')) == null){
    window.alert('Please log in before listing a space');
    return false;
  }

  // Get all information from the space
  var name = $('#name').val();
  var description = $('#description').val();
  var location = $('#location').val();
  var price =  "1,000";
  var capacity = $('#capacity').val();
  if(name.indexOf(" ") != -1){
    var id = name.substr(0,name.indexOf(" ")).toLowerCase();
  }else{
    var id = name.toLowerCase();
  }
  var contnumber = $('#host-number').val();
  var contemail = $('#host-email').val();


  // Create the new location
  var added = {'name':name,'image':'template','description':description, 'price': price,
  'location': location, 'capacity':capacity, 'id':id, 'stars':0, 'contemail':contemail, 'contnumber':contnumber};

  //Get inputs
  var target = document.getElementById('first-row');
  var targetArray = target.getElementsByTagName('input');

  // iterate through inputs, adding them to the event array
  for( var i = 0; i < targetArray.length; i++){
    if( targetArray[i].checked){
      console.log(targetArray[i]['id']);
      var iter = arIndex.indexOf(targetArray[i]['id']);
      console.log(iter);
      availableRooms[iter].push(added);
      indexes[iter].push(added['id']);
    }
  }

  // Do the same thing, but for the second row of inputs
  //Get inputs
  var target = document.getElementById('second-row');
  var targetArray = target.getElementsByTagName('input');

  // iterate through inputs, adding them to the event array
  for( var i = 0; i < targetArray.length; i++){
    if( targetArray[i].checked){
      var iter = arIndex.indexOf(targetArray[i]['id']);
      availableRooms[iter].push(added);
      indexes[iter].push(added['id']);
    }
  }

  localStorage.setItem('availableRooms',JSON.stringify(availableRooms));
  localStorage.setItem('indexes',JSON.stringify(indexes));

  if(listed == null){
    listed = [];
  }
  if(listed.length == 0 ){
    listed = [added];
  }else{
    listed.push(added);
  }

  localStorage.setItem('listed',JSON.stringify(listed));
  window.location.href='./confirmHost.html';
}

// update the page
$(document).ready(function() {

  // Get user and email field in the document
  var user = JSON.parse(localStorage.getItem('user'));
  var em = document.getElementById('host-email');
  if(user != null){
    em.value = user['email'];
  }

});
