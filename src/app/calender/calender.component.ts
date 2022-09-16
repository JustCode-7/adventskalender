import { Component, OnInit } from '@angular/core';
import { CalenderServiceService } from '../calender-service.service';
import { gOptions } from '../../resources/calendermap';

export class Fenster {
  color!: string;
  cols!: number;
  rows!: number;
  text!: string;
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

  constructor(calService: CalenderServiceService) {
    this.localCalService = calService;
  }

  initFensters() {
    let tag: number = 1;
    for (let i = 1; i <= 28; i++) {
      let fenster = new Fenster();
      if (i <= 24) {
        fenster.text = tag.toString();
        tag++;
        fenster.cols = 2; //this.getRandomInt(3);
        fenster.rows = 3; //this.getRandomInt(2);
        if (i % 3 == 0) {
          fenster.color = 'lightblue';
        } else if (i % 4 == 0) {
          fenster.color = 'lightgreen';
        } else if (i % 5 == 0) {
          fenster.color = 'lightpink';
        } else if (i % 6 == 0) {
          fenster.color = '#DDBDF1';
        } else {
          fenster.color = 'red';
        }
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
    this.initFensters();
  }

  private onlyShuffleAtNewYear(array: Fenster[]) {
    if (this.localCalService.getCurrentYear() != gOptions.currentYear) {
      this.localCalService.shuffle(array);
    }
  }

  private shuffleFenters(array: Fenster[]) {
    if (gOptions.currentCalenderArr.length == 0) {
      // JSON.stringify() to Persist !!!!

      this.localCalService.shuffle(array);
      console.error(JSON.stringify(array));
      gOptions.currentCalenderArr = array;
    } else if (
      gOptions.currentCalenderArr.length == array.length &&
      !gOptions.currentCalenderArr.every(
        (value, index) => value === array[index]
      )
    ) {
      this.onlyShuffleAtNewYear(array);
    }
    this.fensters = array;
  }
}
