'use strict';

const getFormFields = require('../../lib/get-form-fields');

const api = require('./api');

const ui = require('./ui');

//GAME LOGIC
const player1 = {
  symbol: 'X'
};

const player2 = {
  symbol: 'O',
};

let playerTurn = 1;

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
  $( ".new-game-button" ).show();
  $( ".game-board" ).show();
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
  $( ".new-game-button" ).hide();
  api.signOut()
  .done(ui.signOutSuccess)
  .fail(ui.failure);
};

// NOTE GAME LOGIC

const gameBoard = ['', '', '', '', '', '', '', '', ''];

// let winCon = [[0, 1, 2], [3, 4, 5],
//   [6, 7, 8], [0, 3, 6], [0, 4, 8],
//   [1, 4, 7], [2, 5, 8], [6, 4, 2]];

const wasClicked = (event) => {
  console.log('current player turn is', playerTurn);
  event.preventDefault();
  let cell = $(event.target);
  let currentPlayer = () => {
    let switchedSymbols;

    if (playerTurn % 2 === 0) {
      switchedSymbols = player2.symbol;
    } else {
      switchedSymbols = player1.symbol;
    }
    // if turn is odd somevariable = player1 symbol
    // if turn is even somevariable = player2 symbol
    let index = $(cell).data('index');
    gameBoard[index] = switchedSymbols;

    return switchedSymbols;
  };
  console.log(cell);
  $(cell).html(currentPlayer());

  console.log(gameBoard);
    playerTurn++;
};

// NOTE maybe use someting like this for AVOIDING TWO CLICKS
// const checkForSecondClick = (cell) => {
//   event.preventDefault();
//   if (cell.length > 1 ) {
//     console.log('hey dont click the same spot!, in the console..');
//   }
//   else {
//     //dont let Player symbol switch
//     console.log('havent clicked twice');
//   }
// };

//   //NOTE NOTE NOTE NOTE  NOTE NOTE NOTE NOTE NOTE NOTE


const onNewGame = function onNewGame(event) {
  event.preventDefault();
// sets all of the cells to an empty slot again?
  $('.col-xs-5').text('');
  let data = {};
  api.newGame(data)
  .done(ui.newGameSuccess)
  .fail(ui.onError);
};

const onGameScores = function onGameScores(event) {
  event.preventDefault();
// sets all of the cells to an empty slot again?
  //$('.scores right column').text(Functtion that updates scores and
  //displayes number);
  let data = {};
  api.gameScores(data)
  .done(ui.newGameSuccess)
  .fail(ui.onError);
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
  $( ".new-game-button" ).hide();

  // $('.col-xs-5').on('click', checkForSecondClick);

};

module.exports = {
  addHandlers,
};
