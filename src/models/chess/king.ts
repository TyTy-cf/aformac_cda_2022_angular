
import {Piece} from "./piece";
import {Case} from "./case";

export class King extends Piece {

  constructor(color: string) {
    super(color, '/assets/images/chess/king-' + color + '.png');
  }

  move(initialCase: Case, board: Case[]): Case[] {
    return [];
  }

}
