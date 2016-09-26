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
  return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {},
    success: (data) => {
      console.log(data, 'frmo post >>>>');
    }
  });
};

const displayScores = (data) => {
  return $.ajax({
    url: app.host + '/games/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
    success: (data) => {
      // update board with board values from
      console.log(data, "##########");
    }
  });
};

const getScores = () => {
  console.log('inside getScores >>>>>>');
  let data = {};
  return $.ajax({
    url: app.host + '/games/' + app.user.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,

  //GAME LOGIC STARTS HERE
  newGame,
  displayScores,
  getScores
};
