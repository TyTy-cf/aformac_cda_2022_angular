import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeConverterService {

  convertTimeToString(time: number): string {
    let hours: number = Math.floor(time / 3600);
    let minutes: number = (time % 60);
    let minutesString: string = minutes.toString();
    if (minutes < 10) {
      minutesString = '0' + minutes;
    }
    return hours + 'h' + minutesString;
  }

}
