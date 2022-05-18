import {Piece} from "./piece";

export class Pawn extends Piece {

  constructor(color: string) {
    super(color, '/assets/images/chess/pawn-' + color + '.png');
  }

  move(): void {
    console.log('Move du pion !');
  }

}
