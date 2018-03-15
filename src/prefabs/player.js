export default class Player extends Phaser.Sprite {
	constructor(game) {
		super(game, 0, 0, 'assassin', 0);
		
		this.game.physics.arcade.enableBody(this);
		this.body.collideWorldBounds = true;
		
		this.scale.x = this.scale.y = 5;
		this.smoothed = false;
		this.game.camera.follow(this);
		
		this.cursors = this.game.input.keyboard.createCursorKeys();
	}
	
	update() {
		this.body.velocity.x = 0;
		
		if (this.cursors.left.isDown) {
			this.body.velocity.x =- 180;
		} else if (this.cursors.right.isDown) {
			this.body.velocity.x =+ 180;
		} else {
			this.body.velocity.x = 0;
		}
	}
}
