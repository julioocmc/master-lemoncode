// slot machine

class SlotMachine {
  constructor() {
    this.coins = 0;
  }

  play() {
    this.coins++;

    const roulette1 = Math.random() >= 0.5;
    const roulette2 = Math.random() >= 0.5;
    const roulette3 = Math.random() >= 0.5;

    const isWinner = roulette1 && roulette2 && roulette3;

    if (isWinner) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0;
    } else {
      console.log('Good luck next time!!');
    }
  }
}

const machine1 = new SlotMachine();
console.log('--- Slot Machine Output ---');
machine1.play();
machine1.play();
machine1.play();
machine1.play();
