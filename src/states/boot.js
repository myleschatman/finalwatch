export default class Boot extends Phaser.State {
  constructor() {
    super();
  }

  preload() {
    this.load.image('preloader', 'assets/preloader.gif');
  }

  create() {
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.state.start('Preload');
  }
}