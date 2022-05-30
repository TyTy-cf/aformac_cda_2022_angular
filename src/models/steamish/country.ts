import {ISerializable} from "./interfaces/i-serializable";

export class Country implements ISerializable {

  private _id: number = 0;
  private _name: string = '';
  private _nationality: string = '';
  private _urlFlag: string = '';
  private _code: string = '';
  private _slug: string = '';

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nationality(): string {
    return this._nationality;
  }

  set nationality(value: string) {
    this._nationality = value;
  }

  get urlFlag(): string {
    return this._urlFlag;
  }

  set urlFlag(value: string) {
    this._urlFlag = value;
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get slug(): string {
    return this._slug;
  }

  set slug(value: string) {
    this._slug = value;
  }

  postSerializable(): any {
    return {
      name: this.name,
      nationality: this.nationality,
      code: this.code
    };
  }

  putSerializable(): any {
    return this.postSerializable();
  }
}
