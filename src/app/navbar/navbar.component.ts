import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {faArrowLeft, IconDefinition} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Input()
  isVisible: boolean = true;

  faArrowLeft: IconDefinition = faArrowLeft;

  urlsRoute: string[] = [
    'Chess',
    'Regions',
    'Battleground',
    'Register',
    'Form/publisher',
    'Games',
    'Account'
  ];

  constructor(public router: Router) { }

}
