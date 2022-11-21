const scoreboardList = document.querySelector('.scoreboard');
const newHighscore = document.querySelector('.new-highscore');
const userMessage = document.querySelector('.message');

const playQuitGameBt = document.querySelector('.play-again');

let gameNumber = 0;

function showHighScore (numberGuesses, userInputNr) {
    highscoreEl.classList.remove('hide');
    scoreboardList.innerHTML = ``;
    newHighscore.innerHTML = ``;
    console.log('Show Highscore', numberGuesses, userInputNr);
    
    gameNumber++
    console.log('What game: ', gameNumber);
    
    console.log(scores)

    if(scores.length == 0 || numberGuesses < scores[0].score) {
        console.log('New highscore');
        newHighscore.innerHTML = `New Highscore!`;
    } else {
        console.log('No new highscore');
    }

    userMessage.innerHTML = `<span class="awsome">Awsome!</span><br>${numberGuesses} is correct!<br>It took you ${numberGuesses} guesses and this is game ${gameNumber}.`;

    // Store the new result
    scores.push({
        game: gameNumber,
        score: numberGuesses
    })

    console.log(scores)

    // Sort the scoreboard
    scores.sort((a, b) => a.score - b.score);
    console.log(scores)

    let standing = 0;

    // Print out the highscore standings
    scores.forEach(userScore => {
        standing++;

        const scoreItem = `
        <div class="score">
            <span>#${standing}</span>
            <span>${userScore.score} guesses</span>
            <span>game ${userScore.game}</span>
        </div>
        `;
        scoreboardList.innerHTML += scoreItem; 
    });
    
}

playQuitGameBt.addEventListener('click', (e) => {

    highscoreEl.classList.add('hide');

    if(e.target.dataset.mode == 'play') {
        game(10);
    } else if (e.target.dataset.mode == 'quit') {
        location.reload()
    }

});