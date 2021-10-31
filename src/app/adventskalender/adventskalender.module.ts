import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridComponent} from './grid/grid.component';
import {AdventskalenderComponent} from './adventskalender/adventskalender.component';

@NgModule({
  declarations: [
    GridComponent,
    AdventskalenderComponent
  ],
  imports: [CommonModule],
  exports: [AdventskalenderComponent]
})
export class AdventskalenderModule {
}
