let currentGuess;
let randomNum;
let numGuesses= 0;
let guesses = [];

//generate random number, called on load
function generateNum() {
    randomNum =  Math.floor(Math.random() * 100) +1;
    const userGuess = document.querySelector('.guess');
    userGuess.focus();
}

//assign user's guess to array
//show all guesses on screen
function getGuess() {
    const userGuess = document.querySelector('.guess');
    const guessContainer = document.querySelector('.guesses');
    currentGuess = userGuess.value;
    if(!isNaN(currentGuess) && currentGuess <101){
        guesses.push(` ${currentGuess}`)
        guessContainer.textContent = guesses;
        numGuesses++;
    }
    userGuess.value = '';
    checkGuess();
}

//compare user's guess to generated number
//show on screen whether it was too big, too small, or correct
//if the number of guesses exceeds 10 then player loses
//win or lose -> call function which shows reset button
function checkGuess() {
    const userGuess = document.querySelector('.guess');
    const winOrLose = document.querySelector('.winOrLose');
    const guessBut = document.querySelector('.guessBut');

    if (isNaN(currentGuess) || currentGuess > 100) {
        winOrLose.textContent = `Please enter a number between 1 and 100.`
        userGuess.focus();
    } else {
        if(numGuesses < 11){
            if(currentGuess == randomNum){
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
            winOrLose.textContent = `You lose! The number was ${randomNum}.`;
            userGuess.disabled = true;
            guessBut.disabled = true;
            resetButton()
        }    
    }
}

//show reset button
function resetButton() {
    const resetBut = document.querySelector('.resetBut');
    resetBut.style.display = 'block';
}

//when reset button is clicked, as the info from the previous game is removed
//a new number is generated
//game starts again.
function resetGame() {
    const guessContainer = document.querySelector('.guesses');
    const winOrLose = document.querySelector('.winOrLose');
    const guessBut = document.querySelector('.guessBut');
    const userGuess = document.querySelector('.guess')
    const resetBut = document.querySelector('.resetBut');

    generateNum();

    winOrLose.textContent = ``;
    guesses = [];
    guessContainer.textContent = guesses;
    numGuesses= 0;
    userGuess.disabled = false;
    guessBut.disabled = false;
    resetBut.style.display = 'none';

}
