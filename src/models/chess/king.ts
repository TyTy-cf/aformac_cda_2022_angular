
import {Piece} from "./piece";
import {Case} from "./case";
import {Region} from "../geo-gouv/region";

export class King extends Piece {

  constructor(color: string) {
    super(color, '/assets/images/chess/king-' + color + '.png');
  }

  move(initialCase: Case, board: Case[]): Case[] {
    return [];
  }

}
