import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { SensorData } from '../entities/sensor-data.mode';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SensorDataService {

  constructor(private readonly http: HttpClient) { }

  public getSensorData(): Observable<SensorData> {
    const url = `${environment.sensorDataUrl}/sensordata`
    return this.http.post<SensorData>(url, {});
  }
}
