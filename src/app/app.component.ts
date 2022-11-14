import { Component, OnInit } from '@angular/core';
import { CalenderService } from './service/calender.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  backgroundUrl: string = '';
  show: boolean = true;

  constructor(public calenderService: CalenderService) {
    this.show = true; //TODO: activate this.calenderService.currentMonthCheck()
  }

  ngOnInit(): void {
    //this.calenderService.currentMonthCheck()
    if (this.show) {
      //TODO: its december init ImageMaps
      // background
      this.backgroundUrl = '../assets/pics/HDpic.jpg';
      // fensterimages init List
    } else {
      this.backgroundUrl = '../assets/pics/NotYet.gif';
    }
    this.calenderService.clearLocalStorageLastYear();
  }
}
