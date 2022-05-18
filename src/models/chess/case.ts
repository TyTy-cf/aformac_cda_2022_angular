import {Piece} from "./piece";

export class Case {

  private _x: number = 0;
  private _y: number = 0;
  private _color: string = '';
  private _piece: Piece|undefined;
  private _isSelected: boolean = false;

  constructor(x: number, y: number, color: string, piece: Piece | undefined) {
    this._x = x;
    this._y = y;
    this._color = color;
    this._piece = piece;
  }

  get x(): number {
    return this._x;
  }

  set x(value: number) {
    this._x = value;
  }

  get y(): number {
    return this._y;
  }

  set y(value: number) {
    this._y = value;
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }

  get piece(): Piece | undefined {
    return this._piece;
  }

  set piece(value: Piece | undefined) {
    this._piece = value;
  }

  get isSelected(): boolean {
    return this._isSelected;
  }

  set isSelected(value: boolean) {
    this._isSelected = value;
  }
}
