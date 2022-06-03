import { TestBed, inject } from '@angular/core/testing';
import { BookingService } from './booking.service';

import { CoreModule } from '../../core/core.module';

describe('SidenavSharedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BookingService,
      ],
      imports: [
        CoreModule,
      ],
    });
  });

  it('should create', inject([BookingService], (service: BookingService) => {
    expect(service).toBeTruthy();
  }));
});
