var result;

/* Set up site */
$(document).ready(function() {

  /* Get necessary values */
  var preresult = JSON.parse(localStorage.getItem('detailLocation'));
  var extras = JSON.parse(localStorage.getItem('extras'));

  var title = "";
  var e1 = "";
  var e2 = "";
  var e3 = "";
  var e4 = "";

  if(extras != null){
    console.log('check');
    title = "Additional Services";

    e1 = extras[0]['name'] + ": $" + extras[0]['price'];
    total += parseInt(extras[0]['price'].replace(/\,/g,''));
    if(extras.length > 1 ){
      e2 = extras[1]['name'] + ": $" + extras[1]['price'];
      total += parseInt(extras[1]['price'].replace(/\,/g,''));
      if(extras.length > 2 ){
        e3 = extras[2]['name'] + ": $" + extras[2]['price'];
        total += parseInt(extras[2]['price'].replace(/\,/g,''));
        if(extras.length > 3 ){
          e4 = extras[3]['name'] + ": $" + extras[3]['price'];
          total += parseInt(extras[3]['price'].replace(/\,/g,''));
        }
      }
    }
  }

  result = {
    'name': preresult['name'],
    'price': preresult['price'],
    'location': preresult['location'],
    'image': preresult['image'],
    'service-title':title,
    'service1':e1,
    'service2':e2,
    'service3':e3,
    'service4':e4,
    'id':preresult['id']

  };
  // compile the template
  var source   = $("#template").html();
  var template = Handlebars.compile(source);
  var parentDiv = $("#details");

  var curData = result;
  var curHtml = template(curData);
  parentDiv.prepend(curHtml);

  // Get user and email field in the document
  var user = JSON.parse(localStorage.getItem('user'));
  var em = document.getElementById('email');
  if(user != null){
    em.value = user['email'];
  }else{
    document.getElementById('notsignedin').style.display="inline";
  }

});




function purchase(){
  if(JSON.parse(localStorage.getItem('user')) == null){
    window.alert('Please log in before purchasing');
    return false;
  }
  if( !window.confirm("Are you sure you wish to purchase?")){
    return false;
  }

  var p = parseInt(result['price'].replace(",","")) * parseInt($('#hours').val());
  var date = $('#date').val();
  var price = p;
  var email = $('#email').val();
  var phone = $('#phone').val();
  var card =$('#card').val();
  var exp = $('#exp').val();
  var ccv = $('#ccv').val();

  result['price'] = p;
  result['date'] = date;
  var paymentInfo ={'date':date, 'hours':hours, 'price':p,
          'email':email,'phone':phone, 'card':card, 'exp':exp, 'ccv':ccv};

  localStorage.setItem('payment', JSON.stringify(paymentInfo));
  localStorage.setItem('extras',null);

  var upcoming = JSON.parse(localStorage.getItem('upcoming'));

  if(upcoming == null){
    upcoming = [];
  }
  if(upcoming.length == 0){
    upcoming = [result];
  }else{
    upcoming.push(result);
  }

  //store the space in the array
  localStorage.setItem('upcoming',JSON.stringify(upcoming));

  window.location.href='purchased.html';
}
