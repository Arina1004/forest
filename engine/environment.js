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
    CELL_CONTENT_LARGE,
    SIZE_FIELD,
    energy
} from '../types/enums';
import { getFertility, getShadow } from '../types/function';

export class Environment {
    constructor() {
        this.field = new Field();
        this.players = [];
        this.tick = 0;
        this.sun = 0;
        this.blockedCells = [];
        this.mode = 'INIT';
    }

    addPlayer(name) {
        this.players.push(name);
    }

    buyTree(type, player) {
        if (this.players[player].store.get(type) > 0) {
            const price = prices[type];
            if (this.players[player].energy - price > 0) {
                this.players[player].store.dec(type);
                this.players[player].inventory.inc(type);
                this.players[player].energy -= price;
            }
        }
    }

    plantSeed(x, y, parent, player) {
        if (
            parent.type != CELL_CONTENT_SEED &&
            parent.type != CELL_CONTENT_EMPTY &&
            this.field.content[y][x].type === CELL_CONTENT_EMPTY &&
            player === parent.player &&
            this.players[player].inventory.get(CELL_CONTENT_SEED) > 0
        ) {
            const radius = plantRadius[parent.type];

            if (Math.abs(x - parent.x) <= radius && Math.abs(y - parent.y) <= radius) {
                if (this.players[player].energy >= prices[CELL_CONTENT_SEED]) {
                    this.players[player].energy -= prices[CELL_CONTENT_SEED];
                    this.players[player].inventory.inc(CELL_CONTENT_SEED);

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
            this.players[player].energy >= upgrades[nextUpdate[this.field.content[y][x].type]] &&
            this.players[player].inventory.get(nextUpdate[this.field.content[y][x].type]) > 0 &&
            this.field.content[y][x].player === player
        ) {
            this.players[player].energy -= upgrades[nextUpdate[this.field.content[y][x].type]];

            this.players[player].store.inc(this.field.content[y][x].type);
            this.players[player].inventory.dec(nextUpdate[this.field.content[y][x].type]);

            this.field.content[y][x].set(nextUpdate[this.field.content[y][x].type], x, y, player);

            return 'COMPLETE';
        }

        return 'ERROR';
    }

    initTree(x, y, player) {
        console.log(this.field.content[0]);
        console.log('tree-2', nextUpdate, this.field.content[y][x], x, y);
        if (
            (this.field.content[y][x].type === CELL_CONTENT_EMPTY || this.field.content[y][x].type === undefined) &&
            this.players[player].inventory.get(nextUpdate["CELL_CONTENT_SEED"]) > 0 &&
            getFertility(x, y) === 1
        ) {
            console.log("OOOOOOOOO");
            this.field.content[y][x].set(nextUpdate["CELL_CONTENT_SEED"], x, y, player);
            this.players[player].inventory.dec(nextUpdate["CELL_CONTENT_SEED"]);

            return 'COMPLETE';
        }

        return 'ERROR';
    }

    sell(x, y, player) {
        if (
            this.field.content[y][x].type === CELL_CONTENT_LARGE &&
            this.players[player].energy >= POINT_COST &&
            this.field.content[y][x].player === player
        ) {
            this.players[player].energy -= POINT_COST;
            this.players[player].store.inc(CELL_CONTENT_LARGE);

            this.players[player].points += getFertility(x, y);

            this.field.content[y][x].set(CELL_CONTENT_EMPTY, x, y);

            return 'COMPLETE';
        }

        return 'ERROR';
    }

    step() {
        let shadowedCells = getShadow(this.field, this.sun);

        for (let y = 0; y < SIZE_FIELD; y++){
            for (let x = 0; x < SIZE_FIELD; x++){
                if (this.field.content[x][y].type != CELL_CONTENT_EMPTY && shadowedCells.filter(cell => cell.x === x && cell.y === y).length > 0) {
                    const player = this.field.content[x][y].player;
                    this.players[player].energy += energy[this.field.content[x][y].type]
                }
            }
        }

        for (let player of this.players) {
            // actions =[{action: func,params:{}}]
            console.log(player);
            const actions = player.algorithm(this.field, player.id, player.getParams(), this.mode, this.sun);
            console.log('ect', actions)
            for (let action of actions) {
                console.log('in acti');
                this.doAction(action, player);
            }
            if (player.points >= 10) {
                return player.id;
            }
        }
        this.mode = 'GAME';
        this.tick = this.tick + 1;
        this.sun = (this.sun + 1) % 4;

        return -1;
    }

    doAction(action, player) {
        // action ={name: func,params:{}}
        console.log('name', action.name);
        if (action.name == 'initTree') {
            console.log('tree', this.field)
            this.initTree(action.params.x, action.params.y, player.id);
            console.log('tree', this.field)
        }
        else if (action.name == 'plantSeed') {
            console.log('seed', this.field);
            this.plantSeed(action.params.x, action.params.y, action.params.parent, player.id);
            console.log('seed', this.field);
        }
        switch (action.name) {
            case 'sell':
                this.sell(action.params.x, action.params.y, player.id);
                break;

            case 'upgrade':
                this.upgrade(action.params.x, action.params.y, player.id);
                break;

            case 'plantSeed':
                console.log('seed', this.field);
                this.plantSeed(action.params.x, action.params.y, action.params.parent, player.id);
                console.log('seed', this.field);
                break;

            case 'initTree':
                console.log('tree', this.field)
                this.initTree(action.params.x, action.params.y, player.id);
                console.log('tree', this.field)
                break;

            case 'buyTree':
                this.buyTree(action.params.type, player.id);
                break;

            default:
                break;
        }
    }

    getState() {
        return {
            field: this.field,
            sun: this.sun,
            players: this.players,
            tick: this.tick
        };
    }
}
