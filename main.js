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

    const feedback = document.querySelector('#feed')
    const numTrys = document.querySelector('#numTrys')

    if(gamerGuessNum === correctNumber){
        console.log('You guessed the right number!')
        feedback.innerHTML = "You Won!";
        giveAward()
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
        case totalGuesses > 0 && totalGuesses < 4:
            console.log('gold medal')
            imagePath = '../images/gold.png'
            break
        case totalGuesses > 4 && totalGuesses < 10 :
            console.log('blue Ribbon')
            imagePath = '../images/blue.png'
            break
        case totalGuesses > 10:
            console.log('red Ribbon')
            imagePath = '../images/green.png'
            break
            
    }

    const awardImage = document.createElement('img'); //creates an image elements
    awardImage.setAttribute('src', imagePath);
    const ribbon = document.querySelector('#ribbonAward')

    ribbon.appendChild(awardImage);
}

