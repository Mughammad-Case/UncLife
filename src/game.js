import readline from "readline"; // User input handling
import { Player } from "./player.js"; // Import the Player class from player.js
import { triggerRandomEvents } from "./events.js"; // Import random events logic from events.js

export function startGame() {
  console.clear();

  const player = new Player(); // Create a new player instance

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  }); // Simple readline interface for user input

  console.log("Welcome to UncLife!");

  function showMenu() {
    console.log("\nWhat do you do this month?");
    console.log("1. Work overtime");
    console.log("2. Exercise");
    console.log("3. Relax");
    console.log("4. Do nothing");
  }

  function handleChoice(choice) {
    switch (choice) {
      case "1":
        player.money += 200;
        player.health -= 5;
        player.discipline += 2;
        break;

      case "2":
        player.health += 5;
        player.happiness += 3;
        break;

      case "3":
        player.happiness += 5;
        player.discipline -= 3;
        break;

      case "4":
        console.log(
          "You let the month pass without doing anything. Time flies...",
        );
        break;

      default:
        console.log("Invalid choice. Please select a valid option.");
        return;
    }
  }

  function gameLoop() {
    console.clear();
    displayPlayerStats(player);

    // Check for death conditions
    if (player.health <= 0) {
      console.log("\nYou neglected yourself for too long.");
      console.log(`You died at age ${player.age}.`);
      console.log("Game Over.");

      rl.close(); //fixes node still waiting for input after game ends
      return; // Exits the game loop and prevents menu from showing again
    }

    showMenu();

    rl.question("Enter your choice: ", (answer) => {
      handleChoice(answer);

      const eventTriggered = Math.random() < 0.3;

      if (eventTriggered) {
        triggerRandomEvents(player);
      }

      player.ageUp();

      rl.question("\nPress Enter to continue...", () => {
        gameLoop();
      });
    });
  }

  gameLoop(); // The main game loop

  function displayPlayerStats(player) {
    console.log("Age:", player.age);
    console.log("Month:", player.month);
    console.log("Year:", player.year);
    console.log(`Money: $${player.money}`);
    console.log(`Health: ${player.health}`);
    console.log("Discipline:", player.discipline);
    console.log(`Happiness: ${player.happiness}`);
    console.log("Reputation:", player.reputation);
  } // Display Logic to show in console
}
