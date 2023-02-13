const userGuess = document.querySelector('.guess');
const guessContainer = document.querySelector('.guesses');
const winOrLose = document.querySelector('.winOrLose');
const guessBut = document.querySelector('.guessBut');
const resetBut = document.querySelector('.resetBut');

let currentGuess;
let randomNum;
let numGuesses= 0;
let guesses = [];

//generate random number, called on load
function generateNum() {
    randomNum =  Math.floor(Math.random() * 100) +1;
    userGuess.focus();
}


function checkGuess() {
    //push user's guess to array
    //show all guesses on screen
    currentGuess = userGuess.value;
    if(!isNaN(currentGuess) && currentGuess <101 && currentGuess > 0){
        guesses.push(` ${currentGuess}`)
        guessContainer.textContent = guesses;
        numGuesses++;
    }
    userGuess.value = '';

    //if numcer is NaN, or bigger than 100 or smaller than 1, 
    //ask to submit nbr within correct limits
    if (isNaN(currentGuess) || currentGuess > 100 || currentGuess < 1) {
        winOrLose.textContent = `Please enter a number between 1 and 100.`
        userGuess.focus();

    //compare user's guess to generated number
    //show on screen whether it was too big, too small, or correct
    //win or lose -> call function which shows reset button
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
        //if the number of guesses exceeds 10 then player loses
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
    resetBut.style.display = 'block';
}

//when reset button is clicked, as the info from the previous game is removed
//a new number is generated
//game starts again.
function resetGame() {
    generateNum();
    winOrLose.textContent = ``;
    guesses = [];
    guessContainer.textContent = guesses;
    numGuesses= 0;
    userGuess.disabled = false;
    guessBut.disabled = false;
    resetBut.style.display = 'none';
    userGuess.focus();
}

window.addEventListener('load', generateNum)
guessBut.addEventListener('click', checkGuess)
resetBut.addEventListener('click', resetGame);