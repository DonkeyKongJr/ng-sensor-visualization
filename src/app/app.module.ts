import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DxChartModule } from 'devextreme-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { TemperatureViewComponent } from './components/temperature-view/temperature-view.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, TemperatureViewComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    DxChartModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
