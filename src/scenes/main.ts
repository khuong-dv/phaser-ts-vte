import Person from '../objects/person.ts';

export class GameScene extends Phaser.Scene {
    private player!: Person;

    constructor() {
        super({key: 'GameScene'});
    }

    preload(): void {

    }

    create(): void {
        this.player = new Person(this, 100, 100, 'person');
        this.add.existing(this.player);
    }

    update(time: number, delta: number): void {
        this.player.update();
    }

}