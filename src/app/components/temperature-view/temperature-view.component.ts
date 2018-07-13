import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { FireSensorData } from '../../entities/fire-sensor-data.model';

@Component({
  selector: 'app-temperature-view',
  templateUrl: './temperature-view.component.html',
  styleUrls: ['./temperature-view.component.css']
})
export class TemperatureViewComponent implements OnInit {
  public fireSensorData: FireSensorData[] = [];

  constructor(private readonly db: AngularFirestore) {}

  ngOnInit() {
    this.db
      .collection('sensordata')
      .valueChanges()
      .subscribe((data: FireSensorData[]) => {
        this.fireSensorData = this.convertTimestamp(data);
      });
  }

  public zoom(e: any) {
    const endValue = this.fireSensorData[this.fireSensorData.length - 1]
      .timestamp;

    const twentyFourHours = 24 * 15;

    const startValue = this.fireSensorData[
      this.fireSensorData.length - 1 - twentyFourHours
    ].timestamp;

    e.component.zoomArgument(startValue, endValue);
  }

  private convertTimestamp(sensordata: FireSensorData[]): FireSensorData[] {
    sensordata.forEach(_ => {
      _.timestamp = _.timestamp.toDate(this.compareData);
    });

    return sensordata;
  }

  private compareData(a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }
}
