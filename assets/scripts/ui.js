'use strict';

const app = require('./app.js');

const success = (data) => {
  console.log(data);
};

const changePasswordSuccess = () => {
  console.log('password successfully changed');
};

const failure = (error) => {
  console.log(error);
};

const signInSuccess = (data) => {
  app.user = data.user;
  $('.new-game-button').show();
  $('.game-board').show();
  $('#sign-out').show();
  $('.change-password').show();
};

const signOutSuccess = () => {

  app.user = null;

  // console.log('Signed Out!');
};

const newGameSuccess = (data) => {
  console.log(data);
};

// const updateScores = (score) => {
//   return $.ajax({
//     url: app.host + '/change-password/' + app.user.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//     data: score
//   });
// };

module.exports = {
  failure,
  success,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  newGameSuccess,
  // updateScores
};
