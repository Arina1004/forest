import { TItems, TPoint } from './types';
import { TCellContent, TSunPosition } from './enums';

export interface IPlayer {
    id: number;
    energy: number;
    points: number;
    inventory: TItems;
    store: TItems;
}

export interface ICell {
    type: TCellContent;
    player: number;
    position: TPoint;
}

export interface IState {
    field: Array<Array<ICell>>;
    sun: TSunPosition;
    players: Array<IPlayer>;
    tick: number;
}
