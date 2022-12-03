import { Component, OnInit } from '@angular/core';
import { CalenderService, Fenster } from '../service/calender.service';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from '../dialog/image-dialog/image-dialog.component';

@Component({
  selector: 'app-calender-grid',
  templateUrl: './calender-grid.component.html',
  styleUrls: ['./calender-grid.component.scss'],
})
export class CalenderGridComponent implements OnInit {
  fensters: Fenster[] = [];
  gridlistcols: string = '16';
  rowHeight: string = '5:1'; // Portrait -- 10:1 for Landscape
  guttersize: string = '10px';

  constructor(
    private calenderService: CalenderService,
    public dialog: MatDialog
  ) {
    this.handleGridOnOrientationChange();
  }

  ngOnInit(): void {
    this.addEventListeners();
    this.fensters = this.calenderService.initFensters();
  }

  openWindow(fenster: Fenster) {
    if (fenster.text != null) {
      this.openDialog('3000ms', '1500ms', fenster);
    }
  }

  private addEventListeners() {
    window.addEventListener('orientationchange', () => {
      this.handleGridOnOrientationChange();
    });
    window.visualViewport!.addEventListener('resize', () => {
      window.location.reload();
    });
  }

  private handleGridOnOrientationChange() {
    if (screen.orientation.type === 'landscape-primary') {
      this.rowHeight = '3:1';
      this.gridlistcols = '20';
    }
    if (screen.orientation.type === 'portrait-primary') {
      this.rowHeight = '2:1';
      this.gridlistcols = '12';
    }
  }

  private openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    fenster: Fenster
  ): void {
    this.calenderService.setFensterForDialog(fenster);
    this.dialog.open(ImageDialogComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
