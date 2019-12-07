export class Cell {
    constructor(type, x, y, player){
        this.set(type, x, y, player);
    }

    set(type, x, y, player) {
        console.log(this, type, x, y, player, "OPPP");
        this.type = type;
        this.x = x;
        this.y = y;
        this.player = player !== undefined ? player : -1;
    }

}
