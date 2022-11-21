const gameEl = document.querySelector('.game-view');
const startGameEl = document.querySelector('.choose-mode');

const hardMode = 20;
const easyMode = 10;

const startGame = () => {
    
    console.log('Game starts');
    
}

startGameEl.addEventListener('click', (e) => {
    
    console.log('clicking', e.target.dataset.mode);

    if(e.target.dataset.mode == 'easy') {
        console.log('Easy mode');
        game(easyMode);
    } else if (e.target.dataset.mode == 'hard') {
        console.log('Hard mode');
        game(hardMode);
    }

    if(gameEl.classList.contains('game-view--start')) { 
        console.log('hide start game view');
        gameEl.classList.add('hide');
    }

});

startGame();