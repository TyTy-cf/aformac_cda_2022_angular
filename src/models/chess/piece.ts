
export abstract class Piece {

  protected _image: string = '';

  protected constructor(image: string) {
    this._image = image;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  abstract move(): void;

}
