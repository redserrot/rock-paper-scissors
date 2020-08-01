function playRound(playerSelection, computerSelection, playerScore, computerScore) {
    const winMsg = `You Win! ${playerSelection} beats ${computerSelection}`;
    const loseMsg = `You Lose! ${computerSelection} beats ${playerSelection}`;
    const tiedMsg = `This was a tie! ${playerSelection} vs ${computerSelection}`;
    // initialise the object to return
    let roundDetails = {
        message: '',
        playerScore: playerScore,
        computerScore: computerScore
    };

    switch(playerSelection) {
        case 'rock':
            if (computerSelection === 'scissors') {
                playerScore++;
                roundDetails = {
                    message: winMsg,
                    playerScore: playerScore,
                    computerScore: computerScore
                };
                return roundDetails;
            } else if (computerSelection === 'paper') {
                computerScore++;
                roundDetails = {
                    message: loseMsg,
                    playerScore: playerScore,
                    computerScore: computerScore
                };
                return roundDetails;
            } else {
                roundDetails = {
                    message: tiedMsg,
                    playerScore: playerScore,
                    computerScore: computerScore
                };
                return roundDetails;
            }
            break;

        case 'scissors':
            if (computerSelection === 'paper') {
                playerScore++;
                roundDetails = {
                    message: winMsg,
                    playerScore: playerScore,
                    computerScore: computerScore
                };
                return roundDetails;
            } else if (computerSelection === 'rock') {
                computerScore++;
                roundDetails = {
                    message: loseMsg,
                    playerScore: playerScore,
                    computerScore: computerScore
                };
                return roundDetails;
            } else {
                roundDetails = {
                    message: tiedMsg,
                    playerScore: playerScore,
                    computerScore: computerScore
                };
                return roundDetails;
            }
            break;

        case 'paper':
            if (computerSelection === 'rock') {
                playerScore++;
                roundDetails = {
                    message: winMsg,
                    playerScore: playerScore,
                    computerScore: computerScore
                };
                return roundDetails;
            } else if (computerSelection === 'scissors') {
                computerScore++;
                roundDetails = {
                    message: loseMsg,
                    playerScore: playerScore,
                    computerScore: computerScore
                };
                return roundDetails;
            } else {
                roundDetails = {
                    message: tiedMsg,
                    playerScore: playerScore,
                    computerScore: computerScore
                };
                return roundDetails;
            }
            break;
    }
}

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];

    return choices[Math.floor(Math.random()*choices.length)];
}

function drawHTML(message, playerScore, computerScore) {
    const resultSection = document.getElementById('result-section');
    
    resultSection.textContent = message;

    const rightGamePanel = document.getElementById('right-game-panel');
    
    rightGamePanel.textContent = `Player: ${playerScore}
            Computer: ${computerScore}`;
}

function playGame(playerSelection, numOfGames, playerScore, computerScore) {

        const computerSelection = computerPlay().toLowerCase();

        let resultText = playRound(playerSelection, computerSelection, playerScore, computerScore);

        let message = resultText.message;
        playerScore = resultText.playerScore;
        computerScore = resultText.computerScore;

        drawHTML(message, playerScore, computerScore);

        return resultText;
}

function setupGame() {
    const buttons = document.querySelectorAll('button');
    let numOfGames = 1;
    let playerScore = 0;
    let computerScore = 0;

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const playerSelection = button.id;

            let scores = playGame(playerSelection, numOfGames, playerScore, computerScore);
                
            playerScore = scores.playerScore;
            computerScore = scores.computerScore;
                
            numOfGames++;
            
            if (playerScore == 5 || computerScore == 5) {
                message = 'Game Over!';
                drawHTML(message, playerScore, computerScore);
                buttons.forEach((button) => {
                    button.disabled = true;
                });
            }
        });
    });
}