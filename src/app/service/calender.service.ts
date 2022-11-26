import { Injectable, OnInit } from '@angular/core';

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
export class CalenderService implements OnInit {
  fensters: Fenster[] = [];
  fensterFromDialog: Fenster = new Fenster();
  hiddenCalender: boolean = true;
  username: string | undefined = '';
  private projectAssets = 'https://justcode-7.github.io/adventskalender/assets/';


  constructor() {}

  ngOnInit(): void {
  }

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
    this.storeCalenderInLocalStorage(this.fensters);
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

  initFensterMap() {

    let map = new Map<number, String>();
    map.set(1, this.projectAssets + 'windows/dankbarkeit-kerze.jpg');
    map.set(2, this.projectAssets + 'windows/kerze-plaetzchen.jpg');
    map.set(3, this.projectAssets + 'windows/kerzenbild-sternen.jpg');
    map.set(4, this.projectAssets + 'windows/wei3.jpgg');
    map.set(5, this.projectAssets + 'windows/dankbarkeit-kerze.jpg');
    //nikolaus
    map.set(6, this.projectAssets + 'windows/dankbarkeit-kerze.jpg');
    map.set(7, this.projectAssets + 'windows/dankbarkeit-kerze.jpg');
    map.set(7, this.projectAssets + 'windows/dankbarkeit-kerze.jpg');
    map.set(8, this.projectAssets + 'windows/dankbarkeit-kerze.jpg');
    map.set(10, this.projectAssets + 'windows/dankbarkeit-kerze.jpg');
    map.set(11, this.projectAssets + 'windows/dankbarkeit-kerze.jpg');
    map.set(12, this.projectAssets + 'windows/dankbarkeit-kerze.jpg');
    map.set(13, this.projectAssets + 'windows/dankbarkeit-kerze.jpg');
    map.set(14, this.projectAssets + 'windows/dankbarkeit-kerze.jpg');
    map.set(15, this.projectAssets + 'windows/dankbarkeit-kerze.jpg');
    map.set(16, this.projectAssets + 'windows/dankbarkeit-kerze.jpg');
    map.set(17, this.projectAssets + 'windows/dankbarkeit-kerze.jpg');
    map.set(18, this.projectAssets + 'windows/dankbarkeit-kerze.jpg');
    map.set(19, this.projectAssets + 'windows/dankbarkeit-kerze.jpg');
    map.set(20, this.projectAssets + 'windows/dankbarkeit-kerze.jpg');
    map.set(21, this.projectAssets + 'windows/dankbarkeit-kerze.jpg');
    map.set(22, this.projectAssets + 'windows/dankbarkeit-kerze.jpg');
    map.set(23, this.projectAssets + 'windows/dankbarkeit-kerze.jpg');
    //Weihnachten
    map.set(24, this.projectAssets + 'windows/dankbarkeit-kerze.jpg');


  }

}
