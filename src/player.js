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
    } // Age up the Unc and updates each year after 12 months

    this.health -= 1;
    this.happiness -= 2;
    this.money += 100;
    this.discipline += 1;
    this.reputation += 1; // Aging up the Unc also affects their stats each month

    this.clampStats();
  }

  clampStats() {
    if (this.health > 100) this.health = 100;
    if (this.health < 0) this.health = 0;

    if (this.happiness > 100) this.happiness = 100;
    if (this.happiness < 0) this.happiness = 0;

    if (this.discipline > 100) this.discipline = 100;
    if (this.discipline < 0) this.discipline = 0;

    if (this.reputation > 100) this.reputation = 100;
    if (this.reputation < 0) this.reputation = 0;
  } // Makes sure stats stay within 0 - 100 range
}
