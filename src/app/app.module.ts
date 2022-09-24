import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalenderComponent } from './calender/calender.component'
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatGridListModule} from "@angular/material/grid-list";
import { TitelComponent } from './titel/titel.component';
import { ImageDialogComponent } from './dialog/image-dialog/image-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    CalenderComponent,
    TitelComponent,
    ImageDialogComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatCardModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatProgressBarModule,
        MatGridListModule,
        MatDialogModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
