// Main game elements
const startGameEl = document.querySelector('#startgame');
const gameEl = document.querySelector('#maingame');
const highscoreEl = document.querySelector('#highscore');

const startGameBt = document.querySelector('.choose-mode');

// Game mode


// Start screen function
const startGame = () => {
    console.log('Startscreen');
}

// Start a new game button click
startGameBt.addEventListener('click', (e) => {

    startGameEl.classList.add('hide');

    // Hard or Easy mode?
    if(e.target.dataset.mode == 'easy') {
        console.log('Easy mode');
        game(10);
    } else if (e.target.dataset.mode == 'hard') {
        console.log('Hard mode');
        game(20);
    }

});

startGame();