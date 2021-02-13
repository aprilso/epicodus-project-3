// Business logic (backend)

function beepBoop(number) {
  // for (var i=0, i<number; i++) {
  //   if (i == 1)
  //     return "Beep!";
  //   else if (i == 2)
  //     return "Boop!"
  //   else if (i == 3)
  //     return "Won't you be my neighbor?"
  //   else
  //     return i;
  // }
  return "Beep!" + number;
}





// User Interface logic (front end)

$(document).ready(function() {
  $("form#submission").submit(function(event) {
    event.preventDefault();
    const number = $("#numInput").val();
    const result = beepBoop(number);
    $("#output").text(result);
  });
  
});

