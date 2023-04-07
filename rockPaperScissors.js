const hands = ['rock', 'paper', 'scissors' ];

function getHand () {
    return hands [parseInt(Math.random()*10)%3];
}

let player1 = {
    name: 'Player 1',
    getHand: getHand
};
let player2 = {
    name: 'Player 2',
    getHand: getHand
}

