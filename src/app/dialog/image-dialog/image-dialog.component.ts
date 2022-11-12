import { Component } from '@angular/core';
import { CalenderService } from '../../service/calender.service';

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.scss'],
})
export class ImageDialogComponent {
  openleft = '';
  openright = '';
  image = '';
  closeButtonColor = '';

  //indicator for isOpened -> no openAnimation -> can get over Fenster-attributes
  constructor(private calenderService: CalenderService) {
    this.image = this.calenderService.getImageFromDialog();
  }

  toggleDoor() {
    this.openleft = 'openleft';
    this.openright = 'openright';
    this.closeButtonColor = 'accent';
  }

  closeButton() {
    this.calenderService.closeWindow();
  }
}
