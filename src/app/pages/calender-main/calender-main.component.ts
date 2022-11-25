import { Component, OnInit } from '@angular/core';
import { CalenderService } from '../../service/calender.service';

@Component({
  selector: 'app-calender-main',
  templateUrl: './calender-main.component.html',
  styleUrls: ['./calender-main.component.scss'],
})
export class CalenderMainComponent implements OnInit {
  backgroundUrl: string = '';
  show: boolean = true;

  constructor(public calenderService: CalenderService) {
    this.show = true; //TODO: activate this.calenderService.currentMonthCheck()
  }

  ngOnInit(): void {
    //this.calenderService.currentMonthCheck()
    console.log('main');
    if (this.show) {
      // if currentMonth and already checked in (from localStore)

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
