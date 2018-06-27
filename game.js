
var secretNumber = 23;

var guess =Number(prompt("Guess a number!"));

if (guess > secretNumber) {
	alert("Too high, try again.");
}

else if (guess < secretNumber) {
	alert("Too low, try again.");
}

else {
	alert("You guessed it!!!");
}
