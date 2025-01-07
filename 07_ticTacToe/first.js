// Initial turn is set to 'O'
let turn = 'O';
// Variable to keep track of total turns taken
let total_turn = 0;

// Array defining all possible winning combinations
let winner = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

// Array to represent the current state of the game board
let board_array = new Array(9).fill("E"); // "E" represents an empty cell

// Function to check if there's a winner
function checkWinner() {
    // Loop through all winning combinations
    for (let [index0, index1, index2] of winner) 
    {
        // Check if all three cells in a combination have the same non-empty value
        if (board_array[index0] !== 'E' && board_array[index0] === board_array[index1] && board_array[index1] === board_array[index2]) 
        {
            return 1; // Return 1 if there's a winner
        }
    }
    return 0; // Return 0 if there's no winner
}

// Get references to the 'O' and 'X' images
const oImg = document.getElementById('oImg');
const xImg = document.getElementById('xImg');

// Function to handle a player's move
const printer = (event) => {
    const audio = new Audio("ringtone.mp3"); // Create an audio object for sound effects
    const element = event.target; // Get the clicked cell element

    // Check if the clicked cell is empty
    if (board_array[element.id] === "E") 
    {
        audio.play(); // Play the sound effect
        total_turn++; // Increment the total turn count

        if (turn === 'O') 
        { // If it's 'O's turn
            oImg.style.scale = 1.2; // Highlight 'O'
            xImg.style.scale = 1;   // Reset 'X' highlight
            element.innerText = "O"; // Place 'O' in the clicked cell
            board_array[element.id] = "O"; // Update the board state

            // Check if 'O' is the winner
            if (checkWinner()) 
            {
                document.getElementById('winningMessage').innerHTML = "Winner is O"; // Display winner message
                oImg.classList.add("victory"); // Add victory animation for 'O'
                board.removeEventListener('click', printer); // Disable further clicks
                return;
            }
            turn = 'X'; // Switch turn to 'X'
        }
        else 
        { // If it's 'X's turn
            oImg.style.scale = 1; // Reset 'O' highlight
            xImg.style.scale = 1.2; // Highlight 'X'
            element.innerText = "X"; // Place 'X' in the clicked cell
            board_array[element.id] = "X"; // Update the board state

            // Check if 'X' is the winner
            if (checkWinner()) 
            {
                document.getElementById('winningMessage').innerHTML = "Winner is X"; // Display winner message
                xImg.classList.add("victory"); // Add victory animation for 'X'
                board.removeEventListener('click', printer); // Disable further clicks
                return;
            }
            turn = 'O'; // Switch turn to 'O'
        }

        // Check for a draw (all cells filled, no winner)
        if (total_turn === 9) 
        {
            document.getElementById('winningMessage').innerHTML = "Match Drawn"; // Display draw message
            oImg.style.scale = 1; // Reset highlights
            xImg.style.scale = 1;
        }
    }
};

// Get the game board element and add a click event listener
const board = document.querySelector('.board');
board.addEventListener('click', printer);

// Restart button functionality
const restart = document.getElementById('restartButton');
restart.addEventListener('click', (event) => {
    const cell = document.getElementsByClassName('cell');
    
    // Clear all cell content
    Array.from(cell).forEach((value) => {
        value.innerHTML = "";
    });

    // Reset game state
    turn = 'O';
    total_turn = 0;
    board_array = new Array(9).fill("E");
    oImg.style.scale = 1; // Reset image scaling
    xImg.style.scale = 1;
    xImg.classList.remove("victory"); // Remove victory animation for 'X'
    oImg.classList.remove("victory"); // Remove victory animation for 'O'
    document.getElementById('winningMessage').innerHTML = ""; // Clear the winning message
    board.addEventListener('click', printer); // Re-enable click events on the board
});
