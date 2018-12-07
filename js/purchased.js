var paymentInfo = JSON.parse(localStorage.getItem('payment'));

$(document).ready(function() {
  var preresult = JSON.parse(localStorage.getItem('detailLocation'));

  // compile the template
  var card = paymentInfo['card'];
  var replacementCard = "xxxxxxx" + card.substring(card.length-4);
  var result ={
    'date':paymentInfo['date'],
    'price':paymentInfo['price'],
    'hours':paymentInfo['hours'],
    'email':paymentInfo['email'],
    'phone':paymentInfo['phone'],
    'card':replacementCard,
    'exp':paymentInfo['exp'],
    'ccv':paymentInfo['ccv']
  };

  var source   = $("#template").html();
  var template = Handlebars.compile(source);
  var parentDiv = $("#details");
  var curData = result;
  var curHtml = template(curData);
  parentDiv.prepend(curHtml);

  var source   = $("#event-template").html();
  var template = Handlebars.compile(source);
  var parentDiv = $("#event-details");
  var curData = preresult;
  var curHtml = template(curData);
  parentDiv.prepend(curHtml);
});
