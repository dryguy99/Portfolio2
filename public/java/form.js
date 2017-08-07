
var myVar;
var startTimer = false;
var tempTime = 0;
var validate = false;

$(document).ready(function () {
  $('#aboutme').css('display', 'none');
  $('#contactme').css('display', 'none');
  $(document).on('click', '#submit', function () {
    event.preventDefault();
    var email = $('#email').val().trim();
    var name = $('#name').val().trim();
    var message = $('#message').val().trim();
    validateForm(name, email, message);
    if (validate) {
      $('#email').val('');
      $('#name').val('');
      $('#message').val('');
      $.post("http://localhost:8080/mymail", {name: name, email: email, message: message}, function(result){
          startTimer = true;
          myVar = setInterval(alertFunc, 1000);
          $(".myresult").html(result);
      });
    }
  });
  $(document).on('click', '.mynav', function () {
    var myChoice = $(this).attr('value');
    $("." + myChoice).css('display', "block");
    $("." + myChoice).siblings().css('display', 'none');
    $('.navagation').css('display', 'block');
  });
});
////////////////////////////////////////////////////////////
// set up alert whether or not an email was sent
function alertFunc() {
  $(".myresult").css('display', 'inline');
  var d = new Date();
  var seconds = d.getSeconds();
  if (startTimer) {
    startTimer = false;
    if (parseInt(seconds) > 55) {
      tempTime = parseInt(seconds) - 60 + 4;
    } else{
      tempTime = parseInt(seconds) + 4;
    }
  } else if (tempTime <= parseInt(seconds)){
    myStopFunction();
  }
}
//////////////////////////////////////////////////////////////
//stop alert
function myStopFunction() {
  clearInterval(myVar);
  $(".myresult").html('');
  $(".myresult").css('display', 'none');
}
//////////////////////////////////////////////////////////////
//stop alert
function validateForm(name, email, message){
  console.log(!(email.includes('@')))
  if (name.length < 2) {
    startTimer = true;
    myVar = setInterval(alertFunc, 1000);
    $(".myresult").html("Name must be longer than 2 characters.");
  } else if (!(email.includes('@'))) {
    startTimer = true;
    myVar = setInterval(alertFunc, 1000);
    $(".myresult").html("Please enter a valid email address.");
  } else if (!(email.includes('.'))) {
    startTimer = true;
    myVar = setInterval(alertFunc, 1000);
    $(".myresult").html("Please enter a valid email address.");
  } else if (email.length < 8) {
    startTimer = true;
    myVar = setInterval(alertFunc, 1000);
    $(".myresult").html("Please enter a valid email address.");
  } else if (message.length < 3) {
    startTimer = true;
    myVar = setInterval(alertFunc, 1000);
    $(".myresult").html("Message must be longer than 3 characters.");
  } else {
    validate = true;
  }
}
