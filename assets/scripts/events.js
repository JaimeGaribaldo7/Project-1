'use strict';

const getFormFields = require('../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

//FORMS
const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);

  api.signUp(data)
  .done(ui.success)
  .fail(ui.failure);
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);

  //wrong place need to review if this needs to stay here or go into ui.
  // $('.new-game-button').show();
  // $('.game-board').show();
  // $('#sign-out').show();
  // $('.change-password').show();
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.failure);

};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);

  api.changePassword(data)
  .done(ui.changePasswordSuccess)
  .fail(ui.failure);
};

const onSignOut = function () {
  event.preventDefault();
  $('.new-game-button').hide();
  $('.game-board').hide();
  $('#change-password').hide();
  api.signOut()
  .done(ui.signOutSuccess)
  .fail(ui.failure);
};

// NOTE GAME LOGIC

let gameBoard = ['', '', '', '', '', '', '', '', ''];
let playerTurn = 1;
let winner;
let currentPlayer = 'X';

let xScore = 0;

let oScore = 0;

const switchPlayers = () => {
  if (playerTurn % 2 === 0) {
    currentPlayer = 'O';
  } else {
    currentPlayer = 'X';
  }

};

const onNewGame = function onNewGame(event) {
  event.preventDefault();
  $('.col-xs-5').text('');
  $('#winner').text('');
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  playerTurn = 1;
  let data = {};
  api.newGame(data)
  .done(ui.newGameSuccess)
  .fail(ui.failure);
};

const updateScores = () => {
  // let winnerStr = winner === 'X' ? 'player_x' : 'player_o';
  event.preventDefault();
  let data = {
    game:{
      over: true,
      player_x: {
        wins: 1
      }
    }
  };

  api.displayScores(data)
  .done((data)=>{
    console.log(data, '>>>>>>>>>>>>>>>>>>');
  })
  .fail((err) => {
    console.log(err, 'ERROR >>>>');
  });

  // api.getScores().done(function(res, data) {
  //   console.log('response', res);
  //   console.log('res data', data);
  // });

};

const checkWinner = function (player) {
  event.preventDefault();
  const combo1 = gameBoard[0] === player && gameBoard[1] === player && gameBoard[2] === player;
  const combo2 = gameBoard[3] === player && gameBoard[4] === player && gameBoard[5] === player;
  const combo3 = gameBoard[6] === player && gameBoard[7] === player && gameBoard[8] === player;
  const combo4 = gameBoard[0] === player && gameBoard[3] === player && gameBoard[6] === player;
  const combo5 = gameBoard[0] === player && gameBoard[4] === player && gameBoard[8] === player;
  const combo6 = gameBoard[1] === player && gameBoard[4] === player && gameBoard[7] === player;
  const combo7 = gameBoard[2] === player && gameBoard[5] === player && gameBoard[8] === player;
  const combo8 = gameBoard[6] === player && gameBoard[4] === player && gameBoard[2] === player;

  if (combo1 || combo2 || combo3 || combo4 || combo5 || combo6 || combo7 || combo8) {
    winner = player;
    $('#winner').html('Player ' + player + ' wins!');
    updateScores(player);
    if (player === 'X') {
      xScore++;
    } else {
      oScore++;
    }
  } else if (playerTurn === 9) {
    $('#winner').html('No one wins!');
  }

  $('#player-x-score').html(xScore);
  $('#player-o-score').html(oScore);
};

const wasClicked = (event) => {
  event.preventDefault();
  let cell = $(event.target);
  let main = () => {
    switchPlayers();

    let index = $(cell).data('index');

    if (gameBoard[index]) {
      console.log('YOU ALREADY ENTERED SOMETHING THERE');

      // can i use !bang to make this the IF statement, not the ELSE GOOGLE DIDNT HELP
    } else {
      gameBoard[index] = currentPlayer;
      checkWinner(currentPlayer);
      playerTurn++;
      return currentPlayer;
    }
  };

  $(cell).html(main());

};

const addHandlers = () => {

  // FORMS PORTION STARTS HERE
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);

  //GAME LOGIC PORTION STARTS HERE
  $('.col-xs-5').on('click', wasClicked);
  $('.new-game-button').on('click', onNewGame);
  $('.new-game-button').hide();
  $('.winner').on('updateScores', updateScores);
};

module.exports = {
  addHandlers
};
