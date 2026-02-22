export function triggerRandomEvents(player) {
  const events = [
    // List of possible random events and effects on Unc's stats
    {
      text: "You received an unexpected medical bill.",
      effect: () => {
        player.money -= 300;
        player.happiness -= 5;
      },
    },
    {
      text: "An anonymous person sent you money out of nowhere",
      effect: () => {
        player.money += 200;
        player.happiness += 5;
      },
    },
    {
      text: "You caught the seasonal flu",
      effect: () => {
        player.health -= 10;
        player.money -= 50;
      },
    },
    {
      text: "You had a productive breakthrough this month",
      effect: () => {
        player.discipline += 5;
        player.reputation += 7;
      },
    },
  ];

  const randomIndex = Math.floor(Math.random() * events.length);
  const event = events[randomIndex]; // Selects random event from list

  console.log("\n--- RANDOM EVENT ---");
  console.log(event.text); // Displays event text to player

  event.effect();
}
