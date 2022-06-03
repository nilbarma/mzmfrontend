import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, TestBed } from '@angular/core/testing';
import { CoreModule } from '../../core/core.module';
import { SeatModule } from '../seat.module';

import { SeatService } from '../services/seat.service';
import { SeatDialogComponent } from './seat-dialog.component';
import { MatDialog } from '@angular/material/dialog';

describe('SeatDialogComponent', () => {
  let component: SeatDialogComponent;
  let dialog: MatDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [SeatService, HttpClient],
      imports: [
        BrowserAnimationsModule,
	SeatModule,
        HttpClientModule,
        CoreModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.inject(MatDialog);
    component = dialog.open(SeatDialogComponent).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
