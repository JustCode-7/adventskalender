import { Injectable } from '@angular/core';
import { Fenster } from './calender/calender.component';

@Injectable({
  providedIn: 'root',
})
export class CalenderServiceService {
  getCurrentYear() {
    return new Date().getFullYear();
  }

  /**
   * Shuffles array in place.
   */
  shuffle(arr: Fenster[]) {
    let random;
    let temp;
    let index;
    for (index = arr.length - 1; index > 0; index--) {
      random = Math.floor(Math.random() * (index + 1));
      temp = arr[index];
      arr[index] = arr[random];
      arr[random] = temp;
    }
    return arr;
  }
}
