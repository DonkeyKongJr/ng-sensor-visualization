import { Component, OnInit } from '@angular/core';
import { SensorDataService } from './servives/sensor-data.service';
import { SensorData } from './entities/sensor-data.mode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Raspberry Pi Sensor Measurements';
  sensorData: SensorData;

  constructor(private readonly sensorDataService: SensorDataService) { }

  ngOnInit() {
    this.getData();
  }

  public reloadData() {
    this.sensorData.temp = '';
    this.sensorData.humidity = '';
    this.getData()
  }

  private getData() {
    this.sensorDataService.getSensorData().subscribe(data => {
      this.sensorData = data;
      console.log('humidity is ' + data.humidity);
      console.log('temp is ' + data.temp);
    });
  }
}
