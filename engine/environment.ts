import { Field } from './field';
import { Player } from './player';
import { TSunPosition } from '../types/enums';

class Environment {
    private field: Field;
    private players: Array<Player>;
    private tick: number;
    private sun: TSunPosition;
}
