const cells =  document.querySelectorAll(".cell");
const result = document.querySelector("#result");


const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [0, 4, 9],
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


cells.forEach(cell => {
    cell.addEventListener("click", function() {
        input(cell);
    });
});