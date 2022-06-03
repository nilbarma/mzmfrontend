import { TestBed, inject } from '@angular/core/testing';
import { ScreeningService } from './screening.service';

import { CoreModule } from '../../core/core.module';

describe('SidenavSharedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ScreeningService,
      ],
      imports: [
        CoreModule,
      ],
    });
  });

  it('should create', inject([ScreeningService], (service: ScreeningService) => {
    expect(service).toBeTruthy();
  }));
});
