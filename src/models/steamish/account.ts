import {Country} from "./country";
import {IPostAccount} from "./interfaces/i-post-account";
import {ISerializable} from "./interfaces/i-serializable";

export class Account implements ISerializable {

  private _id: number = 0;
  private _name: string = '';
  private _email: string = '';
  private _nickname: string = '';
  private _wallet: number = 0;
  private _slug: string = '';
  private _createdAt: Date = new Date();
  private _country: Country|undefined;
  private _totalPlayedTime: number = 0;

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

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get nickname(): string {
    return this._nickname;
  }

  set nickname(value: string) {
    this._nickname = value;
  }

  get wallet(): number {
    return this._wallet;
  }

  set wallet(value: number) {
    this._wallet = value;
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

  get country(): Country|undefined {
    return this._country;
  }

  set country(value: Country|undefined) {
    this._country = value;
  }

  get totalPlayedTime(): number {
    return this._totalPlayedTime;
  }

  set totalPlayedTime(value: number) {
    this._totalPlayedTime = value;
  }

  postSerializable(): IPostAccount {
    return {
      name: this.name,
      email: this.email,
      nickname: this.nickname
    };
  }

  putSerializable(): any {
    return {
      nickname: this.nickname,
      country: {
        slug: this.country?.slug
      },
    };
  }

}
