export default class Player extends Phaser.Sprite {
	constructor(game, id, x, y) {
		super(game, x, y, 'assassin', 0);

		this.id = id;
		this.game.physics.enable(this);
		this.game.camera.follow(this);
		
		this.body.collideWorldBounds = true;
		this.scale.x = this.scale.y = 5;
		this.smoothed = false;

		this.cursors = this.game.input.keyboard.createCursorKeys();
		this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

	}
	
	update() {
		this.body.velocity.x = 0;
		// if (this.cursors.left.isDown) {
		// 	this.body.velocity.x = -180;
		// } else if (this.cursors.right.isDown) {
		// 	this.body.velocity.x = 180;
		// }
	}
}
