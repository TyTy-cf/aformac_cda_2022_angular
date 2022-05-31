import {Country} from "./country";
import {Game} from "./game";
import {ISerializable} from "./interfaces/i-serializable";

export class Publisher implements ISerializable {

  private _id: number = 0;
  private _name: string = '';
  private _website: string = '';
  private _country: Country|undefined;
  private _games: Array<Game> = [];
  private _slug: string = '';
  private _createdAt: Date = new Date();

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get website(): string {
    return this._website;
  }

  set website(value: string) {
    this._website = value;
  }

  get country(): Country|undefined {
    return this._country;
  }

  set country(value: Country|undefined) {
    this._country = value;
  }

  get games(): Array<Game> {
    return this._games;
  }

  set games(value: Array<Game>) {
    this._games = value;
  }

  get slug(): string {
    return this._slug;
  }

  set slug(value: string) {
    this._slug = value;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  set createdAt(value: Date) {
    this._createdAt = value;
  }

  postSerializable(): any {
    return {
      name: this.name,
      website: this.website,
      country: {
        slug: this.country?.slug
      }
    };
  }
  putSerializable() {
    throw new Error("Method not implemented.");
  }
}
