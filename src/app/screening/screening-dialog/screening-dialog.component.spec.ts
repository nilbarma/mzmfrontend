import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, TestBed } from '@angular/core/testing';
import { CoreModule } from '../../core/core.module';
import { ScreeningModule } from '../screening.module';

import { ScreeningService } from '../services/screening.service';
import { ScreeningDialogComponent } from './screening-dialog.component';
import { MatDialog } from '@angular/material/dialog';

describe('ScreeningDialogComponent', () => {
  let component: ScreeningDialogComponent;
  let dialog: MatDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ScreeningService, HttpClient],
      imports: [
        BrowserAnimationsModule,
	ScreeningModule,
        HttpClientModule,
        CoreModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.inject(MatDialog);
    component = dialog.open(ScreeningDialogComponent).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
