const Screen = require("./screen");

class Cursor {

  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.gridColor = 'black';
    this.cursorColor = 'yellow';


  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
  }

  setBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
  }

  up() {
    // Move cursor up
    console.log('UP COMMAND');
    if(this.row > 0){
      this.resetBackgroundColor();
      this.row--;
      this.setBackgroundColor();
    }

  }

  down() {
    // Move cursor down
    console.log('DOWN COMMAND');
    if(this.row < this.numRows - 1){
      this.resetBackgroundColor();
      this.row++;
      this.setBackgroundColor();
    }
  }

  left() {
    // Move cursor left
    console.log('LEFT COMMAND');
    if(this.col > 0){
      this.resetBackgroundColor();
      this.col--;
      this.setBackgroundColor();
    }
  }

  right() {
    // Move cursor right
    console.log('RIGHT COMMAND');
    if(this.col < this.numCols - 1){
      this.resetBackgroundColor();
      this.col += 1;
      this.setBackgroundColor();
    }
  }

}


module.exports = Cursor;
