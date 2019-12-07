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
    constructor() {
        this.points = 0;
        this.energy = 0;
        this.store = new Item('store');
        this.inventory = new Item('inventory');
    }

    buyTree(type) {
        if (this.store.get(type) > 0) {
            const price = prices[type];
            if (this.energy - price > 0) {
                this.store.dec(type);
                this.inventory.inc(type);
                this.energy = this.energy - price;
            }
        }
    }
}
