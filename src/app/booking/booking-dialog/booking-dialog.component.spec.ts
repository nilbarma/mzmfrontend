import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, TestBed } from '@angular/core/testing';
import { CoreModule } from '../../core/core.module';
import { BookingModule } from '../booking.module';

import { BookingService } from '../services/booking.service';
import { BookingDialogComponent } from './booking-dialog.component';
import { MatDialog } from '@angular/material/dialog';

describe('BookingDialogComponent', () => {
  let component: BookingDialogComponent;
  let dialog: MatDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [BookingService, HttpClient],
      imports: [
        BrowserAnimationsModule,
	BookingModule,
        HttpClientModule,
        CoreModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.inject(MatDialog);
    component = dialog.open(BookingDialogComponent).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
