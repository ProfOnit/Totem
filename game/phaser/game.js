
import { gameScene } from './scenes/gameScene'

const config = {
    widght: 500,
    height: 500,
    type: Phaser.AUTO,
    scene: [
        gameScene
    ]
}

var game = new Phaser.Game(config);