
import {Piece} from "./piece";
import {Case} from "./case";

export class Bishop extends Piece {

  constructor(color: string) {
    super(color, '/assets/images/chess/bishop-' + color + '.png');
  }

  move(initialCase: Case, board: Case[]): Case[] {
    return [];
  }
}
