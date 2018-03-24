export default class Player extends Phaser.Sprite {
	constructor(game, x, y) {
		super(game, x, y, 'assassin', 0);
		
		this.game.physics.enable(this);
		this.game.physics.arcade.enableBody(this);

		this.body.collideWorldBounds = true;
		this.scale.x = this.scale.y = 5;
		this.smoothed = false;

		this.cursors = this.game.input.keyboard.createCursorKeys();
		this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		this.game.camera.follow(this.sprite);

		this.jumpTimer = 0;
	}
	
	update() {
		this.body.velocity.x = 0;

		if (this.cursors.left.isDown && this.spaceKey.isDown) {
			this.move(-1);
			this.jump();
		} else if (this.cursors.right.isDown && this.spaceKey.isDown) {
			this.move(1);
			this.jump();
		} else if (this.cursors.left.isDown) {
			this.move(-1);
		} else if (this.cursors.right.isDown) {
			this.move(1);
		} else if (this.spaceKey.isDown){
			this.jump();
		}
	}
	move(direction) {
		const SPEED = 180;
  		this.body.velocity.x = direction * SPEED;
	}

	jump() {
		const JUMP_SPEED = 280;
		const canJump = this.body.onFloor();
	  
		if(canJump){
		  this.body.velocity.y = - JUMP_SPEED;
		}
		return canJump;
	}
}
