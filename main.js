/*
=======================================================

** Week 3 - Project 2 **
*** More Functioning ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

For any methods that we didn't cover, please refer to the Functions Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

BASIC TRACK: 1-9
ADVANCED TRACK: 10-13
=======================================================
*/

// 1. Without using Math.min(), write a function called minimum() that takes two numbers
//    and outputs the smaller number.

function minimum (a,b) {
   if (a>b) {
     return (b);
} else {
     return (a);
}
}

console.log(minimum(3,6));

// 2. Create a new function called minimum3() to find the smallest of three numbers.

function minimum3 (a,b,c) {
  if ((a<b) && (a<c)) {
    return (a);
} else if  ((a>b) && (b<c)) {
   return (b);
} else {
  return (c);
}

}

console.log (minimum3(5,6,9));


// 3. Declare a function called sum() that takes an array of numbers as an argument adds them together.
//    i.e. sum([1, 2, 3, 4]) should return 10.

var arrayofNumbers = [1,2,3,4];

function sum ([a,b,c,d]) {
  return  a+b+c+d
}

console.log(sum(arrayofNumbers));



// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.

var arrayofNumbers = [1,2,3,4];

function multiply ([a,b,c,d]) {
return a*b*c*d;
}

console.log(multiply(arrayofNumbers));


// 5. Write a function called filterSixPlus() that takes the following array and removes words
//    that are less than six characters.
var words = ["window", "table", "cup", "knife", "barstool", "glass", "charger", "outlet"];

function filterSixPlus (wordArray) {
	var newArray = [];
	for (x=0; x<wordArray.length; x++) {
		 if (wordArray[x].length>5) {
		 	newArray.push(wordArray[x]);
		 }
	}
	return newArray;
}

console.log(filterSixPlus(words));

// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
//    HINT: You may need to use parseFloat to convert the user's string input to a float.


function toFarenheit(){
	var celcius = prompt ("What temperature would you like to convert from Celcius to Farenheit?");
    console.log(parseFloat(celcius) * 1.8 + 32);
}
toFarenheit();



// 7. Adding to the code in #6, prompt the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Alert them with an error if they do not follow the rules.

function convert () {
	var temperature = prompt("What temperature do you want to convert?");
	var conversion = prompt("Do you want F to C or C to F?");
	var finalTemp = 0.0;
	if (conversion === "F to C") {
		finalTemp = (parseFloat(temperature)-32) / 1.8 ;
	} else if (conversion === "C to F") {
		finalTemp = parseFloat(temperature) * 1.8 + 32;
	} else{
		alert("Please type in F to C or C to F");
	}
	console.log(finalTemp);
}

convert();


// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()

var someWord= "Bob's Burgers";

function countBs(word) {
	var numOfBs = 0;
	for (x=0; x<word.length; x++) {
		if (word.charAt(x)=== "B" ) {
			numOfBs += 1 ;
		}
	}
	return numOfBs;
}

console.log(countBs(someWord));


// 9. http://games.usvsth3m.com/javascript-under-pressure/
//     Have fun with these! Get as far as you can and record your progress and time. We'll try this again in a few weeks!




// ADVANCED TRACK
// 10. Write a function called countChars() that behaves like countBs(), except it takes a
//    second argument that indicates what character is to be counted.
var someWord= "Bob's Burgers";

function countChars(word, character) {
	var numOfchars = 0;
	for (x=0; x<word.length; x++) {
		if (word.charAt(x)=== character ) {
			numOfchars += 1 ;
		}
	}
	return numOfchars;
}

console.log(countChars(someWord, "u"));
// 11. Declare a function called ohZero that replaces all of the o's in a string with 0's.

function ohZero (word) {

	var newWord = word.replace("o", "0");
	return newWord;
}
console.log (ohZero("bob"));

// 12. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.

// 12. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.

function bottles () {
	for (var x=99;x>0;x--) {
		console.log(x + " bottles of beer on the wall." + x + " bottles of beer. Take one down pass it around, " + (x-1)+ " on the wall.");
	}


}

bottles();

// 13. Create a 'Guessing Game'. The game starts by picking a random number.
//    It then prompts the user to guess the number. If the user's number is lower/higher,
//    it will prompt the user to enter another guess and tell the user if the guess was
//    too high or too low. This continues until the correct guess is entered.
//    When the correct guess is entered the user is given a success message with the correct number.

var randomNumber = Math.floor(Math.random() * 100);
var playerGuess = prompt("Guess a number between 1 and 100");
while (parseInt(playerGuess) !== randomNumber){
	if (parseInt(playerGuess) < randomNumber) {
		var message = "Too low, try again.";
	} else if (parseInt(playerGuess) > randomNumber) {
		message = "Too high, try again.";
	}
	playerGuess = prompt(message);
}
console.log("You Win! The number is " + playerGuess);
