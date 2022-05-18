import {Piece} from "./piece";
import {Case} from "./case";

export class Pawn extends Piece {

  constructor(color: string) {
    super(color, '/assets/images/chess/pawn-' + color + '.png');
  }

  move(initialCase: Case, board: Case[]): Case[] {
    return [];
  }
}
