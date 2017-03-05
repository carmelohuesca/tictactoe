import { Player } from './Player';

export class CustomPlayer extends Player {

  value: number;

  constructor(name: string, value: number) {
    super(name);
    this.value = value;
  }
}
