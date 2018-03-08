export default class Player extends Phaser.Sprite {
	constructor(game) {
		super(game, 0, 0, 'assassin');
		
		this.game.physics.arcade.enableBody(this);
		this.body.collideWorldBounds = true;

		this.scale.x = 5;
		this.scale.y = 5;
		this.smoothed = false;
		this.game.camera.follow(this);
		
		this.cursors = this.game.input.keyboard.createCursorKeys();
	}
	
	update() {
		
	}
}