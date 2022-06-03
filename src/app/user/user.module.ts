import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { UserAlertComponent } from './user-alert/user-alert.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { UserGridComponent } from './user-grid/user-grid.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  imports: [ CommonModule, CoreModule, UserRoutingModule ],
  declarations: [
    UserGridComponent,
    UserDialogComponent,
    UserAlertComponent,
  ],
  providers: [],
})
export class UserModule { }
