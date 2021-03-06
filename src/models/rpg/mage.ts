import {Hero} from "./hero";

export class Mage extends Hero {

  constructor(name: string) {
    super(name, 300, 58, 52, 2, 25, 4, 'assets/images/rpg/mage.png', '#43f3ff');
  }

  levelUp() {
    super.levelUp(); // rappel la classe mère
    if (this._level % 5 === 0) {
      this._defense++;
    }
  }

}
