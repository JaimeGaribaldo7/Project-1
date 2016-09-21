'use strict';

const app = require('./app.js');

//FORMS STARTS HERE NOTE FORMS STARTS HERE
const signUp = (data) => {
  console.log(data);

  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data: data,

  });
};

const signIn = (data) => {
  // console.log(data);
  return $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data: data,
  });
};

const changePassword = (data) => {
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const signOut = () => {
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

//GAME LOGIC STARTS HERE

const newGame = () => {

  // Access-Control-Allow-Origin
  return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {},
  });
};

// NOTE Need to try to make a PATCH that updates how many games the users
//have played;;;OR their scores of wins.
// const displayScores = () => {
//   return $.ajax({
//     url: app.host + '/games',
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//   });
// };

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,

  //GAME LOGIC STARTS HERE
  newGame,

  // displayScores,
};
