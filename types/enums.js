export const WIN_COST = 10;
export const SIZE_FIELD = 6;

export const POINT_COST = 6;

export const SUN_POSITION_TOP = 0;
export const SUN_POSITION_RIGHT = 1;
export const SUN_POSITION_BOTTOM = 2;
export const SUN_POSITION_LEFT = 3;

export const CELL_CONTENT_EMPTY = 0;
export const CELL_CONTENT_SEED = 1;
export const CELL_CONTENT_SMALL = 2;
export const CELL_CONTENT_MEDIUM = 3;
export const CELL_CONTENT_LARGE = 4;

export const shadows = {
    CELL_CONTENT_EMPTY: 0,
    CELL_CONTENT_SEED: 0,
    CELL_CONTENT_SMALL: 1,
    CELL_CONTENT_MEDIUM: 2,
    CELL_CONTENT_LARGE: 3
};

export const prices = {
    CELL_CONTENT_SEED: 1,
    CELL_CONTENT_SMALL: 1,
    CELL_CONTENT_MEDIUM: 2,
    CELL_CONTENT_LARGE: 3
};

export const upgrades = {
    CELL_CONTENT_SMALL: 1,
    CELL_CONTENT_MEDIUM: 2,
    CELL_CONTENT_LARGE: 3
};

export const nextUpdate = {
    CELL_CONTENT_SEED: CELL_CONTENT_SMALL,
    CELL_CONTENT_SMALL: CELL_CONTENT_MEDIUM,
    CELL_CONTENT_MEDIUM: CELL_CONTENT_LARGE
}

export const energy = {
    CELL_CONTENT_SEED: 0,
    CELL_CONTENT_SMALL: 1,
    CELL_CONTENT_MEDIUM: 2,
    CELL_CONTENT_LARGE: 3
};

export const plantRadius = {
    CELL_CONTENT_SMALL: 1,
    CELL_CONTENT_MEDIUM: 2,
    CELL_CONTENT_LARGE: 3
}
