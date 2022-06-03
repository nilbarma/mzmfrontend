import { TestBed, inject } from '@angular/core/testing';
import { TheatreService } from './theatre.service';

import { CoreModule } from '../../core/core.module';

describe('SidenavSharedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TheatreService,
      ],
      imports: [
        CoreModule,
      ],
    });
  });

  it('should create', inject([TheatreService], (service: TheatreService) => {
    expect(service).toBeTruthy();
  }));
});
