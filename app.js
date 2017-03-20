var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 8 ) + 1;
var guess = prompt('I am thinking of a number between 1 and 8. What is it?');

if (parseInt(guess) === randomNumber ) {
  correctGuess = true;
} else if (parseInt(guess) < randomNumber) {
  var guessMore = prompt('Try again. The number is larger than ' + guess);
    if (parseInt(guessMore) === randomNumber) {
      correctGuess = true;
  }
} else if (parseInt(guess) > randomNumber) {
  var guessLess = prompt('Try again. The number is smaller than ' + guess);
    if (parseInt(guessLess) === randomNumber) {
      correctGuess = true;
  }
}
if ( correctGuess ) {
    document.write('<p>You guessed the number! As you know, it was the number ' + randomNumber + '.</p>');
} else {
    document.write('<p>Sorry. The correct answer was ' + randomNumber + '.</p>');
}
