import {Hero} from "./hero";

export class Rogue extends Hero {

  constructor(name: string) {
    super(name, 320, 52, 42, 3, 33, 3, 'assets/images/rpg/rogue.png', '#fffa58');
  }

  levelUp() {
    super.levelUp(); // rappel la classe mère
    if (this._level % 4 === 0) {
      this._defense++;
    }
    this._criticalChance += 0.08;
    this._criticalChance = Math.round(this._criticalChance * 100) / 100;
  }

}
