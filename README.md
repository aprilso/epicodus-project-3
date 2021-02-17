 # Project 3: Mr. Roboger's Neighborhood

By April Soetarman

## Description of program
A web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:

* Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
* Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
* Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"

These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third. So, for example, in the finished program,

* The number 13 should be replaced with "Won't you be my neighbor?"
* The number 21 should be replaced with "Boop!".
* The number 32 should be replaced with "Won't you be my neighbor?"
A user should be able to enter a new number and see new results over and over again.

## Specs

Describe: beepBoop()

Test 1: "It should return an array with a 0 if the number 0 is inputted"  
Expect(beepBoop(0).toEqual([0]);

Test 2: “If a user inputs a 5, the program should display a list of values: "0", "Beep!", "Boop", "Won't you be my neighbor?", 4, 5”  
Expect:(beepBoop(5).toEqual(“'0', Beep!, Boop!,"Won't you be my neighbor?", 4, 5”)

Test 3: "It will replace numbers that contain 1 with 'Beep!'"  
Expect: (beepBoop(10).toEqual("0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!")

Test 4: "If a user inputs a number containing multiple special digits (1, 2, or 3), it will replace the number with the phrase prioritizing 3, 2, 1 as indicated above"  
Expect: (beepBoop(13).toEqual("0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be my neighbor?")



## Technologies used
- HTML
- CSS
- Bootstrap
- Javascript
- jQuery

## Program setup instructions
To view, access the Github pages site in your preferred browser. 

To setup:
- Clone this repository to your desktop
- Navigate to the top level of the directory
- Open index.html in your browser. 


## Github pages website
N/A

## Copyright and license info
MIT license
Copyright (c)2021 April Soetarman