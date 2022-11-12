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
  gridlistcols: string = '16';
  rowHeight: string = '5:1'; // Portrait -- 10:1 for Landscape
  guttersize: string = '10px';

  constructor(private calService: CalenderService, public dialog: MatDialog) {
    this.handleGridOnOrientationChange();
  }

  ngOnInit(): void {
    if (this.calService.load() == null) {
      this.initFensters();
    }
    this.fensters = this.calService.load();
    window.addEventListener('orientationchange', () => {
      this.handleGridOnOrientationChange();
    });
    window.visualViewport.addEventListener('resize', () => {
      window.location.reload();
    });
  }

  protected openWindow(fenster: Fenster) {
    if (fenster.text != null) {
      fenster.imageHidden = false;
      fenster.open = true;
      this.setPictures(fenster);
      this.openDialog('3000ms', '1500ms', fenster);
      this.persistCalender(this.fensters);
    }
  }

  protected showContent(fenster: Fenster) {
    this.openDialog('3000ms', '1500ms', fenster);
  }

  private initFensters() {
    let tag: number = 1;
    for (let i = 1; i <= 25; i++) {
      let fenster = new Fenster();
      if (i <= 24) {
        fenster.text = tag.toString();
        tag++;
        fenster.cols = this.calService.getRandomInt(2) + 2;
        fenster.rows = this.calService.getRandomInt(2) + 3;
      }
      this.fensters.push(fenster);
    }
    this.fensters = this.calService.shuffleFenters(this.fensters);
    this.persistCalender(this.fensters);
  }

  private handleGridOnOrientationChange() {
    if (screen.orientation.type === 'landscape-primary') {
      this.rowHeight = '3:1';
      this.gridlistcols = '20';
    }
    if (screen.orientation.type === 'portrait-primary') {
      this.rowHeight = '2:1';
      this.gridlistcols = '12';
    }
  }

  private openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    fenster: Fenster
  ): void {
    this.calService.setImageForDialog(fenster);
    this.dialog.open(ImageDialogComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  private checkCurrentDay(fenster: Fenster) {
    let dayToday = new Date().getDay();
    if (Number.parseInt(fenster.text) == dayToday) {
      //openFenster
    }
  }

  /**
   * hier braucht es noch eine geile Idee
   * um das so dynamisch wie möglich und ohne merkbare Wiederholung
   * zu lösen
   * @param fenster
   * */

  private setPictures(fenster: Fenster) {
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
    this.calService.setImageForDialog(fenster);
  }

  private persistCalender(array: Fenster[]) {
    this.calService.store(array);
  }
}
