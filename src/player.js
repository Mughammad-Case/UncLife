export class Player {
  constructor() {
    this.age = 25;
    this.month = 1;
    this.year = 1;

    this.money = 1000;
    this.health = 100;
    this.discipline = 30;
    this.happiness = 100;
    this.reputation = 10;

    this.alive = true;
  }

  ageUp() {
    this.month++;

    if (this.month > 12) {
      this.month = 1;
      this.year++;
      this.age++;
    }

    this.health -= 1;
    if (this.health <= 0) this.health = 0; // Ensure health doesn't go negative

    this.happiness -= 2;
    if (this.happiness <= 0) this.happiness = 0;

    this.money += 100;
    this.discipline += 1;
    this.reputation += 1;
  } // Logic to age up the player each month and year, increasing age by 1 each year and adjusting stats accordingly.
} // Player class with initial properties to import into the game.
