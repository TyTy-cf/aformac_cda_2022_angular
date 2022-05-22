import { Component } from '@angular/core';
import {Battleground} from "../../models/rpg/battleground";

@Component({
  selector: 'app-battleground',
  templateUrl: './battleground.component.html',
  styleUrls: ['./battleground.component.scss']
})
export class BattlegroundComponent {

  battleground: Battleground;

  constructor() {
    this.battleground = this.newFight();
  }

  newFight(): Battleground {
    return new Battleground('Kevin', 'Mickael', 'Jeoffrey', 'Sophana', 'Ayoub', 'Joao');
  }
}
