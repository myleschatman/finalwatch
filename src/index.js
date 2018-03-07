import Boot from './states/boot';
import Preload from './states/preload';
import Game from './states/game';

class App extends Phaser.Game {
  constructor() {
    super(window.innerWidth, window.innerHeight, Phaser.AUTO, 'game');

    this.state.add('Boot', Boot);
    this.state.add('Preload', Preload);
    this.state.add('Game', Game);

    this.state.start('Boot');
  }
}

new App();