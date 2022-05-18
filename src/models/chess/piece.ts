
export abstract class Piece {

  protected _image: string = '';
  private _color: string = '';

  protected constructor(color: string, image: string) {
    this._image = image;
    this._color = color;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }

  abstract move(): void;

}
