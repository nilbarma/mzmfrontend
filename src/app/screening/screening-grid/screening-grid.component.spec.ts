import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '../../core/core.module';

import { ScreeningService } from '../services/screening.service';
import { ScreeningGridComponent } from './screening-grid.component';

describe('ScreeningGridComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, RouterTestingModule, CoreModule],
      declarations: [ ScreeningGridComponent ],
      providers: [ScreeningService],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture: ComponentFixture<
      ScreeningGridComponent
    > = TestBed.createComponent(ScreeningGridComponent);
    const app: any = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
