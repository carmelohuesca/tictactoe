import { Game } from './Game';

describe('Game', () => {
  let instance: Game;
  const PLAYER_ONE = 'pepe';
  const PLAYER_TWO = 'jose';

  beforeEach(() => {
    instance = new Game(PLAYER_ONE, PLAYER_TWO);
  });

  it('El juego se instancia', () => {
    expect(instance).toBeDefined();
  });

  describe('inicialmente', () => {
    it('las rondas se almacenan en "rounds" se inicia a 0', () => {
      expect(instance.rounds).toBeDefined();
    });
    it('el juego tiene un tablero', () => {
      expect(instance.board).toBeDefined();
    });
    it('el juego tiene dos jugadores', () => {
      expect(instance.playerOne).toBeDefined();
      expect(instance.playerTwo).toBeDefined();
    });
    it('el juego puede crearse con un jugador', () => {
      instance = new Game(PLAYER_ONE);
      expect(instance.playerOne.name).toBe(PLAYER_ONE);
      expect(instance.playerTwo.name).toBe(Game.AI);
    });
    it('el juego puede crearse con dos jugadores', () => {
      instance = new Game(PLAYER_ONE, PLAYER_TWO);
      expect(instance.playerOne.name).toBe(PLAYER_ONE);
      expect(instance.playerTwo.name).toBe(PLAYER_TWO);
    });
  });

  describe('en una ronda', () => {
    it('el jugador 1 elige la posición 0', () => {
      expect(instance.rounds).toBe(0);
      instance.round(0);
      expect(instance.rounds).toBe(1);
    });
    it('el jugador 2 elige la posición 1', () => {
      expect(instance.rounds).toBe(0);
      instance.round(1);
      expect(instance.rounds).toBe(1);
    });
    it('el jugador 2 elige la posición 1 que ya ha sido elegida', () => {
      expect(instance.rounds).toBe(0);
      instance.round(0);
      expect(instance.rounds).toBe(1);
      instance.round(0);
      expect(instance.rounds).toBe(1);
    });
  });

  describe('desarrollo del juego', () => {
    it('El juego se reinicia cuando gana algún jugador', () => {
      instance.round(0);
      instance.round(3);
      instance.round(1);
      instance.round(4);
      instance.round(2);
      expect(instance.rounds).toBe(0);
      expect(instance.status).toBe(Game.WAITING);
    });
  });

});

