

let randomNumber; // variable "randomNumber" used to store the random number
let guessCount = 0; // Variable to track the number of guesses

// Function to start the game
function startGame() {
    // Generate a random number between 1 and 100 , "math.floor" rounding it.
    randomNumber = Math.floor(Math.random() * 100) + 1;

    // Reset the guess count
    guessCount = 0;

    // Display a message that the game has started
    alert("Game Started! Try to guess the number between 1 and 100.");
    document.getElementById("feedbackMessage").textContent = "Guess a number!";
    document.getElementById("guessCountMessage").textContent = `Guess Count: ${guessCount}`;

    // Show the restart button and hide the start button
    document.getElementById("startgame").style.display = "none";
    document.getElementById("restartGame").style.display = "inline-block";
}

// Function to handle the user’s guess
function checkGuess() {
    let userGuess = parseInt(document.getElementById("userGuess").value); 

    // Validate input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        document.getElementById("feedbackMessage").textContent = "Please enter a number between 1 and 100.";
        return;
    }

    // Increment the guess count
    guessCount++;

    // Provide feedback based on the user's guess
    if (userGuess === randomNumber) {
        document.getElementById("feedbackMessage").textContent = "Congratulations! You guessed the number!";
        document.getElementById("guessCountMessage").textContent = `It took you ${guessCount} guesses.`;
    } else if (userGuess < randomNumber) {
        document.getElementById("feedbackMessage").textContent = "Too Low! Try again.";
        document.getElementById("guessCountMessage").textContent = `Guess Count: ${guessCount}`;
    } else {
        document.getElementById("feedbackMessage").textContent = "Too High! Try again.";
        document.getElementById("guessCountMessage").textContent = `Guess Count: ${guessCount}`;
    }
}

// Function to restart the game
function restartGame() {
    // Reset the game
    startGame();

    // Clear the user guess input field
    document.getElementById("userGuess").value = "";

    // Hide the restart button and show the start button
    document.getElementById("startgame").style.display = "inline-block";
    document.getElementById("restartGame").style.display = "none";

    // Reset the feedback message
    document.getElementById("feedbackMessage").textContent = "Game has been restarted. Try guessing the number!";
    document.getElementById("guessCountMessage").textContent = "";
}

// Event listeners for start, sumbit and restart
document.getElementById("startgame").addEventListener("click", startGame);
document.getElementById("submitGuess").addEventListener("click", checkGuess);
document.getElementById("restartGame").addEventListener("click", restartGame);
