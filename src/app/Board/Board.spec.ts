import { Board } from './Board';

describe('Tablero', () => {

  let instance: Board;
  const POSITION = 3;
  const VALUE_ONE = 1;
  const VALUE_TWO = 2;

  beforeEach(() => {
    instance = new Board();
  });

  it('existe la instancia', () => {
    expect(instance).toBeDefined();
  });

  describe('Inicialmente', () => {
    it('el tablero tiene 9 valores', () => {
      expect(instance.board.length).toBe(9);
    });
    it('todos los valores son 0 en el tablero', () => {
      for (let index = 0; index < instance.board.length; index++) {
        expect(instance.board[index]).toBe(0);
      }
    });
  });

  it('una posicion se puede marcar cuando su valor es 0', () => {
    for (let index = 0; index < instance.board.length; index++) {
      expect(instance.isCheckable(index)).toBeTruthy();
    }
  });

  it('puedo marcar una posición en el tablero', () => {
    expect(instance.isCheckable(POSITION)).toBeTruthy();
    instance.checkPosition(POSITION, VALUE_ONE);
    expect(instance.isCheckable(POSITION)).toBeFalsy();
    instance.checkPosition(POSITION, VALUE_TWO);
    expect(instance.board[POSITION]).toBe(VALUE_ONE);
  });

  it('no puedo marcar una posición en el tablero si ya tiene un valor', () => {
    expect(instance.isCheckable(POSITION)).toBeTruthy();
    instance.checkPosition(POSITION, VALUE_ONE);
    expect(instance.isCheckable(POSITION)).toBeFalsy();
    instance.checkPosition(POSITION, VALUE_TWO);
    expect(instance.board[POSITION]).toBe(VALUE_ONE);
  });


  it('gana un valor cuando hace tres en raya', () => {
    instance.checkPosition(0, VALUE_ONE);
    instance.checkPosition(1, VALUE_ONE);
    instance.checkPosition(2, VALUE_ONE);
    expect(instance.isWinnerValue(VALUE_ONE)).toBeTruthy();
  });



});

