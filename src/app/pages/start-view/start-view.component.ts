import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalenderService } from '../../service/calender.service';
import { NameDialogComponent } from '../../dialog/name-dialog/name-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-view',
  templateUrl: './start-view.component.html',
  styleUrls: ['./start-view.component.scss'],
})
export class StartViewComponent implements OnInit {
  show: boolean = true;

  constructor(
    public calenderService: CalenderService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.calenderService.loadNameFromLocalStorage() != null) {
      this.router.navigate(['main']);
    } else {
      this.dialog.open(NameDialogComponent);
    }
  }
}
