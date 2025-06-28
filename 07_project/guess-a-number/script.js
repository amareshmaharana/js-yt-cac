let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#submit')
const userInput = document.querySelector('.guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuesses = [];
let numGuesses = 1;

let playGame = true

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(`Guess: ${guess}`);
        validateInput(guess);
    })
}

const validateInput = (guess) => {
    // Check if the input is a number or text and many more - validation
    if (isNaN(guess) || guess < 1 || guess > 100) {
        displayResultMessage('Please enter a valid number between 1 and 100.');
    }

    if (prevGuesses.includes(guess)) {
        displayResultMessage('You already guessed that number. Try again!');
    }

    if (numGuesses === 10) {
        displayGuesses(guess);
        displayResultMessage(`Finally! The number was ${randomNum}.`);
        endGame();
    } else {
        checkGuess(guess);
        displayGuesses(guess);
    }
}

const checkGuess = (guess) => {
    // Check if the guess is correct, too high, or too low
    if (guess === randomNum) {
        displayResultMessage(`Congratulations! ${guess} is the correct number!`);
        endGame();
    } else if (guess < randomNum) {
        displayResultMessage(`${guess} is too low!`);
    } else {
        displayResultMessage(`${guess} is too high!`);
    }
}

const displayGuesses = (guess) => {
    // Display the previous guesses in the guesses slot
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuesses++;
    remaining.innerHTML = `${10 - numGuesses}`;
}

const displayResultMessage = (message) => {
    // Display the result message in the lowOrHi slot
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

const newGame = () => {
    const newGameBtn = document.querySelector('#newGame');
    newGameBtn.addEventListener('click', () => {
        randomNum = parseInt(Math.random() * 100 + 1);
        prevGuesses = [];
        numGuesses = 1
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${10 - numGuesses}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    });
}

const endGame = () => {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button')
    p.innerHTML = `<h2 id='newGame'>Game Over!</h2>`;
    p.style.textAlign = 'center';
    p.style.cursor = 'pointer';
    p.style.color = '#fff';
    p.style.backgroundColor = '#333';
    p.style.padding = '10px 20px';
    p.style.borderRadius = '5px';
    p.style.marginTop = '20px';
    p.style.width = '200px';
    p.style.marginLeft = '14rem';
    startOver.appendChild(p);
    playGame = false;
    startOver.addEventListener('click', () => {
        newGame();
    });
}