const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    this.cursor.setBackgroundColor();

    // Replace this with real commands
    Screen.addCommand('t', 'test command (remove)', TTT.testCommand);
    Screen.addCommand('up', 'move cursor up', this.cursor.up.bind(this.cursor));
    Screen.addCommand('down', 'move cursor down', this.cursor.down.bind(this.cursor));
    Screen.addCommand('left', 'move cursor left', this.cursor.left.bind(this.cursor));
    Screen.addCommand('right', 'move cursor right', this.cursor.right.bind(this.cursor));
    // Screen.addCommand('space', 'places X or O according to player turn', TTT.makeMove);

    Screen.render();
  }

  // Remove this
  static testCommand() {
    console.log("TEST COMMAND");
  }

  // static makeMove() {
  //   console.log("MOVE COMMAND");
  //   Screen.setGrid(row, col, this.playerTurn)
  //   if(this.playerTurn === 'O'){
  //     this.playerTurn = 'X';
  //   }else{
  //     this.playerTurn = 'O';
  //   }
  // }


  static checkWin(grid) {

    let flag = false;
    let countO = 0;
    let countX = 0;
    let winner = ' ';
    let count = 0;

    // Record empty grid as no winner
    grid.forEach((row) => {
      row.forEach((ele) => {
        if(ele !== ' '){
          count++;
          flag = true;
        }
      });
    });
    // Record empty grid as no winner

    // Recognize horizontal wins
    grid.forEach((row) => {
      countO = 0;
      countX = 0;
      row.forEach((ele) => {
        if(ele === 'O'){
          countO++;
        }else if(ele === 'X'){
          countX++;
        }
      });
      if(countO === row.length){
        winner = 'O';
      }else if(countX === row.length){
        winner = 'X';
      }
    });
    if(winner === 'O' || winner === 'X'){
      return winner;
    }
    // Recognize horizontal wins

    // Recognize vertical wins
    winner = ' ';
    for(let i = 0; i < grid.length; i++){
      countO = 0;
      countX = 0;
      for(let j = 0; j < grid.length; j++){
        if(grid[j][i] === 'O'){
          countO++;
        }else if(grid[j][i] === 'X'){
          countX++;
        }
      }
      if(countO === grid.length){
        winner = 'O';
      }else if(countX === grid.length){
        winner = 'X';
      }
    }
    if(winner === 'O' || winner === 'X'){
      return winner;
    }
    // Recognize vertical wins


    // Recognize diagonal wins
    winner = ' ';
    countO = countX = 0;
    // Main diagonal
    for(let i = 0; i < grid.length; i++){
      if(grid[i][i] === 'O'){
        countO++;
      }else if(grid[i][i] === 'X'){
        countX++;
      }
    }
    if(countO === grid.length){
      winner = 'O';
    }else if(countX === grid.length){
      winner = 'X';
    }
    if(winner === 'O' || winner === 'X'){
      return winner;
    }
    // Main diagonal

    // Secondary diagonal
    countO = countX = 0;
    for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < grid.length; j++){
        if(i + j === grid.length - 1){
          if(grid[i][j] === 'O'){
            countO++;
          }else if(grid[i][j] === 'X'){
            countX++;
          }
        }
      }
    }
    if(countO === grid.length){
      winner = 'O';
    }else if(countX === grid.length){
      winner = 'X';
    }
    // Secondary diagonal
    // Recognize diagonal wins

    if(winner === 'O' || winner === 'X'){
      return winner;
    }else if(count === grid.length * grid.length){
      return 'T';
    }else if(flag === false){
      return flag;
    }else{
      return false;
    }

    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended

  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

module.exports = TTT;
