import { Component, OnInit } from '@angular/core';
import {CalenderServiceService} from "../service/calender-service.service";

@Component({
  selector: 'app-titel',
  templateUrl: './titel.component.html',
  styleUrls: ['./titel.component.scss']
})
export class TitelComponent implements OnInit {
  localCalService!: CalenderServiceService;

  constructor(calService: CalenderServiceService) {
    this.localCalService = calService;
  }

  ngOnInit(): void {
  }

}
