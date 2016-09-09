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


const board = ['','','','','','','','',''];

let winCon = [[0, 1, 2], [3, 4, 5],
  [6, 7, 8], [0, 3, 6], [0, 4, 8],
  [1, 4, 7], [2, 5, 8], [6, 4, 2]];

const wasClicked = (event) => {
  event.preventDefault();
  let cell = $(event.target);
  // console.log(cell);
  $(cell).html('x');

  let index = $(cell).data("index");
  board[index] = 'x';
  console.log(board);
  console.log('wasClicked');
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
  //GAME LOGIC PORTION STARTS HERE
  $('.col-xs-5').on('click', wasClicked);

};

module.exports = {
  addHandlers,
};
