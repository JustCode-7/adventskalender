import { Component } from '@angular/core';
import { CalenderService, Fenster } from '../../service/calender.service';
import { MatDialogRef } from '@angular/material/dialog';

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
  imageSizeOnOpenedWindow = 'imageSize';

  constructor(
    private calenderService: CalenderService,
    private dialogRef: MatDialogRef<ImageDialogComponent>
  ) {
    this.image = this.calenderService.getFensterFromDialog().image;
    this.fenster = this.calenderService.getFensterFromDialog();
  }

  toggleDoor() {
    if (this.calenderService.currentDayCheck(this.fenster)) {
      setTimeout(() => {
        this.calenderService.persistCalender();
      }, 2000);
      this.openleft = 'openleft';
      this.openright = 'openright';
      this.closeButtonColor = 'accent';
      this.fenster.imageHidden = false;
    } else {
      this.closeButtonColor = 'warn';
    }
  }

  closeButton() {
    this.dialogRef.close();
    this.dialogRef.afterClosed().subscribe(() => {
      this.fenster.opened = true;
    });
  }

  doubleClick() {
    if (this.imageSizeOnOpenedWindow === 'imageSizeBig') {
      this.imageSizeOnOpenedWindow = 'imageSize';
    } else {
      this.imageSizeOnOpenedWindow = 'imageSizeBig';
    }
  }
}
