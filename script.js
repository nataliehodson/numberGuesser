let currentGuess;
let randomNum;
let numGuesses= 0;
let guesses = [];


function generateNum() {
  randomNum =  Math.floor(Math.random() * 100);
  const userGuess = document.querySelector('.guess');
  userGuess.focus();

}


function getGuess() {
    const userGuess = document.querySelector('.guess');
    const guessContainer = document.querySelector('.guesses');
    currentGuess =  Number(userGuess.value);
    guesses.push(` ${currentGuess}`)
    guessContainer.textContent = guesses;
    numGuesses++;

    userGuess.value = '';
    checkGuess();
}

function checkGuess() {
    const userGuess = document.querySelector('.guess');
    const winOrLose = document.querySelector('.winOrLose');
    const guessBut = document.querySelector('.guessBut');

    if(numGuesses < 10){
        if(currentGuess === randomNum){
            if(numGuesses > 1){
                winOrLose.textContent = `You win! It took you ${numGuesses} guesses.`
            } else {
                winOrLose.textContent = `You win! It took you ${numGuesses} guess.`
            }
            userGuess.disabled = true;
            guessBut.disabled = true;
            resetButton();
        } else if (currentGuess > randomNum){
            winOrLose.textContent = `Your guess was too big.`;
            userGuess.focus();
    
        } else {
            winOrLose.textContent = `Your guess was too small.`;
            userGuess.focus();
    
        }
    } else {
        winOrLose.textContent = `You lose!`;
        userGuess.disabled = true;
        guessBut.disabled = true;
        resetButton()
    }

}

function resetButton() {
    const resetBut = document.querySelector('.resetBut');
    resetBut.style.display = 'block';
}

function resetGame() {
    const guessContainer = document.querySelector('.guesses');
    const winOrLose = document.querySelector('.winOrLose');
    const userGuess = document.querySelector('.guess');
    const guessBut = document.querySelector('.guessBut');

    userGuess.focus();
    winOrLose.textContent = ``;
    randomNum =  Math.floor(Math.random() * 100);
    guesses = [];
    guessContainer.textContent = guesses;
    numGuesses= 0;
    userGuess.disabled = false;
    guessBut.disabled = false;
}
