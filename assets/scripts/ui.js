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
};

const signOutSuccess = () => {

  app.user = null;

  console.log('Signed Out!');
};

module.exports = {
  failure,
  success,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
};
