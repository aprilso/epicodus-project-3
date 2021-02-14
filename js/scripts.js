// Business logic (backend)

function beepBoop(number) {
  let numberList = ["0"];

  for (let i=1; i < number; i+=1) {
    if (i == 1) {
      numberList.push("Beep!");
    } else if (i == 2) {
      numberList.push("Boop!");
    } else if (i == 3) {
      numberList.push("Won't you be my neighbor?");
    } else {
      numberList.push(i);
    }
  }
  return numberList;
}

// don't use if else if for this, rather just return in an array


// User Interface logic (front end)

$(document).ready(function() {
  $("form#submission").submit(function(event) {
    event.preventDefault();
    const number = $("#numInput").val();
    const result = beepBoop(number);
    $("#output").text(result);
  });
  
});
