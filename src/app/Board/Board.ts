export class Board {

  board: Array<any> = [];

  constructor() {
    this.init();
  }

  init() {
    this.reset();
  }

  reset() {
    this.board = [];
    for (let index = 0; index < 9; ++index) {
      this.board.push(0);
    }
  }

  isCheckable(position: number): boolean {
    return this.board[this.validPosition(position)] === 0;
  }

  isValidPosition(position: number) {
    return position <= this.board.length;
  }

  validPosition(position: number) {
    return (this.isValidPosition(position)) ? position : 0;
  }

  checkPosition(position: number, value: number) {
    if (this.isCheckable(position)) {
      this.board[position] = value;
    }
  }

  isWinnerValue(value: number): boolean {
    let result = false;
    // rows
    result = result || this.board[0] === value && this.board[1] === value && this.board[2] === value;
    result = result || this.board[3] === value && this.board[4] === value && this.board[5] === value;
    result = result || this.board[6] === value && this.board[7] === value && this.board[8] === value;
    // columns
    result = result || this.board[0] === value && this.board[3] === value && this.board[6] === value;
    result = result || this.board[1] === value && this.board[4] === value && this.board[7] === value;
    result = result || this.board[2] === value && this.board[5] === value && this.board[8] === value;
    // diagonals
    result = result || this.board[0] === value && this.board[4] === value && this.board[8] === value;
    result = result || this.board[2] === value && this.board[4] === value && this.board[6] === value;
    return result;
  }

}
