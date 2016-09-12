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


// let winCon = [[0, 1, 2], [3, 4, 5],
//   [6, 7, 8], [0, 3, 6], [0, 4, 8],
//   [1, 4, 7], [2, 5, 8], [6, 4, 2]];

//the board will have 9 "cells"

//each cell has an "id" of its position, by class name, EXAMPLE: tr, tl, tm

//NOTE CONTINUE HERE NOTE CONTINUE HERE NOTE


// i want to check if the cell is empty and assign its value to empty
//NOTE ^ i assigned a value of XO up in wasClicked function
//then on click i want to assign it a value of X or O, by hiding one
//or replacing it with ONLY one.
//then i will alternate which one is replaced.
//this way i can make an if statement to check if the value is X or O
//in the order of winConditions then set the game to finished
//havent made a function to set the game to START, or
// game finished = false;
//when a game is finished i need to reset the board
