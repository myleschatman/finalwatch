import Player from '../prefabs/player';

export default class Game extends Phaser.State {
  constructor() {
    super();
  }

  preload() {

  }

  create() {
	this.player = new Player(this.game);
    this.add.existing(this.player);
  }

  update() {

  }
}