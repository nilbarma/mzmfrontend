import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, TestBed } from '@angular/core/testing';
import { CoreModule } from '../../core/core.module';
import { SeatBookedModule } from '../seatbooked.module';

import { SeatBookedService } from '../services/seatbooked.service';
import { SeatBookedDialogComponent } from './seatbooked-dialog.component';
import { MatDialog } from '@angular/material/dialog';

describe('SeatBookedDialogComponent', () => {
  let component: SeatBookedDialogComponent;
  let dialog: MatDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [SeatBookedService, HttpClient],
      imports: [
        BrowserAnimationsModule,
	SeatBookedModule,
        HttpClientModule,
        CoreModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.inject(MatDialog);
    component = dialog.open(SeatBookedDialogComponent).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
