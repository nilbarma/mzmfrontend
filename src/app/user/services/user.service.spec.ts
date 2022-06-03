import { TestBed, inject } from '@angular/core/testing';
import { UserService } from './user.service';

import { CoreModule } from '../../core/core.module';

describe('SidenavSharedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,
      ],
      imports: [
        CoreModule,
      ],
    });
  });

  it('should create', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
