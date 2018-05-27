import { Injectable } from '@angular/core';
import { SensorData } from '../entities/sensor-data.mode';

@Injectable({
  providedIn: 'root'
})
export class DataChartService {
  private _sensorDataList: Array<SensorData> = [];
  constructor() { }

  public updateSensorDataList(newValue: SensorData) {
    this.checkArrayLength();
    this._sensorDataList.push(newValue);
  }

  public get getSensorData(): Array<SensorData> {
    return this._sensorDataList;
  }

  private checkArrayLength() {
    // allow only latest 256 measures
    if (this._sensorDataList.length >= 255) {
      this._sensorDataList.splice(0, 1);
    }
  }
}
