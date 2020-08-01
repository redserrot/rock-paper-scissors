function playRound(playerSelection, computerSelection) {
    const winMsg = `You Win! ${playerSelection} beats ${computerSelection}`;
    const loseMsg = `You Lose! ${computerSelection} beats ${playerSelection}`;
    const tiedMsg = `This was a tie! ${playerSelection} vs ${computerSelection}`;

    switch(playerSelection) {
        case 'rock':
            if (computerSelection === 'scissors') {
                return winMsg;
            } else if (computerSelection === 'paper') {
                return loseMsg;
            } else {
                return tiedMsg;
            }
            break;

        case 'scissors':
            if (computerSelection === 'paper') {
                return winMsg;
            } else if (computerSelection === 'rock') {
                return loseMsg;
            } else {
                return tiedMsg;
            }
            break;

        case 'paper':
        if (computerSelection === 'rock') {
                return winMsg;
            } else if (computerSelection === 'scissors') {
                return loseMsg;
            } else {
                return tiedMsg;
            }
            break;
    }
}

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];

    return choices[Math.floor(Math.random()*choices.length)];
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let numOfGames = 1; numOfGames < 6; numOfGames++) {
        const playerSelection = prompt('Rock, Paper or Scissors?', 'rock').toLowerCase();
        const computerSelection = computerPlay().toLowerCase();

        let result = `Game Number: ${numOfGames} - ${playRound(playerSelection, computerSelection)}`;
        if(result.indexOf('You Win!') > 0) {
            playerScore = ++playerScore;
        } else if (result.indexOf('You Lose!') > 0){
            computerScore = ++computerScore;
        }
        console.log(result);                
    }
    console.log(`Final Score is:
                Player got ${playerScore}
                Computer got ${computerScore}`);
}