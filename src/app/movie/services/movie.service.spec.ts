import { TestBed, inject } from '@angular/core/testing';
import { MovieService } from './movie.service';

import { CoreModule } from '../../core/core.module';

describe('SidenavSharedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MovieService,
      ],
      imports: [
        CoreModule,
      ],
    });
  });

  it('should create', inject([MovieService], (service: MovieService) => {
    expect(service).toBeTruthy();
  }));
});
