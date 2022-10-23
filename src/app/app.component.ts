import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'anvendtskalender-app';
  //TODO: change pic per year
  backgroundUrl = '../assets/pics/HDpic.jpg';
}
