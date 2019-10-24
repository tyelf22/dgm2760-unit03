//pick a random number between 0 and 16
var correctNumber = Math.floor(Math.random() * 15);

console.log(correctNumber);

var gussed = false;
var totalGuesses = 0;
var gamerGuess = 0;
const guessButton = document.querySelector('#guessButton');
const feedback = document.querySelector('#feed')
const numTrys = document.querySelector('#numTrys')
const guessBtn = document.querySelector('button');

function evalGuess() {
    totalGuesses += 1; //increment user guesses
    
    gamerGuess = document.querySelector('#guess').value;
    var gamerGuessNum = Number(gamerGuess);
    console.log(gamerGuessNum);
    console.log(totalGuesses);

    if(gamerGuessNum === correctNumber){
        console.log('You guessed the right number!')
        feedback.innerHTML = "You Won!";
        giveAward()
        newButton()
    }
    else if(gamerGuessNum > 15 || gamerGuessNum < 1) {
        console.log("Guess between 1 and 15")
        feedback.innerHTML = "Choose Number between 1 and 15";
    }
    else if(gamerGuessNum > correctNumber){
        console.log('Too high')
        feedback.innerHTML = "You guessed too high";
    }
    else if(gamerGuessNum < correctNumber){
        console.log('Too low')
        feedback.innerHTML = "You guessed too low";
    }

    numTrys.innerHTML = totalGuesses;

}

function giveAward() {
    console.log('switch statement active')
    switch(true) {
        case totalGuesses >= 0 && totalGuesses <= 3:
            console.log('gold medal')
            imagePath = '../images/blue.png'
            break
        case totalGuesses >= 4 && totalGuesses <= 6 :
            console.log('blue Ribbon')
            imagePath = '../images/red.png'
            break
        case totalGuesses >= 7:
            console.log('red Ribbon')
            imagePath = '../images/yellow.png'
            break
            
    }

    const awardImage = document.createElement('img'); //creates an image elements
    awardImage.setAttribute('src', imagePath);
    const ribbon = document.querySelector('#ribbonAward')

    ribbon.appendChild(awardImage);
}

function newButton() {
    guessButton.remove();
    const newButton = document.createElement('button')
    const playSection =  document.querySelector('#play');
    playSection.appendChild(newButton);
    newButton.innerHTML = "New Game"

    newButton.addEventListener("click", resetGame)
}

function resetGame() {
    console.log('You pressed new game button')
    document.location.reload();
}

