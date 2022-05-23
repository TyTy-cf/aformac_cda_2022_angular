import {Component, Input} from '@angular/core';
import {Hero} from "../../models/rpg/hero";

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styleUrls: ['./card-hero.component.scss']
})
export class CardHeroComponent {

  @Input()
  hero: Hero|undefined;

}
