import { Field } from './field';
import { Player } from './player';
import { TSunPosition } from '../types/enums';

export class Environment {
    constructor() {
        this.field = new Field();
        this.players = [];
        this.tick = 0;
        this.sun = 0;
    }

    addPlayer(player) {
        this.players.push(player);
    }

    step() {
        for (let player of this.players) {
            const action = player.algorithm(this.field, player.getParams());
        }
        this.tick = this.tick + 1;
        this.sun = (this.sun + 1) % 4;
    }
}
