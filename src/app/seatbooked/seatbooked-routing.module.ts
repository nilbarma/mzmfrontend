import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeatBookedGridComponent } from './seatbooked-grid/seatbooked-grid.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SeatBookedGridComponent,
  },
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class SeatBookedRoutingModule {}
