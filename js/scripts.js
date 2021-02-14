// Business logic (backend)

function beepBoop(number) {
  let numberList = ["0"];
  for (let i=1; i <= number; i+=1) {
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

//Different ways to try to approach specs 3 & 4:
//1) turning each number into a string, checking the string if it has the number 1, 2, or 3

//2) running a forEach loop?
// numberList.forEach(function(eachNumberList) {
//    return "test conditions"
// });

// numberList.forEach(function(beepBoop) {
//   return numberList + "!!!!";
//   console.log("testing");
// });



// User Interface logic (front end)

$(document).ready(function() {
  $("form#submission").submit(function(event) {
    event.preventDefault();
    const number = $("#numInput").val();
    const result = beepBoop(number); //change to result of second function
    $("#output").text(result);
  });
  
});