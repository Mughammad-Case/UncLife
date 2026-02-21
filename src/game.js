import { Player } from "./player.js"; // Import the Player class from player.js
export function startGame() {
  console.clear();

  const player = new Player(); // Create a new player instance

  console.log("WELCOME TO UncFife\n");

  console.log("Player created.");
  console.log("Age:", player.age);
  console.log("Money:", player.money);
}
