import { TestBed, inject } from '@angular/core/testing';
import { SeatBookedService } from './seatbooked.service';

import { CoreModule } from '../../core/core.module';

describe('SidenavSharedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SeatBookedService,
      ],
      imports: [
        CoreModule,
      ],
    });
  });

  it('should create', inject([SeatBookedService], (service: SeatBookedService) => {
    expect(service).toBeTruthy();
  }));
});
