import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingGridComponent } from './booking-grid/booking-grid.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BookingGridComponent,
  },
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class BookingRoutingModule {}
