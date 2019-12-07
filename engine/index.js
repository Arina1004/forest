import { Environment } from './environment';
import { Player } from './player';
console.log('Hello from engien');

export const environment = new Environment();

function algorithm1(field, player, params, mode, sun) {
    const actions = [];

    if (mode === 'INIT') {
        actions.push({ name: 'initTree', params: { x: 1, y: 0 } });
    } else {
        actions.push({ name: 'plantSeed', params: { x: 2, y: 1 } });
    }

    return actions;
};
function algorithm2(field, player, params, mode, sun)  {
    const actions = [];

    if (mode === 'INIT') {
        actions.push({ name: 'initTree', params: { x: 1, y: 6 } });
    } else {
        actions.push({ name: 'plantSeed', params: { x: 2, y: 5 } });
    }

    return actions;
};

const player1 = new Player(0, algorithm1);
const player2 = new Player(1, algorithm2);
environment.addPlayer(player1);
environment.addPlayer(player2);

player1.algorithm = algorithm1;
player2.algorithm2 = algorithm2;
console.log( player2);

// plantSeed
// action = {name: plantSeed, params: {x: x, y: y, parent: parent}}

// upgrade
// action = {name: upgrade,params:{ x: x, y: y}}

// sell
// action = {name: sell, params: {x: x, y: y }}

// init
// action = {name: init, params: {x: x, y: y }}

//buyTree
//action = {name: buyTree, params: {type: type} }}
