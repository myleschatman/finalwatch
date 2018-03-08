export default class Player extends Phaser.Sprite {
	constructor(game) {
		super(game, 0, 0, 'assassin');
		
		this.game.physics.arcade.enableBody(this);
		this.body.collideWorldBounds = true;
	
		this.game.camera.follow(this);
		
		this.cursors = this.game.input.keyboard.createCursorKeys();
	}
	
	update() {
		
	}
}