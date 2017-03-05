import { Player } from './Player';

describe('Jugador (Player)', () => {

  const PLAYER_NAME = 'Carmelo';
  let instance: Player;

  beforeEach(() => {
    instance = new Player(PLAYER_NAME);
  });

  it('la instancia existe', () => {
    expect(instance).toBeDefined();

  });

  it('se almacena el nombre del jugador', () => {
    expect(instance.name).toBeDefined();
    expect(instance.name).toBe(PLAYER_NAME);

  });

});
