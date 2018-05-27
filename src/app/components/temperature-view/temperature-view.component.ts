import { Component, OnInit } from '@angular/core';
import { SensorData } from '../../entities/sensor-data.mode';
import { DataChartService } from '../../services/data-chart.service';

@Component({
  selector: 'app-temperature-view',
  templateUrl: './temperature-view.component.html',
  styleUrls: ['./temperature-view.component.css']
})
export class TemperatureViewComponent implements OnInit {
  public sensorData: Array<SensorData> = [];
  constructor(public dataChartService: DataChartService) { }

  ngOnInit() {
  }
}
