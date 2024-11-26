let playerScore = 0;
let computerScore = 0;

const canvas = document.getElementById('gameCanvas');
const canvasContext = canvas.getContext('2d');

const getRandomInt = (max) => Math.floor(Math.random() * max);

// Function to draw the game state on the canvas
let draw = () => {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    createRect(0, 0, canvas.width, canvas.height, "black"); 
    canvasContext.font = "20px Emulogic";
    canvasContext.fillStyle = "white";
    canvasContext.fillText("Select a button", 150 ,200);
};

// Function to create a rectangle on the canvas
let createRect = (x, y, width, height, color) => {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, width, height);
};


let drawdraw = () => {
    canvasContext.font = "20px Emulogic";
    canvasContext.fillStyle = "white";
    canvasContext.fillText("Draw!", 200, 220);
};

let drawplayer = () => {
    canvasContext.font = "20px Emulogic";
    canvasContext.fillStyle = "white";
    canvasContext.fillText("Player won", 200, 220);
};

let drawcomp = () => {
    canvasContext.font = "20px Emulogic";
    canvasContext.fillStyle = "white";
    canvasContext.fillText("Computer won", 200, 220);
};

// Event listeners for button clicks
document.querySelector('.rock').addEventListener('click', () => playGame('rock'));
document.querySelector('.paper').addEventListener('click', () => playGame('paper'));
document.querySelector('.scissor').addEventListener('click', () => playGame('scissors'));

// game function
const playGame = (playerChoice) => {
    const computerOptions = ['rock', 'paper', 'scissors'];
    const computerChoice = computerOptions[getRandomInt(3)];
    
    const result = document.getElementById('result');
    const playerScoreBoard = document.getElementById('playerScoreBoard');
    const computerScoreBoard = document.getElementById('computerScoreBoard');
    draw();

    // Compare player and computer choices
    if (playerChoice === computerChoice) {
        drawdraw();
        result.textContent = `Tie! Both chose ${playerChoice}.`;
    } else if (playerChoice === 'rock') {
        if (computerChoice === 'paper') {
            drawcomp();
            result.textContent = `Computer chose paper. Computer Won!`;
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else {
            drawplayer();
            result.textContent = `Computer chose scissors. Player Won!`;
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    } else if (playerChoice === 'paper') {
        if (computerChoice === 'scissors') {
            drawcomp();
            result.textContent = `Computer chose scissors. Computer Won!`;
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else {
            drawplayer();
            result.textContent = `Computer chose rock. Player Won!`;
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    } else if (playerChoice === 'scissors') {
        if (computerChoice === 'rock') {
            drawcomp();
            result.textContent = `Computer chose rock. Computer Won!`;
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else {
            drawplayer();
            result.textContent = `Computer chose paper. Player Won!`;
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
};
