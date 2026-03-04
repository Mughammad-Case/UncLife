export function triggerRandomEvents(player, monthlyMessages) {
  // Possible random events that can occur each month
  const events = [
    {
      text: "You received an unexpected medical bill.",
      effect: (player) => {
        player.money -= 300;
        player.happiness -= 5;
      },
    },
    {
      text: "An anonymous person sent you money out of nowhere",
      effect: (player) => {
        player.money += 200;
        player.happiness += 5;
      },
    },
    {
      text: "You caught the seasonal flu",
      effect: (player) => {
        player.health -= 10;
        player.money -= 50;
      },
    },
    {
      text: "You had a productive breakthrough this month",
      effect: (player) => {
        player.discipline += 5;
        player.reputation += 7;
      },
    },
  ];

  // Selects random event and applies effects to player
  const randomIndex = Math.floor(Math.random() * events.length);
  const event = events[randomIndex];

  // Add event message to monthly messages
  monthlyMessages.push("--- RANDOM EVENT ---");
  monthlyMessages.push(event.text);

  // Apply event effects to player
  event.effect(player);
}
