import 'phaser';
import {GameScene} from './scenes/main.ts';

export const GameConfig: Phaser.Types.Core.GameConfig = {
    backgroundColor: 0x3a404d,
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.MAX_ZOOM,
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
        parent: 'game',
        width: '100%',
        height: '100%'
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {x: 0, y: 100}
        }
    },
    scene: [GameScene]
};

export class Game extends Phaser.Game {
    constructor() {
        super(GameConfig);
    }
}
