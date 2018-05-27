import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {DxChartModule} from 'devextreme-angular';

import { AppComponent } from './app.component';
import { SensorDataService } from './services/sensor-data.service';
import { TemperatureViewComponent } from './components/temperature-view/temperature-view.component';
import { DataChartService } from './services/data-chart.service';


@NgModule({
  declarations: [
    AppComponent,
    TemperatureViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DxChartModule
  ],
  providers: [SensorDataService, DataChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
