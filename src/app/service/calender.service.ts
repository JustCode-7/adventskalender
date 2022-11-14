import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

export class Fenster {
  color!: string;
  cols!: number;
  rows!: number;
  text!: string;
  imageHidden: boolean = true;
  opened: boolean = false;
  image!: string;
}

@Injectable({
  providedIn: 'root',
})
export class CalenderService {
  fensters: Fenster[] = [];
  fensterFromDialog: Fenster = new Fenster();

  constructor(private dialog: MatDialog) {}

  public initFensters(): Fenster[] {
    if (this.loadFromLocalStorage() == null) {
      let tag: number = 1;
      for (let i = 1; i <= 25; i++) {
        let fenster = new Fenster();
        if (i <= 24) {
          fenster.text = tag.toString();
          tag++;
          fenster.cols = this.getRandomInt(2) + 2;
          fenster.rows = this.getRandomInt(2) + 3;
        }
        this.setPictures(fenster);
        this.fensters.push(fenster);
      }
      this.fensters = this.shuffleFenters();
      this.persistCalender();
    }
    this.fensters = this.loadFromLocalStorage();
    return this.fensters;
  }

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

  storeInLocalStorage(s: any) {
    localStorage.setItem(this.getCurrentYear().toString(), JSON.stringify(s));
  }

  loadFromLocalStorage() {
    return JSON.parse(localStorage.getItem(this.getCurrentYear().toString())!);
  }

  clearLocalStorageLastYear() {
    if (localStorage.getItem((this.getCurrentYear() - 1).toString()!) != null) {
      localStorage.removeItem((this.getCurrentYear() - 1).toString()!);
    }
  }

  setFensterForDialog(fenster: Fenster) {
    this.fensterFromDialog = fenster;
  }

  getFensterFromDialog() {
    return this.fensterFromDialog;
  }

  closeWindow() {
    this.dialog.closeAll();
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
  shuffleFenters(): Fenster[] {
    if (this.fensters.every((value, index) => value === this.fensters[index])) {
      this.shuffle(this.fensters);
    }
    return this.fensters;
  }

  public persistCalender() {
    this.storeInLocalStorage(this.fensters);
  }

  /**
   * hier braucht es noch eine geile Idee
   * um das so dynamisch wie möglich und ohne merkbare Wiederholung
   * zu lösen
   * @param fenster
   * */

  public setPictures(fenster: Fenster) {
    let num = Number.parseInt(fenster.text);
    if (num == 24) {
      //Weihnachten
      fenster.image =
        'https://cdn01.xn--weihnachtsgrsse24-e3b.de/files/theme/Bilder/Startseite/weihnachtsgruesse-neu.jpg';
    } else if (num == 6) {
      // nikolaus
      fenster.image =
        'https://www.weihnachtsgedichte-sprueche.net/weihnachtssprueche/kurze/spruchbilder/kerzenbild-plaetzchen-text-unsereseele.jpg';
    } else if (num % 2 == 0) {
      fenster.image =
        'https://www.weihnachtsgedichte-sprueche.net/weihnachtssprueche/kurze/spruchbilder/kerzenbild-plaetzchen-text-unsereseele.jpg';
    } else if (num % 3 == 0) {
      fenster.image =
        'https://material.angular.io/assets/img/examples/shiba2.jpg';
    } else if (num % 5 == 0) {
      fenster.image =
        'https://www.sprueche-und-wuensche.com/img/weihnachtssprueche.jpg';
    } else {
      fenster.image =
        'https://cdn01.xn--weihnachtsgrsse24-e3b.de/files/theme/Bilder/Startseite/weihnachtsgruesse-freundin.jpg';
    }
  }

  public currentDayCheck(fenster: Fenster): boolean {
    let dayToday = new Date().getDate();
    if (Number.parseInt(fenster.text) == dayToday) {
      return true;
    }
    return false;
  }

  public currentMonthCheck(): boolean {
    let currentMonth = new Date().getMonth() + 1;
    if (Number.parseInt('12') == currentMonth) {
      return true;
    }
    return false;
  }
}
