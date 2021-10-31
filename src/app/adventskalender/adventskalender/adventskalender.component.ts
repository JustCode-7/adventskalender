import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adventskalender',
  templateUrl: './adventskalender.component.html',
  styleUrls: ['./adventskalender.component.scss']
})
export class AdventskalenderComponent implements OnInit {
  title = 'Hi Peter';

  constructor() { }

  ngOnInit(): void {
  }

}
