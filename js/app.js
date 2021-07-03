const game = new Game();

/** 
 * Listens for click on `#begin-game` and calls startGame() on game object
 */
const startButton = document.querySelector('#begin-game');
startButton.addEventListener('click', () => {
    game.startGame();
    startButton.style.display = 'none';
    document.querySelector('#play-area').style.opacity = '1';
});