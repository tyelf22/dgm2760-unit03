//pick a random number between 0 and 16
var correctNumber = Math.floor(Math.random() * 15);

console.log(correctNumber);

var gussed = false;
var totalGuesses = 0;
var gamerGuess = 0;

function evalGuess() {
    totalGuesses += 1; //increment user guesses
    
    gamerGuess = document.querySelector('#guess').value;
    var gamerGuessNum = Number(gamerGuess);
    console.log(gamerGuessNum);
    console.log(totalGuesses);

    const feedback = document.querySelector

    if(gamerGuessNum === correctNumber){
        console.log('You guessed the right number!')
    }
    else if(gamerGuessNum > 15 || gamerGuessNum < 1) {
        console.log("Guess between 1 and 15")
    }
    else if(gamerGuessNum > correctNumber){
        console.log('Too high')
    }
    else if(gamerGuessNum < correctNumber){
        console.log('Too low')
    }

}