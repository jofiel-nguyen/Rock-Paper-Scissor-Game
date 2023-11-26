function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const result = getResult(playerChoice, computerChoice);

    // Use emoji symbols for player and computer choices
    const playerSymbol = getSymbol(playerChoice);
    const computerSymbol = getSymbol(computerChoice);

    document.getElementById('result').innerHTML = `You chose ${playerSymbol}. Computer chose ${computerSymbol}. Result: ${result}`;
}

function getResult(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

function getSymbol(choice) {
    switch (choice) {
        case 'rock':
            return '🪨';
        case 'paper':
            return '🧻';
        case 'scissors':
            return '✂️';
    }
}
