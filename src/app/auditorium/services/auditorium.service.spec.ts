import { TestBed, inject } from '@angular/core/testing';
import { AuditoriumService } from './auditorium.service';

import { CoreModule } from '../../core/core.module';

describe('SidenavSharedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuditoriumService,
      ],
      imports: [
        CoreModule,
      ],
    });
  });

  it('should create', inject([AuditoriumService], (service: AuditoriumService) => {
    expect(service).toBeTruthy();
  }));
});
