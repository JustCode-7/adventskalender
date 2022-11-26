import { Component } from '@angular/core';
import { CalenderService } from '../../service/calender.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-name-dialog',
  templateUrl: './name-dialog.component.html',
  styleUrls: ['./name-dialog.component.scss'],
})
export class NameDialogComponent {
  value: string | undefined;

  constructor(
    public calenderService: CalenderService,
    private router: Router,
    private dialogRef: MatDialogRef<NameDialogComponent>
  ) {}

  setName(value: string | undefined) {
    this.calenderService.storeNameInLocalStorage(value);
    this.calenderService.sethiddenCalender(false);
    this.router.navigate(['main']);
    this.dialogRef.close();
  }
}
