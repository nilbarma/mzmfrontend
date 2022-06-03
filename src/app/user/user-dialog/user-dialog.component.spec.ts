import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, TestBed } from '@angular/core/testing';
import { CoreModule } from '../../core/core.module';
import { UserModule } from '../user.module';

import { UserService } from '../services/user.service';
import { UserDialogComponent } from './user-dialog.component';
import { MatDialog } from '@angular/material/dialog';

describe('UserDialogComponent', () => {
  let component: UserDialogComponent;
  let dialog: MatDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [UserService, HttpClient],
      imports: [
        BrowserAnimationsModule,
	UserModule,
        HttpClientModule,
        CoreModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.inject(MatDialog);
    component = dialog.open(UserDialogComponent).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
