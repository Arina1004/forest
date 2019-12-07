import { Item } from './item';
import {
    SIZE_FIELD,
    SUN_POSITION_TOP,
    SUN_POSITION_RIGHT,
    SUN_POSITION_BOTTOM,
    SUN_POSITION_LEFT,
    CELL_CONTENT_SEED,
    CELL_CONTENT_SMALL,
    CELL_CONTENT_MEDIUM,
    CELL_CONTENT_LARGE
} from '../types/enums';
export class Player {
    constructor(id, algorithm) {
        this.id = id;
        this.algoritm = algorithm;
        this.points = 0;
        this.energy = 0;
        this.store = new Item('store');
        this.inventory = new Item('inventory');
    }

    getParams() {
        return {
            points: this.points,
            energy: this.energy,
            store: this.store.getParams(),
            inventory: this.inventory.getParams()
        };
    }
}
