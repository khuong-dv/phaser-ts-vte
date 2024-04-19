import Phaser from 'phaser';

export default class Player extends Phaser.Physics.Arcade.Sprite {
    private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
    private speed = 200;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
        super(scene, x, y, texture, frame);

        // Add the player sprite to the scene
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.setCollideWorldBounds(true);
        // Create keyboard cursor keys
        this.cursors = scene.input.keyboard?.createCursorKeys() as Phaser.Types.Input.Keyboard.CursorKeys;
    }

    update() {
        // Handle player movement // left and right, and space to jump
        if (this.cursors.left?.isDown) {
            this.body.setVelocityX(-this.speed);
        } else if (this.cursors.right?.isDown) {
            this.body.setVelocityX(this.speed);
        } else {
            this.body.setVelocityX(0);
        }

    }
}