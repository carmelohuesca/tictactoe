import { CustomPlayer } from './../Player/CustomPlayer';
import { Player } from './../Player/Player';
import { Board } from './../Board/Board';

export class Game {

  static AI = 'AI';
  static NEW_GAME = 'Nuevo juego';
  static WAITING = 'Esperando';

  rounds: number;
  status: string;
  board: Board;
  playerOne: CustomPlayer;
  playerTwo: CustomPlayer;
  currentPlayer: CustomPlayer;

  constructor(playerOne: string, playerTwo?: string) {
    this.init(playerOne, playerTwo);
  }

  init(playerOne: string, playerTwo?: string) {
    this.reset();
    this.playerOne = new CustomPlayer(playerOne, 1);
    this.playerTwo = new CustomPlayer(playerTwo || Game.AI, 2);
    this.currentPlayer = this.playerOne;
  }

  changePlayer() {
    this.currentPlayer = (this.currentPlayer === this.playerTwo) ? this.playerOne : this.playerTwo;
  }

  reset() {
    this.board = new Board();
    this.rounds = 0;
    this.status = Game.NEW_GAME;
  }

  round(position) {
    if (this.board.isCheckable(position)) {
      this.board.checkPosition(position, this.currentPlayer.value);
      this.rounds++;
      if (this.board.isWinnerValue(this.currentPlayer.value)) {
        this.status = ['ha gandao el jugador', this.currentPlayer.name].join('');
        this.reset();
      }
      this.status = Game.WAITING;
      this.changePlayer();
    }
  }

}
