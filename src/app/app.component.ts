import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Zuper Projekt Aformac';
  titleChanged: boolean = false;
  array: number[] = [1, 2, 3, 4, 5, 6];
  // map: Map<number, string[]> = new Map<number, string[]>();

  changeTitle(): void {
    this.title = 'Aformac Zuper Projekt';
    this.titleChanged = !this.titleChanged;
  }

  newFunction() {
    console.log('an other function')
  }
}
