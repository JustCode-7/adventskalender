import { Component } from '@angular/core';
import { CalenderService, Fenster } from '../../service/calender.service';

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
  fenster: Fenster;

  //indicator for isOpened -> no openAnimation -> can get over Fenster-attributes
  constructor(private calenderService: CalenderService) {
    this.image = this.calenderService.getFensterFromDialog().image;
    this.fenster = this.calenderService.getFensterFromDialog();
  }

  toggleDoor() {
    setTimeout(() => {
      this.fenster.opened = true;
    }, 2000);
    this.openleft = 'openleft';
    this.openright = 'openright';
    this.closeButtonColor = 'accent';
    this.fenster.imageHidden = false;
  }

  closeButton() {
    this.calenderService.closeWindow();
  }
}
