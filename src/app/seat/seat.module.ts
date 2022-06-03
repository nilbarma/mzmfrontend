import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { SeatAlertComponent } from './seat-alert/seat-alert.component';
import { SeatDialogComponent } from './seat-dialog/seat-dialog.component';
import { SeatGridComponent } from './seat-grid/seat-grid.component';
import { SeatRoutingModule } from './seat-routing.module';

@NgModule({
  imports: [ CommonModule, CoreModule, SeatRoutingModule ],
  declarations: [
    SeatGridComponent,
    SeatDialogComponent,
    SeatAlertComponent,
  ],
  providers: [],
})
export class SeatModule { }
