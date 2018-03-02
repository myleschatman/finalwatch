export default class Game extends Phaser.State {
  constructor() {
    super();
  }

  preload() {

  }

  create() {
    this.game.add.sprite(0, 0, 'gold_knight');
  }

  update() {

  }
}