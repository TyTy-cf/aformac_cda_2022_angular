import {Component, Input} from '@angular/core';
import {Game} from "../../../models/steamish/game";

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.scss']
})
export class CardGameComponent {

  @Input()
  game: Game|undefined;

}
