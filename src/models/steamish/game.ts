
export class Game {

  private _id: string = '';
  private _name: string = '';
  private _price: number = 0;
  private _publishedAt: Date = new Date();
  private _description: string = '';
  private _thumbnailCover: string = '';
  private _thumbnailLogo: string = '';
  private _slug: string = '';

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get publishedAt(): Date {
    return this._publishedAt;
  }

  set publishedAt(value: Date) {
    this._publishedAt = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get thumbnailCover(): string {
    return this._thumbnailCover;
  }

  set thumbnailCover(value: string) {
    this._thumbnailCover = value;
  }

  get thumbnailLogo(): string {
    return this._thumbnailLogo;
  }

  set thumbnailLogo(value: string) {
    this._thumbnailLogo = value;
  }

  get slug(): string {
    return this._slug;
  }

  set slug(value: string) {
    this._slug = value;
  }
}
