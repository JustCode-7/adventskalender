import { Injectable } from '@angular/core';
import { PictureService } from "./picture.service";

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
  hiddenCalender: boolean = true;
  username: string | undefined = '';



  constructor(public pictureService: PictureService) {}

  public initFensters(): Fenster[] {
    if (this.loadCalenderFromLocalStorage() == null) {
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
    this.fensters = this.loadCalenderFromLocalStorage();
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

  storeCalenderInLocalStorage(s: any) {
    localStorage.setItem(this.getCurrentYear().toString(), JSON.stringify(s));
  }

  loadCalenderFromLocalStorage() {
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

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max) + 1;
  }

  shuffleFenters(): Fenster[] {
    if (this.fensters.every((value, index) => value === this.fensters[index])) {
      this.shuffle(this.fensters);
    }
    return this.fensters;
  }

  public persistCalender() {
    this.storeCalenderInLocalStorage(this.fensters);
  }

  public setPictures(fenster: Fenster) {
    let num = Number.parseInt(fenster.text);
    if (num == 24) {
      //Weihnachten
      this.setPicIfNotExists(this.pictureService.getPicFromWeihnachtenMap(), fenster)
    } else if (num == 6) {
      // nikolaus
      this.setPicIfNotExists(this.pictureService.getPicFromNikolausMap(), fenster)
    } else {
      this.setPicIfNotExists(this.pictureService.getPicFromFensterMap(), fenster)
    }
  }

  private setPicIfNotExists(image : string, currFenster: Fenster) {
    if(this.fensters.find(fenster => fenster.image == image) == undefined){
      currFenster.image = image;
    }
  }

  public currentDayCheck(fenster: Fenster): boolean {
    let dayToday = new Date().getDate();
    if (Number.parseInt(fenster.text) == dayToday) {
      return true;
    }
    return true;
  }

  public currentMonthCheck(): boolean {
    let currentMonth = new Date().getMonth() + 1;
    return 12 == currentMonth;
  }

  public getName() {
    this.username = this.loadNameFromLocalStorage();
    return this.username;
  }

  storeNameInLocalStorage(s: string | undefined ) {
    if(s == undefined || s == ''){
      s = '';
    }else{
      s = 'von ' + s;
    }
    localStorage.setItem('name', JSON.stringify(s));
  }

  loadNameFromLocalStorage() {
    return JSON.parse(localStorage.getItem('name')!);
  }

  sethiddenCalender(value: boolean) {
    this.hiddenCalender = value;
  }

}
