'use strict';

const appl = require('./appl');

const newGame = (data) => {
  return $.ajax({
  url: appl.host + '/games',
  method: "POST",
  headers: {
    Authorization: 'Token token' + appl.user.token,
  },
  data,
});
};


module.exports = {
  newGame,
};
