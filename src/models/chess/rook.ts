
import {Piece} from "./piece";

export class Rook extends Piece {

  constructor(color: string) {
    super('/assets/images/chess/rook-' + color + '.png');
  }

  move(): void {
    console.log('Move de la tour !');
  }

}
