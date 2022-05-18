
import {Piece} from "./piece";
import {Case} from "./case";

export class Knight extends Piece {

  constructor(color: string) {
    super(color, '/assets/images/chess/knight-' + color + '.png');
  }

  move(initialCase: Case, board: Case[]): Case[] {
    return [];
  }
}
