import { Player } from "./player.js"; // Import the Player class from player.js
export function startGame() {
  console.clear();

  const player = new Player(); // Create a new player instance

  console.log("Welcome to UncLife!");

  displayPlayerStats(player);
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
