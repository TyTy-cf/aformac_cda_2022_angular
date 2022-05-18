
import {Piece} from "./piece";

export class Knight extends Piece {

  constructor(color: string) {
    super('/assets/images/chess/knight-' + color + '.png');
  }

  move(): void {
    console.log('Move du chevalier !');
  }

}