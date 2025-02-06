const targetColor = document.querySelector('.color-box');
const colorButtons = document.querySelectorAll('.color-option');
const messageDisplay = document.querySelector('.game-status');
const scoreDisplay = document.querySelector('.score');
const newGameButton = document.querySelector('.new-game-button');

// Define the colors
const allColors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FF9900', '#99CC00', '#6600CC', '#CC00CC'];

// Initialize the score and target color
let score = 0;
let targetColorValue;
let buttonColors = [];

// Function to generate a random set of colors for the buttons
function generateRandomColors() {
  const randomColors = [];
  const colors = [...allColors];
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    randomColors.push(colors[randomIndex]);
    colors.splice(randomIndex, 1);
  }
  return randomColors;
}

// Function to generate a random color from the buttons
function generateRandomTargetColor(colors) {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

// Function to display the color options
function displayColorOptions(colors) {
  buttonColors = [];
  colorButtons.forEach((button, index) => {
    button.style.backgroundColor = colors[index];
    buttonColors.push(colors[index]);
  });
}

// Function to generate new colors
function generateNewColors() {
  const randomColors = generateRandomColors();
  targetColorValue = generateRandomTargetColor(randomColors);
  targetColor.style.backgroundColor = targetColorValue;
  displayColorOptions(randomColors);
}

// Function to check the player's guess
function checkGuess(event) {
  const buttonIndex = Array.prototype.indexOf.call(colorButtons, event.target);
  const clickedColor = buttonColors[buttonIndex];

  if (clickedColor === targetColorValue) {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    messageDisplay.textContent = 'You are correct, good job! 🎉😊';
    messageDisplay.classList.add('correct-animation');
} else {
    messageDisplay.textContent = 'Try again!😐👀';
    messageDisplay.classList.add('wrong-animation');
}
  generateNewColors();
}

// Function to reset the game
function resetGame() {
  score = 0;
  scoreDisplay.textContent = `Score: ${score}`;
  messageDisplay.textContent = '';
  generateNewColors();
}

// Add event listeners to the color buttons
colorButtons.forEach(button => {
  button.addEventListener('click', checkGuess);
});

// Add event listener to the new game button
newGameButton.addEventListener('click', resetGame);

// Start the game
const randomColors = generateRandomColors();
targetColorValue = generateRandomTargetColor(randomColors);
targetColor.style.backgroundColor = targetColorValue;
displayColorOptions(randomColors);