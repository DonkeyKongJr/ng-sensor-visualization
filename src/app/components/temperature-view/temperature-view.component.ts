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

  private convertTimestamp(sensordata: FireSensorData[]): FireSensorData[] {
    sensordata.forEach(_ => {
      _.timestamp = _.timestamp.toDate();
    });

    return sensordata;
  }
}
