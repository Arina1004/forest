import { Field } from './field';
import { Player } from './player';
import { POINT_COST, CELL_CONTENT_EMPTY, plantRadius, CELL_CONTENT_SEED, prices, nextUpdate, upgrades, CELL_CONTENT_LARGE } from '../types/enums';
import { getFertility } from '../types/function';

class Environment {
    constructor() {
        this.field = new Field();
        this.players = [];
        this.tick = 0;
        this.sun = 0;
        this.blockedCells = []
    }

    addPlayer(name) {
        this.players.push(new Player(name))
    }

    plantSeed(x, y, player, parent) {
        if (parent.type != CELL_CONTENT_SEED && parent.type != CELL_CONTENT_EMPTY
            && this.field.content[y][x].type === CELL_CONTENT_EMPTY && player === parent.player
            && this.players[player].inventory.get(CELL_CONTENT_SEED) > 0) {
            const radius = plantRadius[parent.type];

            if (Math.abs(x - parent.x) <= radius && Math.abs(y - parent.y) <= radius) {
                if (this.players[player].energy >= prices[CELL_CONTENT_SEED]) {
                    this.players[player].energy -= prices[CELL_CONTENT_SEED];
                    this.players[player].inventory.inc(CELL_CONTENT_SEED);

                    this.field.content[y][x].set(CELL_CONTENT_SEED, x, y, player);

                    return "COMPLETE"
                }
            }
        }

        return "ERROR"
    }

    upgrade(x, y, player) {
        if (this.field.content[y][x].type != CELL_CONTENT_EMPTY && this.players[player].energy >= upgrades[nextUpdate[this.field.content[y][x].type]] && this.players[player].inventory.get(nextUpdate[this.field.content[y][x].type]) > 0 && this.field.content[y][x].player === player) {
            this.players[player].energy -= upgrades[nextUpdate[this.field.content[y][x].type]];

            this.players[player].store.inc(this.field.content[y][x].type);
            this.players[player].inventory.dec(nextUpdate[this.field.content[y][x].type]);

            this.field.content[y][x].set(nextUpdate[this.field.content[y][x].type], x, y, player);

            return "COMPLETE"
        }

        return "ERROR"
    }

    sell(x, y, player) {
        if (this.field.content[y][x].type === CELL_CONTENT_LARGE && this.players[player].energy >= POINT_COST && this.field.content[y][x].player === player) {
            this.players[player].energy -= POINT_COST;
            this.players[player].store.inc(CELL_CONTENT_LARGE);

            this.players[player].points += getFertility(x, y);

            this.field.content[y][x].set(CELL_CONTENT_EMPTY, x, y);

            return "COMPLETE"
        }

        return "ERROR"
    }

    step() {
        for (let player of this.players) {
            const action = player.algorithm(this.field, player.getParams());
        }
        this.tick = this.tick + 1;
        this.sun = (this.sun + 1) % 4;
    }

}
