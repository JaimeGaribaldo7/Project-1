'use strict';

const getFormFields = require('../../lib/get-form-fields');

const api = require('./api');

const ui = require('./ui');


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

  api.signOut()
  .done(ui.signOutSuccess)
  .fail(ui.failure);
};

// NOTE GAME LOGIC STARTS HERE

const gameBoard = ['', '', '', '', '', '', '', '', ''];

// let winCon = [[0, 1, 2], [3, 4, 5],
//   [6, 7, 8], [0, 3, 6], [0, 4, 8],
//   [1, 4, 7], [2, 5, 8], [6, 4, 2]];

const wasClicked = (event) => {
  event.preventDefault();
  let cell = $(event.target);

  // console.log(cell);
  $(cell).html('xo');
  let index = $(cell).data('index');
  gameBoard[index] = 'xo';
  console.log(gameBoard);
};


const playerTurnAdd = () => {
  let playerTurn = 0;
  //lets playerTurn go up to 9 times,
  for (let i = 0; i < gameBoard.length; i++) {
    playerTurn++;
  }
  //NOTE NOTE NOTE NOTE  NOTE NOTE NOTE NOTE NOTE NOTE
  // ASK what i can do with this for loop to change player turn to
  //go up, ONE at a time instead of skipping to 9.
  console.log(playerTurn);
};


const switchBetweenMarks = () => {
  $('.col-xs-5').on('click', playerTurnAdd);
};


const onNewGame = function onNewGame(event) {
  event.preventDefault();
// sets all of the cells to an empty slot again?
  $('.col-xs-5').text('');
  let data = {};
  api.newGame(data)
  .done(ui.newGameSuccess)
  .fail(ui.onError);
};

// i want to check if the cell is empty and assign its value to empty
//NOTE ^ i assigned a value of XO up in wasClicked function
//then on click i want to assign it a value of X or O, by hiding one
//or replacing it with ONLY one.
//then i will alternate which one is replaced.
//this way i can make an if statement to check if the value is X or O
//in the order of winConditions then set the game to finished
//havent made a function to set the game to START, or
// game finished = false;
//when a game is finished i need to reset the board


//NOTE should i store this in a variable?

// let playerTurn = 0;
//
// for (let i = 0; i < gameBoard.length; i++) {
//   playerTurn++;
// }
//
// if (playerTurn % 2 === 0) {
//   .replace(/xo/gi,'x');
// }
// else {
// .replace(/xo/gi,'o');
// }

const addHandlers = () => {

  // FORMS PORTION STARTS HERE
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);

  //GAME LOGIC PORTION STARTS HERE
  $('.col-xs-5').on('click', wasClicked);
  $('.col-xs-5').on('click', switchBetweenMarks);
  $('.new-game-button').on('click', onNewGame);

  // $('.new-game-button').on('click', hideNewGameButton);

};

module.exports = {
  addHandlers,
};
