'use strict';

const appl = require('./appl');

const newGameFinished = (data) => {
  $('.newGameButton').text('Try Again?');
  appl.game = data.game;
};

module.exports = {
  newGameFinished,
};
