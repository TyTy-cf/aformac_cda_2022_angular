
import {Piece} from "./piece";
import {Case} from "./case";

export class Queen extends Piece {

  constructor(color: string) {
    super(color, '/assets/images/chess/queen-' + color + '.png');
  }

  move(initialCase: Case, board: Case[]): Case[] {
    return [];
  }

}
