import { TestBed, inject } from '@angular/core/testing';
import { SeatService } from './seat.service';

import { CoreModule } from '../../core/core.module';

describe('SidenavSharedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SeatService,
      ],
      imports: [
        CoreModule,
      ],
    });
  });

  it('should create', inject([SeatService], (service: SeatService) => {
    expect(service).toBeTruthy();
  }));
});
