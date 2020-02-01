
import { gameScene } from './scenes/gameScene'
import { mapConfig } from '../config'

const gameConfig = {
    widght: mapConfig.tileSize * mapConfig.nbTileX,
    height: mapConfig.tileSize * mapConfig.nbTileY,
    parent: "game-container",
    type: Phaser.AUTO,
    scene: [
        gameScene
    ],
    physics: {
        default: "arcade"
    }
}

var game = new Phaser.Game(gameConfig);