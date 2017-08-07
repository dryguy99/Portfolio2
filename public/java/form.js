
var myVar;
var startTimer = false;
var tempTime = 0;

$(document).ready(function () {
  $('#aboutme').css('display', 'none');
  $('#contactme').css('display', 'none');
  $(document).on('click', '#submit', function () {
    var email = $('#email').val();
    var name = $('#name').val();
    var message = $('#message').val();
    $('#email').val('');
    $('#name').val('');
    $('#message').val('');
    $.post("http://localhost:8080/mymail", {name: name, email: email, message: message}, function(result){
        startTimer = true;
        myVar = setInterval(alertFunc, 1000);
        $(".myresult").html(result);
    });
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
