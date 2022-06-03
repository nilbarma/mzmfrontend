import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, TestBed } from '@angular/core/testing';
import { CoreModule } from '../../core/core.module';
import { AuditoriumModule } from '../auditorium.module';

import { AuditoriumService } from '../services/auditorium.service';
import { AuditoriumDialogComponent } from './auditorium-dialog.component';
import { MatDialog } from '@angular/material/dialog';

describe('AuditoriumDialogComponent', () => {
  let component: AuditoriumDialogComponent;
  let dialog: MatDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [AuditoriumService, HttpClient],
      imports: [
        BrowserAnimationsModule,
	AuditoriumModule,
        HttpClientModule,
        CoreModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.inject(MatDialog);
    component = dialog.open(AuditoriumDialogComponent).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
