'use strict';

// THINGS I WANT TO DO

//to play tic tac toe you need two players,
//i want to assign each player an id.
//to start, i will use x and o
//LOOKS LIKE:

// NOTE let player1 = 'x';
// NOTE let player2 = 'o';

// you need a board with 9 cells
// the board has 3 rows with 3 cells each
// the html LOOKS LIKE:

// NOTE <div class="col-xs-5 tr"></div>

//the JS LOOKS LIKE:

// NOTE const board = ['','','','','','','','',''];

//the board will have 9 "cells"

//each cell has an "id" of its position, by class name, EXAMPLE: tr, tl, tm

//NOTE CONTINUE HERE NOTE CONTINUE HERE NOTE

//code i think i need
// const onNewGame = function onNewGame(event) {
//   event.preventDefault();
//   $('.col-xs-5').text(' ');
//   $('.col-xs-5').data('val', '0');
//   let data = {};
//   apil.newGame(data)
//   .done(uil.newGameFinished)
//   .fail(uil.failure);
// };

// const gameBoard = ['', '', '', '', '', '', '', '', ''];
//
// let playerTurn = 0;
// let counter = 0;
//
// const wasClicked = () => {
//   if (document.getElementById('tl').clicked === true) {
//     $('tl').on('click').html('X');
//     console.log('wasClicked is', wasClicked);
//   }
//
// };

// const changeXo = () => {
//   //needs to change from x to o on click to be displayed
//
//   for(let i = 0; i < gameBoard.length; i++) {
//     playerTurn++;
//   }
//   if(playerTurn % 2 === 0 ) {
//     gameBoard[index].replace(/xo/g,'x');
//   }
//   else{
//     gameBoard[index].replace(/xo/g,'o');
//   }
//
// };

//not sure why these are here again..
// const addHandlers = () => {
//   $('tl').on('click', wasClicked);
//   $('tl').append('X');
// };
//
// module.exports = {
//   addHandlers,
// };
