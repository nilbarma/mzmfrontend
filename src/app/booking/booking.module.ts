import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { BookingAlertComponent } from './booking-alert/booking-alert.component';
import { BookingDialogComponent } from './booking-dialog/booking-dialog.component';
import { BookingGridComponent } from './booking-grid/booking-grid.component';
import { BookingRoutingModule } from './booking-routing.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [ CommonModule, CoreModule, BookingRoutingModule ],
  declarations: [
    BookingGridComponent,
    BookingDialogComponent,
    BookingAlertComponent,
  ],
  providers: [],
})
export class BookingModule { }
