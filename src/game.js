import readline from "readline"; // User input handling
import { Player } from "./player.js"; // Import the Player class from player.js
export function startGame() {
  console.clear();

  const player = new Player(); // Create a new player instance

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  }); // Simple readline interface for user input

  console.log("Welcome to UncLife!");

  function gameLoop() {
    console.clear();
    displayPlayerStats(player);

    rl.question('Press "Enter" to advance one month...', () => {
      console.log("You pressed Enter");
      player.ageUp();
      gameLoop();
    });
  }

  gameLoop();
} // startGame is only responsible for initializing the game

function displayPlayerStats(player) {
  console.log("Age:", player.age);
  console.log("Month:", player.month);
  console.log("Year:", player.year);
  console.log("Money:", player.money);
  console.log("Health:", player.health);
  console.log("Discipline:", player.discipline);
  console.log("Happiness:", player.happiness);
  console.log("Reputation:", player.reputation);
} // Display Logic to show in console
