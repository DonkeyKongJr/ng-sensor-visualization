import { Component, OnInit } from '@angular/core';
import { SensorDataService } from './services/sensor-data.service';
import { SensorData } from './entities/sensor-data.mode';
import { DataChartService } from './services/data-chart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Raspberry Pi Sensor Measurements';
  sensorData: SensorData;

  constructor(
    private readonly sensorDataService: SensorDataService,
    private dataChartService: DataChartService) { }

  ngOnInit() {
    this.getDataPeriodically();
  }

  public reloadData() {
    this.sensorData.temp = '';
    this.sensorData.humidity = '';
    this.getInitialData()
  }

  private getInitialData() {
    this.sensorDataService.getSensorData().subscribe(data => {
      this.sensorData = data;
      console.log('humidity is ' + data.humidity);
      console.log('temp is ' + data.temp);
    });
  }

  private getDataPeriodically() {
    setInterval(() => {
      this.sensorDataService.getSensorData().subscribe(data => {
        this.sensorData = data;
        this.dataChartService.updateSensorDataList(this.sensorData);
      });
    }, 10000);
  }
}
 