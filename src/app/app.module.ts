import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AdventskalenderModule} from "./adventskalender/adventskalender.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdventskalenderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
