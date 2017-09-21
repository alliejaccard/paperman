//GLOBAL VARIABLES
//=====================
// Arrays and variables for holding data
var wordOptions = ["allie", "lindsay", "sarah", "jill"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = []; 
var wrongLetters = [];

// Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

//FUNCTIONS (Reusable blocks of code that I will call upon when needed)
//=====================
function startGame () {
	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	lettersinWord = selectedWord.split("");
	numBlanks = lettersinWord.length;

//RESET
guessesLeft = 9;
wrongLetters = [];
blanksAndSuccesses = [];

//Populate blanks and successes with right number of blanks. 
for (var i=0; i<numBlanks; i++) {

if(lettersinWord[i] == " ") {
	blanksAndSuccesses.push("&nbsp;");
		}
else {
	blanksAndSuccesses.push("_");
	}		
}

//Change HTML to reflect round conditions
document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
document.getElementById("numGuesses").innerHTML = guessesLeft;
document.getElementById("winCounter").innerHTML = winCount;
document.getElementById("lossCounter").innerHTML = lossCount;


//TESTING AND DEBUGGING
console.log(selectedWord);
console.log(lettersinWord);
console.log(numBlanks);
console.log(blanksAndSuccesses);
}

function checkLetters(letter) {
//Check if letter exists in code at all
var isLetterInWord = false;

for (var i=0; i<numBlanks; i++) {
	if(selectedWord[i] == letter) {
		isLetterInWord = true;
		}
	}

//Check where in word letter exists, then populate out blanksAndSuccesses array.
if(isLetterInWord) {
	for (var i=0; i<numBlanks; i++) {
		if(selectedWord[i] == letter) {
			blanksAndSuccesses[i] = letter;
		}
	}
}

// letter wasn't found
else {
	wrongLetters.push(letter);
	guessesLeft--
}

//TESTING AND DEBUGGING
console.log(blanksAndSuccesses);
} 

function roundComplete() {
	console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + guessesLeft);

//update the HTML to reflect the most recent count stats
document.getElementById("numGuesses").innerHTML = guessesLeft;
document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");


//check if user won
if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
	winCount++;
	alert("You won!");

//Update the win counter in the HTML
document.getElementById("winCounter").innerHTML = winCount;
startGame();

}


//Check if user lost
else if (guessesLeft == 0) {
	lossCount++;
	alert("You lost! Try again.");

//Update the HTML
document.getElementById("lossCounter").innerHTML = lossCount;
startGame();
	}
}

//MAIN PROCESS
//=========================================

//Initiates code the first time
startGame();


//Register Keyclicks 
document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	roundComplete();

//TESTING AND DEBUGGING
console.log(letterGuessed);
}














