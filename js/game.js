// Get form input
const userInput = document.querySelector('#guess-the-number');
const userInputFeedback = document.querySelector('.guess-text');
const guessNumberOfTimes = document.querySelector('.guess-number-of-times');
const guessHelp = document.querySelector('.guess-help-text');
const checkHighscoreBt = document.querySelector('#checkhighscore');
const quitHeader = document.querySelector('#quit-game');

let gameModeAnswer = 0;
let gameModePlay = 0;
let guessNumber = 0;

// Game mode calculation
const gameModeNumber = gameMode => {
    return Math.ceil(Math.random()*gameMode);
}

// Main game function start
function game (gameMode) {
    console.log('Game starts');
    gameModeAnswer = gameModeNumber(gameMode);
    gameModePlay = gameMode;
    guessNumber = 0;
    console.log(guessNumber);

    gameEl.classList.remove('hide');
    userInputFeedback.classList.remove('incorrect');
    userInputFeedback.innerHTML = `Guess a number between 0 - ${gameMode}`;
    guessNumberOfTimes.innerHTML = `?`;
    userInputFeedback.nextElementSibling.innerHTML = ``;
    guessHelp.innerHTML = ``;
}

// User input and feedback
userInput.addEventListener('submit', (e) => {
    e.preventDefault();

    const userInputNr = Number(userInput.usernumber.value);
    console.log("User input: ",userInputNr);

    guessNumber++;

    console.log('how many times: ', guessNumber);
    console.log('Games mode number: ', gameModeAnswer);
    
    // On correct answer, go to highscore function
    if(gameModeAnswer === userInputNr) {
        console.log("Correct!");
        gameEl.classList.add('hide');
        showHighScore(guessNumber, userInputNr);
    } else {
        userInputFeedback.innerHTML = `Incorrect!`;
        userInputFeedback.classList.add('incorrect');
        userInputFeedback.nextElementSibling.innerHTML = `Number of guesses: ${guessNumber}`;
        guessNumberOfTimes.innerHTML = `${userInputNr}`;
        console.log('Incorrect');
        if(gameModeAnswer < userInputNr) {
            guessHelp.innerHTML = `The number is too high!<br>Try again.`;
        } else if(gameModeAnswer > userInputNr) {
            guessHelp.innerHTML = `The number is too low!<br>Try again.`;
        }
    }
    userInput.reset()
})

quitHeader.addEventListener('click', () => {
    location.reload()
})