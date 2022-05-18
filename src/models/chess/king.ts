
import {Piece} from "./piece";

export class King extends Piece {

  constructor(color: string) {
    super('/assets/images/chess/king-' + color + '.png');
  }

  move(): void {
    console.log('Move du roi !');
  }

}
