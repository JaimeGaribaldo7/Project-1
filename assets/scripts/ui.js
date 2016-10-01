'use strict';

const app = require('./app.js');

const success = (data) => {
  // console.log(data);
};

const changePasswordSuccess = () => {
  // console.log('password successfully changed');
};

const failure = (error) => {
};

const signInSuccess = (data) => {
  app.user = data.user;
  $('.new-game-button').show();
  $('#sign-out').show();
  $('.change-password').show();
  $('#right-side').text('Hit the NewGame button to play!');
};

const signOutSuccess = () => {

  app.user = null;

  console.log('Signed Out!');
};

const newGameSuccess = (data) => {
  // app.game = data.game;
  // $('.game-board').show();
  // $('#right-side').text('');
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
