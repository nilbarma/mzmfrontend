import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '../../core/core.module';

import { BookingService } from '../services/booking.service';
import { BookingGridComponent } from './booking-grid.component';

describe('BookingGridComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, RouterTestingModule, CoreModule],
      declarations: [ BookingGridComponent ],
      providers: [BookingService],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture: ComponentFixture<
      BookingGridComponent
    > = TestBed.createComponent(BookingGridComponent);
    const app: any = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
