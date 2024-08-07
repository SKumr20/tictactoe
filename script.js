const cells =  document.querySelectorAll(".cell");
const result = document.querySelector("#result");


const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [2, 5, 8]
];

// Add click to input

let player = "X"; // Default
let playerX = [];
let playerO = [];

function player1() {
    player = "X";
    highlightBtn();
}

function player2() {
    player = "O";
    highlightBtn();
}



function input(cell) {
    const cellIndex = parseInt((cell.getAttribute('cellIndex')));
    if (cell.innerHTML === "")
    {
        cell.innerHTML = player;
        if (player === "X") {
            playerX.push(cellIndex);
        }
        else {
            playerO.push(cellIndex);
        }
        toggle();
        highlightBtn();
        winner();
    }
}

function toggle() {
    if (player === "X") {
        player = "O";
    }
    else {
        player = "X";
    }
}

function highlightBtn() {
    document.getElementById('player1').classList.toggle('active', player === 'X');
    document.getElementById('player2').classList.toggle('active', player === 'O');
}

highlightBtn();

// winner function

function winner() {
    let won = false; // Set defualt win for any one
    let playerWon = '';

    // Default win check for the player X
    for (let i=0; i < win.length; i++) { 
        const condition = win[i];
        if (condition.every(index => playerX.includes(index))) {
            won = true;
            playerWon = 'X';
            break;
        }
    }

    // Win condition for player O
    if(!won) {
        for (let i=0; i < win.length; i++) {
            const condition = win[i];
            if (condition.every(index => playerO.includes(index))) {
                won = true;
                playerWon = 'O';
                break;
            }
        }
    }

    if (won) {
        result.textContent = `Player ${playerWon} wins!`;
    }
    else if (Array.from(cells).every(cell => cell.innerHTML !== "")) {
        result.textContent = "Draw!"
    }
}