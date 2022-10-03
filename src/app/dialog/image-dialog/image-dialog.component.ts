import { Component } from '@angular/core';
import { CalenderService } from '../../service/calender.service';

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.scss'],
})
export class ImageDialogComponent {
  hidden = true;
  image = '';

  constructor(private calenderService: CalenderService) {
    this.image = this.calenderService.getImageFromDialog();
  }
}
