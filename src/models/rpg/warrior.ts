import {Hero} from "./hero";

export class Warrior extends Hero {

  constructor(name: string) {
    super(name, 360, 47, 44, 4, 39, 2);
  }

  levelUp() {
    super.levelUp(); // rappel la classe mère
    if (this._level % 3 === 0) {
      this._defense++;
    }
  }

}
