import { Cell } from './cell';
import { CELL_CONTENT_EMPTY } from '../types/enums';

export class Field {
    constructor() {
        this.content = [];
        this.init();
    }

    init() {
        for (let i = 0; i < 6; ++i) {
            this.content.push([]);
            for (let j = 0; j < 6; ++j) {
                this.content[i].push(new Cell(CELL_CONTENT_EMPTY, j, i));
            }
        }
    }
}
