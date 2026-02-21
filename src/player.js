export class Player {
  constructor() {
    this.age = 25;
    this.month = 1;
    this.year = 2026;

    this.money = 0;
    this.health = 70;
    this.discipline = 30;
    this.happiness = 40;
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
  } // Logic to age up the player each month and year, increasing age by 1 each year.
} // Player class with initial properties to import into the game.
