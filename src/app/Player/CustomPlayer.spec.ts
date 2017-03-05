import { CustomPlayer } from './CustomPlayer';

describe('Jugador (CustomPlayer)', () => {

  const PLAYER_NAME = 'Carmelo';
  const PLAYER_VALUE = 1;
  let instance: CustomPlayer;

  beforeEach(() => {
    instance = new CustomPlayer(PLAYER_NAME, PLAYER_VALUE);
  });

  it('la instancia existe', () => {
    expect(instance).toBeDefined();
  });

  it('se almacena un valor del jugador', () => {
    expect(instance.value).toBeDefined();
    expect(instance.value).toBe(PLAYER_VALUE);
  });

});
