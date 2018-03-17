export default class Player extends Phaser.Sprite {
	constructor(game, x, y) {
		super(game, x, y, 'assassin', 0);
		
		this.game.physics.enable(this);
		this.game.physics.arcade.enableBody(this);

		this.body.collideWorldBounds = true;
		this.scale.x = this.scale.y = 5;
		this.smoothed = false;
	}
	
	update() {

	}
}
