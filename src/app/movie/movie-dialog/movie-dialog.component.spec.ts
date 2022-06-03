import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, TestBed } from '@angular/core/testing';
import { CoreModule } from '../../core/core.module';
import { MovieModule } from '../movie.module';

import { MovieService } from '../services/movie.service';
import { MovieDialogComponent } from './movie-dialog.component';
import { MatDialog } from '@angular/material/dialog';

describe('MovieDialogComponent', () => {
  let component: MovieDialogComponent;
  let dialog: MatDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [MovieService, HttpClient],
      imports: [
        BrowserAnimationsModule,
	MovieModule,
        HttpClientModule,
        CoreModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.inject(MatDialog);
    component = dialog.open(MovieDialogComponent).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
