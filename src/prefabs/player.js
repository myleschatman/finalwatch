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
<<<<<<< HEAD

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
=======
		
>>>>>>> 4d57d0386389ac203f049cc3c8e6afb5f779c79d
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
