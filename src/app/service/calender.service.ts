import { Injectable } from '@angular/core';
import { Fenster } from '../calender/calender.component';

@Injectable({
  providedIn: 'root',
})
export class CalenderService {
  image: string = '';

  getCurrentYear() {
    return new Date().getFullYear();
  }

  /**
   * Shuffles array in place.
   */
  shuffle(arr: Fenster[]) {
    for (let index = arr.length - 1; index > 0; index--) {
      const random = Math.floor(Math.random() * (index + 1));
      const temp = arr[index];
      arr[index] = arr[random];
      arr[random] = temp;
    }
    return arr;
  }

  stringify(s: any) {
    localStorage.setItem(this.getCurrentYear().toString(), JSON.stringify(s));
  }

  parse() {
    return JSON.parse(localStorage.getItem(this.getCurrentYear().toString())!);
  }

  setImageForDialog(fenster: Fenster) {
    this.image = fenster.image;
  }

  getImageFromDialog() {
    return this.image;
  }
}
