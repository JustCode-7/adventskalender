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

  store(s: any) {
    localStorage.setItem(this.getCurrentYear().toString(), JSON.stringify(s));
  }

  load() {
    return JSON.parse(localStorage.getItem(this.getCurrentYear().toString())!);
  }

  setImageForDialog(fenster: Fenster) {
    this.image = fenster.image;
  }

  getImageFromDialog() {
    return this.image;
  }

  /**
   * extract to Service
   */
  getRandomInt(max: number) {
    return Math.floor(Math.random() * max) + 1;
  }

  /**
   * extract to Service
   */
  shuffleFenters(array: Fenster[]): Fenster[] {
    if (array.every((value, index) => value === array[index])) {
      this.shuffle(array);
    }
    return array;
  }
}
