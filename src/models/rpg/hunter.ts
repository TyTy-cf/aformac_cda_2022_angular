import {Hero} from "./hero";

export class Hunter extends Hero {

  constructor(name: string) {
    super(name, 330, 58, 42, 3, 35, 5, 'assets/images/rpg/hunter.png', '#46b446');
  }

  levelUp() {
    super.levelUp(); // rappel la classe mère
    if (this._level % this._defense === 0) {
      this._defense++;
    }
  }

}
