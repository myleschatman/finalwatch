import Player from '../prefabs/player';

export default class Game extends Phaser.State {
  constructor() {
    super();
  }

  inti() {
    this.game.stage.disableVisibilityChange = true;
  }

  preload() {

  }

  create() {
	  this.assassin = new Player(this.game);
    this.add.existing(this.assassin);
  }

  update() {

  }
}