
import {Piece} from "./piece";

export class Queen extends Piece {

  constructor(color: string) {
    super('/assets/images/chess/queen-' + color + '.png');
  }

  move(): void {
    console.log('Move de la reine !');
  }

}
