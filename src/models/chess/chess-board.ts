import {Case} from "./case";
import {Piece} from "./piece";
import {Pawn} from "./pawn";
import {Rook} from "./rook";
import {Knight} from "./knight";
import {Bishop} from "./bishop";
import {Queen} from "./queen";
import {King} from "./king";

export class ChessBoard {

  private _board: Case[] = [];

  constructor() {
    let color: string = 'white';
    for (let y: number = 8; y >= 1; y--) {
      for (let x: number = 1; x <= 8; x++) {
        let piece: Piece|undefined;

        let colorPiece: string = 'black';
        if (y === 2 || y === 1) {
          colorPiece = 'white';
        }
        if (y === 7 || y === 2) {
          piece = new Pawn(colorPiece);
        }
        if ((y === 8 || y === 1) && (x === 1 || x === 8)) {
          piece = new Rook(colorPiece);
        }
        if ((y === 8 || y === 1) && (x === 2 || x === 7)) {
          piece = new Knight(colorPiece);
        }
        if ((y === 8 || y === 1) && (x === 3 || x === 6)) {
          piece = new Bishop(colorPiece);
        }
        if ((y === 8 || y === 1) && x === 4) {
          piece = new Queen(colorPiece);
        }
        if ((y === 8 || y === 1) && x === 5) {
          piece = new King(colorPiece);
        }

        this._board.push(new Case(x, y, color, piece));
        if (x !== 8) {
          if (color === 'white') {
            color = 'black';
          } else {
            color = 'white';
          }
        }
      }
    }
    console.log(this._board);
  }

  get board(): Case[] {
    return this._board;
  }
}
