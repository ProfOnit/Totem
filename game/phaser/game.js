
import { gameScene } from './scenes/gameScene'

const config = {
    widght: 500,
    height: 500,
    type: Phaser.AUTO,
    scene: [
        gameScene
    ],
    physics: {
        default: "arcade"
    }
}

var game = new Phaser.Game(config);