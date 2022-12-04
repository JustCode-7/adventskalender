import { Component } from '@angular/core';
import { CalenderService } from '../service/calender.service';

@Component({
  selector: 'app-titel',
  templateUrl: './titel.component.html',
  styleUrls: ['./titel.component.scss'],
})
export class TitelComponent {
  constructor(public localCalService: CalenderService) {}

  installApp() {
    //TODO: fill with logic
  }

  showQR() {
    //TODO: fill with logic
  }

  showLink() {
    //TODO: fill with logic
  }

  disableNotifications() {
    //TODO: fill with logic, after implement EnableNotifications
  }
}
