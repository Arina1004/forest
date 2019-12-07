import { Field } from './field';
import { Player } from './player';
import { TSunPosition } from '../types/enums';

class Environment {
    constructor() {
        this.field = new Field();
        this.players = [];
        this.tick = 0;
        this.sun = 0;
    }

    addPlayer(name){
        this.players.push(new Player(name))
    }
}
