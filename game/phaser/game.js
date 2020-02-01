
import { gameScene } from './scenes/gameScene'

const config = {
    widght: 16 * 20,
    height: 16 * 20,
    parent: "game-container",
    type: Phaser.AUTO,
    scene: [
        gameScene
    ],
    physics: {
        default: "arcade"
    }
}

var game = new Phaser.Game(config);