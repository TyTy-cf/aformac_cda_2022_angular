import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Input()
  isVisible: boolean = true;

  urlsRoute: string[] = [
    'Chess',
    'Regions',
    'Battleground'
  ];

  constructor(public router: Router) { }

}
