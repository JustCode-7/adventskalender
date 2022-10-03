import { Component, OnInit } from '@angular/core';
import { CalenderService } from '../service/calender.service';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from '../dialog/image-dialog/image-dialog.component';

export class Fenster {
  color!: string;
  cols!: number;
  rows!: number;
  text!: string;
  imageHidden: boolean = true;
  open: boolean = false;
  image!: string;
}

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
})
export class CalenderComponent implements OnInit {
  fensters: Fenster[] = [];
  localCalService!: CalenderService;
  gridlistcols: string = '7';

  constructor(calService: CalenderService, public dialog: MatDialog) {
    this.localCalService = calService;
  }

  initFensters() {
    let tag: number = 1;
    for (let i = 1; i <= 28; i++) {
      let fenster = new Fenster();
      if (i <= 24) {
        fenster.text = tag.toString();
        tag++;
        fenster.cols = this.getRandomInt(3);
        fenster.rows = this.getRandomInt(2);
      } else {
        fenster.cols = 1;
        fenster.rows = 1;
      }
      this.fensters.push(fenster);
    }
    this.shuffleFenters(this.fensters);
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max) + 1;
  }

  ngOnInit(): void {
    if (this.localCalService.parse() == null) {
      this.initFensters();
    }
    this.fensters = this.localCalService.parse();
  }

  openWindow(fenster: Fenster) {
    if (fenster.text != null) {
      fenster.imageHidden = false;
      fenster.open = true;
      this.setPictures(fenster);
      this.openDialog('3000ms', '1500ms', fenster);
      this.localCalService.stringify(this.fensters);
    }
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    fenster: Fenster
  ): void {
    this.localCalService.setImageForDialog(fenster);
    this.dialog.open(ImageDialogComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  showContent(fenster: Fenster) {
    this.openDialog('3000ms', '1500ms', fenster);
  }

  /**
   * hier braucht es noch eine geile Idee
   * um das so dynamisch wie möglich und ohne merkbare Wiederholung
   * zu lösen
   * @param fenster
   * @private
   */
  private setPictures(fenster: Fenster) {
    let num = Number.parseInt(fenster.text);
    if (num == 24) {
      fenster.image =
        'https://cdn01.xn--weihnachtsgrsse24-e3b.de/files/theme/Bilder/Startseite/weihnachtsgruesse-neu.jpg';
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
    this.localCalService.setImageForDialog(fenster);
  }

  private shuffleFenters(array: Fenster[]) {
    if (array.every((value, index) => value === array[index])) {
      this.localCalService.shuffle(array);
    }
    this.localCalService.stringify(array);
    this.fensters = array;
  }
}
