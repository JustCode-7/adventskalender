import { Component, OnInit } from '@angular/core';
import { CalenderService } from '../../service/calender.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-calender-main',
  templateUrl: './calender-main.component.html',
  styleUrls: ['./calender-main.component.scss'],
})
export class CalenderMainComponent implements OnInit {
  backgroundUrl: string = '';
  show: boolean = true;
  private projectAssets = 'https://justcode-7.github.io/adventskalender/assets/';

  constructor(public calenderService: CalenderService,  private router: Router) {
    this.show = true; //TODO: activate this.calenderService.currentMonthCheck()
  }



  ngOnInit(): void {
    if (this.calenderService.loadNameFromLocalStorage() == null) {
      this.router.navigate(['start']);
    }
    //this.calenderService.currentMonthCheck()
    if (this.show) {
      // if currentMonth and already checked in (from localStore)

      //TODO: its december init ImageMaps
      // background
      this.backgroundUrl = this.projectAssets + 'background/HDpic.jpg';
      // fensterimages init List
    } else {
      this.backgroundUrl = this.projectAssets + 'background/NotYet.gif';
    }
    this.calenderService.clearLocalStorageLastYear();
  }
}