import { Component, OnInit } from '@angular/core';
import { CalenderService } from '../../service/calender.service';
import { Router } from "@angular/router";
import { PictureService } from "../../service/picture.service";

@Component({
  selector: 'app-calender-main',
  templateUrl: './calender-main.component.html',
  styleUrls: ['./calender-main.component.scss'],
})
export class CalenderMainComponent implements OnInit {
  backgroundUrl: string = '';
  show: boolean = true;

  constructor(private calenderService: CalenderService, private pictureService : PictureService,  private router: Router) {
    this.show = true; //TODO: activate this.calenderService.currentMonthCheck()
  }



  ngOnInit(): void {
    if (this.calenderService.loadNameFromLocalStorage() == null) {
      this.router.navigate(['start']);
    }

    this.handlebackgroundImageSelect();
    this.calenderService.clearCalenderLastYearFromLocalStorage();
    this.calenderService.clearBackgroundLastYearFromLocalStorage();
  }

  handlebackgroundImageSelect(){
    if (this.show) {
      if(this.calenderService.loadBackgroundFromLocalStorage() == null){
        this.backgroundUrl = this.pictureService.getPicFromBackgroundMap();
        this.calenderService.storeBackgroundInLocalStorage(this.backgroundUrl);
      }else{
        this.backgroundUrl = this.calenderService.loadBackgroundFromLocalStorage();
      }
    } else {
      this.backgroundUrl = this.pictureService.getNotYetpic();
    }
  }
}
