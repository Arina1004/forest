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
export class Item {
    constructor(mode) {
        this.mode = mode;
        if (mode == 'store') {
            this.seeds = 4;
            this.large = 2;
            this.medium = 3;
            this.small = 4;
        } else if (mode == 'inventory') {
            this.seeds = 2;
            this.large = 0;
            this.medium = 1;
            this.small = 2;
        } else {
            this.seeds = 0;
            this.large = 0;
            this.medium = 0;
            this.small = 0;
        }
    }
    get(type) {
        if (type === CELL_CONTENT_SEED) {
            return getSeed();
        } else if (type === CELL_CONTENT_LARGE) {
            return getLarge();
        } else if (type === CELL_CONTENT_MEDIUM) {
            return getMedium();
        } else {
            return getSmall();
        }
    }
    dec(type) {
        if (type === CELL_CONTENT_SEED) {
            return decSeed();
        } else if (type === CELL_CONTENT_LARGE) {
            return decLarge();
        } else if (type === CELL_CONTENT_MEDIUM) {
            return decMedium();
        } else {
            return decSmall();
        }
    }
    inc(type) {
        if (type === CELL_CONTENT_SEED) {
            return incSeed();
        } else if (type === CELL_CONTENT_LARGE) {
            return incLarge();
        } else if (type === CELL_CONTENT_MEDIUM) {
            return incMedium();
        } else {
            return incSmall();
        }
    }

    getSeed() {
        return this.seeds;
    }
    getLarge() {
        return this.large;
    }
    getMedium() {
        return this.medium;
    }
    getSmall() {
        return this.small;
    }
    decSeed() {
        return this.seeds - 1;
    }
    decLarge() {
        return this.large - 1;
    }
    decMedium() {
        return this.medium - 1;
    }
    decSmall() {
        return this.small - 1;
    }
    incSeed() {
        return this.seeds + 1;
    }
    inclarge() {
        return this.large + 1;
    }
    incMedium() {
        return this.medium + 1;
    }

    incSmall() {
        return this.small + 1;
    }

    getParams() {
        return { seeds: this.seeds, large: this.large, medium: this.medium, small: this.small };
    }
}
