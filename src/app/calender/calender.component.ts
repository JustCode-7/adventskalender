import { Component, OnInit } from '@angular/core';
import { CalenderServiceService } from '../service/calender-service.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ImageDialogComponent} from "../dialog/image-dialog/image-dialog.component";

export class Fenster {
  color!: string;
  cols!: number;
  rows!: number;
  text!: string;
  imageHidden: boolean = true;
  opacity: number = 0.1;
  image!: string;
}

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
})
export class CalenderComponent implements OnInit {
  fensters: Fenster[] = [];
  localCalService!: CalenderServiceService;
  gridlistcols: string = '7';

  constructor(calService: CalenderServiceService, public dialog: MatDialog) {
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
    if(this.localCalService.parse() == null ){
      this.initFensters();
    }
    this.fensters = this.localCalService.parse();
  }

  private shuffleFenters(array: Fenster[]) {
     if (array.every(
        (value, index) => value === array[index])) {
       this.localCalService.shuffle(array);
    }
    this.localCalService.stringify(array)
    this.fensters = array;
  }


  openWindow(fenster : Fenster) {
    if(fenster.text != null){
      fenster.imageHidden = false;
      fenster.opacity = 1.0;
      this.openDialog('3000ms', '1500ms');
      // zufällig ein Bild auswählen und in fenster speichern.
      // fenster.image = "https://material.angular.io/assets/img/examples/shiba2.jpg";
      // fenster.image = "https://www.sprueche-und-wuensche.com/img/weihnachtssprueche.jpg";
      fenster.image = "https://www.weihnachtsgedichte-sprueche.net/weihnachtssprueche/kurze/spruchbilder/kerzenbild-plaetzchen-text-unsereseele.jpg";
      this.localCalService.stringify(this.fensters)

    }
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ImageDialogComponent, {
      width: '40%',
      height: '60%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
