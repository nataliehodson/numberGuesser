const userGuess = document.querySelector('.guess');
const winOrLose = document.querySelector('.winOrLose');
const guessBut = document.querySelector('.guessBut')
let currentGuess;
let randomNum;
let numGuesses;


function generateNum() {
  randomNum =  Math.floor(Math.random() * 100);
  console.log(randomNum)
}


function getGuess() {
    currentGuess =  userGuess.value;
    console.log(userGuess.value)
    numGuesses++;
    checkGuess();
}

function checkGuess() {
    console.log('hi')
    console.log(randomNum)

    if(currentGuess === randomNum){
        winOrLose.textContent = `You win! It took you ${numGuesses}`
    } else if (currentGuess > randomNum){
        winOrLose.textContent = `Your guess was too big`;
    } else {
        winOrLose.textContent = `Your guess was too small`
    }
}
