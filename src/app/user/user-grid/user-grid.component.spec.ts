import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '../../core/core.module';

import { UserService } from '../services/user.service';
import { UserGridComponent } from './user-grid.component';

describe('UserGridComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, RouterTestingModule, CoreModule],
      declarations: [ UserGridComponent ],
      providers: [UserService],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture: ComponentFixture<
      UserGridComponent
    > = TestBed.createComponent(UserGridComponent);
    const app: any = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
