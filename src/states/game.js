export default class Game extends Phaser.State {
  constructor() {
    super();
  }

  preload() {

  }

  create() {
	/* let sprite = this.game.add.sprite(0, 0, 'assassin');
	sprite.scale.x = 5;
	sprite.scale.y = 5;
	sprite.smoothed = false; */
  }

  update() {
	this.player = new Player(this.game);
	this.add.existing(this.player);
	this.player.position.x = 0;
	this.player.position.y = 0;
  }
}