'use strict';

const app = require('./app.js');
const ui = require('./ui.js')

//FORMS STARTS HERE NOTE FORMS STARTS HERE
const signUp = (data) => {
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data: data,
  });
};

let user;
let host;
let gameId;
const signIn = (data) => {
  return $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data: data,
    success: (res) => {
      user = res.user;
      host = res.host;
    }
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

const signOut = (user) => {
  console.log(user);
  return $.ajax({
    url: host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

//GAME LOGIC STARTS HERE

const newGame = () => {
  let newGameObject = {
};
  $('.game-board').show();
  return $.ajax({
    url: app.host + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + user.token,
    },
    data: newGameObject,
    success: (data) => {
      // console.log(data, '>>>>>>')
      gameId = data.game.id;
    }
  });
};

// const displayScores = (data) => {
//   // return $.ajax({
//   //   url: host + '/games/' + user.id,
//   //   method: 'PATCH',
//   //   headers: {
//   //     Authorization: 'Token token=' + app.user.token,
//   //   },
//   //   data: data,
//   //   success: (data) => {
//   //     // update board with board values from
//   //     console.log(data, "##########");
//   //   }
//   // });
// };
// THIS IS BAD REQUEST
// const patchScores = (data) => {
//   console.log('inside patchScores >>>>>>');
//   return $.ajax({
//     url: app.host + '/games/' + app.user.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//     data: data,
//   });
// };

// THIS IS THE OBJECT
// {
//   "game": {
//     "id": 1,
//     "cells": ["","","","","","","","",""],
//     "over":false,
//     "player_x": {
//       "id": 1,
//       "email": "and@and.com"
//       },
//     "player_o": {
//       "id": 3,
//       "email":
//       "dna@dna.com"
//     }
//   }
// }

// game state update of OBJECT
// {
//   "game": {
//     "cell": {
//       "index": index,
//       "value": currentPlayer
//     },
//     "over": false
//   }
// }

// NOTE NOTE NOTE PROBLEM IS HERE
// this is updating cell's with the currrent gameboard on each click
// BUT NOTE it is not setting it properly @@@ "cells": gameBoard
const updateGameBoard = (index, player) => {
  let data = {
    "game": {
      "cell": {
        "index": index,
        "value": player
      },
      "over": false
    }
  };
  // console.log("THIS THING IS THE UPDATED GAME BOARD", gameBoard);

  return $.ajax({
    url: app.host + '/games/' + gameId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + user.token,
    },
    data: data,
    success: res => {
    }
  });
};

const updateGameOver = () => {
  let data = {
    "game": {
      "over": true
    }
  };
  $('.game-board').hide();
  return $.ajax({
    url: app.host + '/games/' + gameId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + user.token,
    },
    data: data,
  });
};

const makeGet = () => {
  return $.ajax({
    url: app.host + '/games/' + gameId,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  });
};

const makeUpdate = () => {
  let data = {
  "game": {
    "id": 1,
    "cells": ["o","x","o","x","o","x","o","x","o"],
    "over": true,
    "player_x": {
      "id": 1,
      "email": "and@and.com"
    },
    "player_o": {
      "id": 3,
      "email": "dna@dna.com"
    }
  }
};
  return $.ajax({
    url: app.host + '/games/' + gameId,
    method: 'PATCH',
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
  // displayScores,
  // patchScores,
  makeGet,
  makeUpdate,
  updateGameBoard,
  updateGameOver
};
