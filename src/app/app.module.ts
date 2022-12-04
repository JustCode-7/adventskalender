import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalenderGridComponent } from './calendergrid/calender-grid.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { TitelComponent } from './titel/titel.component';
import { ImageDialogComponent } from './dialog/image-dialog/image-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { NameDialogComponent } from './dialog/name-dialog/name-dialog.component';
import { StartViewComponent } from './pages/start-view/start-view.component';
import { CalenderMainComponent } from './pages/calender-main/calender-main.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    CalenderGridComponent,
    TitelComponent,
    ImageDialogComponent,
    NameDialogComponent,
    StartViewComponent,
    CalenderMainComponent,
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
    MatIconModule,
    MatInputModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
