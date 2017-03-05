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

  constructor(playerOne: string, playerTwo?: string) {
    this.init(playerOne, playerTwo);
  }

  init(playerOne: string, playerTwo?: string) {
    this.reset();
    this.playerOne = new CustomPlayer(playerOne, 1);
    this.playerTwo = new CustomPlayer(playerTwo || Game.AI, 2);
  }

  reset() {
    this.board = new Board();
    this.rounds = 0;
    this.status = Game.NEW_GAME;
  }

  round(player, position) {
    if (this.board.isCheckable(position)) {
      this.board.checkPosition(position, player.value);
      this.rounds++;
      if (this.board.isWinnerValue(player.value)) {
        this.status = ['ha gandao el jugador', player.name].join('');
        this.reset();
      }
      this.status = Game.WAITING;
    }
  }

}
