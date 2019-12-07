import { Environment } from './environment';
import { Player } from './player';
console.log('Hello from engien');

const environment = new Environment();

const algorithm = () => console.log('Algrorithm');
const player = new Player(0, algorithm);
environment.addPlayer(player);
console.log({ environment: environment });

// plantSeed
// action = {name: plantSeed, params: x, y, parent}

// upgrade
// action = {name: upgrade, params: x, y}

// sell
// action = {name: sell, params: x, y }
