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

let player;

function player1() {
    player = "X";
}

function player2() {
    player = "O";
}



function input(cell) {
    if (cell.innerHTML === "")
    {
        cell.innerHTML = player;
    }
}

function toggle() {

}