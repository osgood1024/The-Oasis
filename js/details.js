/*
 * Set up page
 */

$(document).ready(function() {

  // Get the details of the location
  var result = JSON.parse(localStorage.getItem('detailLocation'));

  // compile the template
  var source = $("#details-template").html();
  var template = Handlebars.compile(source);
  var parentDiv = $("#details");
  var curData = result;
  var curHtml = template(curData);
  parentDiv.prepend(curHtml);

  /* Get the stars in the reviews */
  var star = parseInt(result['stars']);
  for(var i = 0; i < star; i++){
    document.getElementById(i+"").classList.add('checked');
    document.getElementById(i+"-modal").classList.add('checked');
  }

  /* Add reviews, if any */
  var reviews = JSON.parse(localStorage.getItem('reviews'));
  if(reviews != null){
    for(var i = 0; i < reviews.length; i++){
      if(reviews[i]['name']==result['name']){
        for(var j = 0; j < parseInt(reviews[i]['stars']); j++ ){
          document.getElementById(j+"-review").classList.add('checked');
        }
        document.getElementById("myReviewh3").innerHTML = reviews[i]['text'];
        document.getElementById('myReview').style.display = 'inline';
      }
    }
  }

  /*Determine extras, if any */
  var extras = JSON.parse(localStorage.getItem('extras'));

  if(extras != null){
    for(var i = 0; i < extras.length; i++){
      document.getElementById(extras[i]['name']).innerHTML = "Remove from Cart";
      document.getElementById(extras[i]['name']+"Btn").style.backgroundColor="#8cf442";
    }
  }
});


/* Go back to previous page */
function goBack(variable){
  var prev = (localStorage.getItem('prev'));
  localStorage.setItem('extras',null);
  window.location.href = prev;
}

/* Close modal if clicking outside of it*/
window.onclick = function(event) {
    var modal = document.getElementById("planner-modal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
    var modal1 = document.getElementById("catering-modal");
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
    var modal2 = document.getElementById("entertainment-modal");
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
    var modal3 = document.getElementById("transportation-modal");
    if (event.target == modal3) {
      modal3.style.display = "none";
    }
    var modal4 = document.getElementById("reviews-modal");
    if (event.target == modal4) {
      modal4.style.display = "none";
    }
}


/* Submit a review */
function submitted(){
  alert("Thank you for your feedback");

  // Get the name of the location
  var result = JSON.parse(localStorage.getItem('detailLocation'));

  // Get values in the review
  var text = $('#reviewText').val();
  var stars = $('#reviewStars').val();

  // Get review array and index array
  var reviewIndex = JSON.parse(localStorage.getItem('reviewIndex'));
  var myReview = {'name':result['name'], 'text':text, 'stars':stars+""};

  // Get list of user reviews
  var reviews = JSON.parse(localStorage.getItem('reviews'));

  // Check if user has any reviews
  if(reviews != null){

    // Check if user has already reviewed this location
    var i = reviewIndex.indexOf(result['name']);

    // If they have, remove that review
    if( i != -1){
      reviews[i] = myReview;
    } else{
      // otherwise add it to the review array
      reviews.push(myReview);
      reviewIndex.push(result['name']);
    }
  }else{
    reviews = [myReview];
    reviewIndex = [result['name']];
  }

  //update local storage
  localStorage.setItem('reviews',JSON.stringify(reviews));
  localStorage.setItem('reviewIndex',JSON.stringify(reviewIndex));

  //return to review screen
  window.location.href="./details.html";
}

/* Add additional services to cart */
function added(id){

  // get list of current extras
  var extras = JSON.parse(localStorage.getItem('extras'));

  // Check whether to add service to favorites or remove it
  if(document.getElementById(id).innerHTML === "Add to cart"){

    // get name and price of service
    var price = document.getElementById(id+"Price").innerHTML.replace('$','');
    var addExtra = {'name':id,'price':price};

    if(!confirm("Do you wish to add this to cart?")){
      return false;
    }

    // push or create extras depending how many we have
    if(extras != null){
      extras.push(addExtra);
      localStorage.setItem('extras',JSON.stringify(extras));
    }else{
      extras = [addExtra];
      console.log(addExtra)
      console.log(extras);
      localStorage.setItem('extras',JSON.stringify(extras));
    }

    // Change word
    document.getElementById(id).innerHTML = "Remove from Cart";
    document.getElementById(id+"Btn").style.backgroundColor="#8cf442";
  }else{
    var index;
    for(var i = 0; i < extras.length; i++){
      if(extras[i]['name']===id){
        index = i;
        break;
      }
    }
    extras.splice(index,1);
    if(extras.length == 0 ){
      extras = null;
    }
    localStorage.setItem('extras',JSON.stringify(extras));
    document.getElementById(id).innerHTML = "Add to cart";
    document.getElementById(id+"Btn").style.backgroundColor="none";
  }

  //return to review screen
  window.location.href="./details.html";
}



var favs = document.getElementById('favorites');

favs.onclick = function(){
  if(localStorage.getItem("user") !== null){
    window.location='./myFavorites.html';
    return false;
  }
}
