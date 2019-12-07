import { Environment } from './environment';
console.log('Hello from engien');

const environment = new Environment();

const playerCode = () => console.log('Algrorithm');
environment.addPlayer(playerCode);
