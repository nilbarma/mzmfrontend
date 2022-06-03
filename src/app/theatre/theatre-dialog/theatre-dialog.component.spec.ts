import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, TestBed } from '@angular/core/testing';
import { CoreModule } from '../../core/core.module';
import { TheatreModule } from '../theatre.module';

import { TheatreService } from '../services/theatre.service';
import { TheatreDialogComponent } from './theatre-dialog.component';
import { MatDialog } from '@angular/material/dialog';

describe('TheatreDialogComponent', () => {
  let component: TheatreDialogComponent;
  let dialog: MatDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [TheatreService, HttpClient],
      imports: [
        BrowserAnimationsModule,
	TheatreModule,
        HttpClientModule,
        CoreModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.inject(MatDialog);
    component = dialog.open(TheatreDialogComponent).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
