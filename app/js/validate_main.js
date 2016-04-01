$(document).ready(function() {

  function validateForm() {
    var firstName = document.forms["myForm"]["firstname"].value;
    var lastName = document.forms["myForm"]["lastname"].value;
    var email = document.forms["myForm"]["email"].value;
    var homePage = document.forms["myForm"]["homepage"].value;
    var message = document.forms["myForm"]["message"].value;

    if ((firstName == null || firstName == "") || (lastName == null || lastName == "") || (email == null || email == "") || (homePage == null || homePage == "") || (message == null || message == "")) {
      $('.input').addClass('error');
      $('.textarea').addClass('error');
      return false;
    }
  }

  $(".button").click(function() {
    return validateForm();
  });

  $(".input").on("change", function() {
    $(this).removeClass('error');
  });

});