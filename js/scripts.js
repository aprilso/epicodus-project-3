// Business logic (backend)

function beepBoop(number1) {
  return number1 + 5;
}


// User Interface logic (front end)

$(document).ready(function() {
  $("form#submission").submit(function(event) {
    event.preventDefault();
  
    const number1 = parseInt($("#numInput").val());
    const result = beepBoop(number1);
    $("#output").text(result);
  });
  
});

