import { TestBed, inject } from '@angular/core/testing';

import { DataChartService } from './data-chart.service';

describe('DataChartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataChartService]
    });
  });

  it('should be created', inject([DataChartService], (service: DataChartService) => {
    expect(service).toBeTruthy();
  }));
});
