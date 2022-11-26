import { Injectable, OnInit } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PictureService implements OnInit{
  private projectAssetsWindows = 'https://justcode-7.github.io/adventskalender/assets/windows/';
  private projectAssetsWeihnachten = 'https://justcode-7.github.io/adventskalender/assets/weihnachten/';
  private projectAssetsNikolaus = 'https://justcode-7.github.io/adventskalender/assets/nikolaus/';
  private mapFenster = new Map<number, string>();
  private mapWeihnachten = new Map<number, string>();
  private mapNikolaus = new Map<number, string>();

  ngOnInit(): void {
    this.initWeihnachtMap();
    this.initFensterMap();
    this.initNikolausMap();
    }

  initFensterMap() {
    this.mapFenster.set(1, this.projectAssetsWindows + 'dankbarkeit-kerze.jpg');
    this.mapFenster.set(2, this.projectAssetsWindows + 'kerze-plaetzchen.jpg');
    this.mapFenster.set(3, this.projectAssetsWindows + 'kerzenbild-sternen.jpg');
    this.mapFenster.set(4, this.projectAssetsWindows + 'wei3.jpgg');
    this.mapFenster.set(5, this.projectAssetsWindows + 'weihnachtskugel.jpg');
    this.mapFenster.set(6, this.projectAssetsWindows + 'dankbarkeit-kerze.jpg');
    this.mapFenster.set(7, this.projectAssetsWindows + 'weihnachtswunsch-1.jpg');
    this.mapFenster.set(7, this.projectAssetsWindows + 'weihnachtswunsch-2.jpg');
    this.mapFenster.set(8, this.projectAssetsWindows + 'weihnachtswunsch-3.jpg');
    this.mapFenster.set(10, this.projectAssetsWindows + 'weihnachtswunsch-4.jpg');
    this.mapFenster.set(11, this.projectAssetsWindows + 'weihnachtswunsch-5.jpg');
    this.mapFenster.set(12, this.projectAssetsWindows + 'weihnachtswunsch-6.jpg');
    this.mapFenster.set(13, this.projectAssetsWindows + 'winterwald.jpg');
    this.mapFenster.set(14, this.projectAssetsWindows + 'winterbluehen.jpg');
    this.mapFenster.set(15, this.projectAssetsWindows + 'winter-christbaumkugel.jpg');
    this.mapFenster.set(16, this.projectAssetsWindows + 'Weihnachtssprueche-44.jpg');
    this.mapFenster.set(17, this.projectAssetsWindows + 'Weihnachtssprueche-11.jpg');
    this.mapFenster.set(18, this.projectAssetsWindows + 'Weihnachtssprueche-10.jpg');
    this.mapFenster.set(19, this.projectAssetsWindows + 'Weihnachtssprueche-5.jpg');
    this.mapFenster.set(20, this.projectAssetsWindows + 'Weihnachtssprueche-3.jpg');
    this.mapFenster.set(21, this.projectAssetsWindows + 'weihnachtssprueche.jpg');
    this.mapFenster.set(22, this.projectAssetsWindows + 'weihgruesse.jpg');
    this.mapFenster.set(23, this.projectAssetsWindows + 'tausend-kerzen.jpg');
    this.mapFenster.set(24, this.projectAssetsWindows + 'stern-grafisch-gelb.jpg');
    this.mapFenster.set(25, this.projectAssetsWindows + 'kerzenbild-plaetzchen-text-unsereseele.jpg');
    this.mapFenster.set(26, this.projectAssetsWindows + 'geschenk-quadrat-black-herzchen.jpg');
    this.mapFenster.set(27, this.projectAssetsWindows + 'freunde-sterne.jpg');
    this.mapFenster.set(28, this.projectAssetsWindows + 'echte-dankbarkeit-schwarz-gold.jpg');
    this.mapFenster.set(29, this.projectAssetsWindows + 'christbaumkugel-text-waerme.jpg');
    this.mapFenster.set(30, this.projectAssetsWindows + 'christbaumkugel-lebenist.jpg');
    this.mapFenster.set(31, this.projectAssetsWindows + '2-weihnachten-bild-christbaumkugeln.jpg');
  }

  getPicFromFensterMap() : string {
    return this.mapFenster.get(this.getRandomInt(31))!;
  }

  initWeihnachtMap() {
    this.mapWeihnachten.set(1, this.projectAssetsWeihnachten + 'froheweihnachten-in-vier-sprachen.jpg');
    this.mapWeihnachten.set(2, this.projectAssetsWeihnachten + 'nuesse-braun-schriftzug-frohe-weihnachten.jpg');
    this.mapWeihnachten.set(3, this.projectAssetsWeihnachten + 'schnee-frohe-weihnachten.jpg');
    this.mapWeihnachten.set(4, this.projectAssetsWeihnachten + 'spitzbuben-frohe-weihnachten.jpg');
    this.mapWeihnachten.set(5, this.projectAssetsWeihnachten + 'weihnachtssprueche3.jpg');
    this.mapWeihnachten.set(6, this.projectAssetsWeihnachten + 'Weihnachtssprueche-22.jpg');
  }
  getPicFromWeihnachtenMap() : string {
    return this.mapWeihnachten.get(this.getRandomInt(6))!;
  }
  initNikolausMap() {
    this.mapNikolaus.set(1, this.projectAssetsNikolaus + 'nikolaus_4.jpg');
    this.mapNikolaus.set(2, this.projectAssetsNikolaus + 'nikolaus_11.jpg');
    this.mapNikolaus.set(3, this.projectAssetsNikolaus + 'nikolaus_20.jpg');
    this.mapNikolaus.set(4, this.projectAssetsNikolaus + 'nikolaus_24.jpg');
  }
  getPicFromNikolausMap() : string {
    return this.mapNikolaus.get(this.getRandomInt(4))!;
  }
  getRandomInt(max: number): number {
    return Math.floor(Math.random() * max) + 1;
  }
}
