import { Field } from './field';
import { Player } from './player';
import {
    POINT_COST,
    CELL_CONTENT_EMPTY,
    plantRadius,
    CELL_CONTENT_SEED,
    prices,
    nextUpdate,
    upgrades,
    CELL_CONTENT_LARGE
} from '../types/enums';
import { getFertility } from '../types/function';

class Environment {
    constructor() {
        this.field = new Field();
        this.players = [];
        this.tick = 0;
        this.sun = 0;
        this.blockedCells = [];
    }

    addPlayer(name) {
        this.players.push(new Player(name));
    }

    plantSeed(x, y, parent, player) {
        if (
            parent.type != CELL_CONTENT_SEED &&
            parent.type != CELL_CONTENT_EMPTY &&
            this.field.content[y][x].type === CELL_CONTENT_EMPTY &&
            player === parent.player
        ) {
            const radius = plantRadius[parent.type];

            if (Math.abs(x - parent.x) <= radius && Math.abs(y - parent.y) <= radius) {
                if (this.players[parent.player].energy >= prices[CELL_CONTENT_SEED]) {
                    this.players[parent.player].energy -= prices[CELL_CONTENT_SEED];

                    this.field.content[y][x].set(CELL_CONTENT_SEED, x, y, player);

                    return 'COMPLETE';
                }
            }
        }

        return 'ERROR';
    }

    upgrade(x, y, player) {
        if (
            this.field.content[y][x].type != CELL_CONTENT_EMPTY &&
            this.players[player].energy >= upgrades[nextUpdate[this.field.content[y][x].type]]
        ) {
            this.players[player].energy -= upgrades[nextUpdate[this.field.content[y][x].type]];

            this.field.content[y][x].set(nextUpdate[this.field.content[y][x].type], x, y, player);

            return 'COMPLETE';
        }

        return 'ERROR';
    }

    sell(x, y, player) {
        if (this.field.content[y][x].type === CELL_CONTENT_LARGE && this.players[player].energy >= POINT_COST) {
            this.players[player].energy -= POINT_COST;

            this.players[player].points += getFertility(x, y);

            this.field.content[y][x].set(CELL_CONTENT_EMPTY, x, y);

            return 'COMPLETE';
        }

        return 'ERROR';
    }

    step() {
        for (let player of this.players) {
            // actions =[{action: func,params:{}}]
            const actions = player.algorithm(this.field, player.getParams());
            for (let action of actions) {
                doAction(action, player);
            }
        }
        this.tick = this.tick + 1;
        this.sun = (this.sun + 1) % 4;
    }

    doAction(action, player) {
        // action ={name: func,params:{}}
        switch (action.name) {
            case 'sell':
                sell(action.params, player);
                break;
            case 'upgrade':
                upgrade(params, player);
                break;
            case 'plantSeed':
                upgrade(params, player);
                break;
            default:
                break;
        }
    }
}
