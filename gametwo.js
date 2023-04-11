const hands = ['rock', 'paper', 'scissors'];

function getHand() {
  return hands[parseInt(Math.random() * 10) % 3];
}

let player1 = {
    name: 'Player 1',
    getHand: getHand,
  };
  
  let player2 = {
    name: 'Player 2',
    getHand: getHand,
  };
  
  let player3 = {
    name: 'Player 3',
    getHand: getHand,
  };
  
  let player4 = {
    name: 'Player 4',
    getHand: getHand,
  };

  function playRound(player1, player2) {
    let player1Hand = player1.getHand();
    let player2Hand = player2.getHand();
  
    let winner = null;
    console.log(player1.name + ' plays ' + player1Hand);
    console.log(player2.name + ' plays ' + player2Hand);
  
    if (player1Hand == player2Hand) {
      console.log("Tie!");
      return winner;
    } else if (player1Hand == 'rock') {
      if (player2Hand == 'paper') {
        winner = player2;
        console.log(winner.name + " wins!");
        return winner;
      } else if (player2Hand == 'scissors') {
        winner = player1;
        console.log(winner.name + " wins!");
        return winner;
      }
    } else if (player1Hand == 'paper') {
      if (player2Hand == 'rock') {
        winner = player1;
        console.log(winner.name + " wins!");
        return winner;
      } else if (player2Hand == 'scissors') {
        winner = player2;
        console.log(winner.name + " wins!");
        return winner;
      }
    } else if (player1Hand == 'scissors') {
      if (player2Hand == 'rock') {
        winner = player2;
        console.log(winner.name + " wins!");
        return winner;
      } else if (player2Hand == 'paper') {
        winner = player1;
        console.log(winner.name + " wins!");
        return winner;
      }
    }
  }
  
  function playGame(player1, player2, playUntil) {
    let player1Wins = 0;
    let player2Wins = 0;
  
    while (player1Wins < playUntil && player2Wins < playUntil) {
      let winner = playRound(player1, player2);
      if (winner === player1) {
        player1Wins++;
      } else if (winner === player2) {
        player2Wins++;
      }
    }
  
    if (player1Wins > player2Wins) {
      return player1;
    } else {
      return player2;
    }
  }
  
  function playTournament(players, playUntil) {
    let winner1 = playGame(players[0], players[1], playUntil);
    let winner2 = playGame(players[2], players[3], playUntil);
    let tournamentWinner = playGame(winner1, winner2, playUntil);
  
    console.log(tournamentWinner.name + " is the world champion!");
  }

  playTournament([player1, player2, player3, player4], 3);