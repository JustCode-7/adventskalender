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
        this.fenster.opened = true;
        this.fenster.imageHidden = false;
        this.calenderService.persistCalender();
      }, 2000);
      this.openFensterAnimation();
    } else {
      this.closeButtonColor = 'warn';
    }
  }

  closeButton() {
    this.dialogRef.close();
    this.dialogRef.afterClosed().subscribe(() => {});
  }

  doubleClick() {
    if (this.imageSizeOnOpenedWindow === 'imageSizeBig') {
      this.imageSizeOnOpenedWindow = 'imageSize';
    } else {
      this.imageSizeOnOpenedWindow = 'imageSizeBig';
    }
  }

  private openFensterAnimation() {
    this.openleft = 'openleft';
    this.openright = 'openright';
    this.closeButtonColor = 'accent';
  }
}
