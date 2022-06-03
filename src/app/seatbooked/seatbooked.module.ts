import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { SeatBookedAlertComponent } from './seatbooked-alert/seatbooked-alert.component';
import { SeatBookedDialogComponent } from './seatbooked-dialog/seatbooked-dialog.component';
import { SeatBookedGridComponent } from './seatbooked-grid/seatbooked-grid.component';
import { SeatBookedRoutingModule } from './seatbooked-routing.module';

@NgModule({
  imports: [ CommonModule, CoreModule, SeatBookedRoutingModule ],
  declarations: [
    SeatBookedGridComponent,
    SeatBookedDialogComponent,
    SeatBookedAlertComponent,
  ],
  providers: [],
})
export class SeatBookedModule { }
