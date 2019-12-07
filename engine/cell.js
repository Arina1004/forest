export class Cell {
    constructor(type, x, y, player){
        this.set(type, x, y, player);
    }

    set(type, x, y, player) {
        this.type = type;
        this.x = x;
        this.y = y;
        this.player = player ? player : -1;
    }

}
