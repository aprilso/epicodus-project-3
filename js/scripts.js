// Business logic (backend)

//rewriting below
// function beepBoop(number) {
//   let numberList = ["0"];
//   for (let i=1; i <= number; i+=1) { //*Ask Cathy why number+1 didn't work
//     if (i == 1) {
//       numberList.push("Beep!");
//     } else if (i == 2) {
//       numberList.push("Boop!");
//     } else if (i == 3) {
//       numberList.push("Won't you be my neighbor?");
//     } else {
//       numberList.push(i);
//     }
//   }
//   return numberList;
// }

//this part lists all the numbers out
function listNumbers(number) {
  let numberList = ["0"];
  for (let i=1; i <= number; i+=1) { 
    numberList.push(i);
  }
  return numberList;
}




// //Test #2
function beepBoop(number) {
  finalList = listNumbers(number);
  for each in finaList { 
    if (finalList.includes(3)) {
    
    finalList.push("testing")
  }
  return finalList;
}   
}
  
//   for (let i=1; i <= number; i+=1) { 
//    numberList.push(i);
// if (numberList.includes(3)) {
//   numberList.push("Won't you be my neighbor?");

//     } else if (numberList.includes("2")) {
//       numberList.push("Boop!");
//     } else if (numberList.includes("1")) {
//       numberList.push("Beep!");
//     } else {
//       numberList.push(i);
//     }
//   }
//   return numberList;
//}


//Different ways to try to approach specs 3 & 4:
//1) turning each number into a string, checking the string if it has the number 1, 2, or 3

//number = numberList.includes("1");
// function beepBoop(number) {
//   let numberList =["0"];
//   let strNumberList = number.toString();
// for (let i=1; i<=number; i+=1) {
//     if (strNumberList != 3) {
//     numberList.push(i)
//     } else if (strNumberList.includes("3")) {
//     numberList.push("Test worked - Won't you be my neighbor?")
//     }
//   }
//   return numberList;
// }

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
    // const result = listNumbers(number);
    $("#output").text(result);
  });
  
});