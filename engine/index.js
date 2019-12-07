import { Environment } from './environment';
import { Player } from './player';
console.log('Hello from engien');

const environment = new Environment();

const algorithm = (field, player, params, mode, sun) => {
    const actions = [];

    if (mode === 'INIT') {
        actions.push({ name: 'initTree', params: { x: 1, y: 0 } });
    } else {
        actions.push({ name: 'plantSeed', params: { x: 2, y: 1 } });
    }

    return actions;
};

const player = new Player(0, algorithm);
environment.addPlayer(player);
console.log({ environment: environment });

// plantSeed
// action = {name: plantSeed, params: {x: x, y: y, parent: parent}}

// upgrade
// action = {name: upgrade,params:{ x: x, y: y}}

// sell
// action = {name: sell, params: {x: x, y: y }}

// init
// action = {name: init, params: {x: x, y: y }}
